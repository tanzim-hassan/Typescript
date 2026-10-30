//question1
function describeValue(value) {let type = typeof value;
if (value) {return type + " | truthy";} else {
return type + " | falsy";}}

//question2
function getDayType(day) {let lowerDay = day.toLowerCase();
switch (lowerDay) {case "friday":
case "saturday": return "Weekend";
case "sunday":
case "monday":
case "tuesday":
case "wednesday":
case "thursday": return "Working Day";
default: return "Invalid Day";}}

//question3
function validateUsername(username) {
  if (username.length < 4) {return "Too Short";}
  if (username.includes(" ")) {return "No Space Allowed";}
  if (username.toLowerCase().includes("admin")) {return "Reserved Word";}
  return "Available";}

//question4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {let fare = 50; 
if (distance > 2) {fare = fare + (distance - 2) * 15;}
fare = fare + waitingMinutes * 2;
if (isNight) {fare = fare + (fare * 20) / 100;}
return fare;}

//question5
const getChaseVerdict = (target, scored, ballsLeft) => {
let runsNeeded = target - scored;
if (runsNeeded <= 0) {return "Won";}
if (ballsLeft <= 0) {return "Lost";}
let requiredRate = (runsNeeded / ballsLeft) * 6;let verdict;
if (requiredRate <= 6) {verdict = "Comfortable";}
else if (requiredRate <= 12) {verdict = "Tough";} else
{verdict = "Almost Impossible";}
return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;};
