function tseamAccount(array) {
    let currentGames = array.shift().split(' ');
    // console.log(currentGames);
    // console.log(array);

    for (let currCommand of array) {
        let [command, game] = currCommand.split(' ');
        switch (command) {
            case 'Install':
                currentGames.push(game)
                break;
            case 'Uninstall':
                if (currentGames.includes(game)) {
                    let index = currentGames.indexOf(game);
                    currentGames.splice(index, 1);
                }
                break;
            case 'Update':
                if (currentGames.includes(game)) {
                    let index = currentGames.indexOf(game);
                    let store = currentGames.splice(index, 1);
                    currentGames.push(store.join(''));
                }
                break;
            case 'Expansion':
                if (currentGames.includes(game)) {
                    let index = currentGames.indexOf(game);
                    let currValue = currentGames[index];
                    currValue += ' ' + game;
                }
                break;
        }
    }

console.log(currentGames);

}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);