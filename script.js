/* =========================
   🌍 LANG INIT SAFE
========================= */

let currentLang = localStorage.getItem("lang") || "fr";

if(!["fr","en","sw","rn"].includes(currentLang)){
  currentLang = "fr";
  localStorage.setItem("lang","fr");
}

/* =========================
   🌍 TRANSLATIONS
========================= */

const translations = {
  fr:{ /* 👉 inchangé (ton contenu complet ici) */ },
  en:{ /* 👉 inchangé */ },
  sw:{ /* 👉 inchangé */ },
  rn:{ /* 👉 inchangé */ }
};

/* =========================
   🌍 APPLY TRANSLATIONS
========================= */

function applyTranslations(){

  const lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang]?.[key]){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(translations[lang]?.[key]){
      el.placeholder = translations[lang][key];
    }
  });

  if(translations[lang]?.page_title){
    document.title = translations[lang].page_title;
  }
}

/* =========================
   🌍 SWITCH LANGUAGE
========================= */

function setLang(lang){

  if(!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem("lang", lang);

  applyTranslations();

  const el = document.querySelector(".typed-text");
  if(el) el.innerHTML = "";

  setTimeout(startTyping, 100);
}

/* =========================
   ✨ TYPING EFFECT
========================= */

let typingTimeout;

function startTyping(){

  const el = document.querySelector(".typed-text");
  if(!el) return;

  const text = translations[currentLang]?.typing_text || "";
  if(!text) return;

  let i = 0;
  el.innerHTML = "";

  if(typingTimeout) clearTimeout(typingTimeout);

  function type(){
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      typingTimeout = setTimeout(type, 40);
    }
  }

  type();
}

/* =========================
   🚀 INIT
========================= */

document.addEventListener("DOMContentLoaded", ()=>{

  applyTranslations();
  startTyping();

  renderBlog();
});

/* =========================
   ✨ SCROLL REVEAL
========================= */

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
  });
});

/* =========================
   🍔 MOBILE MENU (FIX SAFE)
========================= */

document.addEventListener("DOMContentLoaded", ()=>{

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if(hamburger && navMenu){

    hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

  }

});

/* =========================
   🚪 LOGOUT
========================= */

function logout(){
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

/* =========================
   📝 BLOG STORAGE INIT
========================= */

window.blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

/* =========================
   📝 BLOG RENDER (VERSION CLEAN UNIQUE)
========================= */

function renderBlog(){

  const container = document.getElementById("blogContainer");
  if(!container) return;

  const lang = currentLang;

  let posts = JSON.parse(localStorage.getItem("blogPosts")) || window.blogPosts || [];

  if(!posts.length){
    container.innerHTML = "<p style='text-align:center;'>Aucun article disponible</p>";
    return;
  }

  // filtre publiés
  posts = posts.filter(p => p.published !== false);

  // tri
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date));

  container.innerHTML = "";

  posts.forEach(post=>{
    container.innerHTML += `
      <div class="blog-card fade-in">
        <img src="${post.image || ''}" style="width:100%;border-radius:10px;">
        <small>${post.date || ''}</small>
        <h3>${post.title?.[lang] || ''}</h3>
        <p>${post.text?.[lang] || ''}</p>
      </div>
    `;
  });
}

/* =========================
   🌄 PARALLAX HERO
========================= */

window.addEventListener("scroll", ()=>{
  const hero = document.querySelector(".hero-img");
  if(hero){
    hero.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
  }
});

/* =========================
   🔥 NAVBAR EFFECT
========================= */

window.addEventListener("scroll", ()=>{
  const nav = document.querySelector("header");

  if(!nav) return;

  if(window.scrollY > 50){
    nav.style.background = "rgba(255,255,255,0.9)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});
function applyTranslations(){

  const lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang]?.[key]){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(translations[lang]?.[key]){
      el.placeholder = translations[lang][key];
    }
  });

  if(translations[lang]?.page_title){
    document.title = translations[lang].page_title;
  }

  // 🔥 FORCER UPDATE MENU MOBILE (IMPORTANT)
  document.querySelectorAll("#nav-menu a, .mobile-menu a").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang]?.[key]){
      el.textContent = translations[lang][key];
    }
  });
}