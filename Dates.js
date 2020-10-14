const now = new Date(); //Right now

console.log(now);
//Month count starts with 0
const Randomdate = new Date(2015, 3, 12, 6, 25, 58);

now.setMonth(0);
console.log(now);
//time set to midnight
const win95Launch = new Date(1995, 7, 24);
//console.log(win95Launch);

console.log(`Day of week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);
