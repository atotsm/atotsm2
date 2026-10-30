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