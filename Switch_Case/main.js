//Message
console.log("Find the Number of Days in a Month");

//Variable 
let MonthNum = 0;

//Conditons
if (MonthNum <= 12) {
     if (MonthNum != 0){
     console.log(" This is the " + MonthNum + " Month of this Year");
     }
     
else {
     console.log("Invalid Entry");
}
}
else {
     console.log("Invalid Entry");
}

//Switch Case
switch (MonthNum) {
     case 1:

          console.log("This Month has '31' Days");
          break;
     case 2:

          console.log("This Month has '28' Days");
          break;
     case 3:

          console.log("This Month has '31' Days");
          break;
     case 4:

          console.log("This Month has '30' Days");
          break;
     case 5:

          console.log("This Month has 31 Days");
          break;
     case 6:

          console.log("This Month has '30' Days");
          break;
     case 7:

          console.log("This Month has '31' Days");
          break;
     case 8:

          console.log("This Month has '30' Days");
          break;
     case 9:

          console.log("This Month has '31' Days");
          break;
     case 10:

          console.log("This Month has '30' Days");
          break;
     case 11:

          console.log("This Month has '31' Days");
          break;
     case 12:

          console.log("This Month has '30' Days");
          break;

     default:
          console.log("Invalid Entry")
          break;
}