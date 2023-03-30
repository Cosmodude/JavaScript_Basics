let score = 2;
if (score   && score>4 ) {
    console.log("You get scholarship");
}
else if (!score || score < 4) {
    console.log("No scholarship");
}

switch (score) {
    case 5: console.log("You get scholarship");
        break;
    case 2:
    case 3: console.log("No scholarship");
        break;
    default: console.log("Bad score");
}