/* Task 1 */
/* Реализовать функцию, исключающую из входного строки русские буквы Р, К и Н в любом регистре.
На вход подается строка длины n. 1 <= n <= 10000 */

/**
 * Функция filter() сключает из входной строки заданные символы в любом регистре.
 * @param {String} string Фильтруемая строка
 * @param {...char} filterChars Символы, используемые в качестве правил фильтра.
 * @returns {String} Возвращает отфильтрованную строку
 */
function filter(string, ...filterChars) {
  const excluding = filterChars.reduce((previousValue, currentValue) => `${previousValue}|${currentValue}`);
  return string.replace(new RegExp(excluding, 'gi'), '');
}

process.stdout.write(filter(process.argv[process.argv.length - 1], 'Р', 'К', 'Н'));
