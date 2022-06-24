
module.exports = function toReadable(number) {
	const one = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	const two = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
	const dozens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	if (number.toString().length === 1) {// если число состоит из 1 цирфы
		// Если число и длинной 1
		for (let num = 0; num <= number; num++) {
			if (num == number) return one[num];
		}
	} else if (number.toString().length === 2) { // если число состоит из 2 цирф
		for (let num = 10; num <= number; num++) {
			if (num == number) {
				if (num < 20) {
					return two[num - 10];
				} else if (Number(number.toString()[1]) == 0) {
					return dozens[num / 10 - 1];
				} else {
					// сравниваю значение с индексом в словаре и собираю строку 
					return dozens[(Number(number.toString()[0])) - 1] + ' ' + one[Number(number.toString()[1])];
				}
			}
		};
	} else if (number.toString().length === 3) { // если число состоит из 3 цирф
		if (Number(number.toString()[1] == 0) && Number(number.toString()[2] != 0)) { // если втрое число равно 0 и третье не равно 0
			return one[Number(number.toString()[0])] + ' hundred ' + one[Number(number.toString()[2])];
		} else if ((Number(number.toString()[1] + number.toString()[2]) > 10) && (Number(number.toString()[1] + number.toString()[2]) < 20)) { // если  2 и 3-е числа больше 10 и меньше 20 
			return one[Number(number.toString()[0])] + ' hundred ' + two[Number((number.toString()[1] + number.toString()[2]) - 10)];
		} else if (Number(number.toString()[1] == 0) && Number(number.toString()[2] == 0)) {
			return one[Number(number.toString()[0])] + ' hundred';
		}
		else if ((Number(number.toString()[1] != 0) && Number(number.toString()[2] == 0))) {
			return one[Number(number.toString()[0])] + ' hundred ' + dozens[Number(number.toString()[1]) - 1];
		} else {
			return one[Number(number.toString()[0])] + ' hundred ' + dozens[Number(number.toString()[1]) - 1] + ' ' + one[Number(number.toString()[2])];
		}
	}
}
