const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg"
];

const texts = [
  "this somehow worked",
  "you had to be there",
  "felt normal at the time",
  "we laughed too long",
  "still makes sense",
  "no explanation needed",
  "this version mattered",
  "nothing planned",
  "I remember the feeling",
  "glad you were there"
];

const floor = document.getElementById("floor");

function scatter(el) {
  const x = Math.random() * 85;
  const y = Math.random() * 85;
  const r = (Math.random() * 40) - 20;

  el.style.left = `${x}vw`;
  el.style.top = `${y}vh`;
  el.style.transform = `rotate(${r}deg)`;
}

images.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = `images/${src}`;
  img.className = "memory";
  scatter(img);
  floor.appendChild(img);

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = texts[i];
  scatter(text);
  floor.appendChild(text);
});