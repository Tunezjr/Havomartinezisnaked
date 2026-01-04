document.addEventListener("DOMContentLoaded", () => {
  const items = [
    { img: "IMG_1603.jpeg", text: "that night still feels loud" },
    { img: "IMG_1584.jpeg", text: "you were there" },
    { img: "IMG_1587.jpeg", text: "this was the good part" },
    { img: "IMG_1590.jpeg", text: "felt normal at the time" },
    { img: "IMG_1589.jpeg", text: "why was this so funny" },
    { img: "IMG_1588.jpeg", text: "we didn’t explain anything" },
    { img: "IMG_1595.jpeg", text: "this version mattered" },
    { img: "IMG_1598.jpeg", text: "hard to explain, easy to remember" },
    { img: "IMG_1597.jpeg", text: "some things stuck" },
    { img: "IMG_1600.jpeg", text: "I’m glad you saw this" }
  ];

  const floor = document.getElementById("floor");

  function scatter(el) {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    const r = Math.random() * 30 - 15;

    el.style.left = `${x}vw`;
    el.style.top = `${y}vh`;
    el.style.transform = `rotate(${r}deg)`;
  }

  items.forEach(item => {
    const img = new Image();
    img.src = `images/${item.img}`;
    img.className = "memory";

    img.onload = () => {
      scatter(img);
      floor.appendChild(img);
    };

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = item.text;
    scatter(text);
    floor.appendChild(text);
  });
});