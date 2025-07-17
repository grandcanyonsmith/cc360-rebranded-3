(()=>{(function(){"use strict";let d=["am_id","amId"],f=".coursecreator360.com",h={set(e,o,n=30,t=f){let a=new Date(Date.now()+n*864e5).toUTCString();document.cookie=`${e}=${encodeURIComponent(o)};domain=${t};path=/;expires=${a};Secure;SameSite=Lax`},get(e){let o=document.cookie.match(new RegExp(`(?:^|; )${e}=([^;]+)`));return o?decodeURIComponent(o[1]):null}},r=new URLSearchParams(location.search).get("am_id")||new URLSearchParams(location.search).get("amId");if(r&&/^[A-Za-z0-9_-]{1,50}$/.test(r)){d.forEach(e=>h.set(e,r));try{d.forEach(e=>localStorage.setItem(e,r))}catch{}}else r=d.map(h.get).find(Boolean)||(()=>{try{return d.map(e=>localStorage.getItem(e)).find(Boolean)}catch{return null}})();window.getAffiliateId=()=>r||null,window.getSegmentAnonId=()=>{try{if(window.analytics?.initialized)return analytics.user().anonymousId();let e=document.cookie.match(/(?:^|; )ajs_anonymous_id=([^;]+)/);return e?decodeURIComponent(e[1]):null}catch{return null}},window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:r?"affiliateCaptured":"affiliateMissing",affiliate:r||""}),window.cc360Inject=function(e,o,n=document.head){let t=document.createElement(e);return Object.entries(o).forEach(([a,i])=>a==="textContent"?t.textContent=i:t.setAttribute(a,i)),n.appendChild(t),t};let l=window.cc360Inject;l("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),l("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}),l("style",{textContent:"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');"}),l("style",{textContent:`
    .wrapper,body,html{width:100%}.btn-get-started,.btn-login,.disclosure-link,.flyout-link a,.logo-container a,a,button{text-decoration:none}#get-started-modal,#mobile-menu,#mobile-menu-overlay{display:none;position:fixed}:root{--color-primary:#2c67f4;--color-dark:#061b38;--color-create:#1D4ED8;--color-market:#E2FF00;--color-sellscale:#FF2F00;--color-white:#ffffff;--color-black:#000000;--color-gray-dark:#777777;--color-gray-light:#f9f9f9;--color-gray-hover:#eeeeee;--radius-sm:4px;--radius-md:8px;--radius-lg:24px;--radius-pill:9999px;--transition-base:0.2s ease}*{box-sizing:border-box;margin:0;padding:0}body,html{font-family:Poppins,sans-serif}a,button{cursor:pointer;color:inherit;outline:0;transition:background var(--transition-base),color var(--transition-base),transform var(--transition-base)}img,svg{display:block;max-width:100%;height:auto}.skip-link{position:absolute;left:-9999px;top:0;background:var(--color-dark);color:var(--color-white);padding:.5rem 1rem;z-index:10000;border-radius:var(--radius-sm)}.skip-link:focus{left:1rem;top:1rem}.navbar-container{position:sticky;top:0;z-index:999;background:0 0;padding:12px 0}#productsFlyout,.nav-bar{background:var(--color-white)}.navbar-inner{max-width:1200px;margin:0 auto;padding:0 16px}.nav-bar{display:flex;align-items:center;justify-content:space-between;border:1px solid #ccc;border-radius:var(--radius-pill);box-shadow:0 2px 6px rgba(0,0,0,.1);padding:8px 24px;transition:background var(--transition-base)}@media (prefers-color-scheme: dark){.nav-bar{background:#111827;border-color:#374151;box-shadow:0 2px 6px rgba(0,0,0,.3)}.nav-link,.products-container{color:#ffffff}.nav-link:hover,.products-container:hover{color:#60a5fa}.products-container svg{color:#d1d5db}.btn-login{color:#ffffff;background:#374151;border-color:#4b5563}.btn-login:hover{background:#4b5563;color:#ffffff}.btn-get-started{color:#ffffff;background:#3b82f6}.btn-get-started:hover{background:#2563eb;color:#ffffff}}.logo-container{flex:1}.logo-container img,.mobile-menu-header img{height:32px;width:auto}#cc360-mobile-icons{display:none;flex-direction:row;align-items:center;gap:16px}.btn-mobile-get-started{display:inline-flex;align-items:center;border:1px solid var(--color-primary);padding:8px 12px;font-size:14px;font-weight:600;border-radius:var(--radius-pill);color:var(--color-white);background:var(--color-primary)}.hamburger-btn,.products-container{border:none;background:0 0}.nav-link,.products-container{font-size:14px;font-weight:600;color:var(--color-black)}.btn-get-started:hover,.btn-mobile-get-started:hover,.mobile-get-started-btn:hover{background:var(--color-white);color:var(--color-primary)}.hamburger-btn img{height:24px;width:24px}#cc360-desktop-nav{display:flex;align-items:center;gap:24px}.nav-link:hover,.products-container:hover{color:var(--color-primary)}.products-container{position:relative;display:flex;align-items:center;gap:4px}.flyout-column,.flyout-icon-container,.flyout-link{border-radius:var(--radius-md)}.products-container svg{height:20px;width:20px;color:var(--color-gray-dark);transition:transform var(--transition-base)}#productsFlyout{  max-height:calc(100vh - var(--flyoutTop,72px) - 24px);overflow-y:auto;overscroll-behavior:contain;position:fixed;top:var(--flyoutTop,72px);position:absolute;left:50%;transform:translateX(-50%) scale(.95);visibility:hidden;opacity:0;transition:opacity var(--transition-base),transform var(--transition-base);z-index:999;margin-top:12px;width:90vw;max-width:1000px;border-radius:var(--radius-lg);box-shadow:0 4px 16px rgba(0,0,0,.1);padding:16px;aria-hidden:true;role:menu}.flyout-content{display:flex;flex-wrap:wrap;gap:16px}.flyout-column{flex:1 1 280px;padding:8px;background:var(--color-gray-light)}.create-heading,.market-heading,.sell-scale-heading{margin-bottom:16px;text-align:center;padding:8px;font-size:18px;font-weight:700;border-radius:var(--radius-md);color:var(--color-white)}.create-heading,.disclosure-section p.create-heading{background:var(--color-create)}.disclosure-section p.market-heading,.market-heading{background:var(--color-market);color:var(--color-black)}.disclosure-section p.sell-scale-heading,.sell-scale-heading{background:var(--color-sellscale)}.flyout-link{display:flex;gap:12px;padding:8px;cursor:pointer}.flyout-link:hover{background:var(--color-gray-hover)}.disclosure-link:active,.flyout-link:active,.mobile-get-started-btn:active,.mobile-login-btn:active,.mobile-menu-link:active,.mobile-menu-products button:active{transform:scale(.98)}.flyout-icon-container{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:#f5f5f5}.mobile-menu-link-icon,.mobile-menu-products button svg{width:20px;height:20px}.flyout-link a{font-weight:600;color:var(--color-black)}.flyout-link p{font-size:13px;color:#666;margin:4px 0 0}.desktop-buttons{display:flex;gap:8px;margin-left:16px}.btn-get-started,.btn-login{display:inline-flex;align-items:center;border-radius:var(--radius-pill);transition:var(--transition-base);padding:8px 16px;font-size:14px;font-weight:600}.mobile-menu-products button svg,.modal-box{transition:transform var(--transition-base)}.btn-login{border:1px solid var(--color-dark);color:var(--color-white);background:var(--color-dark)}.btn-login:hover,.mobile-login-btn:hover{background:var(--color-white);color:var(--color-dark)}.btn-get-started{border:1px solid var(--color-primary);color:var(--color-white);background:var(--color-primary)}#mobile-menu-overlay{inset:0;z-index:998;background:rgba(0,0,0,.5);opacity:0;transition:opacity var(--transition-base)}#mobile-menu-overlay.show{display:block;opacity:1}#mobile-menu{right:0;top:0;bottom:0;width:80%;max-width:320px;background:var(--color-white);box-shadow:-2px 0 8px rgba(0,0,0,.1);padding:24px;z-index:999;transform:translateX(100%);transition:transform .3s;overflow-y:auto}.mobile-menu-header{display:flex;align-items:center;justify-content:space-between}.mobile-menu-links{margin-top:24px;display:flex;flex-direction:column;gap:12px}.disclosure-link,.mobile-menu-link{gap:8px;color:var(--color-black);font-weight:600}.mobile-menu-link{display:flex;align-items:center;font-size:16px;padding:8px 0}.disclosure-link:hover,.mobile-menu-link:hover,.mobile-menu-products button:hover{background-color:var(--color-gray-hover)}.mobile-menu-link-icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}.mobile-menu-products{margin-top:8px}.mobile-menu-products button{border:none;background:0 0;font-weight:600;color:var(--color-black);display:flex;align-items:center;justify-content:space-between;width:100%;font-size:16px;padding:8px 0}#products-disclosure{display:none;margin-top:8px}.disclosure-section{padding-left:16px;margin-bottom:16px}.disclosure-section p{font-weight:700;font-size:14px;margin:8px 0;padding:4px 8px;border-radius:var(--radius-sm);color:var(--color-white)}.disclosure-link{display:flex;align-items:center;font-size:14px;margin-bottom:4px;padding:6px 0}.disclosure-icon-container{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px}.mobile-get-started-btn,.mobile-login-btn{display:block;text-decoration:none;font-size:16px;font-weight:600;color:var(--color-white);padding:8px 16px;border-radius:var(--radius-pill);margin-top:12px;text-align:center;border:1px solid transparent}.mobile-login-btn{background:var(--color-dark);border-color:var(--color-dark)}.mobile-get-started-btn{background:var(--color-primary);border-color:var(--color-primary)}#get-started-modal{top:0;left:0;right:0;bottom:0;z-index:9999;align-items:center;justify-content:center}#get-started-modal.show{display:flex}#get-started-modal #modal-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);cursor:pointer;opacity:0;transition:opacity var(--transition-base)}#get-started-modal.show #modal-overlay{opacity:1}.modal-box{position:relative;background:var(--color-white);max-width:600px;margin:0 auto;padding:32px;border-radius:var(--radius-lg);box-shadow:0 4px 16px rgba(0,0,0,.2);transform:scale(.95)}#get-started-modal.show .modal-box{transform:scale(1)}.close-modal-btn{position:absolute;top:16px;right:16px;border:none;background:0 0;font-size:24px;font-weight:700;cursor:pointer}.modal-title{text-align:center;font-size:32px;font-weight:900;color:var(--color-black);margin-bottom:24px}.modal-input-field{width:100%;border:1px solid var(--color-black);border-radius:var(--radius-pill);padding:12px;font-size:14px;color:var(--color-black)}.modal-submit-btn{width:100%;background:var(--color-primary);color:var(--color-white);padding:12px;border-radius:var(--radius-pill);font-size:16px;font-weight:600;border:none;cursor:pointer}.modal-submit-btn:hover{background:#2563eb}.modal-agreement{text-align:center;font-size:12px;color:#666;margin-top:16px}.modal-agreement a{text-decoration:underline;color:var(--color-primary)}@media (max-width:767px){#cc360-desktop-nav{display:none!important}#cc360-mobile-icons{display:flex!important}}    `});let b=`
        <!-- Skip Link -->
      <!-- HTML CONTENT -->
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <div class="wrapper" id="main-content">
      <!-- STICKY NAVBAR -->
      <div class="navbar-container" role="navigation">
      <div class="navbar-inner">
      <div class="nav-bar">
      <!-- LOGO -->
      <div class="logo-container">
      <a href="https://www.coursecreator360.com/">
      <img alt="Course Creator 360 Logo" height="32" src="https://cc360-pages.s3.us-west-2.amazonaws.com/course-creator-360-logo.webp" width="120"/>
      </a>
      </div>
      <!-- MOBILE ICONS -->
      <div id="cc360-mobile-icons">
      <a aria-label="Open Get Started Modal" class="btn-mobile-get-started" data-modal-open="get-started">
                  Get Started
                </a>
      <button aria-label="Open main menu" class="hamburger-btn" data-cc360-toggle="mobile-menu" type="button">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 10C2 9.58579 2.33579 9.25 2.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H2.75C2.33579 10.75 2 10.4142 2 10ZM2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </button>
      </div>
      <!-- DESKTOP NAVIGATION -->
      <div id="cc360-desktop-nav" role="menubar">
      <!-- Home -->
      <a class="nav-link" href="https://www.coursecreator360.com" role="menuitem">
                  Home
                </a>
      <!-- Products Flyout Trigger -->
      <div role="none" style="position: relative;">
      <button aria-controls="productsFlyout" aria-expanded="false" aria-haspopup="true" class="products-container" data-cc360-flyout-button="productsFlyout" type="button">
                    Products
                    <!-- Chevron down (desktop version, 24 outline) -->
      <svg fill="currentColor" viewbox="0 0 20 20">
      <path clip-rule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" fill-rule="evenodd"></path>
      </svg>
      </button>
      <!-- PRODUCTS FLYOUT (Desktop) -->
      <div aria-hidden="true" id="productsFlyout" role="menu">
      <div class="flyout-content">
      <!-- CREATE COLUMN -->
      <div class="flyout-column">
      <h3 class="create-heading">CREATE</h3>
      <!-- Online Courses -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.25933 10.1466C3.98688 12.2307 3.82139 14.3483 3.76853 16.494C6.66451 17.703 9.41893 19.1835 12 20.9036C14.5811 19.1835 17.3355 17.703 20.2315 16.494C20.1786 14.3484 20.0131 12.2307 19.7407 10.1467M4.25933 10.1466C3.38362 9.8523 2.49729 9.58107 1.60107 9.3337C4.84646 7.05887 8.32741 5.0972 12 3.49255C15.6727 5.0972 19.1536 7.05888 22.399 9.33371C21.5028 9.58109 20.6164 9.85233 19.7407 10.1467M4.25933 10.1466C6.94656 11.0499 9.5338 12.1709 12.0001 13.4886C14.4663 12.1709 17.0535 11.0499 19.7407 10.1467M6.75 15C7.16421 15 7.5 14.6642 7.5 14.25C7.5 13.8358 7.16421 13.5 6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15ZM6.75 15V11.3245C8.44147 10.2735 10.1936 9.31094 12 8.44329M4.99264 19.9926C6.16421 18.8211 6.75 17.2855 6.75 15.75V14.25" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/online-courses" role="menuitem">
                              Online Courses
                            </a>
      <p>Create, market, and sell your expertise with streamlined course hosting.</p>
      </div>
      </div>
      <!-- Communities & Memberships (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9999 18.7191C18.2474 18.7396 18.4978 18.75 18.7506 18.75C19.7989 18.75 20.8054 18.5708 21.741 18.2413C21.7473 18.1617 21.7506 18.0812 21.7506 18C21.7506 16.3431 20.4074 15 18.7506 15C18.123 15 17.5403 15.1927 17.0587 15.5222M17.9999 18.7191C18 18.7294 18 18.7397 18 18.75C18 18.975 17.9876 19.1971 17.9635 19.4156C16.2067 20.4237 14.1707 21 12 21C9.82933 21 7.79327 20.4237 6.03651 19.4156C6.01238 19.1971 6 18.975 6 18.75C6 18.7397 6.00003 18.7295 6.00008 18.7192M17.9999 18.7191C17.994 17.5426 17.6494 16.4461 17.0587 15.5222M17.0587 15.5222C15.9928 13.8552 14.1255 12.75 12 12.75C9.87479 12.75 8.00765 13.8549 6.94169 15.5216M6.94169 15.5216C6.46023 15.1925 5.87796 15 5.25073 15C3.59388 15 2.25073 16.3431 2.25073 18C2.25073 18.0812 2.25396 18.1617 2.26029 18.2413C3.19593 18.5708 4.2024 18.75 5.25073 18.75C5.50307 18.75 5.75299 18.7396 6.00008 18.7192M6.94169 15.5216C6.35071 16.4457 6.00598 17.5424 6.00008 18.7192M15 6.75C15 8.40685 13.6569 9.75 12 9.75C10.3431 9.75 9 8.40685 9 6.75C9 5.09315 10.3431 3.75 12 3.75C13.6569 3.75 15 5.09315 15 6.75ZM21 9.75C21 10.9926 19.9926 12 18.75 12C17.5074 12 16.5 10.9926 16.5 9.75C16.5 8.50736 17.5074 7.5 18.75 7.5C19.9926 7.5 21 8.50736 21 9.75ZM7.5 9.75C7.5 10.9926 6.49264 12 5.25 12C4.00736 12 3 10.9926 3 9.75C3 8.50736 4.00736 7.5 5.25 7.5C6.49264 7.5 7.5 8.50736 7.5 9.75Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/create" role="menuitem">
                              Communities &amp; Memberships
                            </a>
      <p>Grow raving fans through exclusive access and recurring subscriptions.</p>
      </div>
      </div>
      <!-- Coaching -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.25 8.51104C21.1341 8.79549 21.75 9.6392 21.75 10.6082V14.8938C21.75 16.0304 20.9026 16.9943 19.7697 17.0867C19.4308 17.1144 19.0909 17.1386 18.75 17.1592V20.25L15.75 17.25C14.3963 17.25 13.0556 17.1948 11.7302 17.0866C11.4319 17.0623 11.1534 16.9775 10.9049 16.8451M20.25 8.51104C20.0986 8.46232 19.9393 8.43 19.7739 8.41628C18.4472 8.30616 17.1051 8.25 15.75 8.25C14.3948 8.25 13.0528 8.30616 11.7261 8.41627C10.595 8.51015 9.75 9.47323 9.75 10.6082V14.8937C9.75 15.731 10.2099 16.4746 10.9049 16.8451M20.25 8.51104V6.63731C20.25 5.01589 19.0983 3.61065 17.4903 3.40191C15.4478 3.13676 13.365 3 11.2503 3C9.13533 3 7.05233 3.13678 5.00963 3.40199C3.40173 3.61074 2.25 5.01598 2.25 6.63738V12.8626C2.25 14.484 3.40173 15.8893 5.00964 16.098C5.58661 16.1729 6.16679 16.2376 6.75 16.2918V21L10.9049 16.8451" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/coaching" role="menuitem">
                              Coaching
                            </a>
      <p>Offer personalized coaching programs and live sessions.</p>
      </div>
      </div>
      <!-- Digital Downloads -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/digital-downloads" role="menuitem">
                              Digital Downloads
                            </a>
      <p>Easily sell eBooks, PDFs, templates, and other digital resources.</p>
      </div>
      </div>
      <!-- Certifications & Challenges (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12.75L11.25 15L15 9.75M21 12C21 13.2683 20.3704 14.3895 19.4067 15.0682C19.6081 16.2294 19.2604 17.4672 18.3637 18.3639C17.467 19.2606 16.2292 19.6083 15.068 19.4069C14.3893 20.3705 13.2682 21 12 21C10.7319 21 9.61072 20.3705 8.93204 19.407C7.77066 19.6086 6.53256 19.261 5.6357 18.3641C4.73886 17.4673 4.39125 16.2292 4.59286 15.0678C3.62941 14.3891 3 13.2681 3 12C3 10.7319 3.62946 9.61077 4.59298 8.93208C4.39147 7.77079 4.7391 6.53284 5.63587 5.63607C6.53265 4.73929 7.77063 4.39166 8.93194 4.59319C9.61061 3.62955 10.7318 3 12 3C13.2682 3 14.3893 3.6295 15.068 4.59307C16.2294 4.39145 17.4674 4.73906 18.3643 5.6359C19.2611 6.53274 19.6087 7.77081 19.4071 8.93218C20.3706 9.61087 21 10.7319 21 12Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/create" role="menuitem">
                              Certifications &amp; Challenges
                            </a>
      <p>Issue credentials or badges for course completion and challenges.</p>
      </div>
      </div>
      <!-- Branded Mobile App -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/branded-mobile-app" role="menuitem">
                              Branded Mobile App
                            </a>
      <p>Launch your own white-labeled app for on\xC3\u0192\xC2\xA2\xC3\xA2\xE2\u20AC\u0161\xC2\xAC\xC3\xA2\xE2\u201A\xAC\xCB\u0153the\xC3\u0192\xC2\xA2\xC3\xA2\xE2\u20AC\u0161\xC2\xAC\xC3\xA2\xE2\u201A\xAC\xCB\u0153go access.</p>
      </div>
      </div>
      </div>
      <!-- MARKET COLUMN -->
      <div class="flyout-column">
      <h3 class="market-heading">MARKET</h3>
      <!-- Landing Pages (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.1926 21 19.7156 18.1332 20.7157 14.2529M12 21C7.80742 21 4.28442 18.1332 3.2843 14.2529M12 21C14.4853 21 16.5 16.9706 16.5 12C16.5 7.02944 14.4853 3 12 3M12 21C9.51472 21 7.5 16.9706 7.5 12C7.5 7.02944 9.51472 3 12 3M12 3C15.3652 3 18.299 4.84694 19.8431 7.58245M12 3C8.63481 3 5.70099 4.84694 4.15692 7.58245M19.8431 7.58245C17.7397 9.40039 14.9983 10.5 12 10.5C9.00172 10.5 6.26027 9.40039 4.15692 7.58245M19.8431 7.58245C20.5797 8.88743 21 10.3946 21 12C21 12.778 20.9013 13.5329 20.7157 14.2529M20.7157 14.2529C18.1334 15.6847 15.1619 16.5 12 16.5C8.8381 16.5 5.86662 15.6847 3.2843 14.2529M3.2843 14.2529C3.09871 13.5329 3 12.778 3 12C3 10.3946 3.42032 8.88743 4.15692 7.58245" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/market" role="menuitem">
                              Landing Pages
                            </a>
      <p>Build and launch high\xC3\u0192\xC2\xA2\xC3\xA2\xE2\u20AC\u0161\xC2\xAC\xC3\xA2\xE2\u201A\xAC\xCB\u0153converting pages easily.</p>
      </div>
      </div>
      <!-- Funnels & Lead Magnets (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/market" role="menuitem">
                              Funnels &amp; Lead Magnets
                            </a>
      <p>Attract customers with free offers and funnels.</p>
      </div>
      </div>
      <!-- Email & SMS Marketing (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/market" role="menuitem">
                              Email &amp; SMS Marketing
                            </a>
      <p>Automate messaging across multiple channels.</p>
      </div>
      </div>
      <!-- Webinars (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/market" role="menuitem">
                              Webinars
                            </a>
      <p>Host live or automated webinars to capture leads.</p>
      </div>
      </div>
      <!-- Affiliate Programs -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3404 15.8398C9.65153 15.7803 8.95431 15.75 8.25 15.75H7.5C5.01472 15.75 3 13.7353 3 11.25C3 8.76472 5.01472 6.75 7.5 6.75H8.25C8.95431 6.75 9.65153 6.71966 10.3404 6.66022M10.3404 15.8398C10.5933 16.8015 10.9237 17.7317 11.3246 18.6234C11.5721 19.1738 11.3842 19.8328 10.8616 20.1345L10.2053 20.5134C9.6539 20.8318 8.9456 20.6306 8.67841 20.0527C8.0518 18.6973 7.56541 17.2639 7.23786 15.771M10.3404 15.8398C9.95517 14.3745 9.75 12.8362 9.75 11.25C9.75 9.66379 9.95518 8.1255 10.3404 6.66022M10.3404 15.8398C13.5 16.1124 16.4845 16.9972 19.1747 18.3749M10.3404 6.66022C13.5 6.3876 16.4845 5.50283 19.1747 4.12509M19.1747 4.12509C19.057 3.74595 18.9302 3.37083 18.7944 3M19.1747 4.12509C19.7097 5.84827 20.0557 7.65462 20.1886 9.51991M19.1747 18.3749C19.057 18.7541 18.9302 19.1292 18.7944 19.5M19.1747 18.3749C19.7097 16.6517 20.0557 14.8454 20.1886 12.9801M20.1886 9.51991C20.6844 9.93264 21 10.5545 21 11.25C21 11.9455 20.6844 12.5674 20.1886 12.9801M20.1886 9.51991C20.2293 10.0913 20.25 10.6682 20.25 11.25C20.25 11.8318 20.2293 12.4087 20.1886 12.9801" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/affiliate-program" role="menuitem">
                              Affiliate Programs
                            </a>
      <p>Expand your reach with community\xC3\u0192\xC2\xA2\xC3\xA2\xE2\u20AC\u0161\xC2\xAC\xC3\xA2\xE2\u201A\xAC\xCB\u0153driven promotion.</p>
      </div>
      </div>
      <!-- Social Automations -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.21721 10.9071C6.83295 10.2169 6.096 9.75 5.25 9.75C4.00736 9.75 3 10.7574 3 12C3 13.2426 4.00736 14.25 5.25 14.25C6.096 14.25 6.83295 13.7831 7.21721 13.0929M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071M16.7828 18.4071C16.6026 18.7307 16.5 19.1034 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.904 17.25 17.1671 17.7169 16.7828 18.4071ZM16.7828 5.5929C17.1671 6.28309 17.904 6.75 18.75 6.75C19.9926 6.75 21 5.74264 21 4.5C21 3.25736 19.9926 2.25 18.75 2.25C17.5074 2.25 16.5 3.25736 16.5 4.5C16.5 4.89664 16.6026 5.26931 16.7828 5.5929Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/productssocial-media" role="menuitem">
                              Social Automations
                            </a>
      <p>Automate social posting and DMs across platforms.</p>
      </div>
      </div>
      </div>
      <!-- SELL & SCALE COLUMN -->
      <div class="flyout-column">
      <h3 class="sell-scale-heading">SELL &amp; SCALE</h3>
      <!-- Payment & Sales Pipelines -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/productspayments" role="menuitem">
                              Payment &amp; Sales Pipelines
                            </a>
      <p>Accept payments globally and track deals seamlessly.</p>
      </div>
      </div>
      <!-- Automations -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.59356 3.94014C9.68397 3.39768 10.1533 3.00009 10.7033 3.00009H13.2972C13.8472 3.00009 14.3165 3.39768 14.4069 3.94014L14.6204 5.22119C14.6828 5.59523 14.9327 5.9068 15.2645 6.09045C15.3387 6.13151 15.412 6.17393 15.4844 6.21766C15.8095 6.41393 16.2048 6.47495 16.5604 6.34175L17.7772 5.88587C18.2922 5.69293 18.8712 5.9006 19.1462 6.37687L20.4432 8.6233C20.7181 9.09957 20.6085 9.70482 20.1839 10.0544L19.1795 10.8812C18.887 11.122 18.742 11.4938 18.7491 11.8726C18.7498 11.915 18.7502 11.9575 18.7502 12.0001C18.7502 12.0427 18.7498 12.0852 18.7491 12.1275C18.742 12.5064 18.887 12.8782 19.1795 13.119L20.1839 13.9458C20.6085 14.2953 20.7181 14.9006 20.4432 15.3769L19.1462 17.6233C18.8712 18.0996 18.2922 18.3072 17.7772 18.1143L16.5604 17.6584C16.2048 17.5252 15.8095 17.5862 15.4844 17.7825C15.412 17.8263 15.3387 17.8687 15.2645 17.9097C14.9327 18.0934 14.6828 18.4049 14.6204 18.779L14.4069 20.06C14.3165 20.6025 13.8472 21.0001 13.2972 21.0001H10.7033C10.1533 21.0001 9.68397 20.6025 9.59356 20.06L9.38005 18.779C9.31771 18.4049 9.06774 18.0934 8.73597 17.9097C8.66179 17.8687 8.58847 17.8263 8.51604 17.7825C8.19101 17.5863 7.79568 17.5252 7.44011 17.6584L6.22325 18.1143C5.70826 18.3072 5.12926 18.0996 4.85429 17.6233L3.55731 15.3769C3.28234 14.9006 3.39199 14.2954 3.81657 13.9458L4.82092 13.119C5.11343 12.8782 5.25843 12.5064 5.25141 12.1276C5.25063 12.0852 5.25023 12.0427 5.25023 12.0001C5.25023 11.9575 5.25063 11.915 5.25141 11.8726C5.25843 11.4938 5.11343 11.122 4.82092 10.8812L3.81657 10.0544C3.39199 9.70484 3.28234 9.09958 3.55731 8.62332L4.85429 6.37688C5.12926 5.90061 5.70825 5.69295 6.22325 5.88588L7.4401 6.34176C7.79566 6.47496 8.19099 6.41394 8.51603 6.21767C8.58846 6.17393 8.66179 6.13151 8.73597 6.09045C9.06774 5.9068 9.31771 5.59523 9.38005 5.22119L9.59356 3.94014Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3432 10.3431 9.00001 12 9.00001C13.6569 9.00001 15 10.3432 15 12Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/productsautomations" role="menuitem">
                              Automations
                            </a>
      <p>Trigger follow-ups, cross-sells, or milestone rewards.</p>
      </div>
      </div>
      <!-- Analytics -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      <path d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      <path d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/productsanalytics" role="menuitem">
                              Analytics
                            </a>
      <p>Gain insights to optimize your marketing and funnels.</p>
      </div>
      </div>
      <!-- CRM (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/sellandscale" role="menuitem">
                              CRM
                            </a>
      <p>Centralize and organize your customer data efficiently.</p>
      </div>
      </div>
      <!-- AI Tools (Redirect) -->
      <div class="flyout-link" role="none">
      <div class="flyout-icon-container">
      <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.25 3V4.5M4.5 8.25H3M21 8.25H19.5M4.5 12H3M21 12H19.5M4.5 15.75H3M21 15.75H19.5M8.25 19.5V21M12 3V4.5M12 19.5V21M15.75 3V4.5M15.75 19.5V21M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </div>
      <div style="flex:1;">
      <a href="https://www.coursecreator360.com/sellandscale" role="menuitem">
                              AI Tools
                            </a>
      <p>Leverage advanced AI to work ON your business, not IN it.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <!-- Pricing -->
      <a class="nav-link" href="https://www.coursecreator360.com/cc360pricing" role="menuitem">
                  Pricing
                </a>
      <!-- Desktop Buttons -->
      <div class="desktop-buttons" role="none">
      <a class="btn-login" href="https://app.coursecreator360.com" role="menuitem">
                    Login
                  </a>
      <a class="btn-get-started" data-modal-open="get-started" role="menuitem">
                    Get Started
                    <svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      </a>
      </div>
      </div>
      <!-- END DESKTOP NAV -->
      </div>
      </div>
      </div>
      <!-- MOBILE MENU OVERLAY -->
      <div id="mobile-menu-overlay"></div>
      <!-- MOBILE MENU -->
      <div aria-label="Mobile navigation" aria-modal="true" id="mobile-menu" role="dialog">
      <div class="mobile-menu-header">
      <a href="https://www.coursecreator360.com">
      <img alt="Course Creator 360 Logo" height="32" src="https://cc360-pages.s3.us-west-2.amazonaws.com/course-creator-360-logo.webp" width="120"/>
      </a>
      <button aria-label="Close mobile menu" data-cc360-toggle="mobile-menu" type="button">
      <!-- X Mark icon (mini 20 solid) -->
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" fill="#0F172A"></path>
      </svg>
      </button>
      </div>
      <div class="mobile-menu-links">
      <!-- Home -->
      <a class="mobile-menu-link" href="https://www.coursecreator360.com">
      <div class="mobile-menu-link-icon">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M9.29292 2.29289C9.68345 1.90237 10.3166 1.90237 10.7071 2.29289L17.7071 9.29289C17.9931 9.57889 18.0787 10.009 17.9239 10.3827C17.7691 10.7564 17.4045 11 17 11H16V17C16 17.5523 15.5523 18 15 18H13C12.4477 18 12 17.5523 12 17V14C12 13.4477 11.5523 13 11 13H9.00003C8.44774 13 8.00003 13.4477 8.00003 14V17C8.00003 17.5523 7.55231 18 7.00003 18H5.00003C4.44774 18 4.00003 17.5523 4.00003 17V11H3.00003C2.59557 11 2.23093 10.7564 2.07615 10.3827C1.92137 10.009 2.00692 9.57889 2.29292 9.29289L9.29292 2.29289Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Home</span>
      </a>
      <!-- Products Disclosure -->
      <div class="mobile-menu-products">
      <button aria-controls="products-disclosure" aria-expanded="false" data-cc360-disclosure-button="products-disclosure" type="button">
                Products
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 20 20">
      <path d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      </button>
      <div id="products-disclosure">
      <!-- CREATE Section -->
      <div class="disclosure-section">
      <p class="create-heading">CREATE</p>
      <!-- Online Courses -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/online-courses">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M9.66413 1.31866C9.87552 1.21279 10.1244 1.21279 10.3358 1.31866C13.2902 2.7983 16.0408 4.6242 18.5343 6.74302C18.7415 6.91909 18.8372 7.1935 18.7844 7.46023C18.7316 7.72695 18.5385 7.9442 18.2799 8.02802C15.4656 8.94004 12.8246 10.2376 10.4191 11.8586C10.1658 12.0293 9.8342 12.0293 9.58086 11.8586C8.90534 11.4034 8.21125 10.9737 7.49997 10.5709V9.39384C7.49997 9.1503 7.61572 8.93111 7.80165 8.80225C8.86302 8.0666 9.96638 7.38737 11.1074 6.76888C11.4715 6.57149 11.6067 6.11626 11.4093 5.75211C11.2119 5.38795 10.7567 5.25276 10.3926 5.45016C9.20323 6.09484 8.05326 6.80277 6.94716 7.56942C6.3428 7.98831 5.99997 8.67582 5.99997 9.39384V9.7741C4.62709 9.09181 3.19747 8.5068 1.7201 8.02802C1.46144 7.9442 1.26841 7.72695 1.2156 7.46023C1.16278 7.1935 1.25847 6.91909 1.46567 6.74302C3.95918 4.6242 6.70972 2.7983 9.66413 1.31866ZM5.99997 11.4596C5.20208 11.0378 4.38297 10.651 3.54469 10.3012C3.37611 11.3268 3.24559 12.3652 3.15464 13.415C3.12783 13.7244 3.29452 14.0184 3.57385 14.1542C4.10178 14.4109 4.61994 14.6847 5.12759 14.9748C4.91888 15.2987 4.67271 15.6055 4.38907 15.8891C4.09618 16.182 4.09618 16.6569 4.38907 16.9497C4.68197 17.2426 5.15684 17.2426 5.44973 16.9497C5.81938 16.5801 6.13906 16.1793 6.40876 15.7558C7.49842 16.4631 8.53293 17.2484 9.50439 18.1037C9.78772 18.3532 10.2123 18.3532 10.4956 18.1037C12.2768 16.5355 14.2699 15.2028 16.4262 14.1542C16.7055 14.0184 16.8722 13.7244 16.8454 13.415C16.7544 12.3652 16.6239 11.3268 16.4553 10.3011C14.6241 11.0653 12.8844 12.0061 11.2574 13.1025C10.4974 13.6147 9.50263 13.6147 8.7426 13.1025C8.33322 12.8267 7.91669 12.5606 7.49337 12.3048C7.44116 13.5085 7.07958 14.7023 6.40877 15.7557C5.98972 15.4837 5.56252 15.2232 5.12761 14.9747C5.70924 14.0721 5.99997 13.0367 5.99997 12V11.4596Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Online Courses</span>
      </a>
      <!-- Communities & Memberships (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/create">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#0F172A"></path>
      <path d="M6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8Z" fill="#0F172A"></path>
      <path d="M1.49064 15.3257C1.32107 15.2271 1.19021 15.0718 1.13247 14.8843C1.04636 14.6048 1 14.3078 1 14C1 12.3431 2.34315 11 4 11C4.522 11 5.01287 11.1333 5.4404 11.3678C4.39329 12.3989 3.69414 13.7825 3.53478 15.3267C3.5118 15.5494 3.52139 15.7692 3.55996 15.9809C2.81061 15.9156 2.10861 15.6849 1.49064 15.3257Z" fill="#0F172A"></path>
      <path d="M16.4405 15.9809C17.1897 15.9155 17.8915 15.6849 18.5094 15.3257C18.6789 15.2271 18.8098 15.0718 18.8675 14.8843C18.9536 14.6048 19 14.3078 19 14C19 12.3431 17.6569 11 16 11C15.4781 11 14.9873 11.1333 14.5599 11.3676C15.6071 12.3987 16.3063 13.7824 16.4656 15.3267C16.4886 15.5494 16.479 15.7692 16.4405 15.9809Z" fill="#0F172A"></path>
      <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="#0F172A"></path>
      <path d="M5.30383 16.1909C5.10473 16.0106 4.99922 15.7478 5.02679 15.4807C5.28657 12.9633 7.41408 11 10.0001 11C12.5862 11 14.7137 12.9633 14.9735 15.4807C15.0011 15.7478 14.8956 16.0107 14.6965 16.1909C13.4545 17.3152 11.8073 18 10.0001 18C8.19298 18 6.54576 17.3152 5.30383 16.1909Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Communities &amp; Memberships</span>
      </a>
      <!-- Coaching -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/coaching">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.50491 2.36515C5.30269 2.1243 7.13702 2 9 2C10.863 2 12.6973 2.1243 14.4951 2.36515C15.7418 2.53218 16.6741 3.4733 16.9298 4.6333C16.7425 4.59823 16.5501 4.57486 16.3531 4.5641C15.5739 4.52154 14.7894 4.5 14 4.5C13.2106 4.5 12.4261 4.52154 11.6469 4.5641C9.22913 4.69615 7.5 6.72739 7.5 8.99794V11.2377C7.5 12.6511 8.17008 13.9726 9.26042 14.8002L6.28033 17.7803C6.06583 17.9948 5.74324 18.059 5.46299 17.9429C5.18273 17.8268 5 17.5533 5 17.25V13.8073C4.49897 13.7588 4.00056 13.7013 3.50493 13.6349C2.0334 13.4377 1 12.1622 1 10.7211V5.27886C1 3.83785 2.03337 2.5623 3.50491 2.36515Z" fill="#0F172A"></path>
      <path d="M14 6C13.2379 6 12.4807 6.0208 11.7287 6.06187C10.1572 6.1477 9 7.47212 9 8.99794V11.2377C9 12.7565 10.1467 14.077 11.7102 14.1726C11.9238 14.1857 12.1379 14.1971 12.3524 14.2068C12.5526 14.216 12.7366 14.2973 12.8702 14.4309L15.2197 16.7803C15.4342 16.9948 15.7568 17.059 16.037 16.9429C16.3173 16.8268 16.5 16.5533 16.5 16.25V14.1795C17.9525 13.9847 19 12.7165 19 11.2648V8.99794C19 7.47212 17.8428 6.1477 16.2713 6.06187C15.5193 6.0208 14.7621 6 14 6Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Coaching</span>
      </a>
      <!-- Digital Downloads -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/digital-downloads">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.75 2.75C10.75 2.33579 10.4142 2 10 2C9.58579 2 9.25 2.33579 9.25 2.75V11.3636L6.29526 8.23503C6.01085 7.93389 5.53617 7.92033 5.23503 8.20474C4.9339 8.48915 4.92033 8.96383 5.20474 9.26497L9.45474 13.765C9.59642 13.915 9.79366 14 10 14C10.2063 14 10.4036 13.915 10.5453 13.765L14.7953 9.26497C15.0797 8.96383 15.0661 8.48915 14.765 8.20474C14.4638 7.92033 13.9892 7.93389 13.7047 8.23503L10.75 11.3636V2.75Z" fill="#0F172A"></path>
      <path d="M3.5 12.75C3.5 12.3358 3.16421 12 2.75 12C2.33579 12 2 12.3358 2 12.75V15.25C2 16.7688 3.23122 18 4.75 18H15.25C16.7688 18 18 16.7688 18 15.25V12.75C18 12.3358 17.6642 12 17.25 12C16.8358 12 16.5 12.3358 16.5 12.75V15.25C16.5 15.9404 15.9404 16.5 15.25 16.5H4.75C4.05964 16.5 3.5 15.9404 3.5 15.25V12.75Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Digital Downloads</span>
      </a>
      <!-- Certifications & Challenges (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/create">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M16.4032 12.6523C17.353 12.1487 18 11.1499 18 10C18 8.85007 17.353 7.85126 16.4032 7.34771C16.7188 6.32002 16.47 5.15625 15.6569 4.34312C14.8437 3.53 13.68 3.28122 12.6523 3.59679C12.1487 2.64698 11.1499 2 10 2C8.85007 2 7.85125 2.64699 7.3477 3.59681C6.32002 3.28126 5.15627 3.53004 4.34315 4.34316C3.53003 5.15628 3.28125 6.32003 3.5968 7.34771C2.64699 7.85126 2 8.85007 2 10C2 11.1499 2.64699 12.1487 3.59681 12.6523C3.28124 13.68 3.53001 14.8437 4.34314 15.6569C5.15627 16.47 6.32003 16.7188 7.34771 16.4032C7.85126 17.353 8.85007 18 10 18C11.1499 18 12.1488 17.353 12.6523 16.4032C13.68 16.7187 14.8437 16.47 15.6569 15.6568C16.47 14.8437 16.7188 13.68 16.4032 12.6523ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Certifications &amp; Challenges</span>
      </a>
      <!-- Branded Mobile App -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/branded-mobile-app">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H11.25C11.6642 15.5 12 15.8358 12 16.25C12 16.6642 11.6642 17 11.25 17H8.75C8.33579 17 8 16.6642 8 16.25Z" fill="#0F172A"></path>
      <path clip-rule="evenodd" d="M4 4C4 2.34315 5.34315 1 7 1H13C14.6569 1 16 2.34315 16 4V16C16 17.6569 14.6569 19 13 19H7C5.34315 19 4 17.6569 4 16V4ZM8 2.5V3.25C8 3.66421 8.33579 4 8.75 4H11.25C11.6642 4 12 3.66421 12 3.25V2.5H13C13.8284 2.5 14.5 3.17157 14.5 4V16C14.5 16.8284 13.8284 17.5 13 17.5H7C6.17157 17.5 5.5 16.8284 5.5 16V4C5.5 3.17157 6.17157 2.5 7 2.5H8Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Branded Mobile App</span>
      </a>
      </div>
      <!-- MARKET Section -->
      <div class="disclosure-section">
      <p class="market-heading">MARKET</p>
      <!-- Landing Pages (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/market">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5546 5.41215C15.6845 4.17138 14.4711 3.18897 13.0522 2.60288C13.8305 3.9731 14.3991 5.47789 14.7147 7.07367C15.4062 6.61183 16.0263 6.05128 16.5546 5.41215Z" fill="#0F172A"></path>
      <path d="M13.3257 7.82478C12.9801 5.69142 12.1346 3.72563 10.9132 2.05155C10.6135 2.0175 10.3088 2 10 2C9.69121 2 9.3865 2.0175 9.08682 2.05155C7.86543 3.72563 7.0199 5.69141 6.67433 7.82478C7.69581 8.25948 8.81982 8.5 10 8.5C11.1802 8.5 12.3042 8.25948 13.3257 7.82478Z" fill="#0F172A"></path>
      <path d="M6.51418 9.37568C7.59957 9.77938 8.77402 10 10 10C11.226 10 12.4004 9.77938 13.4858 9.37568C13.4952 9.58261 13.5 9.79075 13.5 10C13.5 11.079 13.3734 12.1284 13.1343 13.1343C12.1284 13.3734 11.079 13.5 10 13.5C8.92099 13.5 7.87155 13.3734 6.86572 13.1343C6.62659 12.1284 6.5 11.079 6.5 10C6.5 9.79075 6.50476 9.58261 6.51418 9.37568Z" fill="#0F172A"></path>
      <path d="M5.28529 7.07367C5.60086 5.47789 6.16954 3.9731 6.94776 2.60288C5.52894 3.18896 4.3155 4.17138 3.44542 5.41215C3.97374 6.05128 4.59375 6.61183 5.28529 7.07367Z" fill="#0F172A"></path>
      <path d="M17.3336 6.79843C17.7622 7.77878 18 8.86162 18 10C18 10.3088 17.9825 10.6135 17.9484 10.9132C16.9787 11.6207 15.911 12.2021 14.7696 12.6333C14.921 11.7783 15 10.8984 15 10C15 9.5601 14.9811 9.12463 14.944 8.69435C15.8352 8.18645 16.6408 7.54546 17.3336 6.79843Z" fill="#0F172A"></path>
      <path d="M2.66636 6.79843C3.3592 7.54546 4.16477 8.18645 5.05604 8.69435C5.01894 9.12463 5 9.5601 5 10C5 10.8984 5.07898 11.7783 5.23037 12.6333C4.08897 12.2021 3.02132 11.6207 2.05155 10.9132C2.0175 10.6135 2 10.3088 2 10C2 8.86162 2.23777 7.77878 2.66636 6.79843Z" fill="#0F172A"></path>
      <path d="M10 15C10.8984 15 11.7783 14.921 12.6333 14.7696C12.2021 15.911 11.6207 16.9787 10.9132 17.9485C10.6135 17.9825 10.3088 18 10 18C9.69121 18 9.3865 17.9825 9.08682 17.9485C8.37929 16.9787 7.79789 15.911 7.36674 14.7696C8.22167 14.921 9.10161 15 10 15Z" fill="#0F172A"></path>
      <path d="M14.3573 14.3573C14.0334 15.4259 13.5935 16.4441 13.0522 17.3971C15.0158 16.586 16.586 15.0158 17.3971 13.0522C16.4441 13.5935 15.4259 14.0334 14.3573 14.3573Z" fill="#0F172A"></path>
      <path d="M6.94776 17.3971C4.98419 16.586 3.41399 15.0158 2.60288 13.0522C3.55593 13.5935 4.57408 14.0334 5.64268 14.3573C5.96656 15.4259 6.40648 16.4441 6.94776 17.3971Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Landing Pages</span>
      </a>
      <!-- Funnels & Lead Magnets (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/market">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M2.62803 1.60102C5.02718 1.2056 7.48986 1 10 1C12.5101 1 14.9728 1.2056 17.372 1.60102C17.7342 1.66072 18 1.97389 18 2.34103V4.62868C18 5.22542 17.7629 5.79771 17.341 6.21967L12.659 10.9017C12.2371 11.3236 12 11.8959 12 12.4926V15.5291C12 16.2126 11.6893 16.859 11.1556 17.286L9.21852 18.8357C8.99339 19.0158 8.68496 19.0509 8.42511 18.926C8.16526 18.8011 8 18.5383 8 18.25V12.4926C8 11.8959 7.76295 11.3236 7.34099 10.9017L2.65901 6.21967C2.23705 5.79771 2 5.22542 2 4.62868V2.34103C2 1.97389 2.26578 1.66072 2.62803 1.60102Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Funnels &amp; Lead Magnets</span>
      </a>
      <!-- Email & SMS Marketing (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/market">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4C1.89543 4 1 4.89543 1 6V7.16147L9.44098 11.382C9.79289 11.5579 10.2071 11.5579 10.559 11.382L19 7.16147V6C19 4.89543 18.1046 4 17 4H3Z" fill="#0F172A"></path>
      <path d="M19 8.83853L11.2298 12.7236C10.4556 13.1107 9.54436 13.1107 8.77016 12.7236L1 8.83853V14C1 15.1046 1.89543 16 3 16H17C18.1046 16 19 15.1046 19 14V8.83853Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Email &amp; SMS Marketing</span>
      </a>
      <!-- Webinars (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/market">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.25 4C2.00736 4 1 5.00736 1 6.25V13.75C1 14.9926 2.00736 16 3.25 16H10.75C11.9926 16 13 14.9926 13 13.75V6.25C13 5.00736 11.9926 4 10.75 4H3.25Z" fill="#0F172A"></path>
      <path d="M19 4.75002C19 4.44668 18.8173 4.1732 18.537 4.05711C18.2568 3.94103 17.9342 4.00519 17.7197 4.21969L14.7197 7.21969C14.579 7.36034 14.5 7.55111 14.5 7.75002V12.25C14.5 12.4489 14.579 12.6397 14.7197 12.7804L17.7197 15.7804C17.9342 15.9949 18.2568 16.059 18.537 15.9429C18.8173 15.8268 19 15.5534 19 15.25V4.75002Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Webinars</span>
      </a>
      <!-- Affiliate Programs -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/affiliate-program">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9202 3.84494C11.9859 4.84176 9.86368 5.52434 7.62054 5.82553C6.76376 5.94057 5.88902 6.00001 5 6.00001C2.79086 6.00001 1 7.79087 1 10C1 12.0384 2.52477 13.7207 4.49597 13.9686C4.78782 15.1063 5.20979 16.2269 5.76704 17.3098C6.1636 18.0805 7.10902 18.3086 7.81763 17.8995L8.68366 17.3995C9.41014 16.9801 9.62418 16.0784 9.27228 15.3782C9.10619 15.0477 8.95684 14.7129 8.82394 14.3747C10.6243 14.7325 12.3353 15.3383 13.9201 16.1551C14.6189 14.2348 15 12.1619 15 10C15 7.83812 14.6189 5.76526 13.9202 3.84494Z" fill="#0F172A"></path>
      <path d="M15.2428 3.09656C16.0553 5.24255 16.5 7.56934 16.5 10C16.5 12.4307 16.0553 14.7575 15.2428 16.9035C15.2427 16.9034 15.2428 16.9035 15.2428 16.9035L15.2135 16.9807C15.0652 17.3674 15.2585 17.8012 15.6452 17.9495C16.032 18.0979 16.4657 17.9046 16.6141 17.5178C16.7002 17.2933 16.7825 17.067 16.8611 16.8389C17.4152 15.2293 17.7791 13.5316 17.9262 11.7729C18.5645 11.4388 19 10.7707 19 10C19 9.22929 18.5645 8.5612 17.9262 8.22715C17.7791 6.46842 17.4152 4.77069 16.8611 3.16114C16.7825 2.93301 16.7002 2.70667 16.6141 2.48219C16.4657 2.09544 16.032 1.90216 15.6452 2.05048C15.2585 2.19881 15.0652 2.63257 15.2135 3.01932L15.2428 3.09656C15.2428 3.09652 15.2427 3.09659 15.2428 3.09656Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Affiliate Programs</span>
      </a>
      <!-- Social Automations -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/productssocial-media">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5C18 5.88071 16.8807 7 15.5 7C14.7943 7 14.1569 6.70762 13.7024 6.23739L6.96884 9.60415C6.98935 9.73308 7 9.8653 7 10C7 10.1347 6.98934 10.267 6.96882 10.3959L13.7023 13.7627C14.1569 13.2924 14.7943 13 15.5 13C16.8807 13 18 14.1193 18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5C13 15.3653 13.0107 15.2331 13.0312 15.1041L6.29764 11.7374C5.84307 12.2076 5.20568 12.5 4.5 12.5C3.11929 12.5 2 11.3807 2 10C2 8.61929 3.11929 7.5 4.5 7.5C5.20571 7.5 5.84312 7.79241 6.29769 8.26267L13.0312 4.89593C13.0107 4.76697 13 4.63473 13 4.5Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Social Automations</span>
      </a>
      </div>
      <!-- SELL & SCALE Section -->
      <div class="disclosure-section">
      <p class="sell-scale-heading">SELL &amp; SCALE</p>
      <!-- Payment & Sales Pipelines -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/productspayments">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M2.5 4C1.67157 4 1 4.67157 1 5.5V6H19V5.5C19 4.67157 18.3284 4 17.5 4H2.5ZM19 8.5H1V14.5C1 15.3284 1.67157 16 2.5 16H17.5C18.3284 16 19 15.3284 19 14.5V8.5ZM3 13.25C3 12.8358 3.33579 12.5 3.75 12.5H5.25C5.66421 12.5 6 12.8358 6 13.25C6 13.6642 5.66421 14 5.25 14H3.75C3.33579 14 3 13.6642 3 13.25ZM7.75 12.5C7.33579 12.5 7 12.8358 7 13.25C7 13.6642 7.33579 14 7.75 14H11.25C11.6642 14 12 13.6642 12 13.25C12 12.8358 11.6642 12.5 11.25 12.5H7.75Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Payment &amp; Sales Pipelines</span>
      </a>
      <!-- Automations -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/productsautomations">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M7.83922 1.80388C7.93271 1.33646 8.34312 1 8.81981 1H11.1802C11.6569 1 12.0673 1.33646 12.1608 1.80388L12.4913 3.45629C13.1956 3.72458 13.8454 4.10332 14.4196 4.57133L16.0179 4.03065C16.4694 3.8779 16.966 4.06509 17.2043 4.47791L18.3845 6.52207C18.6229 6.93489 18.5367 7.45855 18.1786 7.77322L16.9119 8.88645C16.9699 9.24909 17 9.62103 17 10C17 10.379 16.9699 10.7509 16.9119 11.1135L18.1786 12.2268C18.5367 12.5414 18.6229 13.0651 18.3845 13.4779L17.2043 15.5221C16.966 15.9349 16.4694 16.1221 16.0179 15.9693L14.4196 15.4287C13.8454 15.8967 13.1956 16.2754 12.4913 16.5437L12.1608 18.1961C12.0673 18.6635 11.6569 19 11.1802 19H8.81981C8.34312 19 7.93271 18.6635 7.83922 18.1961L7.50874 16.5437C6.80443 16.2754 6.1546 15.8967 5.58043 15.4287L3.98214 15.9694C3.5306 16.1221 3.03401 15.9349 2.79567 15.5221L1.61547 13.4779C1.37713 13.0651 1.4633 12.5415 1.82136 12.2268L3.08808 11.1135C3.03012 10.7509 3 10.379 3 10C3 9.62103 3.03012 9.2491 3.08808 8.88647L1.82136 7.77324C1.46331 7.45857 1.37713 6.93491 1.61547 6.52209L2.79567 4.47793C3.03401 4.06511 3.5306 3.87791 3.98214 4.03066L5.58042 4.57134C6.15459 4.10332 6.80442 3.72459 7.50874 3.45629L7.83922 1.80388ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Automations</span>
      </a>
      <!-- Analytics -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/productsanalytics">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 2C14.6716 2 14 2.67157 14 3.5V16.5C14 17.3284 14.6716 18 15.5 18H16.5C17.3284 18 18 17.3284 18 16.5V3.5C18 2.67157 17.3284 2 16.5 2H15.5Z" fill="#0F172A"></path>
      <path d="M9.5 6C8.67157 6 8 6.67157 8 7.5V16.5C8 17.3284 8.67157 18 9.5 18H10.5C11.3284 18 12 17.3284 12 16.5V7.5C12 6.67157 11.3284 6 10.5 6H9.5Z" fill="#0F172A"></path>
      <path d="M3.5 10C2.67157 10 2 10.6716 2 11.5V16.5C2 17.3284 2.67157 18 3.5 18H4.5C5.32843 18 6 17.3284 6 16.5V11.5C6 10.6716 5.32843 10 4.5 10H3.5Z" fill="#0F172A"></path>
      </svg>
      </div>
      <span>Analytics</span>
      </a>
      <!-- CRM (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/sellandscale">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12.5 7.5C12.5 8.88071 11.3807 10 10 10C8.61929 10 7.5 8.88071 7.5 7.5C7.5 6.11929 8.61929 5 10 5C11.3807 5 12.5 6.11929 12.5 7.5ZM10 12C8.04133 12 6.30187 12.9385 5.20679 14.3904C6.39509 15.687 8.1026 16.5 10 16.5C11.8974 16.5 13.6049 15.687 14.7932 14.3904C13.6981 12.9385 11.9587 12 10 12Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>CRM</span>
      </a>
      <!-- AI Tools (Redirect) -->
      <a class="disclosure-link" href="https://www.coursecreator360.com/sellandscale">
      <div class="disclosure-icon-container">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6H6V14H14V6Z" fill="#0F172A"></path>
      <path clip-rule="evenodd" d="M9.25 3V1.75C9.25 1.33579 9.58579 1 10 1C10.4142 1 10.75 1.33579 10.75 1.75V3H12.25V1.75C12.25 1.33579 12.5858 1 13 1C13.4142 1 13.75 1.33579 13.75 1.75V3H14.25C15.7688 3 17 4.23122 17 5.75V6.25H18.25C18.6642 6.25 19 6.58579 19 7C19 7.41421 18.6642 7.75 18.25 7.75H17V9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H17V12.25H18.25C18.6642 12.25 19 12.5858 19 13C19 13.4142 18.6642 13.75 18.25 13.75H17V14.25C17 15.7688 15.7688 17 14.25 17H13.75V18.25C13.75 18.6642 13.4142 19 13 19C12.5858 19 12.25 18.6642 12.25 18.25V17H10.75V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V17H7.75V18.25C7.75 18.6642 7.41421 19 7 19C6.58579 19 6.25 18.6642 6.25 18.25V17H5.75C4.23122 17 3 15.7688 3 14.25V13.75H1.75C1.33579 13.75 1 13.4142 1 13C1 12.5858 1.33579 12.25 1.75 12.25H3V10.75H1.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25H3V7.75H1.75C1.33579 7.75 1 7.41421 1 7C1 6.58579 1.33579 6.25 1.75 6.25H3V5.75C3 4.23122 4.23122 3 5.75 3H6.25V1.75C6.25 1.33579 6.58579 1 7 1C7.41421 1 7.75 1.33579 7.75 1.75V3H9.25ZM4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>AI Tools</span>
      </a>
      </div>
      </div>
      </div>
      <!-- End Products Disclosure -->
      <!-- Pricing -->
      <a class="mobile-menu-link" href="https://www.coursecreator360.com/cc360pricing">
      <div class="mobile-menu-link-icon">
      <svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M1 4C1 3.44772 1.44772 3 2 3H18C18.5523 3 19 3.44772 19 4V12C19 12.5523 18.5523 13 18 13H2C1.44772 13 1 12.5523 1 12V4ZM13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM4 9C4.55228 9 5 8.55228 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9ZM17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8ZM1.75 14.5C1.33579 14.5 1 14.8358 1 15.25C1 15.6642 1.33579 16 1.75 16C6.16731 16 10.4426 16.6028 14.4987 17.7301C15.6102 18.039 16.75 17.2183 16.75 16.0336V15.25C16.75 14.8358 16.4142 14.5 16 14.5C15.5858 14.5 15.25 14.8358 15.25 15.25V16.0336C15.25 16.1952 15.0861 16.3365 14.9004 16.2849C10.7147 15.1215 6.30435 14.5 1.75 14.5Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </div>
      <span>Pricing</span>
      </a>
      <!-- Login & Get Started -->
      <a class="mobile-login-btn" href="https://app.coursecreator360.com">
              Login
            </a>
      <a class="mobile-get-started-btn" data-modal-open="get-started">
              Get Started
              
      <path clip-rule="evenodd" d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z" fill="#0F172A" fill-rule="evenodd"></path>
      </svg>
      </a>
      </div>
      </div>
      <!-- GET STARTED MODAL -->
      <div aria-modal="true" id="get-started-modal" role="dialog">
      <div id="modal-overlay"></div>
      <div class="modal-box">
      <button aria-label="Close modal" class="close-modal-btn" data-close-modal="">
              X
            </button>
      <h1 class="modal-title" id="get-started-title">GET STARTED TODAY</h1>
      <div style="margin-bottom: 24px;">
      <input class="modal-input-field" id="modal-email" placeholder="Email Address" type="email"/>
      </div>
      <button class="modal-submit-btn" id="modal-submit-button">
              Get Started
            </button>
      <p class="modal-agreement">
              By proceeding you agree to our
              <a href="https://www.coursecreator360.com/cc360terms" target="_blank">
                Platform Terms
              </a>
              &amp;
              <a href="https://www.coursecreator360.com/cc360privacypolicy-9824" target="_blank">
                Privacy Notice
              </a>
              .
            </p>
      </div>
      </div>
      </div>
      `,m=document.createElement("div");m.innerHTML=b.replace(/<\/?body[^>]*>/gi,""),document.body.prepend(m);let g=()=>{document.body.style.cssText="overflow:hidden;touch-action:none"},v=()=>{document.body.style.cssText=""};(function(){let e=document.createElement("div");e.id="cc360-frame-overlay",Object.assign(e.style,{position:"fixed",inset:0,display:"none",zIndex:9999,background:"rgba(0,0,0,.65)",alignItems:"center",justifyContent:"center"}),e.innerHTML=`
      <div style="position:relative;width:92%;max-width:660px;min-height:460px;">
        <button id="cc360-frame-close"
                aria-label="Close"
                style="position:absolute;top:-44px;right:0;width:36px;height:36px;font-size:30px;line-height:30px;border:none;background:none;color:#fff;cursor:pointer">&times;</button>
        <iframe id="cc360-trial-iframe"
                src="https://link.coursecreator360.com/widget/form/weP0tCgEfttjKthZhXRg"
                style="width:100%;height:100%;border:none;border-radius:12px"
                data-layout='{"id":"POPUP"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="CC360 Start 30 Day Free Trial Form"
                data-form-id="weP0tCgEfttjKthZhXRg"
                title="CC360 Start 30 Day Free Trial Form"></iframe>
      </div>`,document.body.appendChild(e),l("script",{src:"https://link.coursecreator360.com/js/form_embed.js",defer:""},document.body);let o=()=>{document.body.style.cssText="overflow:hidden;touch-action:none"},n=()=>{document.body.style.cssText=""},t=()=>{e.style.display="flex",o()},a=()=>{e.style.display="none",n()};e.addEventListener("click",i=>{document.getElementById("cc360-trial-iframe").contains(i.target)||a()}),e.querySelector("#cc360-frame-close").addEventListener("click",a),document.addEventListener("keydown",i=>{i.key==="Escape"&&e.style.display==="flex"&&a()}),document.querySelectorAll('.btn-get-started, .btn-mobile-get-started, .mobile-get-started-btn, [data-modal-open="get-started"]').forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();let p=typeof getSegmentAnonId=="function"&&getSegmentAnonId(),C=typeof getAffiliateId=="function"&&getAffiliateId(),w=p||C,c=document.getElementById("cc360-trial-iframe");if(w&&c&&!c.src.includes("client_reference_id=")){let u=new URL(c.src);u.searchParams.set("client_reference_id",w),C&&u.searchParams.set("affiliate_id",C),c.src=u.toString()}t()})})})(),function(){let e=document.querySelector('[data-cc360-flyout-button="productsFlyout"]'),o=document.getElementById("productsFlyout");if(!e||!o)return;let n=!1,t=e.querySelector("svg");function a(){o.style.visibility="hidden",o.style.opacity="0",o.style.transform="translateX(-50%) scale(0.95)",n=!1,t&&(t.style.transform="rotate(0deg)")}e.addEventListener("click",i=>{if(i.stopPropagation(),n)return a();o.style.visibility="visible",o.style.opacity="1",o.style.transform="translateX(-50%) scale(1)",n=!0,t&&(t.style.transform="rotate(180deg)")}),document.addEventListener("click",i=>{n&&!o.contains(i.target)&&!e.contains(i.target)&&a()}),o.querySelectorAll(".flyout-link").forEach(i=>{i.addEventListener("click",()=>{let s=i.querySelector("a");s&&(location.href=s.href)})})}(),function(){let e=document.getElementById("mobile-menu"),o=document.getElementById("mobile-menu-overlay"),n=document.querySelectorAll('[data-cc360-toggle="mobile-menu"]'),t=!1;function a(){e.style.transform="translateX(100%)",e.addEventListener("transitionend",function i(){e.removeEventListener("transitionend",i),e.style.display="none"}),o.classList.remove("show"),t=!1,v()}n.forEach(i=>i.addEventListener("click",()=>{t?a():(e.style.display="block",o.classList.add("show"),requestAnimationFrame(()=>e.style.transform="translateX(0)"),t=!0,g())})),o.addEventListener("click",i=>{t&&(a(),i.stopPropagation())}),e.querySelectorAll(".mobile-menu-link, .mobile-login-btn, .mobile-get-started-btn").forEach(i=>i.addEventListener("click",a))}(),function(){let e=document.querySelector('[data-cc360-disclosure-button="products-disclosure"]'),o=document.getElementById("products-disclosure"),n=!1;e&&o&&e.addEventListener("click",()=>{let t=e.querySelector("svg");n?(o.style.display="none",t&&(t.style.transform="rotate(0deg)")):(o.style.display="block",t&&(t.style.transform="rotate(180deg)")),n=!n})}(),function(){document.body.addEventListener("click",o=>{if(!o.target.closest('[data-modal-open="get-started"]'))return;o.preventDefault();let t=document.getElementById("trialModal"),a=t?.querySelector(".modal-close");if(!t){console.warn("#trialModal not found");return}t.classList.add("open"),g();let i=()=>{t.classList.remove("open"),v(),t.removeEventListener("click",s),a?.removeEventListener("click",i)},s=p=>{p.target===t&&i()};a?.addEventListener("click",i,{once:!0}),t.addEventListener("click",s)})}()})();})();