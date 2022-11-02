//Temperature in Fahrenheit
let TempF = 32;
console.log(TempF + " Temperature in Fahrenheit");

//Temperature in Celsius
let TempC = (TempF - 32) * 0.5556;
console.log(TempC + " Temperature in Celsius");

//Weather message
console.log("Today's Weather");

//Conditions
if (TempC >= 40) {
     console.log("This is an Hot Day....");
}

else if (TempC >= 20) {
     console.log("Today's Temperature is Good..");
}

else if (TempC >= 10) {
     console.log("This is an Cold Day....");
}

else {
     console.log("Warning!:- So Cold Ghar par he rehna..");
}