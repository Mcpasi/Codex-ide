// Hier speichern wir beim Start die originalen deutschen Texte aus dem HTML
const defaultGermanTexts = {};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Deutsche Originaltexte aus dem DOM auslesen & sichern
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    defaultGermanTexts[key] = el.textContent;
  });

  // 2. Letzte Wahl laden oder Standard ('de') nutzen
  const savedLang = localStorage.getItem("selectedLanguage") || "de";
  setLanguage(savedLang);
});

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (lang === "en" && i18n_en[key]) {
      // Auf Englisch umschalten
      el.textContent = i18n_en[key];
    } else if (lang === "de" && defaultGermanTexts[key]) {
      // Zurück zum deutschen Originaltext aus dem HTML
      el.textContent = defaultGermanTexts[key];
    }
  });

  localStorage.setItem("selectedLanguage", lang);
}

