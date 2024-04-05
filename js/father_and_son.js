function year(ageFather, ageSon) {
  let count = 0;

  if (ageFather / ageSon === 2) {
    console.log("Зараз батьку в 2 рази більше років ніж сину");
  }

  if (ageFather / ageSon < 2) {
    while (ageFather / ageSon < 2) {
      ageFather--;
      ageSon--;
      count++;
    }

    console.log(
      `${count} роки(ів) тому батьку було в 2 рази більше років ніж сину`
    );
  }

  if (ageFather / ageSon > 2) {
    while (ageFather / ageSon > 2) {
      ageFather++;
      ageSon++;
      count++;
    }

    console.log(
      `Через ${count} роки(ів) батьку буде в 2 рази більше років ніж сину`
    );
  }
}

year(65, 48);
