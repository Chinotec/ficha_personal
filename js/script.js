      // MODO NOCHE - Toggle Tema Oscuro/Claro
      (function initTheme() {
        const btn = document.createElement("button");
        btn.id = "theme-toggle";
        btn.textContent = "🌙";
        btn.setAttribute("aria-label", "Cambiar tema");
        document.querySelector(".caja").prepend(btn);

        const stored = localStorage.getItem("theme") || "light";
        const apply = (t) => {
          document.body.classList.toggle("dark-mode", t === "dark");
          btn.textContent = t === "dark" ? "☀️" : "🌙";
        };
        apply(stored);
        btn.addEventListener("click", () => {
          const newTheme = document.body.classList.contains("dark-mode")
            ? "light"
            : "dark";
          localStorage.setItem("theme", newTheme);
          apply(newTheme);
        });
      })();

      // RESALTAR PROYECTOS AL PASAR EL MOUSE
      (function initCardHighlight() {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            cards.forEach((c) => {
              if (c !== card) {
                c.style.opacity = "0.5";
                c.style.transform = "scale(0.95)";
              }
            });
            card.style.opacity = "1";
            card.style.transform = "scale(1.05)";
          });

          card.addEventListener("mouseleave", () => {
            cards.forEach((c) => {
              c.style.opacity = "1";
              c.style.transform = "scale(1)";
            });
          });
        });
      })();
