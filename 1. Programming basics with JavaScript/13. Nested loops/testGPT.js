function printRooms([floors, roomsPerFloor]) {
    floors = parseInt(floors);
    roomsPerFloor = parseInt(roomsPerFloor);

    for (let floor = floors; floor >= 1; floor--) {
        const floorRooms = [];

        if (floor === floors && floors !== 1) {
            for (let room = 0; room < roomsPerFloor; room++) {
                floorRooms.push(`L${floor}${room}`);
            }
        } else {
            for (let room = 0; room < roomsPerFloor; room++) {
                if (floor % 2 === 0) {
                    floorRooms.push(`O${floor}${room}`);
                } else {
                    floorRooms.push(`A${floor}${room}`);
                }
            }
        }

        console.log(floorRooms.join(' '));
    }
}

printRooms(["6",

"4"]);