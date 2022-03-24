(() => {
  "use strict";
  ((t) => {
    const e = document.getElementById("timer-hours"),
      n = document.getElementById("timer-minutes"),
      o = document.getElementById("timer-seconds");
    let c = 0;
    const l = () => {
      let t = (() => {
        let t = (new Date("24 march 2022").getTime() - new Date().getTime()) / 1e3;
        return {
          timeRemaining: t,
          hours: Math.floor(t / 60 / 60),
          minutes: Math.floor((t / 60) % 60),
          seconds: Math.floor(t % 60),
        };
      })();
      (e.textContent = t.hours),
        (n.textContent = t.minutes),
        (o.textContent = t.seconds),
        e.textContent < 10 && (e.textContent = "0" + e.textContent),
        n.textContent < 10 && (n.textContent = "0" + n.textContent),
        o.textContent < 10 && (o.textContent = "0" + o.textContent),
        t.timeRemaining <= 0 &&
          ((e.textContent = "00"), (n.textContent = "00"), (o.textContent = "00"), clearInterval(c));
    };
    l(), (c = setInterval(l, 1e3));
  })(),
    (() => {
      const t = document.querySelector(".menu"),
        e = document.querySelector("menu"),
        n = e.querySelector(".close-btn"),
        o = e.querySelectorAll("ul>li>a"),
        c = () => {
          e.classList.toggle("active-menu");
        };
      t.addEventListener("click", c), n.addEventListener("click", c), o.forEach((t) => t.addEventListener("click", c));
    })(),
    (() => {
      const t = document.querySelector(".popup"),
        e = document.querySelectorAll(".popup-btn"),
        n = t.querySelector(".popup-close"),
        o = t.querySelector(".popup-content"),
        c = window.screen.width;
      e.forEach((e) => {
        e.addEventListener("click", () => {
          let e,
            n = 0;
          (t.style.display = "block"), (o.style.top = "-50%");
          const l = () => {
            n++,
              (e = requestAnimationFrame(l)),
              n < 25 ? (o.style.top = 3 * n - 50 + "%") : cancelAnimationFrame(e),
              c < 768 && ((t.style.display = "block"), (o.style.top = "20%"));
          };
          l();
        });
      }),
        n.addEventListener("click", () => {
          t.style.display = "none";
        });
    })();
})();
