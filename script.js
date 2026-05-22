// 🔥 FORCE langue propre au démarrage
if(!localStorage.getItem("lang")){
  localStorage.setItem("lang","fr"); // langue par défaut
  if(!["fr","en","sw","rn"].includes(localStorage.getItem("lang"))){
  localStorage.setItem("lang","fr");
}
}
/* =========================
   🌍 TRANSLATIONS COMPLETES
========================= */

const translations = {

fr:{
nav_home:"Accueil",
nav_about:"À propos",
nav_services:"Services",
nav_team:"Équipe",
nav_blog:"Blog & Événements",
nav_appointment:"Rendez-vous",

page_title:"Centre Ruhuka – Le Sanctuaire de l’Amour",

hero_title:"CENTRE RUHUKA",
hero_tagline:"Parce que chaque foyer mérite de briller 💖",
hero_button:"Prendre Rendez-vous",
typing_text:"Accompagnement • Coaching • Thérapie • Conseils Juridiques 💖",

intro_title:"Édifier des foyers inébranlables",
intro_text:"Au Centre Ruhuka, nous croyons que chaque famille porte en elle une lumière unique. Notre équipe pluridisciplinaire — coachs conjugaux, psychologues et juristes — vous accompagne avec bienveillance pour restaurer le dialogue, préparer les futurs mariés aux réalités de la vie commune et protéger les droits de chaque membre de la famille.",
intro_why:"Pourquoi choisir le Centre Ruhuka ?",
why_us_text:"Depuis notre création, nous avons accompagné des centaines de familles vers l’harmonie. Notre approche holistique combine écoute active, médiation professionnelle et accompagnement juridique pour offrir des solutions durables à chaque situation familiale.",

services_title:"Nos Services",
services_marriage:"Préparation au Mariage",
services_marriage_text:"Sessions intensives et personnalisées pour bâtir des fondations solides avant le grand jour. Nous abordons la communication, la gestion financière, les attentes mutuelles et la résolution de conflits.",
services_couple:"Thérapie de Couple",
services_couple_text:"Un espace sécurisé de médiation et de résolution de conflits, animé par des professionnels expérimentés. Retrouvez le chemin du dialogue et renforcez votre lien.",
services_reconstruction:"Pôle de Reconstruction",
services_reconstruction_text:"Un accompagnement bienveillant pour retrouver la paix intérieure et reconstruire sa vie après un divorce ou une séparation. Soutien psychologique et conseils pratiques.",
services_parenting:"Éducation Parentale",
services_parenting_text:"Des ateliers et consultations pour accompagner les parents dans l’éducation de leurs enfants, favoriser l’harmonie familiale et renforcer les liens parent-enfant.",

about_title:"Notre Vision et Mission",
about_vision:"Faire de la famille le socle d’une société épanouie en offrant un accompagnement holistique — psychologique, relationnel et juridique — à chaque étape de la vie conjugale et familiale.",
about_mission:"Restaurer le dialogue là où il s’est brisé, préparer les futurs mariés aux réalités de la vie commune, soutenir les personnes en transition et protéger les droits de chaque membre de la famille.",
about_why_text:"Le Centre Ruhuka est bien plus qu’un centre de conseil : c’est un sanctuaire dédié à l’amour et à la famille. Nous brisons les tabous et guidons chaque foyer vers l’harmonie avec compassion et professionnalisme.",

blog_title:"Blog & Événements",
blog_intro:"Retrouvez nos articles, conseils pratiques et événements à venir pour nourrir votre vie de couple et votre famille.",
blog_card1_title:"Amour et communication",
blog_card1_text:"Découvrez les techniques éprouvées pour restaurer un dialogue sincère et constructif au sein de votre couple.",
blog_card2_title:"Se reconstruire après une séparation",
blog_card2_text:"Conseils et témoignages pour retrouver confiance en soi et avancer sereinement après une rupture.",
blog_card3_title:"Gestion des conflits au quotidien",
blog_card3_text:"Apprenez des stratégies concrètes pour désamorcer les tensions et transformer les désaccords en opportunités de croissance.",
blog_card4_title:"Les clés d’un mariage réussi",
blog_card4_text:"Explorez les piliers fondamentaux d’une union solide et durable : confiance, respect, communication et engagement.",

team_title:"Notre Équipe d’Experts",
team_member1_desc:"Coach conjugal et fondateur du Centre Ruhuka. Expert en communication de couple avec plus de 10 ans d’expérience dans l’accompagnement familial.",
team_member2_desc:"Psychologue clinicien spécialisé dans la gestion des émotions et le développement personnel. Accompagne les individus et les couples vers un mieux-être durable.",
team_member3_desc:"Avocat spécialisé en droit de la famille. Conseille et représente les familles dans les procédures juridiques avec rigueur et humanité.",
team_member4_desc:"Conseillère en relations familiales et spécialiste de la reconstruction des couples. Offre un accompagnement chaleureux et structuré.",

appointment_title:"Prenez votre rendez-vous",
appointment_name:"Nom complet",
appointment_email:"Email",
appointment_service:"Service souhaité",
appointment_coach:"Coach préféré",
appointment_mode:"Mode de consultation",
appointment_presentiel:"Présentiel",
appointment_date:"Date souhaitée",
appointment_time:"Heure souhaitée",
appointment_message:"Décrivez votre situation",
appointment_submit:"Confirmer le rendez-vous",

appointment_name_placeholder:"Votre nom complet",
appointment_email_placeholder:"Votre adresse email",
appointment_message_placeholder:"Décrivez brièvement votre situation ou vos attentes...",

mode_whatsapp:"WhatsApp",
mode_zoom:"Zoom",

social_facebook:"Facebook",
social_instagram:"Instagram",
social_twitter:"Twitter",
footer_rights:"© 2026 Centre Ruhuka. Tous droits réservés."
},

en:{
nav_home:"Home",
nav_about:"About",
nav_services:"Services",
nav_team:"Team",
nav_blog:"Blog & Events",
nav_appointment:"Appointment",

page_title:"Centre Ruhuka – The Sanctuary of Love",

hero_title:"CENTRE RUHUKA",
hero_tagline:"Every home deserves to shine 💖",
hero_button:"Book Appointment",
typing_text:"Coaching • Therapy • Legal Advice 💖",

intro_title:"Building unshakeable homes",
intro_text:"At Centre Ruhuka, we believe every family carries a unique light. Our multidisciplinary team — relationship coaches, psychologists, and legal advisors — walks alongside you with compassion to restore communication, prepare future spouses for married life, and protect every family member's rights.",
intro_why:"Why choose Centre Ruhuka?",
why_us_text:"Since our founding, we have guided hundreds of families toward harmony. Our holistic approach combines active listening, professional mediation, and legal guidance to deliver lasting solutions for every family situation.",

services_title:"Our Services",
services_marriage:"Marriage Preparation",
services_marriage_text:"Intensive, personalized sessions to build strong foundations before the big day. We cover communication, financial planning, mutual expectations, and conflict resolution.",
services_couple:"Couple Therapy",
services_couple_text:"A safe space for mediation and conflict resolution, facilitated by experienced professionals. Rediscover the path to dialogue and strengthen your bond.",
services_reconstruction:"Reconstruction",
services_reconstruction_text:"Compassionate support to find inner peace and rebuild your life after divorce or separation. Psychological counseling and practical guidance.",
services_parenting:"Parenting Education",
services_parenting_text:"Workshops and consultations to support parents in raising their children, foster family harmony, and strengthen the parent-child bond.",

about_title:"Our Vision and Mission",
about_vision:"Making family the cornerstone of a thriving society by providing holistic support — psychological, relational, and legal — at every stage of married and family life.",
about_mission:"Restoring dialogue where it has broken down, preparing future spouses for the realities of life together, supporting people in transition, and protecting every family member's rights.",
about_why_text:"Centre Ruhuka is more than a counseling center: it is a sanctuary dedicated to love and family. We break taboos and guide every home toward harmony with compassion and professionalism.",

blog_title:"Blog & Events",
blog_intro:"Explore our articles, practical advice, and upcoming events to nurture your relationship and family life.",
blog_card1_title:"Love & Communication",
blog_card1_text:"Discover proven techniques to restore honest and constructive dialogue within your relationship.",
blog_card2_title:"Rebuilding after separation",
blog_card2_text:"Advice and real stories to help you regain confidence and move forward with serenity after a breakup.",
blog_card3_title:"Everyday conflict management",
blog_card3_text:"Learn practical strategies to defuse tensions and turn disagreements into opportunities for growth.",
blog_card4_title:"Keys to a successful marriage",
blog_card4_text:"Explore the fundamental pillars of a strong and lasting union: trust, respect, communication, and commitment.",

team_title:"Our Expert Team",
team_member1_desc:"Relationship coach and founder of Centre Ruhuka. Expert in couple communication with over 10 years of experience in family support.",
team_member2_desc:"Clinical psychologist specializing in emotion management and personal development. Guides individuals and couples toward lasting well-being.",
team_member3_desc:"Attorney specializing in family law. Advises and represents families in legal proceedings with rigor and humanity.",
team_member4_desc:"Family relations counselor and couple reconstruction specialist. Provides warm, structured guidance for families in need.",

appointment_title:"Book your appointment",
appointment_name:"Full Name",
appointment_email:"Email",
appointment_service:"Desired Service",
appointment_coach:"Preferred Coach",
appointment_mode:"Consultation Mode",
appointment_presentiel:"In person",
appointment_date:"Preferred Date",
appointment_time:"Preferred Time",
appointment_message:"Describe your situation",
appointment_submit:"Confirm Appointment",

appointment_name_placeholder:"Your full name",
appointment_email_placeholder:"Your email address",
appointment_message_placeholder:"Briefly describe your situation or expectations...",

mode_whatsapp:"WhatsApp",
mode_zoom:"Zoom",

social_facebook:"Facebook",
social_instagram:"Instagram",
social_twitter:"Twitter",
footer_rights:"© 2026 Centre Ruhuka. All rights reserved."
},

sw:{
nav_home:"Nyumbani",
nav_about:"Kuhusu",
nav_services:"Huduma",
nav_team:"Timu",
nav_blog:"Blog na Matukio",
nav_appointment:"Miadi",

page_title:"Centre Ruhuka – Mahali pa Upendo",

hero_title:"CENTRE RUHUKA",
hero_tagline:"Kila familia inastahili kung'aa 💖",
hero_button:"Panga Miadi",
typing_text:"Ushauri • Tiba • Usaidizi wa Kisheria 💖",

intro_title:"Kujenga familia imara zisizoyumba",
intro_text:"Katika Centre Ruhuka, tunaamini kila familia ina mwanga wake wa kipekee. Timu yetu ya wataalamu — washauri wa ndoa, wanasaikolojia na washauri wa kisheria — wanakusaidia kwa huruma kurejesha mawasiliano, kuandaa wanandoa wapya na kulinda haki za kila mwanafamilia.",
intro_why:"Kwa nini uchague Centre Ruhuka?",
why_us_text:"Tangu kuanzishwa kwetu, tumesaidia mamia ya familia kufikia amani. Njia yetu ya kina inachanganya kusikiliza kwa makini, upatanishi wa kitaalamu na ushauri wa kisheria kutoa suluhisho za kudumu.",

services_title:"Huduma Zetu",
services_marriage:"Maandalizi ya Ndoa",
services_marriage_text:"Vikao vya kina na binafsi kujenga msingi imara kabla ya siku kuu. Tunashughulikia mawasiliano, usimamizi wa fedha, matarajio na utatuzi wa migogoro.",
services_couple:"Tiba ya Wanandoa",
services_couple_text:"Nafasi salama ya upatanishi na utatuzi wa migogoro, inayoongozwa na wataalamu wenye uzoefu. Pata njia ya mazungumzo tena na uimarishe uhusiano wako.",
services_reconstruction:"Ujenzi Upya",
services_reconstruction_text:"Msaada wa huruma kupata amani ya ndani na kujenga maisha yako upya baada ya talaka au kutengana. Ushauri wa kisaikolojia na mwongozo wa vitendo.",
services_parenting:"Malezi ya Watoto",
services_parenting_text:"Warsha na mashauriano kusaidia wazazi katika malezi ya watoto wao, kukuza amani ya familia na kuimarisha uhusiano wa mzazi na mtoto.",

about_title:"Dira na Dhamira Yetu",
about_vision:"Kufanya familia kuwa msingi wa jamii iliyostawi kwa kutoa msaada wa kina — kisaikolojia, kihusiano na kisheria — katika kila hatua ya maisha ya ndoa na familia.",
about_mission:"Kurejesha mazungumzo pale yalipovunjika, kuandaa wanandoa wapya kwa uhalisia wa maisha ya pamoja, kusaidia watu walio katika mpito na kulinda haki za kila mwanafamilia.",
about_why_text:"Centre Ruhuka ni zaidi ya kituo cha ushauri: ni mahali patakatifu pa upendo na familia. Tunavunja miiko na kuongoza kila familia kuelekea amani kwa huruma na utaalamu.",

blog_title:"Blog na Matukio",
blog_intro:"Soma makala zetu, ushauri wa vitendo na matukio yanayokuja ili kulisha uhusiano wako na maisha ya familia.",
blog_card1_title:"Upendo na Mawasiliano",
blog_card1_text:"Gundua mbinu zilizothibitishwa kurejesha mazungumzo ya uaminifu na ya kujenga katika uhusiano wako.",
blog_card2_title:"Kujenga upya baada ya kutengana",
blog_card2_text:"Ushauri na hadithi za kweli kukusaidia kupata ujasiri na kuendelea kwa amani baada ya kutengana.",
blog_card3_title:"Usimamizi wa migogoro ya kila siku",
blog_card3_text:"Jifunze mikakati ya vitendo kutuliza mvutano na kubadilisha kutokubaliana kuwa fursa za kukua.",
blog_card4_title:"Funguo za ndoa iliyofanikiwa",
blog_card4_text:"Chunguza nguzo za msingi za muungano imara na wa kudumu: uaminifu, heshima, mawasiliano na kujitolea.",

team_title:"Timu Yetu ya Wataalamu",
team_member1_desc:"Mshauri wa ndoa na mwanzilishi wa Centre Ruhuka. Mtaalamu wa mawasiliano ya wanandoa na uzoefu wa zaidi ya miaka 10 katika usaidizi wa familia.",
team_member2_desc:"Mwanasaikolojia wa kliniki anayebobea katika usimamizi wa hisia na maendeleo ya kibinafsi. Anasaidia watu binafsi na wanandoa kuelekea ustawi wa kudumu.",
team_member3_desc:"Wakili anayebobea katika sheria ya familia. Anashauri na kuwakilisha familia katika taratibu za kisheria kwa ukali na ubinadamu.",
team_member4_desc:"Mshauri wa mahusiano ya familia na mtaalamu wa ujenzi upya wa wanandoa. Anatoa mwongozo wa joto na wenye mpangilio kwa familia zinazohitajika.",

appointment_title:"Panga miadi yako",
appointment_name:"Jina Kamili",
appointment_email:"Barua Pepe",
appointment_service:"Huduma Inayotakiwa",
appointment_coach:"Kocha Anayependelewa",
appointment_mode:"Njia ya Mashauriano",
appointment_presentiel:"Ana kwa ana",
appointment_date:"Tarehe Inayopendelewa",
appointment_time:"Saa Inayopendelewa",
appointment_message:"Eleza hali yako",
appointment_submit:"Thibitisha Miadi",

appointment_name_placeholder:"Jina lako kamili",
appointment_email_placeholder:"Anwani yako ya barua pepe",
appointment_message_placeholder:"Eleza kwa kifupi hali yako au matarajio yako...",

mode_whatsapp:"WhatsApp",
mode_zoom:"Zoom",

social_facebook:"Facebook",
social_instagram:"Instagram",
social_twitter:"Twitter",
footer_rights:"© 2026 Centre Ruhuka. Haki zote zimehifadhiwa."
},

rn:{
nav_home:"Urugo",
nav_about:"Ivyo turi",
nav_services:"Serivisi",
nav_team:"Ikipe",
nav_blog:"Blog n'ibikorwa",
nav_appointment:"Rendez-vous",

page_title:"Centre Ruhuka – Icicaro c'Urukundo",

hero_title:"CENTRE RUHUKA",
hero_tagline:"Urugo rwose rurabereye kwakaka 💖",
hero_button:"Fata Gahunda",
typing_text:"Ubufasha • Urukundo • Amategeko 💖",

intro_title:"Kwubaka ingo zikomeye zidahungabana",
intro_text:"Muri Centre Ruhuka, twemera ko buri muryango ufise umuco udasanzwe. Ikipe yacu igizwe : n'abajejwe ubufasha bw'abubatse, abahinga mu bwenge n'abashingwamanza, barakurikirana n'ikibabarwe kugira hasubire ibiganiro. Dutegura abageni n'ukurinda agateka ka buri muntu mu muryango.",
intro_why:"Kubera iki ukwiye guhitamwo Centre Ruhuka?",
why_us_text:"Kuva twatangura, twafashije amajana y'imiryango gusubira mu mahoro. Uburyo bwacu bw'ikigereranyo buhuza ukwumviriza, ubufasha bw'abahinga n'impanuro z'amategeko kugira dutange inyishu zirama ku bibazo vyose vy'umuryango.",

services_title:"Serivisi Zacu",
services_marriage:"Gutegura Ubukwe",
services_marriage_text:"Ibiganiro bisanzwe kandi bigenga kugira twubake ishingiro rikomeye imbere y'umusi mukuru. Turaba ku biganiro, gucunga amahera, ivyitezwe vya bose no gukemura ibibazo.",
services_couple:"Ubuvuzi bw'Abubatse",
services_couple_text:"Ikibanza gifise umutekano co guhuza no gukemura ibibazo, kiyobowe n'abahinga bafise uburambe. Subira ugire ibiganiro kandi urushirize inguvu urukundo rwanyu.",
services_reconstruction:"Kwongera Kubaka",
services_reconstruction_text:"Ubufasha bw'ikibabarwe kugira usubire ugire amahoro mu mutima no kwongera kubaka ubuzima bwawe inyuma yo gutandukana. Impanuro z'ubwenge n'izo mu buzima bwa misi yose.",
services_parenting:"Kurera Abana",
services_parenting_text:"Inyigisho n'impanuro zo gufasha abavyeyi mu kurera abana babo, guteza imbere amahoro mu muryango no gukomeza isano y'umuvyeyi n'umwana.",

about_title:"Intumbero n'Ubutumwa Bwacu",
about_vision:"Gushira umuryango nk'ishingiro ry'igihugu giteye imbere mu gutanga ubufasha bwuzuye — mu bwenge, mu bijanye n'imigenderanire n'amategeko — ku ntambwe yose y'ubuzima bw'abubatse n'umuryango.",
about_mission:"Gusubiza ibiganiro aho vyavuyemwo, gutegura abageni ku kuri kw'ubuzima bw'uburyo, gufasha abantu bari mu mpinduka no kurinda agateka ka buri muntu mu muryango.",
about_why_text:"Centre Ruhuka ni ikirenze ikigo c'impanuro: ni icicaro kigenwe urukundo n'umuryango. Dumena ibizira kandi duyobora buri rugo mu mahoro n'ikibabarwe n'ubuhinga.",

blog_title:"Blog n'Ibikorwa",
blog_intro:"Soma ibivugwa, impanuro zo mu buzima bwa misi yose n'ibikorwa bizoza kugira ugorore ubuzima bw'urukundo n'umuryango wawe.",
blog_card1_title:"Urukundo n'Ibiganiro",
blog_card1_text:"Menya uburyo bwemejwe bwo gusubiza ibiganiro vy'ukuri n'ivyo kwubaka mu buzima bwawe bw'urukundo.",
blog_card2_title:"Kwongera kubaka inyuma yo gutandukana",
blog_card2_text:"Impanuro n'inkuru z'ukuri zo gufasha gusubira kwizera no kugenda imbere mu mahoro inyuma yo gutandukana.",
blog_card3_title:"Gucunga ibibazo vya misi yose",
blog_card3_text:"Iga uburyo bwo gukora neza bwo guhosha imvururu no guhindura kutumvikana mu mahirwe yo gukura.",
blog_card4_title:"Ipfundo ry'ubukwe bwagenze neza",
blog_card4_text:"Raba inkingi z'ishingiro ry'ubumwe bukomeye kandi buramba: ukwizera, icubahiro, ibiganiro n'ukwiyemeza.",

team_title:"Ikipe Yacu y'Abahinga",
team_member1_desc:"Umuhanuzi w'abubatse kandi ashinze Centre Ruhuka. Umuhinga mu biganiro vy'abubatse afise uburambe bw'imyaka irenga 10 mu gufasha imiryango.",
team_member2_desc:"Umuhinga mu bwenge adasanzwe mu gucunga inyiyumvo no gutera imbere bwite. Afasha abantu ku giti cabo n'abubatse kugira bagire ubuzima bwiza buramba.",
team_member3_desc:"Umushingwamanza adasanzwe mu mategeko y'umuryango. Ahanura kandi aserukira imiryango mu bikorwa vy'amategeko ku buryo bwuzuye n'ubuntu.",
team_member4_desc:"Umuhanuzi w'imigenderanire mu muryango n'umuhinga wo kwongera kubaka abubatse. Atanga ubuyobozi bufise ubushehe n'imigambi ku miryango ikeneye.",

appointment_title:"Fata gahunda yawe",
appointment_name:"Izina Ryuzuye",
appointment_email:"Email",
appointment_service:"Serivisi Ukeneye",
appointment_coach:"Umuhanuzi Mwipfuza",
appointment_mode:"Uburyo bwo Guhanura",
appointment_presentiel:"Imbonankubone",
appointment_date:"Itariki Mwipfuza",
appointment_time:"Isaha Mwipfuza",
appointment_message:"Sigura uko umeze",
appointment_submit:"Emeza Rendez-vous",

appointment_name_placeholder:"Izina ryawe ryuzuye",
appointment_email_placeholder:"Email yawe",
appointment_message_placeholder:"Sigura gato uko mumeze canke ivyo mwiteze...",

mode_whatsapp:"WhatsApp",
mode_zoom:"Zoom",

social_facebook:"Facebook",
social_instagram:"Instagram",
social_twitter:"Twitter",
footer_rights:"© 2026 Centre Ruhuka. Uburenganzira bwose burabitswe."
}
};

