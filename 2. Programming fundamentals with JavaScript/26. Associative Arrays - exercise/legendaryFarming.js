function legendaryFarming(input) {
    let farming = input.toLowerCase().split(' ');
    
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};

    let itemsMats = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    for (let i = 0; i < farming.length; i += 2) {
        let material = farming[i + 1];
        let count = +farming[i];

        if (material in keyMaterials) {
            keyMaterials[material] += count;
            if (keyMaterials[material] >= 250) {
                console.log(`${itemsMats[material]} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (material in junkMaterials) {
                junkMaterials[material] += count;
            } else {
                junkMaterials[material] = count;
            }
        }
    }

    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for (material of sortedKeyMaterials) {
        console.log(`${material[0]}: ${material[1]}`);
    }

    for (material of sortedJunkMaterials) {
        console.log(`${material[0]}: ${material[1]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');