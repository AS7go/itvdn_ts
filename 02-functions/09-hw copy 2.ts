function calculateIcecreamPrice(): number {
    // Отримання розміру морозива
    const size = prompt("Оберіть розмір морозива (маленький/великий): ");
    let price = size === "маленький" ? 10 : 25;
  
    // Отримання начинки
    let toppings: string[] = [];
    let toppingChoice = "";
    while (toppingChoice !== "стоп") {
      toppingChoice = prompt("Оберіть начинку (шоколад/карамель/ягоди/стоп): ");
      if (toppingChoice !== "стоп") toppings.push(toppingChoice);
    }
  
    // Розрахунок вартості начинки
    price += toppings.reduce((acc, topping) => {
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
    const marshmallows = confirm("Додати посипку маршмелоу? (так/ні)");
    if (marshmallows) price += 5;
  
    // Виведення результату
    console.log(`Вартість морозива: ${price} грн`);
  
    return price;
  }
  
  // Приклад використання
  calculateIcecreamPrice();
  