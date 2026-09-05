"use strict";

// DADOS EDITÁVEIS: altere os destaques, cursos, depoimentos e contatos abaixo.
const highlights = [
  {
    title: "Prepare-se com direção, método e propósito.",
    eyebrow: "Destaque",
    description: "Aulas de Serviço Social para concursos públicos, com conteúdo objetivo, revisão estratégica e foco no que realmente é cobrado.",
    image: "assets/images/hero-study.webp",
    startDate: "2026-01-01",
    endDate: "2030-12-31",
    button: {
      label: "Conheça os cursos",
      href: "https://violetanoleto.proluno.com.br/"
    }
  },
  {
    title: "Mentoria para transformar estudo em aprovação.",
    eyebrow: "Mentoria",
    description: "Organização, acompanhamento e estratégias práticas para você avançar com consistência na preparação.",
    image: "assets/images/hero-mentoria.webp",
    startDate: "2026-08-01",
    endDate: "2030-12-31",
    button: {
      label: "Falar pelo WhatsApp",
      href: "https://wa.me/5500000000000"
    }
  },
  {
  title: "Aulas ao vivo para avançar na sua preparação.",
  eyebrow: "Lives no YouTube",
  description: "Participe de aulas ao vivo com revisões estratégicas, conteúdos atualizados e questões comentadas.",
  image: "assets/images/hero-lives-youtube.webp",
  startDate: "2026-08-20",
  endDate: "2030-12-31",
  button: {
    label: "Acompanhar as lives",
    href: "https://www.youtube.com/@violetanoleto5351/featured"
  }
}
];

const courses = [
  {
    title: "Aulas para concursos",
    description:
      "Conteúdos organizados por tema para construir uma preparação segura e consistente.",
    features: ["Trilhas de aprendizagem", "Aulas objetivas", "Material de apoio"],
    linkText: "Conhecer as aulas",
    href: "#contato"
  },
  {
    featured: true,
    title: "Revisões intensivas",
    description:
      "Encontros focados nos temas mais relevantes para a reta final antes da prova.",
    features: ["Conteúdo estratégico", "Questões comentadas", "Foco na banca"],
    linkText: "Ver próximas revisões",
    href: "#contato"
  },
  {
    title: "Mentorias",
    description:
      "Acompanhamento para organizar prioridades, rotina e estratégia de estudos.",
    features: ["Plano direcionado", "Acompanhamento", "Evolução contínua"],
    linkText: "Conhecer a mentoria",
    href: "#contato"
  }
];

const testimonials = [
  {
    text:
      "A professora Violêta tornou assuntos complexos muito mais claros. As revisões foram decisivas para eu chegar à prova com segurança.",
    name: "Aluna aprovada",
    result: "Concurso público municipal"
  },
  {
    text:
      "As aulas têm profundidade, organização e uma didática excelente. Consegui melhorar meu desempenho principalmente nas questões de legislação.",
    name: "Estudante de Serviço Social",
    result: "Preparação para concursos"
  },
  {
    text:
      "A mentoria me ajudou a organizar o que estudar e a manter constância. Passei a enxergar o edital de forma muito mais estratégica.",
    name: "Aluna da mentoria",
    result: "Planejamento de estudos"
  }
];

const contactLinks = [
  {
    icon: "W",
    label: "WhatsApp",
    detail: "Atendimento e informações",
    href: "https://wa.me/5500000000000"
  },
  {
    icon: "I",
    label: "Instagram",
    detail: "Conteúdos e novidades",
    href: "https://instagram.com/"
  },
  {
    icon: "Y",
    label: "YouTube",
    detail: "Aulas e transmissões",
    href: "https://youtube.com/"
  },
  {
    icon: "@",
    label: "E-mail",
    detail: "Parcerias e convites",
    href: "mailto:contato@exemplo.com.br"
  }
];

const $ = (selector) => document.querySelector(selector);
const isExternal = (href) => href.startsWith("http") || href.startsWith("mailto:");

function visibleHighlights(items, now = new Date()) {
  return items.filter((item) => {
    if (!item.title || !item.image || !item.startDate || !item.endDate) return false;
    const start = new Date(`${item.startDate}T00:00:00`);
    const end = new Date(`${item.endDate}T23:59:59`);
    return !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && start <= now && now <= end;
  });
}

const activeHighlights = visibleHighlights(highlights);
let heroIndex = 0;
let heroPaused = false;
let heroTimer = null;
let testimonialIndex = 0;
let testimonialTimer = null;