/* =========================
   🌍 APPLY TRANSLATION
========================= */

function applyTranslations(){
document.querySelectorAll("[data-i18n]").forEach(el=>{
let key = el.getAttribute("data-i18n");
if(translations[currentLang][key]){
el.textContent = translations[currentLang][key];
}
});

document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
let key = el.getAttribute("data-i18n-placeholder");
if(translations[currentLang][key]){
el.placeholder = translations[currentLang][key];
}
});

if(translations[currentLang].page_title){
document.title = translations[currentLang].page_title;
}
}

/* =========================
   🌍 SWITCH LANGUAGE
========================= */

function setLang(lang){

  // 🔥 FORCER LANGUE PARTOUT
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // 🔥 DEBUG (tu peux vérifier dans console)
  console.log("Langue active:", currentLang);

  applyTranslations();

  // 🔥 RESET typing
  const el = document.querySelector(".typed-text");
  if(el) el.innerHTML = "";

  // 🔥 RELANCE propre
  setTimeout(()=>{
    startTyping();
  }, 100);

}



/* =========================
   ✨ TYPING EFFECT
========================= */

let typingTimeout;

function startTyping(){

  const el = document.querySelector(".typed-text");
  if(!el) return;

  // 🔥 TOUJOURS lire la vraie langue
  const lang = localStorage.getItem("lang") || currentLang;

  console.log("Typing langue:", lang);

  const text = translations[lang]?.typing_text;

  if(!text){
    el.innerHTML = "";
    return;
  }

  let i = 0;

  // stop ancien typing
  if(typingTimeout){
    clearTimeout(typingTimeout);
  }

  el.innerHTML = "";

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

  const savedLang = localStorage.getItem("lang") || "fr";

  currentLang = savedLang;

  applyTranslations();

  setTimeout(()=>{
    startTyping();
  }, 200);

});

