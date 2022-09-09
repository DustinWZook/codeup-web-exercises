console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
//favorite color prompt
let userFavColor = prompt("Please enter your favorite color.");

alert(userFavColor + " is my favorite color too!");
//movie rental exercise
let littleMermaid = prompt("How many days did you rent Little Mermaid for?");
//added in an alert after each entry to confirm that the entry was correct
alert("You rented Little Mermaid for " + littleMermaid + " days.");

let brotherBear = prompt("How many days did you rent Brother Bear for?");

alert("you rented Brother Bear for " + brotherBear + " days.")

let hercules = prompt("How many days did you rent Hercules for?");

alert("you rented Hercules for " + hercules + " days.");

let price = prompt("what was the price per day of rental?");

alert("The price per day of rental is " + price);

totalPrice = (parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules)) * price;

alert("The total price to pay for movie rentals is $" + totalPrice);

//pay exercise

let googlePay = prompt("How much does Google pay per hour?");

alert("Google pay per hour: " + googlePay);

let amazonPay = prompt("How much does Amazon pay per hour?");

alert("Amazon pay per hour: " + amazonPay);

let facebookPay = prompt("How much does Facebook pay per hour?");

alert("Facebook pay per hour: " + facebookPay);

let googleHours = prompt("how many hours did you work for Google?");

alert("hours worked for Google: " + googleHours);

let amazonHours = prompt("how many hours did you work for Amazon?");

alert("hours worked for Amazon: " + amazonHours);

let facebookHours = prompt("how many hours did you work for Facebook?");

alert("hours worked for Facebook: " + facebookHours);

let googlePaid = googleHours * googlePay;

let amazonPaid = amazonHours * amazonPay;

let facebookPaid = facebookHours * facebookPay;

let totalPaid = googlePaid + amazonPaid +facebookPaid;

alert("Your total payment is $" + totalPaid);

//student enrolled exercise

let classFull = confirm("Is class not full. click ok for yes and cancel for no.");

alert("Is class not full: " + classFull);

let scheduleOpen = confirm("Is your schedule open. click ok for yes and cancel for no.")

alert("your schedule does not conflict: " + scheduleOpen);

let canEnroll = classFull && scheduleOpen;

alert("you can enroll in this class: " + canEnroll);

//product offer exercise

let items = prompt("How many items are you buying?");

alert("You are buying " + items + " items.");

let offerNotExpired = confirm("Is the offer still valid and not expired? Click ok for yes and cancel for no.");

alert("offer is not expired: " + offerNotExpired);

let premiumMember = confirm("Are you a premium member? Click ok for yes and cancel for no.");

alert("You are a premium member: " + premiumMember);

let discountApplied = offerNotExpired && (items > 2 || premiumMember);

alert("The discount is applied: " + discountApplied);