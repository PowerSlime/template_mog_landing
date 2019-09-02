// Склонение числительных
const declOfNum = (number, titles) => {
	cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2:cases[(number % 10 < 5) ? number % 10:5]];
};

const print = (node, momentObject) => {
	let days = moment().diff(momentObject, 'days');
	const words = ['день', 'дня', 'дней'];

	let message = 'Открытие сервера <strong>сегодня</strong>!';

	if (days < 0) {
		// Меняем знак
		days *= -1;

		message = `Открытие сервера через <strong>${days}</strong> ${declOfNum(days, words)}!`;
	} else if (days > 0) {
		message = `Сервер работает уже <strong>${days}</strong> ${declOfNum(days, words)}!`
	}

	$(node).html(message);
};


$(document).ready(() => {
	const node = $('[data-server-birthday]');
	const dataBirthday = node.data('server-birthday');
	const serverBirthday = moment(dataBirthday, 'DD/MM/YYYY');

	print(node, serverBirthday);
});
