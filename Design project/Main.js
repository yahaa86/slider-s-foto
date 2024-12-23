const img = document.querySelector  ('.slider_image');

const dots = document.querySelectorAll('.slider_dot');

const imgArr = ['./images/admiral.png','./images/Sochi.png','./images/Patriotic.png'];

let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex); 
}
function nextIndex(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }

    slide(currentIndex);
}
function slide(index) {
    img.src = imgArr[index];
}

function toggleBorder(element) {
        // Убираем бордер у всех ссылок
        const links = document.querySelectorAll('.link');
        links.forEach(link => link.classList.remove('active'));

        // Добавляем бордер к нажатой ссылке
        element.classList.add('active');
    }

const links = document.querySelectorAll('.link');
const mainImage = document.getElementById('mainImage');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Удаляем класс 'active' у всех ссылок
    links.forEach(l => l.classList.remove('active'));

    // Добавляем класс 'active' к текущей ссылке
    link.classList.add('active');

    // Меняем изображение
    mainImage.src = link.dataset.image;
  });
});


