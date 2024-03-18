function netherRealms(data) {
    const healthRegex = /[^0-9+\-*,\/.]/g;
    const baseDmgRegex = /[-+]?[0-9]+(?:\.[0-9]+)?/g;
    let demonsArr = data.split(/[, ]+/g);
    let demonsList = {};

    for (let demon of demonsArr) {
        let health = 0;
        let damage = 0;
        demon.match(healthRegex).forEach(symbol => {
            health += symbol.charCodeAt(0);
        });
        if (demon.match(baseDmgRegex) !== null) {
            demon.match(baseDmgRegex).forEach(num => {
                damage += +num;
            });
        }
        let modifiers = demon.replace(/[^*\/]/g, '');
        for (let mod of modifiers) {
            mod === '*' ? damage *= 2 : damage /= 2;
        }
        demonsList[demon] = { health, damage };
    }
    let sortedDemonsList = Object.entries(demonsList).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDemonsList.forEach(demon => {
        console.log(`${demon[0]} - ${(demonsList[demon[0]].health)} health, ${(demonsList[demon[0]].damage).toFixed(2)} damage`);
    });
}

// netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
// netherRealms('Gos/ho');