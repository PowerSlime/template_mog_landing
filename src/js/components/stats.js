import Mustache from "mustache";
import dayjs from "dayjs";

const SERVER_BIRTHDAY = "2018-05-27";

// Склонение числительных
function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function getStats(callback) {
    const serverApiLink = "https://host.magicofgods.ru";
    const serverApiPath = "/api/server";

    $.ajax({
        url: `${serverApiLink}${serverApiPath}`,
        timeout: 30000
    })
        .done(data => callback(data, true))
        .fail(data => callback(data, false));
}

function getBirthday() {
    const serverBirthday = dayjs(SERVER_BIRTHDAY, "DD/MM/YYYY");
    const days = dayjs().diff(serverBirthday, "days");
    const words = ['день', 'дня', 'дней'];

    if (days < 0) {
        return {
            header: days * -1,
            description: `${declOfNum(days * -1, words)} до открытия`
        }
    } else if (days > 0) {
        return {
            header: days,
            description: `${declOfNum(days, words)} с открытия`
        }
    } else {
        return {
            header: "Сегодня",
            description: `открытие сервера`
        }
    }
}

export default function stats() {
    const stats = document.querySelectorAll(".js-init--stats");
    stats.forEach(container => {
        const state = {
            date: getBirthday(),
        };

        const template = container.innerHTML;
        Mustache.parse(template);

        function render() {
            container.innerHTML = Mustache.render(template, state);
        }

        render();
        getStats((response, success) => {
            delete state.stats;
            let data;
            try {
                data = JSON.parse(response);
            } catch (e) {
                data = {};
            }

            if (success && data.is_online) {
                const response = data.response;
                state.stats = [
                        {header: response.cap, description: "кап"},
                        {header: response.online, description: declOfNum(response.online, ["игрок", "игрока", "игроков"])},
                        {header: response.rates, description: "рейты"},
                ];
                render()
            } else {
                state.error = {
                    header: "Произошла ошибка",
                    description: "В данный момент мы не можем получить данные с сервера."
                };
                render();
            }
        });
    });
}
