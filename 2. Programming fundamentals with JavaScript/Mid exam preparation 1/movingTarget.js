function movingTarget(input) {

    let targets = input[0].split(' ').map(Number);
    input.shift();

    for (i = 0; i < input.length; i++) {
        let [command, ...arr] = input[i].split(' ');
        arr = arr.map(Number);
        switch (command) {

            case 'Shoot':
                if (targets.length > arr[0] && arr[0] >= 0) {
                    let current = targets[arr[0]];
                    reducted = current - arr[1];
                    if (reducted <= 0) {
                        targets.splice(arr[0], 1);
                    } else {
                        targets.splice(arr[0], 1, reducted);
                    }
                }
                break;
            case 'Add':
                if (targets.length > arr[0] && arr[0] >= 0) {
                    targets.splice(arr[0], 0, arr[1]);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (arr[0] - arr[1] >= 0 && arr[0] + arr[1] < targets.length) {
                    targets.splice(arr[0] - arr[1], arr[1] * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
    }
    console.log(targets.join('|'));
}

// movingTarget(["52 74 23 44 96 110",

// "Shoot 5 10",

// "Shoot 1 80",

// "Strike 2 1",

// "Add 22 3",

// "End"]);

movingTarget(["1 2 3 4 5",

    "Strike 0 1",

    "End"]);