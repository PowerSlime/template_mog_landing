import translate from "./translate";
import {i18nInstance, SUPPORTED_LANGUAGES} from "./_common/i18n-instance";

export default async function languageSwitcher() {
    const i18n = await i18nInstance;
    const $select = $(".js-init--language-switcher");

    const localLang = localStorage.getItem("language");

    const browserLang = ((navigator.language || '').split('-')?.[0] || 'ru').toLocaleLowerCase();
    const selectValue = $select.val();
    const currentLang = localLang || browserLang || selectValue;
    const initialLang = SUPPORTED_LANGUAGES.includes(currentLang) ? currentLang : SUPPORTED_LANGUAGES[0] || 'ru';

    i18n.changeLanguage(initialLang);
    translate(i18n);

    $select.on("change", (e) => {
        const lang = e.target.value;
        i18n.changeLanguage(lang);
        translate(i18n);
        localStorage.setItem("language", lang);
    });

    $select.val(initialLang);
}
