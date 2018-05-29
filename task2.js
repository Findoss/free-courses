/* Task 2 */
/* Найти минимальное количество сдвигов массива a, после которых он будет равен массиву b.
 * Сдвиг можно осуществлять в любую сторону.
 * Вывести -1, если такой сдвиг не существует.
 * На вход подается две строки длины a и b. 1 <= a, b <= 10000 
 */

/**
 * Функция circularShift() производит круговой сдвиг строки в заданном направлении
 * 
 * @param {String}  string         Исходная строка.
 * @param {Boolean} shiftDirection Направление сдвига (true - направо, false - налево).
 * @returns Возвращает строку с круговым сдвигом на 1 в заданном направлении.
 */
function circularShift(string, shiftDirection) {
  if (shiftDirection) {
    return string[string.length - 1] + string.substring(0, string.length - 1);
  } else {
    return string.substring(1, string.length) + string[0];
  }
}

/**
 * Функция searchMinimalShift() находит минимальное количество сдвигов после которых строки будут равны. Если это не возможно возращает -1. Если строки равны возращает 0.
 * 
 * @param {String} stringOne Исходная строка 1 
 * @param {String} stringTwo Исходная строка 2
 * @returns Возвращает минимальное количество круговых сдвигов после которых строки будут равны. Если это не возможно возращает -1.
 */
function searchMinimalShift(stringOne, stringTwo) {
  
  if (stringOne.length !== stringTwo.length) return -1;
  
  stringOneR = stringOne;
  stringOneL = stringOne;
  let shiftCount = 0;

  do {
    if (stringOneR === stringTwo || stringOneL === stringTwo) break;
    shiftCount += 1;
    stringOneR = circularShift(stringOneR, true);
    stringOneL = circularShift(stringOneL, false);
  } while (shiftCount < stringOne.length);

  if (shiftCount === stringOne.length) shiftCount = -1;
  return shiftCount;
}

process.stdout.write(String(searchMinimalShift(
  process.argv[process.argv.length-2], 
  process.argv[process.argv.length-1]
)));
