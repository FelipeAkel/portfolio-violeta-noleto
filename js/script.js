"use strict";

// DADOS EDITÁVEIS: altere os destaques, cursos, depoimentos e contatos abaixo.
const highlights = [
  {
    title: "De frente com o social",
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
    title: "Mentoria para transformar estudo em aprovação",
    eyebrow: "Mentoria",
    description: "Organização, acompanhamento e estratégias práticas para você avançar com consistência na preparação.",
    image: "assets/images/hero-mentoria.webp",
    startDate: "2026-08-01",
    endDate: "2030-12-31",
    button: {
      label: "Falar pelo WhatsApp",
      href: "https://wa.me/556199602626?text=Ol%C3%A1%2C%20professora%20Viol%C3%AAta%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria."
    }
  },
  {
  title: "Aulas ao vivo para avançar na sua preparação",
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
    description: "Conteúdos organizados por tema para construir uma preparação segura e consistente.",
    features: ["Trilhas de aprendizagem", "Aulas objetivas", "Material de apoio"],
    linkText: "Conhecer as aulas",
    href: "https://violetanoleto.proluno.com.br/"
  },
  {
    featured: true,
    title: "Revisões intensivas",
    description: "Encontros focados nos temas mais relevantes para a reta final antes da prova.",
    features: ["Conteúdo estratégico", "Questões comentadas", "Foco na banca"],
    linkText: "Ver próximas revisões",
    href: "https://www.youtube.com/@violetanoleto5351/featured"
  },
  {
    title: "Mentorias",
    description: "Acompanhamento para organizar prioridades, rotina e estratégia de estudos.",
    features: ["Plano direcionado", "Acompanhamento", "Evolução contínua"],
    linkText: "Conhecer a mentoria",
    href: "https://wa.me/556199602626?text=Ol%C3%A1%2C%20professora%20Viol%C3%AAta%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20mentoria."
  }
];

const testimonials = [
  {
    text: "Violeta, quero agradecê-la imensamente pela revisão de Altos! Você foi precisa, cuidadosa e conseguiu identificar com muita excelência o perfil da banca. A prova de hoje estava, simplesmente, toda na revisão que você preparou...",
    name: "Rosiane",
    result: "Preparação para concursos"
  },
  {
    text: "Muito obrigada vc é maravilhosa e muito dedicada conosco, seus alunos!!!",
    name: "Mirian Denise",
    result: "Preparação para concursos"
  },
  {
    text: "A prova estava muito boa o específico, raciocínio até superei... rsrsrs. Parabéns profª Violêta, sua revisão foi bem direcionada para o conteúdo. Fiquei muito feliz.",
    name: "Aluna do concurso público",
    result: "Preparação para concursos"
  },
  {
    text: "Eu quis estudar com mais foco e disciplina, pois sei que minha hora vai chegar... Continue com esse projeto lindo. Suas aulas são maravilhosas você nasceu com o dom de ensinar. Amo suas aulas.",
    name: "Eliane",
    result: "Preparação para concursos"
  },
  {
    text: "Eu gostei da prova. Seus conteúdos foram essências pro meu desempenho.",
    name: "Aluna do concurso público",
    result: "Preparação para concursos"
  },
  {
    text: "Bom dia meu amor, passando só pra lhe dizer que eu oro por sua vida, por você ser luz. Eu sou muito grata a você pelo carinho e eu não canso de dizer que você é inspiração pra mim, ânimo pra mim não deixar a tristeza e os problemas da vida me abater e fazer desistir dos meus sonhos.  Queria compartilhar com vc sobre a prova do TJ Piauí. [...] fiquei muito feliz com o resultado de acertos do Específico que foram apenas 3 questões que errei, o que me fez acreditar que estou no caminho certo e não desistir. Irei agora focar no INSS.",
    name: "Fannyele Cristina",
    result: "Preparação para concursos"
  },
  {
    text: "Oow minha prof. Muito obrigada! Deus é muito maravilhoso! Muito obrigada por tudo! Suas aulas foram fundamentais. Até hoje estudo pelos seus materiais. Aprovada - 1º lugar EBSERH/HU-UFMA e 2º na EBSERH/ Nacional",
    name: "Karoline Rocha",
    result: "Preparação para concursos"
  },
  {
    text: "Boa tarde! Fui convocada para o concurso HU Maranhão. Muito obrigada por tudo! Aprovada - EBSERH/HU-UFMA",
    name: "Ially Kellen",
    result: "Preparação para concursos"
  },
  {
    text: "Professora querida, hoje saiu o resultado da prefeitura de Teresina e me lembrei das suas palavras de incentivo quando não fui bem na FHT. Hoje recebo a notícia de que fiquei em sétimo lugar e você é uma das pessoas que quero compartilhar essa alegria e agradecer. Que Deus te abençoe sempre e que você continue esse trabalho lindo e grandioso. bjos. Aprovada - 7º lugar na Prefeitura Municipal de Teresina.",
    name: "Jordânia ",
    result: "Preparação para concursos"
  }
];

