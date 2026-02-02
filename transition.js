document.addEventListener("click", e=>{
  if(e.target.tagName==="A"){
    e.preventDefault();
    const href = e.target.getAttribute("href"); // الرابط ديال الرابط اللي ضغطو
    const current = window.location.href.split("/").pop().split("#")[0].split("?")[0]; 
    // current = اسم الصفحة الحالي (مثلاً: acceuil.html)

    if(href !== current && href !== ""){ // إذا الرابط مختلف على الصفحة الحالية
      document.body.style.opacity=0;
      setTimeout(()=>window.location=href,300);
    }
    // إذا نفس الصفحة → ما ندير والو
  }
});
