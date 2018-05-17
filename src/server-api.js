const serverApiLink = 'http://localhost:8080';
const serverApiPath = '/api/server/online';

$.ajax({
	url: `${serverApiLink}${serverApiPath}`,
	timeout: 500
})
	.done(data => printAjaxData(data, true))
	.fail(data => printAjaxData(data, false));

const printAjaxData = (data, isDone) => {
	$(document).ready(() => {
		console.log(data, isDone);
		try {
			data = JSON.parse(data);
		} catch (e) {
			data = {};
		}

		let app = $('#ajaxApp');

		if (isDone && data.is_online) {
			const response = data.response;

			const keys = [
				{key: 'cap', description: 'текущий кап'},
				{key: 'online', description: `${declOfNum(response.online, ['игрок', 'игрока', 'игроков'])} онлаин`},
				{key: 'rates', description: 'текущие рейты'}
			];

			let block = $('<div class="row">');
			for (key of keys) {
				block.append(`
					<div class="col-md-4">
						<div class="server-info__server advantages__item">
							<p class="server-info__server--heading">${response[key.key]}</p>
							<p class="server-info__server--description">${key.description}</p>
						</div>
					</div>
				`)
			}

			app.html(block);

		} else {
			app.html(`
				<div class="row">
					<div class="col-md-12">
						<div class="advantages__server-offline advantages__item">
							<p class="server-info__server-offline--description">На данный момент сервер <strong>недоступен</strong>.</p>
						</div>
					</div>
				</div>
			`);
		}
	});
};
