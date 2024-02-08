function calculateIceCreamCost() {
    var smallCupPrice = 10;
    var largeCupPrice = 25;
    var iceCreamPrice = 0;
    var sizeInput = prompt("Введіть розмір морозива (маленький або великий):");
    var toppingsInput = prompt("Введіть додаткові начинки через кому (шоколад, карамель, ягоди):");
    var marshmallowInput = prompt("Чи бажаєте додати маршмелоу? (так або ні)");
    if (sizeInput === "маленький") {
        iceCreamPrice += smallCupPrice;
    }
    else if (sizeInput === "великий") {
        iceCreamPrice += largeCupPrice;
    }
    else {
        console.log("Невірно введено розмір морозива.");
        return;
    }
    var toppings = toppingsInput ? toppingsInput.split(",").map(function (item) { return item.trim(); }) : [];
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        switch (topping) {
            case "шоколад":
                iceCreamPrice += 5;
                break;
            case "карамель":
                iceCreamPrice += 6;
                break;
            case "ягоди":
                iceCreamPrice += 10;
                break;
            default:
                console.log("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u043D\u0430\u0447\u0438\u043D\u043A\u0430: ".concat(topping));
                break;
        }
    }
    if (marshmallowInput === "так") {
        iceCreamPrice += 5;
    }
    console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(iceCreamPrice, " \u0433\u0440\u043D"));
}
calculateIceCreamCost();
//# sourceMappingURL=09-hw%20copy.js.map