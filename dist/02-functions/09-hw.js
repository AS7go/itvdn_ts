function calcIceCreamCost() {
    var smallCup = 10;
    var largeCup = 25;
    var input = prompt("input cup (small) or (large) : ");
    var toppingsInput = prompt("input (chocolate,caramel,berries) : ");
    var marshmallowInput = prompt("input (y or n) : ");
    var sum = 0;
    if (input === "small") {
        sum = 10;
    }
    else if (input === "large") {
        sum = 25;
    }
    else {
        console.log("Err, not input small or large");
    }
    var toppings = toppingsInput.split(",");
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        switch (topping) {
            case "chocolate":
                sum += 5;
                break;
            case "caramel":
                sum += 6;
                break;
            case "berries":
                sum += 10;
                break;
            default:
                console.log("Not toppings: ".concat(topping));
                break;
        }
        console.log(topping);
    }
    if (marshmallowInput === "y") {
        sum += 5;
        console.log('marshmallowInput');
    }
    console.log(typeof sum);
    console.log("result -", input, "sum = ", sum);
}
;
calcIceCreamCost();
//# sourceMappingURL=09-hw.js.map