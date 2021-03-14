import Mustache from "mustache";
import dayjs from "dayjs";
import {i18nInstance} from "./_common/i18n-instance";

const SERVER_BIRTHDAY = "2018-05-27";

function getStats(callback) {
    const serverApiLink = "https://host.magicofgods.ru";
    const serverApiPath = "/api/server";

    $.ajax({
        url: `${serverApiLink}${serverApiPath}`,
        timeout: 30000,
    })
        .done(data => callback(data, true))
        .fail(data => callback(data, false));
}

function getBirthday(i18n) {
    const serverBirthday = dayjs(SERVER_BIRTHDAY, "DD/MM/YYYY");
    const days = dayjs().diff(serverBirthday, "day");

    const daysText = i18n.t("день", {smart_count: Math.abs(days)});

    if (days < 0) {
        return {
            header: days * -1,
            description: `${daysText} до открытия`,
        };
    } else if (days > 0) {
        return {
            header: days,
            description: `${daysText} с открытия`,
        };
    } else {
        return {
            header: i18n.t("Сегодня"),
            description: i18n.t(`открытие сервера`),
        };
    }
}

export default async function stats() {
    const i18n = await i18nInstance;

    const stats = document.querySelectorAll(".js-init--stats");
    stats.forEach(container => {
        const state = {
            date: getBirthday(i18n),
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
                    {header: response.cap, description: i18n.t("кап")},
                    {header: response.online, description: i18n.t("игрок", {smart_count: response.online})},
                    {header: response.rates, description: i18n.t("рейты")},
                ];
                render();
            } else {
                state.error = {
                    header: i18n.t("Произошла ошибка"),
                    description: i18n.t("В данный момент мы не можем получить данные с сервера."),
                };
                render();
            }
        });
    });
}
