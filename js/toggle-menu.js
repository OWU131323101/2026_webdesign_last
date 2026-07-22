window.addEventListener("load", () => {
  const button = document.querySelector(".toggle-menu-button");
  const menu = document.querySelector(".site-menu");
  const menuItems = document.querySelectorAll(".site-menu ul li");

  if (button && menu) {
    button.addEventListener("click", () => {
      menu.classList.toggle("is-show");
    });
  }

  const menuLinks = document.querySelectorAll(".site-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("is-show")) {
        menu.classList.remove("is-show");
      }
    });
  });

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("is-hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-hovered");
    });
  });
});