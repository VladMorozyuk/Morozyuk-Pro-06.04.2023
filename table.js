var number = 1;
for (var i = 1; i <= 10; i++) {
    var row = "";
    for (var j = 1; j <= 10; j++) {
        row += number.toString().padStart(3, " ") + " ";
        number++;
    }
    console.log(row);
}