## Below there is an example of the switch statement which does exactly the same thing as the if/else statement:
```
const day = "tuesday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meet up");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day");
}
```

## Using the if/else statement, the syntax would look like that:

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meet up");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if(day === "wednesday" || day === "thursday) {
    console.log("Write code examples");
} else if( day === "friday") {
    console.log("Record videos");
} else if(day === "saturday || day === "Sunday"){
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day");
}