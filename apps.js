const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");


/* En cas de clique, ouvre en full "data-original et la légende */
previews.forEach(preview=> {
    preview.addEventListener("click", ()=>{
        modal.classList.add("open");
        original.classList.add("open");
        const originalSrc =preview.getAttribute("data-original");
        original.src= `/full/${originalSrc}`;
        const altText =preview.alt;
        caption.textContent = altText
    });
});

/* Si en cas de clique sur un contenu ouvert un autre clique peut refermer le contenu*/
modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});