/* Task 3 */
/* Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
 * В выводе использовать часы, минуты и секунды (при необходимости).
 * На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
 */

/**
 * Функция getTextTimeRU() возвращает время в человекочитаемом виде для заданного вида времени.
 * Функция реализует правило для русского языка и применима для:
 * милисекунд, секунд, минут, часов, дней, месяцов, лет и других имеющие 3 формы.
 *
 * @param   {Number} time  Время
 * @param   {Array}  words Массив форм слова
 * @return  {String} Возвращает, время в текстовом человекочитаемом виде.
 * (Формат: время текстовое_представление)
 */
function getTextTimeRU(time, words) {
  let word = '';
  const remainder10 = time % 10;
  const remainder100 = time % 100;
  if (
    (remainder10 >= 5 && remainder10 <= 9 || remainder10 === 0) ||
    (remainder100 > 10 && remainder100 <= 19)) {
    word = words[2];
  } else if (remainder10 === 1) {
    word = words[0];
  } else if (remainder10 > 1 && remainder10 < 5) {
    word = words[1];
  }
  return `${time} ${word} `;
}

/**
 * Функция secondsToString() возвращает время в человекочитаемом виде.
 *
 * @param   {Number} seconds Время в секундах
 * @return  {String} Возвращает, время в текстовом человекочитаемом виде.
 * (Формат: время текстовое_представление)
 */
function secondsToString(seconds) {
  let string = '';
  const h = ~~(seconds / 3600);
  const m = ~~(seconds % 3600 / 60);
  const s = ~~(seconds % 3600 % 60 % 60);
  if (h > 0) string += getTextTimeRU(h, ['час', 'часа', 'часов']);
  if (m > 0) string += getTextTimeRU(m, ['минута', 'минуты', 'минут']);
  if (s > 0) string += getTextTimeRU(s, ['секунда', 'секунды', 'секунд']);
  return string;
}

process.stdout.write(String(secondsToString(Number(process.argv[process.argv.length - 2]) +
    Number(process.argv[process.argv.length - 1]))));
