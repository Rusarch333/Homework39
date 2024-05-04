"use strict";

/*
  Написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих чисел. (Алгоритм Евкліда)
  https://vseosvita.ua/library/embed/001m1m-f727.docx.html
  getDivider(45,15) -> 15
  getDivider(24,15) -> 3
  getDivider(24,23) -> 1

  Знайдемо, наприклад: НСД чисел 112 і 80. 
  При діленні 112 на 80 дістаємо в остачі 32. 
  При діленні 80 на 32 дістаємо в остачі 16. 
  Ділення 32 на 16 виконалось без остачі. 
  Отже, НСД чисел 112 і 80 дорівнює 16, тобто НСД (112, 80) = 16.

  Обов'язково кидатися помилками і ловити - обробляти виключення!!!
*/

console.log("\nГОЛОВНЕ ЗАВДАННЯ!\n");

const greatestCommonDivisorByEuclidRecursion = (number1, number2) => {
  let greaterNumber;
  let lesserNumber;

  // Перевірки вхідних параметрів
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new TypeError("Params is not a numbers!");
  }
  if (
    Number.isInteger(number1) === false ||
    Number.isInteger(number2) === false
  ) {
    throw new Error("Numbers must be integer!");
  }
  if (number1 === 0 || number2 === 0) {
    throw new Error("Numbers can't be 0!");
  }

  // Позбавляємось від можливого від'ємного значення
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);

  // Визначаємо більше та менше число, або повертаємо їх як найбільший спільний дільник, якщо вони рівні
  if (number1 > number2) {
    greaterNumber = number1;
    lesserNumber = number2;
  } else if (number1 < number2) {
    greaterNumber = number2;
    lesserNumber = number1;
  } else {
    return number1;
  }

  // Рахуємо остачу
  const divisionRemainder = greaterNumber % lesserNumber;

  // Працюємо з остачами через рекурсію, доки не отримаємо 0-ву остачу
  return divisionRemainder === 0
    ? lesserNumber
    : greatestCommonDivisorByEuclidRecursion(lesserNumber, divisionRemainder);
};

try {
  console.log(greatestCommonDivisorByEuclidRecursion(80, 112)); // 16
  console.log(greatestCommonDivisorByEuclidRecursion(100, 100)); // 100
  console.log(greatestCommonDivisorByEuclidRecursion(45, 15)); // 15
  console.log(greatestCommonDivisorByEuclidRecursion(24, 15)); // 3
  console.log(greatestCommonDivisorByEuclidRecursion(24, 23)); // 1
  console.log(greatestCommonDivisorByEuclidRecursion(-80, -112)); // 16
  console.log(greatestCommonDivisorByEuclidRecursion(80, "112")); // TypeError
} catch (error) {
  console.error(error);
}

console.log("\nEnd of code!\n");
