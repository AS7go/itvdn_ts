function calculateIceCreamCost(): void {
    const smallCupPrice: number = 10;
    const largeCupPrice: number = 25;

    let iceCreamPrice: number = 0;

    const sizeInput: string | null = prompt("Введіть розмір морозива (маленький або великий):");
    const toppingsInput: string | null = prompt("Введіть додаткові начинки через кому (шоколад, карамель, ягоди):");
    const marshmallowInput: string | null = prompt("Чи бажаєте додати маршмелоу? (так або ні)");

    if (sizeInput === "маленький") {
        iceCreamPrice += smallCupPrice;
    } else if (sizeInput === "великий") {
        iceCreamPrice += largeCupPrice;
    } else {
        console.log("Невірно введено розмір морозива.");
        return;
    }

    const toppings: string[] = toppingsInput ? toppingsInput.split(",").map(item => item.trim()) : [];

    for (const topping of toppings) {
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
                console.log(`Невідома начинка: ${topping}`);
                break;
        }
    }

    if (marshmallowInput === "так") {
        iceCreamPrice += 5;
    }

    console.log(`Загальна вартість морозива: ${iceCreamPrice} грн`);
}

calculateIceCreamCost();