function renderHero() {
  if (!activeHighlights.length) {
    $("#hero-slide").classList.add("d-none");
    $("#hero-empty").classList.remove("d-none");
    return;
  }
  const item = activeHighlights[heroIndex];
  $("#hero-slide").style.backgroundImage = `linear-gradient(90deg, rgba(28, 8, 39, .94) 0%, rgba(52, 16, 70, .82) 43%, rgba(52, 16, 70, .18) 72%), url(${item.image})`;
  $("#hero-eyebrow").textContent = item.eyebrow;
  $("#hero-title").textContent = item.title;
  $("#hero-description").textContent = item.description || "";
  const button = $("#hero-button");
  if (item.button?.label && item.button?.href) {
    $("#hero-button-label").textContent = item.button.label;
    button.href = item.button.href;
    button.target = isExternal(item.button.href) ? "_blank" : "";
    button.rel = isExternal(item.button.href) ? "noreferrer" : "";
    button.classList.remove("d-none");
  } else button.classList.add("d-none");
  $("#hero-controls").classList.toggle("d-none", activeHighlights.length < 2);
  $("#hero-dots").innerHTML = activeHighlights.map((entry, index) => `<button type="button" class="${index === heroIndex ? "active" : ""}" data-slide="${index}" aria-label="Exibir destaque ${index + 1}" ${index === heroIndex ? 'aria-current="true"' : ""}></button>`).join("");
  document.querySelectorAll("[data-slide]").forEach((dot) => dot.addEventListener("click", () => { heroIndex = Number(dot.dataset.slide); renderHero(); restartHeroTimer(); }));
}

function changeHero(direction) {
  if (!activeHighlights.length) return;
  heroIndex = (heroIndex + direction + activeHighlights.length) % activeHighlights.length;
  renderHero();
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  if (!heroPaused && activeHighlights.length > 1) heroTimer = window.setInterval(() => changeHero(1), 6500);
}

function renderCourses() {
  $("#courses-list").innerHTML = courses.map((course, index) => `<div class="col-md-6 col-lg-4"><article class="course-card h-100${course.featured ? " featured" : ""}">
    <div class="course-number">${String(index + 1).padStart(2, "0")}</div>
    ${course.featured ? '<span class="course-badge">Em destaque</span>' : ""}
    <h3>${course.title}</h3><p>${course.description}</p>
    <ul class="list-unstyled d-grid gap-2">${course.features.map((feature) => `<li><span class="course-check" aria-hidden="true">✓</span>${feature}</li>`).join("")}</ul>
    <a class="course-link mt-auto" href="${course.href}">${course.linkText} <span aria-hidden="true">→</span></a>
  </article></div>`).join("");
}

function renderTestimonial() {
  const item = testimonials[testimonialIndex];
  $("#testimonial-text").textContent = `“${item.text}”`;
  $("#testimonial-avatar").textContent = item.name.charAt(0);
  $("#testimonial-name").textContent = item.name;
  $("#testimonial-result").textContent = item.result;
  $("#testimonial-count").textContent = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
}

function changeTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial();
}

function restartTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  if (testimonials.length > 1) testimonialTimer = window.setInterval(() => changeTestimonial(1), 7500);
}

function renderContacts() {
  $("#contact-list").innerHTML = contactLinks.map((contact) => `<div class="col-sm-6"><a class="contact-card" href="${contact.href}" target="_blank" rel="noreferrer">
    <span class="contact-icon" aria-hidden="true">${contact.icon}</span><span><strong>${contact.label}</strong><small>${contact.detail}</small></span><span class="contact-arrow" aria-hidden="true">→</span>
  </a></div>`).join("");
  const whatsapp = contactLinks.find((contact) => contact.label === "WhatsApp");
  if (whatsapp) $("#floating-whatsapp").href = whatsapp.href;
}

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.setAttribute("data-bs-theme", theme);
  $("#theme-button").textContent = dark ? "☀" : "☾";
  $("#theme-button").setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
}

function initializeTheme() {
  const saved = localStorage.getItem("violeta-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);
  $("#theme-button").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("violeta-theme", next);
    applyTheme(next);
  });
}

function initializeNavigation() {
  const menu = $("#mainMenu");
  document.querySelectorAll("#mainMenu .nav-link").forEach((link) => link.addEventListener("click", () => {
    if (window.innerWidth < 992 && menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  initializeTheme(); initializeNavigation(); renderHero(); renderCourses(); renderTestimonial(); renderContacts();
  $("#current-year").textContent = new Date().getFullYear();
  $("#hero-previous").addEventListener("click", () => { changeHero(-1); restartHeroTimer(); });
  $("#hero-next").addEventListener("click", () => { changeHero(1); restartHeroTimer(); });
  $("#hero-pause").addEventListener("click", () => { heroPaused = !heroPaused; $("#hero-pause").textContent = heroPaused ? "▶" : "Ⅱ"; $("#hero-pause").setAttribute("aria-label", heroPaused ? "Retomar slideshow" : "Pausar slideshow"); restartHeroTimer(); });
  $("#testimonial-previous").addEventListener("click", () => { changeTestimonial(-1); restartTestimonialTimer(); });
  $("#testimonial-next").addEventListener("click", () => { changeTestimonial(1); restartTestimonialTimer(); });
  restartHeroTimer(); restartTestimonialTimer();
});
