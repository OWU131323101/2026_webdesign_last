window.addEventListener("load", () =>{
        const button = document.querySelector(".toggle-menu-button");
        const menu = document.querySelector(".site-menu");
        
        if (button && menu) {
            button.addEventListener("click", () =>{
                menu.classList.toggle("is-show");
            });
        }
});