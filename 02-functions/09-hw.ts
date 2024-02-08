function calcIceCreamCost(): void {

    const smallCup: number = 10;
    const largeCup: number = 25;

    const input = prompt("input cup (small) or (large) : ");
    const toppingsInput = prompt("input (chocolate,caramel,berries) : ");
    const marshmallowInput = prompt("input (y or n) : ");

    let sum = 0;

    if (input === "small") {
        sum = 10;
    } else if (input === "large") {
        sum = 25;
    } else {
        console.log("Err, not input small or large")
    }

    const toppings: string[] = toppingsInput.split(",");

    for (const topping of toppings) {
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
                console.log(`Not toppings: ${topping}`);
                break;
        }

        console.log(topping);
    }

if(marshmallowInput==="y"){
    sum += 5;
    console.log('marshmallowInput');
}


    console.log(typeof sum);
    console.log("result -", input, "sum = ", sum);
};

calcIceCreamCost();

