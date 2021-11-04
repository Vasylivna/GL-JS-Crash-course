const day = "1";
const weekDay = " ";

switch (day) {
    case "1": {
        weekDay = "Monday";
        console.log("Monday");
    }
    break;

    case "2": {
        weekDay = "Tuesday";
        console.log("Tuesday");
    }
    break;

    default: {
        weekDay = "Please select a number";
        console.error("Select a number");
    }
}
