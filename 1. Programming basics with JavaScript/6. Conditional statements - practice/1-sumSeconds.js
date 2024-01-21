function sumSeconds(input) {

let seconds1 = Number(input[0]);
let seconds2 = Number(input[1]);
let seconds3 = Number(input[2]);

let secondsSum = seconds1 + seconds2 + seconds3;
let minutes = secondsSum / 60;
let seconds = secondsSum % 60;

if(seconds < 10){
    console.log(`${Math.floor(minutes)}:0${seconds}`);
} else {
    console.log(`${Math.floor(minutes)}:${seconds}`);
}

}

sumSeconds(["14", "12", "10"]);