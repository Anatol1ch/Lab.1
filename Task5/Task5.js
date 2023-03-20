/* var.6 task 162 */

function pow(a, b) {
  // перевіряємо, що a і b допустимі
  if (isNaN(a) || isNaN(b) || (a < 0 && b % 1 !== 0 && b < 0)) {
    return NaN; // a або b не є числами або неправильно задані
  }

  if (b === 0) {
    return 1; // Будь-яке число в ступені 0 дорівнює 1
  }

  let result = 1;
  for (let i = 1; i <= Math.abs(b); i++) {
    result *= a;
  }

  if (b < 0) {
    result = 1 / result; //якщо b від'ємне, результат потрібно інвертувати
  }

  return result;
}

// приклад використання
console.log(pow(2, 3)); // 8
console.log(pow(2, -3)); // 0.125
console.log(pow(2, "hello")); // NaN
