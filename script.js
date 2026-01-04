document.addEventListener("DOMContentLoaded", () => {
  const items = [
    {
      img: "3244D4D8-A69D-49C0-A6C4-9660E4D366B5.jpeg",
      text: "that night still feels loud"
    },
    {
      img: "4EE1AE2B-096E-4597-AC55-2DFE2B2DC3EB.jpeg",
      text: "you were there"
    },
    {
      img: "AA74C1B1-1D9D-4481-B9A1-7709698DB52F.jpeg",
      text: "this was the good part"
    },
    {
      img: "17142093-4A4D-40DE-877C-BED1224896F8.jpeg",
      text: "felt normal at the time"
    },
    {
      img: "7705A386-3D61-4C81-A0D1-7C6736187710.jpeg",
      text: "why was this so funny"
    },
    {
      img: "401C6420-4EC5-4503-BC98-71DAD502F15B.jpeg",
      text: "we didn’t explain anything"
    },
    {
      img: "52AD3AA1-C9F7-45FA-BE4D-38AD79F8C7AE.jpeg",
      text: "this version mattered"
    },
    {
      img: "7C26B52A-F7D8-492E-870F-415FC28F6A47.jpeg",
      text: "hard to explain, easy to remember"
    },
    {
      img: "7A23A34E-BD84-4E23-A9BF-21721C899DD9.jpeg",
      text: "some things stuck"
    },
    {
      img: "C20BC6CE-AFC6-4F0C-A7E9-083919C4CD43.jpeg",
      text: "I’m glad you saw this"
    }
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