const contactLinks = [
  {
    icon: "assets/images/whatsapp.png",
    label: "WhatsApp",
    detail: "Atendimento e informações",
    href: "https://wa.me/556199602626?text=Ol%C3%A1%2C%20professora%20Viol%C3%AAta%21%20Gostaria%20de%20entrar%20em%20contato."
  },
  {
    icon: "assets/images/instagram.png",
    label: "Instagram",
    detail: "Conteúdos e novidades",
    href: "https://www.instagram.com/violetanoleto/"
  },
  {
    icon: "assets/images/youtube.png",
    label: "YouTube",
    detail: "Aulas e transmissões",
    href: "https://www.youtube.com/@violetanoleto5351"
  },
  {
    icon: "assets/images/email.png",
    label: "E-mail",
    detail: "Parcerias e convites",
    href: "mailto:flower_violeta@hotmail.com"
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
let testimonialExpanded = false;

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
    <a class="course-link mt-auto" href="${course.href}" target="_blank" rel="noreferrer">${course.linkText} <span aria-hidden="true">→</span></a>
  </article></div>`).join("");
}

function renderTestimonial() {
  testimonialExpanded = false;
  const item = testimonials[testimonialIndex];
  $("#testimonial-text").textContent = `${item.text}`;
  $("#testimonial-avatar").textContent = item.name.charAt(0);
  $("#testimonial-name").textContent = item.name;
  $("#testimonial-result").textContent = item.result;
  updateTestimonialToggle();
  $("#testimonial-count").textContent = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
}

function updateTestimonialToggle() {
  const text = $("#testimonial-text");
  const button = $("#testimonial-toggle");
  text.classList.remove("is-collapsed");
  const needsToggle = text.scrollHeight > parseFloat(window.getComputedStyle(text).lineHeight) * 4 + 1;
  if (!needsToggle && testimonialExpanded) {
    testimonialExpanded = false;
    restartTestimonialTimer();
  }
  text.classList.toggle("is-collapsed", needsToggle && !testimonialExpanded);
  button.hidden = !needsToggle;
  button.textContent = testimonialExpanded ? "Leia menos" : "Leia mais";
  button.setAttribute("aria-expanded", String(testimonialExpanded));
}

function changeTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial();
}

function restartTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  if (!testimonialExpanded && testimonials.length > 1) testimonialTimer = window.setInterval(() => changeTestimonial(1), 7500);
}

function renderContacts() {
  $("#contact-list").innerHTML = contactLinks.map((contact) => `<div class="col-sm-6"><a class="contact-card" href="${contact.href}" target="_blank" rel="noreferrer">
    <span class="contact-icon" aria-hidden="true"><img src="${contact.icon}" alt="" width="28" height="28" loading="lazy"></span><span><strong>${contact.label}</strong><small>${contact.detail}</small></span><span class="contact-arrow" aria-hidden="true">→</span>
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
  applyTheme(saved === "dark" ? "dark" : "light");
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
  $("#testimonial-toggle").addEventListener("click", () => {
    testimonialExpanded = !testimonialExpanded;
    updateTestimonialToggle();
    restartTestimonialTimer();
  });
  window.addEventListener("resize", updateTestimonialToggle);
  document.fonts.ready.then(updateTestimonialToggle);
});
