function arenaTier(input) {

    let gladiatorPool = {};

    for (let current of input) {        
        if (current === 'Ave Cesar') { break; }
        if (current.includes(' vs ')) {
            let [gladiator1, gladiator2] = current.split(' vs ');
            if (gladiator1 in gladiatorPool && gladiator2 in gladiatorPool) {
                const techniques1 = Object.keys(gladiatorPool[gladiator1]);
                const techniques2 = Object.keys(gladiatorPool[gladiator2]);
                const commonTechniques = techniques1.filter(technique => techniques2.includes(technique)).join('');
                if (commonTechniques.length > 0) {
                    const totalSkill1 = techniques1.reduce((sum, tech) => sum + gladiatorPool[gladiator1][tech], 0);
                    const totalSkill2 = techniques2.reduce((sum, tech) => sum + gladiatorPool[gladiator2][tech], 0);
                    if (totalSkill1 > totalSkill2) {
                        delete gladiatorPool[gladiator2];
                    } else {
                        delete gladiatorPool[gladiator1];
                    }
                }
            }
        } else {
            let [gladiator, technique, skill] = current.split(' -> ');
            if (gladiator in gladiatorPool) {
                gladiatorPool[gladiator][technique] = skill;
            } else {
                gladiatorPool[gladiator] = [];
                gladiatorPool[gladiator] = { [technique]: skill };
            }

        }
    }


    //At that point, you should print the gladiators, ordered by total skill in descending order, then ordered by name in ascending order. 
    //Foreach gladiator prints their technique and skill ordered descending, then ordered by technique name in ascending order.
    
    let gladiators = Object.entries(gladiatorPool).sort((a, b) => );

    console.log(gladiators);
    gladiators.forEach(gladiator => {
        let name = gladiator[0];
        let skills = gladiator[1];
        // console.log(name);
        // console.log(skills);
        
    });

    // console.log(gladiators);
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
            'Peter vs Gladius', 
            'Gladius vs Julius',
            'Gladius vs Maximilian', 
            'Ave Cesar' ]);