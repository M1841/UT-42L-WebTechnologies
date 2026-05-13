window.i18n = {
  locale: "en",
  translations: {
    en: {
      home: "Home",
      team: "Team",
      publications: "Publications",
      areas_of_expertise: "Areas of Expertise",
      offer_title: "The offer addressed to the economic environment",
      representative_projects: "Representative Projects",
      our_team: "Our Team",
      director: "Director",
      professors: "Professors",
      phd_students: "PhD Students",
      recent_publications: "Recent Publications",
      search_publications: "Search publications...",
      filter_title: "Title",
      filter_author: "Author",
      filter_venue: "Venue",
      year: "Year",
      read_more: "Read more",
      no_publications: "No publications found",
      view_more: "View more",
      view_all: "View all publications",
      dark: "Dark",
      light: "Light",
      english: "English",
      romanian: "Română",
      last_updated: "Last updated",
      prof_eng: "Prof. Eng.",
      eng: "Eng.",
      phd: "PhD",
    },
    ro: {
      home: "Acasă",
      team: "Echipă",
      publications: "Publicații",
      areas_of_expertise: "Domenii de expertiză",
      offer_title: "Oferta adresată mediului economic",
      representative_projects: "Proiecte reprezentative",
      our_team: "Echipa noastră",
      director: "Director",
      professors: "Profesori",
      phd_students: "Doctoranzi",
      recent_publications: "Publicații recente",
      search_publications: "Caută publicații...",
      filter_title: "Titlu",
      filter_author: "Autor",
      filter_venue: "Jurnal/Conferință",
      year: "An",
      read_more: "Citește mai mult",
      no_publications: "Nicio publicație găsită",
      view_more: "Vezi mai mult",
      view_all: "Vezi toate publicațiile",
      dark: "Întunecat",
      light: "Luminos",
      english: "English",
      romanian: "Română",
      last_updated: "Ultima actualizare",
      prof_eng: "Prof. Ing.",
      eng: "Ing.",
      phd: "PhD",
    },
  },
  t(key) {
    return this.translations[this.locale][key] || key;
  },
  setLocale(locale) {
    this.locale = locale;
    localStorage.setItem("locale", locale);
    document.documentElement.setAttribute(
      "lang",
      locale === "ro" ? "ro" : "en",
    );
  },
};

(function () {
  var saved = localStorage.getItem("locale");
  if (saved === "ro" || saved === "en") {
    window.i18n.locale = saved;
  }
  document.documentElement.setAttribute(
    "lang",
    window.i18n.locale === "ro" ? "ro" : "en",
  );
})();
