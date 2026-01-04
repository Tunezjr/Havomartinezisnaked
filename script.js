document.addEventListener("DOMContentLoaded", () => {
  const items = [
    { img: "IMG_1603.jpeg", text: "that night still feels loud" },
    { img: "IMG_1584.jpeg", text: "you were there" },
    { img: "IMG_1587.jpeg", text: "this was the good part" },
    { img: "IMG_1590.jpeg", text: "felt normal at the time" },
    { img: "IMG_1589.jpeg", text: "Mrs Martinez should mever see these 🤣🤣" },
    { img: "IMG_1588.jpeg", text: "we didn't explain anything, but broo😭😭😭" },
    { img: "IMG_1595.jpeg", text: "you traumatized me so bad bro🤣" },
    { img: "IMG_1598.jpeg", text: "hard to explain, easy to remember" },
    { img: "IMG_1597.jpeg", text: "some things stuck.. like spiderman penis 😭" },
    { img: "IMG_1600.jpeg", text: "I'm glad you saw this but i am traumatized 💔" }
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

  function makeDraggable(el) {
    let isDragging = false;
    let startX, startY, initialX, initialY;

    el.addEventListener("pointerdown", (e) => {
      isDragging = true;
      initialX = parseFloat(el.style.left) / 100 * window.innerWidth;
      initialY = parseFloat(el.style.top) / 100 * window.innerHeight;
      const rect = el.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;
      el.setPointerCapture(e.pointerId);
      el.style.zIndex = 1000;
      el.style.transition = 'none';
    });

    el.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const newX = (e.clientX - startX) / window.innerWidth * 100;
      const newY = (e.clientY - startY) / window.innerHeight * 100;
      el.style.left = `${Math.max(0, Math.min(90, newX))}vw`;
      el.style.top = `${Math.max(0, Math.min(90, newY))}vh`;
    });

    el.addEventListener("pointerup", () => {
      isDragging = false;
      el.style.zIndex = "";
      el.style.transition = 'transform 0.2s ease';
    });
  }

  // Create ALL elements after DOM is ready
  items.forEach(item => {
    // Image
    const img = new Image();
    img.src = `/${item.img}`;
    img.className = "memory";
    img.onload = () => {
      scatter(img);
      makeDraggable(img);
      floor.appendChild(img);
    };

    // Text  
    const text = document.createElement("div");
    text.className = "text";
    text.textContent = item.text;
    scatter(text);
    makeDraggable(text);
    floor.appendChild(text);
  });
});
