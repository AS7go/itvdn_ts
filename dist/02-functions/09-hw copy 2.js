function calculateIcecreamPrice() {
    // Отримання розміру морозива
    var size = prompt("Оберіть розмір морозива (маленький/великий): ");
    var price = size === "маленький" ? 10 : 25;
    // Отримання начинки
    var toppings = [];
    var toppingChoice = "";
    while (toppingChoice !== "стоп") {
        toppingChoice = prompt("Оберіть начинку (шоколад/карамель/ягоди/стоп): ");
        if (toppingChoice !== "стоп")
            toppings.push(toppingChoice);
    }
    // Розрахунок вартості начинки
    price += toppings.reduce(function (acc, topping) {
        switch (topping) {
            case "шоколад":
                return acc + 5;
            case "карамель":
                return acc + 6;
            case "ягоди":
                return acc + 10;
            default:
                return acc;
        }
    }, 0);
    // Додаткова посипка маршмелоу
    var marshmallows = confirm("Додати посипку маршмелоу? (так/ні)");
    if (marshmallows)
        price += 5;
    // Виведення результату
    console.log("\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(price, " \u0433\u0440\u043D"));
    return price;
}
// Приклад використання
calculateIcecreamPrice();
//# sourceMappingURL=09-hw%20copy%202.js.map