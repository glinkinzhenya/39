// Пишемо свій слайдер зображень.
// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next.Аналогічно з першим зображенням і кнопкою Prev.

const left = document.getElementById("left")
const right = document.getElementById("right")
const image = document.getElementById("image")

let y = 1;

right.addEventListener("click", () => {
    if (y === 3) right.setAttribute("class", "none");
    if (y === 1) left.setAttribute("class", "left");
    y += 1;
    image.setAttribute("src", `img/${y}.jpg`);
});

left.addEventListener("click", () => {
    if (y === 3) right.setAttribute("class", "right");
    if (y === 2) left.setAttribute("class", "none");
    y -= 1;
    image.setAttribute("src", `img/${y}.jpg`);
});

left.onmouseenter = () => left.setAttribute("src", `img/arrow_left_2.png`);
left.onmouseleave = () => left.setAttribute("src", `img/arrow_left_1.png`);
right.onmouseenter = () => right.setAttribute("src", `img/arrow_right_2.png`);
right.onmouseleave = () => right.setAttribute("src", `img/arrow_right_1.png`);