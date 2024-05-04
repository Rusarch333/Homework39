/*
  ЗАВДАННЯ З (*) - Написати таку ж функцію але без рекурсії, з застосуванням циклу
*/

console.log("\nЗАВДАННЯ З (*)!\n");

/**
 * Функція, яка реалізовує алгоритм Евкліда, для знаходження найбільшого спільного дільника
 * Реалізація використовує цикл
 * Працює з від'ємними числами
 * Самостійно визначає який з параметрів є більшим числом, а який меншим
 * Повертає помилки у разі, якщо параметри не є цілим числом відмінним від 0
 * @param {number} number1 
 * @param {number} number2
 * @throws {TypeError} Params is not a numbers!
 * @throws {Error} Params must be integer!
 * @throws {Error} Params can't be 0!
 * @returns {number}
 */
const greatestCommonDivisorByEuclidLoop = (number1, number2) => {
  let greaterNumber;
  let lesserNumber;

  // Перевірки вхідних параметрів
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Params is not a numbers!");
  }
  if (
    Number.isInteger(number1) === false ||
    Number.isInteger(number2) === false
  ) {
    throw new Error("Params must be integer!");
  }
  if (number1 === 0 || number2 === 0) {
    throw new Error("Params can't be 0!");
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

  // Розраховуємо та працюємо з остачами через цикл, доки не отримаємо 0-ву остачу
  while (true) {
    const divisionRemainder = greaterNumber % lesserNumber;

    if (divisionRemainder === 0) {
      return lesserNumber;
    }

    greaterNumber = lesserNumber;
    lesserNumber = divisionRemainder;
  }
};

try {
  console.log(greatestCommonDivisorByEuclidLoop(80, 112)); // 16
  console.log(greatestCommonDivisorByEuclidLoop(100, 100)); // 100
  console.log(greatestCommonDivisorByEuclidLoop(45, 15)); // 15
  console.log(greatestCommonDivisorByEuclidLoop(24, 15)); // 3
  console.log(greatestCommonDivisorByEuclidLoop(24, 23)); // 1
  console.log(greatestCommonDivisorByEuclidLoop(-80, -112)); // 16
  console.log(greatestCommonDivisorByEuclidLoop(80, "112")); // TypeError
} catch (error) {
  console.error(error);
}

console.log("\nEnd of code!\n");

/* Реалізація через рекурсію у index.js !*/