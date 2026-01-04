document.addEventListener("DOMContentLoaded", () => {
  const items = [/* YOUR EXACT ITEMS ARRAY FROM ORIGINAL */];
  const floor = document.getElementById("floor");

  function scatter(el) {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    const r = Math.random() * 30 - 15;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.transform = `rotate(${r}deg)`;
  }

  function makeDraggable(el) {
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    el.onmousedown = e => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = el.offsetLeft;
      startTop = el.offsetTop;
      el.style.zIndex = 1000;
    };

    document.onmousemove = e => {
      if (!isDragging) return;
      el.style.left = (startLeft + e.clientX - startX) + 'px';
      el.style.top = (startTop + e.clientY - startY) + 'px';
    };

    document.onmouseup = () => isDragging = false;
  }

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
