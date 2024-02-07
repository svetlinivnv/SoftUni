function tseamAccount(array) {
    let currentGames = array.shift().split(' ');

    for (let currCommand of array) {
        if (currCommand === 'Play!') {
            break;
        } else {
            let [command, game] = currCommand.split(' ');
            switch (command) {
                case 'Install':
                    currentGames.push(game)
                    break;
                case 'Uninstall':
                    if (currentGames.includes(game)) {
                        let index = currentGames.indexOf(game);
                        currentGames.splice(index, 1);
                    } break;
                case 'Update':
                    if (currentGames.includes(game)) {
                        let index = currentGames.indexOf(game);
                        let store = currentGames.splice(index, 1);
                        currentGames.push(store[0]);
                    } break;
                case 'Expansion':
                    let [gameToSetExpansion, expansion] = game.split('-');
                    let expansionFormatted = gameToSetExpansion + ':' + expansion;
                    if (currentGames.includes(gameToSetExpansion)) {
                        let index = currentGames.indexOf(gameToSetExpansion);
                        currentGames.splice(index + 1, 0, expansionFormatted);
                    } break;
            }
        }
    }

    console.log(currentGames.join(' '));

}


tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);