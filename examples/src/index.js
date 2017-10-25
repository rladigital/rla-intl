import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import registerServiceWorker from "./registerServiceWorker";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";
import it from "react-intl/locale-data/it";

// Our translated strings TODO - Look at doing this dynamically with dynamic imports (or ajax?)
import messagesEn from "./locales/en.data.json";
import messagesFr from "./locales/fr.data.json";
const localeData = { en: messagesEn, fr: messagesFr };

addLocaleData([...en, ...es, ...fr, ...it]);

// Define user's language.
// TODO - Use the auth data to load the users prefered language (overide the navigator setting)
// Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
export const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'

export const messages =
    localeData[language] ||
    localeData[languageWithoutRegionCode] ||
    localeData.en;

//export const messages = localeData.fr;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <App />
    </IntlProvider>,
    document.getElementById("root")
);
registerServiceWorker();
