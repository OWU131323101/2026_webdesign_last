window.addEventListener("load", () => {
  const revealItems = document.querySelectorAll(".skills-item.reveal");
  
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