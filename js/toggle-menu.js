window.addEventListener("load", () => {
  const button = document.querySelector(".toggle-menu-button");
  const menu = document.querySelector(".site-menu");
  const menuItems = document.querySelectorAll(".site-menu ul li");
  const revealItems = document.querySelectorAll(".skills-item.reveal");

  if (button && menu) {
    button.addEventListener("click", () => {
      menu.classList.toggle("is-show");
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("is-hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("is-hovered");
    });
  });

  if (revealItems.length > 0) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");

              const section = entry.target.closest("section");
              if (section) {
                section.classList.add("is-visible");
              }

              currentObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => {
        item.classList.add("is-visible");

        const section = item.closest("section");
        if (section) {
          section.classList.add("is-visible");
        }
      });
    }
  }
});