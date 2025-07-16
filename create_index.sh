#!/bin/bash

# Create index.html by combining the header section with complete-page.html

# First, create the header part
cat > header_part.txt << 'HEADER_END'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Creator 360 - All-in-One Software for Course Creators</title>
  <meta name="description" content="Create, market & sell your courses effortlessly with Course Creator 360. Proven by $30M+ in digital sales.">
  <!-- Performance Meta Tags -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="format-detection" content="telephone=no">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Critical Performance optimizations -->
  <link rel="preload" href="assets/fonts/inter-400-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/inter-600-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/inter-700-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/inter-800-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/images/money-floating-transparent.webp" as="image" fetchpriority="high">
  <link rel="dns-prefetch" href="https://customer-t943x570k2jy8ms2.cloudflarestream.com">
  <link rel="dns-prefetch" href="https://go.coursecreator360.com">
  <link rel="stylesheet" href="assets/fonts/inter-local.css" media="print" onload="this.media='all'">
  <link rel="stylesheet" href="assets/fonts/helvetica-now-bold-local.css" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="assets/fonts/inter-local.css">
    <link rel="stylesheet" href="assets/fonts/helvetica-now-bold-local.css">
  </noscript>

<script id="cc-data" type="application/json">
{
  "logo": "https://cc360-pages.s3.us-west-2.amazonaws.com/course-creator-360-logo.webp",
  "links": { "home": "/", "pricing": "/pricing", "login": "/login", "cta": "/get-started" },
  "sections": [
    {
      "title": "Create",
      "color": "#2563eb",
      "onDark": "#ebf4ff",
      "items": [
        ["Online Courses", "/courses"],
        ["Communities & Memberships", "/communities"],
        ["Coaching", "/coaching"],
        ["Digital Downloads", "/downloads"],
        ["Certifications & Challenges", "/certifications"],
        ["Branded Mobile App", "/app"]
      ]
    },
    {
      "title": "Market",
      "color": "#cdf600",
      "onDark": "#1d2b00",
      "items": [
        ["Landing Pages", "/landing-pages"],
        ["Funnels & Lead Magnets", "/funnels"],
        ["Email & SMS Marketing", "/email-sms"],
        ["Webinars", "/webinars"],
        ["Affiliate Programs", "/affiliates"],
        ["Social Automations", "/social"]
      ]
    },
    {
      "title": "Sell & Scale",
      "color": "#f43f5e",
      "onDark": "#fff1f3",
      "items": [
        ["Payment Pipelines", "/payments"],
        ["Automations", "/automations"],
        ["Analytics", "/analytics"],
        ["CRM", "/crm"]
      ]
    }
  ]
}
</script>
<!-- STYLE -->
<style>
:root {
  --font: system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  --fx: cubic-bezier(.4,0,.2,1);
  --brand1:#3b82f6; --brand2:#2563eb;
  --fg:#111827; --bg:#fff; --muted:#64748b; --border:#e2e8f0;
  --radius:.65rem;
}
@media (prefers-color-scheme:dark) {
  :root {--fg:#f8fafc; --bg:#0f172a; --muted:#94a3b8; --border:#1e293b;}
}
body { font-family:var(--font); font-size:16px; margin:0; color:var(--fg); background:var(--bg);}
a { color:inherit; text-decoration:none;}
button { font:inherit; background:none; border:none; color:inherit; cursor:pointer;}
img { max-width:100%; display:block; }
:focus-visible { outline:2px solid var(--brand2); outline-offset:2px;}

/* HEADER */
.cc-header {
  position:sticky; top:0; left:0; right:0; z-index:1000;
  background:color-mix(in srgb,var(--bg) 80%,transparent);
  backdrop-filter:blur(12px);
  box-shadow:0 1px 3px rgb(0 0 0/.08);
}
.cc-row {
  max-width:1280px; margin-inline:auto;
  display:flex; align-items:center; gap:2rem;
  justify-content:space-between;
  padding:.7rem 1rem;
}
.cc-logo { height:40px; flex-shrink:0; }
.cc-logoLink { display:flex; align-items:center; }
.cc-right { display:flex; align-items:center; gap:1.3rem; margin-inline-start:auto; }

/* NAVIGATION */
.cc-nav { display:flex; align-items:center; gap:1.2rem; }
.cc-nav > li { list-style:none; position:relative; }
.cc-nav>li>a::after {
  content:""; position:absolute; inset-block-end:-2px; left:0; width:0; height:2px;
  background:currentColor; transition:width .25s var(--fx);
}
.cc-nav>li>a:is(:hover,:focus-visible)::after { width:100%; }

.cc-ddBtn { display:flex; align-items:center; gap:.35rem; }
.cc-ddBtn svg { width:14px;height:14px; transition:transform .2s var(--fx);}
[aria-expanded="true"] .cc-ddBtn svg { transform:rotate(180deg);}
.cc-ddWrap { position:relative; }
.cc-menu {
  position:absolute; top:calc(100% + .5rem); left:0; min-width:260px;
  padding:1.0rem; background:var(--bg); border:1px solid var(--border);
  border-radius:var(--radius); box-shadow:0 8px 28px rgb(0 0 0/.08); display:none;
}
.cc-menu.open { display:block; }
.cc-menu h3 { font-size:.7rem; text-transform:uppercase; font-weight:800; margin:.35rem 0 .18rem; padding:.22rem .8rem; border-radius:4px }
.cc-menu a { display:block; padding:.55rem .8rem; border-radius:var(--radius); font-size:.95em;}
.cc-menu a:is(:hover,:focus-visible) { background:var(--muted); color:#fff; }

/* AUTH */
.cc-login, .cc-cta {
  border-radius:9999px; white-space:nowrap; font-weight:600;
  padding:.55rem 1.4rem;
}
.cc-login { background:var(--border); }
.cc-cta {
  background:linear-gradient(135deg,var(--brand1),var(--brand2)); color:#fff; display:flex;align-items:center;gap:.4rem
}

/* HAMBURGER */
.cc-burger {
  display:none;width:40px;height:40px;background:var(--muted);border-radius:.25rem;color:#fff
}
.cc-burger svg { width:22px;height:22px; }
@media (max-width:1000px) {
  .cc-nav, .cc-login { display:none }
  .cc-burger { display:inline-flex;align-items:center;justify-content:center}
}

/* DRAWER */
.cc-drawer {
  position:fixed; inset:0 0 0 auto; width:clamp(275px,80vw,340px);
  background:var(--bg); transform:translateX(100%);
  transition:transform .28s var(--fx); z-index:900; display:flex;flex-direction:column;
}
.cc-drawer.open { transform:none; }
.cc-dhead { display:flex; align-items:center; justify-content:space-between;
  padding:1rem; border-block-end:1px solid var(--border);}
.cc-dnav details { border-block-end:1px solid var(--border);}
.cc-dnav summary { list-style:none; padding:1rem; font-weight:700; cursor:pointer;}
.cc-dnav ul { list-style:none; padding:0 1rem 1rem; }
.cc-dnav li a { display:block; padding:.55rem 0;}
.cc-dlogin, .cc-dcta {
  margin:1rem; border-radius:9999px; text-align:center; padding:.55rem 1.2rem
}
.cc-dlogin { background:var(--border);}
.cc-dcta { background:var(--brand2); color:#fff;}
/* tab trap hint (outside visible area) */
.cc-trap { position:absolute; opacity:0; width:1px;height:1px;overflow:hidden}

/* MODAL - Always centered cross-browser */
dialog.cc-modal {
  position:fixed; top:50%; left:50%;
  transform:translate(-50%,-50%);
  margin:0; border:none; border-radius:var(--radius);
  padding:2rem; width:90%; max-width:420px; background:var(--bg);
  z-index:1100;
}
dialog::backdrop {
  background:rgba(0,0,0,.52)
}
.cc-form {display:grid;gap:1rem; margin-block-start:1rem;}
.cc-form input {padding:.85rem 1rem; border:1px solid var(--border); border-radius:9999px; background:transparent; color:var(--fg);}
.cc-form button {background:var(--brand2); color:#fff; padding:.85rem; border-radius:9999px;}
.cc-x { width:34px;height:34px; background:var(--muted); border-radius:.25rem; display:inline-flex;align-items:center;justify-content:center}
.cc-x svg { width:20px;height:20px; stroke:#fff;}
.cc-legal { font-size:.80rem; color:var(--muted); margin-top:1.1rem; text-align:center;}
HEADER_END

# Extract the existing styles from complete-page.html (lines 28-1304)
sed -n '28,1304p' complete-page.html > existing_styles.txt

# Create the final index.html
cat header_part.txt > index.html
cat existing_styles.txt >> index.html

# Add the closing style tag and start of body
echo '</style>
</head>
<body>
<!-- HEADER (autofilled by JS) -->
<header class="cc-header">
  <div class="cc-row">
    <a class="cc-logoLink"><img class="cc-logo" alt="CourseCreator360 logo"></a>
    <div class="cc-right">
      <nav aria-label="Primary"><ul class="cc-nav"></ul></nav>
      <a class="cc-login">Login</a>
      <a class="cc-cta cc-openModal"><span>Get Started</span> →</a>
      <button class="cc-burger" aria-label="Open menu"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
</header>

<aside class="cc-drawer" aria-label="Mobile menu" tabindex="-1">
  <div class="cc-dhead">
    <img class="cc-logo" alt="">
    <button class="cc-x cc-closeDrawer" aria-label="Close"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  </div>
  <nav class="cc-dnav" aria-label="Mobile navigation"></nav>
  <a class="cc-dlogin">Login</a>
  <a class="cc-dcta cc-openModal">Get Started →</a>
</aside>

<dialog class="cc-modal" aria-labelledby="cc-title">
  <button class="cc-x cc-closeModal" aria-label="Close"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  <h2 id="cc-title">Get Started Today</h2>
  <form class="cc-form" onsubmit="event.preventDefault(); alert('"'Email submitted!'"')">
    <input type="email" required placeholder="Email address">
    <button type="submit">Get Started →</button>
  </form>
  <p class="cc-legal">By proceeding you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy</a>.</p>
</dialog>
<!-- SCRIPT. ALL header, drawer, modal behavior -->
<script>
(()=>{'"'use strict'"';
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const data=JSON.parse(document.getElementById("cc-data").textContent);

/* LOGO & LINKS */
$('"'.cc-logo'"',document).src = data.logo;
$$('"'.cc-logo'"').forEach(i=>i.src = data.logo);
$('"'.cc-logoLink'"',document).href = data.links.home;
$('"'.cc-login'"',document).href = data.links.login;
$('"'.cc-dlogin'"',document).href = data.links.login;
$('"'.cc-cta'"',document).href = data.links.cta;
$('"'.cc-dcta'"',document).href = data.links.cta;

/* DESKTOP NAV */
const navUL=$('"'.cc-nav'"',document);
function simpleLink(txt,href){ return `<li><a href="${href}">${txt}</a></li>`; }
navUL.insertAdjacentHTML('"'beforeend'"',simpleLink('"'Home'"',data.links.home));

/* dropdown products */
const ddLi = document.createElement('"'li'"');
ddLi.className='"'cc-ddWrap'"';
ddLi.innerHTML=`
  <button class="cc-ddBtn" aria-haspopup="true" aria-expanded="false">
    Products
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 7l5 5 5-5"/></svg>
  </button>
  <div class="cc-menu" role="menu"></div>
`;
navUL.append(ddLi);
navUL.insertAdjacentHTML('"'beforeend'"',simpleLink('"'Pricing'"',data.links.pricing));

/* FILL DESKTOP DROPDOWN and MOBILE DRAWER NAV */
const menuBox = $('"'.cc-menu'"',ddLi), mobNav = $('"'.cc-dnav'"');
data.sections.forEach(sec=>{
  menuBox.insertAdjacentHTML('"'beforeend'"',`<h3 style="background:${sec.color};color:${sec.onDark||"#fff"}">${sec.title}</h3>`);
  sec.items.forEach(([t,h])=>menuBox.insertAdjacentHTML('"'beforeend'"',`<a href="${h}">${t}</a>`));
  // drawer nav
  const details = document.createElement('"'details'"');
  details.innerHTML = `<summary>${sec.title}</summary><ul></ul>`;
  sec.items.forEach(([t,h])=>$('"'ul'"',details).insertAdjacentHTML('"'beforeend'"',`<li><a href="${h}">${t}</a></li>`));
  mobNav.append(details);
});

/* DESKTOP DROPDOWN MENU BEHAVIOR */
const ddBtn = $('"'.cc-ddBtn'"',ddLi);
const closeDD = ()=>{ ddBtn.setAttribute('"'aria-expanded'"','"'false'"'); menuBox.classList.remove('"'open'"');};
const openDD  = ()=>{ ddBtn.setAttribute('"'aria-expanded'"','"'true'"'); menuBox.classList.add('"'open'"');};
ddBtn.addEventListener('"'click'"',e=>{ e.stopPropagation(); menuBox.classList.contains('"'open'"')?closeDD():openDD(); });
window.addEventListener('"'click'"',closeDD);
ddBtn.addEventListener('"'keydown'"',e=>{
  if(e.key==='"'ArrowDown'"'){ openDD(); $('"'a'"',menuBox).focus(); }
});

/* MOBILE DRAWER, burger, close, link traps */
const drawer = $('"'.cc-drawer'"'), burger = $('"'.cc-burger'"'), closeDraw=$('"'.cc-closeDrawer'"');
const closeDrawer = ()=>drawer.classList.remove('"'open'"');
const openDrawer = ()=>{
  drawer.classList.add('"'open'"');
  setTimeout(()=>{ // focus first nav or close btn
    $('"'a,button'"',drawer).focus();
  },120);
};
burger.addEventListener('"'click'"',openDrawer);
closeDraw.addEventListener('"'click'"',closeDrawer);

// esc closes drawer, tab trap
drawer.addEventListener('"'keydown'"',e=>{
  if(e.key==='"'Escape'"'){ closeDrawer(); }
  if(e.key==='"'Tab'"'){
    const f=$$('"'a,button,[tabindex]:not([tabindex="-1"])'"',drawer);
    if(!f.length)return;
    const first=f[0],last=f.at(-1);
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault(); first.focus();}
  }
});
// clicking ANY link in drawer closes it (includes nav and cta)
drawer.addEventListener('"'click'"', e => {
  if(e.target.closest('"'a'"')) closeDrawer();
});

/* MODAL: open/close everywhere, always closes drawer if open */
const modal=$('"'.cc-modal'"'),modalOpen=$$('"'.cc-openModal'"'),modalClose=$('"'.cc-closeModal'"');
function closeDrawerIfOpen(){ drawer.classList.contains('"'open'"') && closeDrawer(); }
modalOpen.forEach(btn=>btn.addEventListener('"'click'"',e=>{
  e.preventDefault(); closeDrawerIfOpen(); closeDD();
  modal.showModal();
  setTimeout(()=>$('"'input'"',modal).focus(),80);
}));
modalClose.addEventListener('"'click'"',()=>modal.close());
modal.addEventListener('"'cancel'"',e=>e.preventDefault()); // disables implicit close
modal.addEventListener('"'keydown'"',e=>{
  if(e.key==='"'Escape'"')modal.close();
  if(e.key==='"'Tab'"'){
    const f=$$('"'input,button,a,[tabindex]:not([tabindex="-1"])'"',modal);
    if(!f.length)return;
    const first=f[0],last=f.at(-1);
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
  }
});

/* HEADER SHADOW on scroll (nice touch) */
const header=$('"'.cc-header'"');
new IntersectionObserver(([i])=>{
  header.style.boxShadow = i.intersectionRatio<1 ? '"'0 1px 6px rgb(0 0 0/.08)'"':'"'none'"';
},{threshold:1}).observe(header);
})();
</script>

<body class="nebula-bg">' >> index.html

# Add the rest of the content from complete-page.html (from line 1332 onwards, skipping the old header)
sed -n '1332,$p' complete-page.html >> index.html

# Clean up temporary files
rm -f header_part.txt existing_styles.txt

echo "Successfully created index.html with the new header section!"