/* =========================
   ✨ SCROLL REVEAL SYSTEM
========================= */

function revealOnScroll(){
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = 100;

    if(elementTop < windowHeight - triggerPoint){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* =========================
   ✨ WOW SCROLL REVEAL
========================= */

/* =========================
   ✨ PREMIUM SCROLL REVEAL
========================= */

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animation une seule fois (effet luxe)
    }
  });
}, { threshold: 0.2 });

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
  });
});
function renderBlog(){
  const container = document.getElementById("blogContainer");
  if(!container || !window.blogPosts) return;

  const lang = currentLang;

  container.innerHTML = "";

  window.blogPosts.forEach(post=>{
    container.innerHTML += `
      <div class="blog-card fade-in">
        <h3>${post.title[lang]}</h3>
        <p>${post.text[lang]}</p>
      </div>
    `;
  });
}
function renderBlog(){
  const container = document.getElementById("blogContainer");
  if(!container || !window.blogPosts) return;

  const lang = currentLang;

  container.innerHTML = "";

  window.blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || blogPosts;
}/* =========================
   🍔 MOBILE MENU FINAL FIX
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if(hamburger && navMenu){

    hamburger.addEventListener("click", () => {

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

    });

  }

});
function logout(){
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}
if(user === "ruhuka_admin" && pass === "TonMotDePasseFort123");


/* CONNECT STORAGE */
window.blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || blogPosts;

