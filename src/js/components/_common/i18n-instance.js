import i18next from "i18next";
import Polyglot from "i18next-polyglot";

import ru from "../../../locale/ru.json";
import en from "../../../locale/en.json";

export const SUPPORTED_LANGUAGES = ["ru", "en"];

export const i18nInstance = (async () => {
    await i18next
        .use(Polyglot)
        .init({
            lng: "en",
            fallbackLng: "ru",
            resources: {
                ru: {
                    translation: ru,
                },
                en: {
                    translation: en,
                },
            },
        });

    return i18next;
})();
