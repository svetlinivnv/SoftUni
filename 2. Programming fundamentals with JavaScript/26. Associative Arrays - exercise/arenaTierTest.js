function arenaTier(input) {
    let gladiatorPool = {};

    function addOrUpdateGladiator(gladiator, technique, skill) {
        if (!gladiatorPool.hasOwnProperty(gladiator)) {
            gladiatorPool[gladiator] = {};
        }

        if (!gladiatorPool[gladiator].hasOwnProperty(technique) ||
            skill > gladiatorPool[gladiator][technique]) {
            gladiatorPool[gladiator][technique] = skill;
        }
    }

    function duelGladiators(gladiator1, gladiator2) {
        const techniques1 = Object.keys(gladiatorPool[gladiator1]);
        const techniques2 = Object.keys(gladiatorPool[gladiator2]);

        const commonTechniques = techniques1.filter(tech => techniques2.includes(tech));

        if (commonTechniques.length > 0) {
            const totalSkill1 = techniques1.reduce((sum, tech) => sum + gladiatorPool[gladiator1][tech], 0);
            const totalSkill2 = techniques2.reduce((sum, tech) => sum + gladiatorPool[gladiator2][tech], 0);

            if (totalSkill1 > totalSkill2) {
                delete gladiatorPool[gladiator2];
            } else if (totalSkill2 > totalSkill1) {
                delete gladiatorPool[gladiator1];
            }
        }
    }

    for (let current of input) {
        if (current === 'Ave Cesar') {
            break;
        }

        if (current.includes(' vs ')) {
            const [gladiator1, gladiator2] = current.split(' vs ');
            if (gladiatorPool.hasOwnProperty(gladiator1) && gladiatorPool.hasOwnProperty(gladiator2)) {
                duelGladiators(gladiator1, gladiator2);
            }
        } else {
            const [gladiator, technique, skill] = current.split(' -> ');
            addOrUpdateGladiator(gladiator, technique, Number(skill));
        }
    }

    const sortedGladiators = Object.keys(gladiatorPool)
        .sort((a, b) => {
            const totalSkillA = Object.values(gladiatorPool[a]).reduce((sum, skill) => sum + skill, 0);
            const totalSkillB = Object.values(gladiatorPool[b]).reduce((sum, skill) => sum + skill, 0);
            return totalSkillB - totalSkillA || a.localeCompare(b);
        });

    for (let gladiator of sortedGladiators) {
        const totalSkill = Object.values(gladiatorPool[gladiator]).reduce((sum, skill) => sum + skill, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);
        const sortedTechniques = Object.entries(gladiatorPool[gladiator])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}


// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

arenaTier([ 'Peter -> Duck -> 400',
            'Julius -> Shield -> 150',
            'Gladius -> Heal -> 200',
            'Gladius -> Support -> 250',
            'Gladius -> Shield -> 250',
            'Peter vs Gladius', 'Gladius vs Julius',
            'Gladius vs Maximilian', 'Ave Cesar' ]);