/* BLOG RENDER */
function renderBlog(){

  const container = document.getElementById("blogContainer");
  if(!container) return;

  const lang = localStorage.getItem("lang") || "fr";

  let posts = [];

  try {
    posts = JSON.parse(localStorage.getItem("blogPosts"));
  } catch(e){}

  if(!posts || posts.length === 0){
    posts = window.blogPosts || [];
  }

  if(!posts || posts.length === 0){
    container.innerHTML = "<p>Aucun article disponible</p>";
    return;
  }

  posts = posts.filter(p => p.published !== false);

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


/* INIT */
function initParticles(){

  const canvas = document.getElementById("particles");
  if(!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for(let i=0;i<80;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      size:Math.random()*2,
      speedX:(Math.random()-0.5),
      speedY:(Math.random()-0.5)
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
      p.x += p.speedX;
      p.y += p.speedY;

      if(p.x<0||p.x>canvas.width) p.speedX *= -1;
      if(p.y<0||p.y>canvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle = "rgba(255, 182, 193, 0.6)";
      ctx.fill();
      ctx.shadowBlur = 10;
      ctx.shadowColor = "pink";
    });

    requestAnimationFrame(animate);
  }

  animate();
}


  // 🔥 ECRASE COMPLETEMENT storage
  localStorage.setItem("lang", lang);

  console.log("LANG SWITCHED TO:", lang);

  // 🔥 appliquer traductions
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(translations[lang] && translations[lang][key]){
      el.placeholder = translations[lang][key];
    }
  });

  // 🔥 FIX typing (FORCE)
  const el = document.querySelector(".typed-text");
  if(el) el.innerHTML = "";

  setTimeout(()=>{
    const text = translations[lang]?.typing_text || "";
    let i = 0;

    function type(){
      if(i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }

    if(el) type();
  }, 100);
  /* =========================
   🌄 PARALLAX HERO
========================= */

window.addEventListener("scroll", ()=>{
  const hero = document.querySelector(".hero-img");
  if(!hero) return;

  let scrollY = window.scrollY;
  hero.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
});
/* =========================
   🔥 NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", ()=>{
  const nav = document.querySelector("header");

  if(window.scrollY > 50){
    nav.style.background = "rgba(255,255,255,0.9)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
});
function renderBlog(){

  const container = document.getElementById("blogContainer");
  if(!container) return;

  const lang = localStorage.getItem("lang") || "fr";

  // 🔥 récupère localStorage
  let stored = JSON.parse(localStorage.getItem("blogPosts"));

  // 🔥 SI VIDE → utiliser blog-data.js
  let posts = (stored && stored.length > 0)
    ? stored
    : (window.blogPosts || []);

  container.innerHTML = "";

  // 🔥 sécurité ultime
  if(!posts || posts.length === 0){
    container.innerHTML = "<p style='text-align:center;'>Aucun article trouvé.</p>";
    return;
  }

  // 🔥 tri
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date));

  let visible = posts.filter(p => p.published === true);

  if(visible.length === 0){
    container.innerHTML = "<p style='text-align:center;'>Aucun article publié.</p>";
    return;
  }

  visible.forEach(post=>{
    container.innerHTML += `
      <div class="blog-card fade-in">
        <img src="${post.image}" style="width:100%;border-radius:10px;">
        <small>${post.date}</small>
        <h3>${post.title?.[lang] || ""}</h3>
        <p>${post.text?.[lang] || ""}</p>
      </div>
    `;
  });

}
  // 🔥 tri par date
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date));

  posts.forEach(post=>{
    container.innerHTML += `
      <div class="blog-card fade-in">
        <img src="${post.image}" style="width:100%;border-radius:10px;">
        <div class="blog-content">
          <small>${post.date}</small>
          <h3>${post.title?.[lang] || ""}</h3>
          <p>${post.text?.[lang] || ""}</p>
        </div>
      </div>
    `;
  });

document.addEventListener("DOMContentLoaded", ()=>{
  renderBlog();
});
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
function publishPost(id){

  let posts = JSON.parse(localStorage.getItem("blogPosts")) || window.blogPosts || [];

  posts = posts.map(post=>{
    if(post.id === id){
      post.published = true;
    }
    return post;
  });

  localStorage.setItem("blogPosts", JSON.stringify(posts));

  alert("Article publié ✅");

  renderBlog(); // refresh direct
}function unpublishPost(id){

  let posts = JSON.parse(localStorage.getItem("blogPosts")) || window.blogPosts || [];

  posts = posts.map(post=>{
    if(post.id === id){
      post.published = false;
    }
    return post;
  });

  localStorage.setItem("blogPosts", JSON.stringify(posts));

  alert("Article retiré ❌");

  renderBlog();
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (!hamburger || !navMenu) {
    console.log("Menu elements missing");
    return;
  }

  hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    console.log("MENU CLICKED");

  });

});
  }
