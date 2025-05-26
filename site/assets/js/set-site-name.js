document.addEventListener("DOMContentLoaded", () => {
    /* mapa jezika → naziva */
    const names = {
      en: "User manual",
      hr: "Korisnički priručnik",
    };
  
    /* aktivni jezik čita se s <html lang="…"> */
    const locale =
      document.documentElement.getAttribute("lang")?.split("-")[0] || "en";
  
    const hdr = document.querySelector(".md-header__title");
    if (hdr) hdr.textContent = names[locale] || names.en;
  });
  