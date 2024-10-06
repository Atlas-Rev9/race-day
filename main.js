let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = !true;
let runnerAge = 17;

if (runnerAge >= 18 && regEarly) {
    raceNumber += 1000;
};

if (runnerAge >= 18 && regEarly) {
    console.log(`Race Number: ${raceNumber}, Race begins at 9:30am.`);
} else if (runnerAge >= 18 && !regEarly) {
    console.log(`Race Number: ${raceNumber}, Race starts 11am.`);
} else if (runnerAge < 18) {
    console.log(`Youth Runner Number: ${raceNumber}, Race begins at 12:30pm.`);
} else {
    console.log('Code working correctly????');
}; 