const b=document.querySelector(".menu"),n=document.querySelector(".links");if(b&&n){b.addEventListener("click",()=>{let o=b.getAttribute("aria-expanded")!=="true";b.setAttribute("aria-expanded",String(o));n.classList.toggle("open",o)});n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{n.classList.remove("open");b.setAttribute("aria-expanded","false")}))}
document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
// Build a compact, page-specific section index from the actual page headings.
const sectionNav=document.querySelector(".section-map nav");
if(sectionNav){
 const sections=[...document.querySelectorAll("main > section")];
 sections.forEach((section,i)=>{
  const heading=section.querySelector("h2");
  if(!heading)return;
  if(!section.id){
   const slug=heading.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
   section.id=slug||"section-"+(i+1);
  }
  const link=document.createElement("a");
  link.href="#"+section.id;
  link.textContent=heading.textContent.replace(/\s+/g," ").trim();
  sectionNav.appendChild(link);
  link.addEventListener("click",()=>{const details=sectionNav.closest("details");if(details)details.open=false});
 });
 if(!sectionNav.children.length)sectionNav.closest("details").hidden=true;
}

// Smooth, deliberate in-page navigation: keep the URL in sync, scroll visibly,
// and briefly mark the destination so visitors understand where they arrived.
document.addEventListener("click",event=>{
 const link=event.target.closest('a[href^="#"]');
 if(!link)return;
 const raw=link.getAttribute("href");
 if(!raw||raw==="#")return;
 let target;
 try{target=document.getElementById(decodeURIComponent(raw.slice(1)))}catch{return}
 if(!target)return;
 event.preventDefault();
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const destination=target.closest("main section")||target;
 if(history.pushState)history.pushState(null,"",raw);
 destination.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"});
 const heading=destination.querySelector("h1,h2,h3")||destination;
 if(!heading.hasAttribute("tabindex"))heading.setAttribute("tabindex","-1");
 window.setTimeout(()=>heading.focus({preventScroll:true}),reduced?0:350);
 destination.classList.remove("section-arrival");
 void destination.offsetWidth;
 destination.classList.add("section-arrival");
 window.setTimeout(()=>destination.classList.remove("section-arrival"),1900);
 const details=link.closest(".section-map");
 if(details)details.removeAttribute("open");
});

// In-place four-step exploration: one answer open at a time.
document.addEventListener("click",event=>{
 const button=event.target.closest(".step-toggle");
 if(!button)return;
 const panel=document.getElementById(button.getAttribute("aria-controls"));
 if(!panel)return;
 const opening=button.getAttribute("aria-expanded")!=="true";
 document.querySelectorAll(".step-toggle[aria-expanded='true']").forEach(other=>{
  if(other===button)return;
  other.setAttribute("aria-expanded","false");
  const otherPanel=document.getElementById(other.getAttribute("aria-controls"));
  if(otherPanel)otherPanel.hidden=true;
  const marker=other.querySelector(".step-link [aria-hidden='true']");
  if(marker)marker.textContent="＋";
  const card=other.closest(".explore-step");
  if(card)card.classList.remove("is-open");
 });
 button.setAttribute("aria-expanded",String(opening));
 panel.hidden=!opening;
 const marker=button.querySelector(".step-link [aria-hidden='true']");
 if(marker)marker.textContent=opening?"−":"＋";
 const card=button.closest(".explore-step");
 if(card)card.classList.toggle("is-open",opening);
});
