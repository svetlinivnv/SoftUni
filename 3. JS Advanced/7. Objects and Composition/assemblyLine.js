function createAssemblyLine() {
    let library = {
        hasClima: function (myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio: function (myCar) {
            myCar.currentTrack = null;
            myCar.nowPlaying = function () {
                if (this.currentTrack) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function (myCar) {
            myCar.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            };
        }
    };
    return library;
}

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
