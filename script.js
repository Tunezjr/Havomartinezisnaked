document.addEventListener("DOMContentLoaded", () => {
  const items = [
    { img: "IMG_1603.jpeg", text: "I give up on you bro 🤣" },
    { img: "IMG_1584.jpeg", text: "I can’t believe these pictures 🤣" },
    { img: "IMG_1587.jpeg", text: "This is your legacy HAVOOOOOOOO" },
    { img: "IMG_1590.jpeg", text: "Hafansky the hippo" },
    { img: "IMG_1589.jpeg", text: "Spider-Man you bad boyyyy😭😭😭" },
    { img: "IMG_1588.jpeg", text: "I don’t know what half these animals are bro 🤣" },
    { img: "IMG_1595.jpeg", text: "why did we think this was normal" },
    { img: "IMG_1598.jpeg", text: "no explanation needed" },
    { img: "IMG_1597.jpeg", text: "this still kills me" },
    { img: "IMG_1600.jpeg", text: "never deleting this" }
  ];

  const floor = document.getElementById("floor");

  function scatter(el) {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    const r = Math.random() * 30 - 15;

    el.style.position = "absolute";
    el.style.left = `${x}vw`;
    el.style.top = `${y}vh`;
    el.style.transform = `rotate(${r}deg)`;
  }

  function makeDraggable(el) {
    let offsetX = 0, offsetY = 0, dragging = false;

    el.addEventListener("pointerdown", e => {
      dragging = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      el.setPointerCapture(e.pointerId);
      el.style.zIndex = 9999;
    });

    el.addEventListener("pointermove", e => {
      if (!dragging) return;
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    });

    el.addEventListener("pointerup", () => {
      dragging = false;
      el.style.zIndex = "";
    });
  }

  items.forEach(item => {
    const img = new Image();
    img.src = `/${item.img}`;
    img.className = "memory";

    img.onload = () => {
      scatter(img);
      makeDraggable(img);
      floor.appendChild(img);
    };

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = item.text;
    scatter(text);
    makeDraggable(text);
    floor.appendChild(text);
  });
});