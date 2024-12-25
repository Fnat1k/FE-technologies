const n = 169;
const targetIndex = (n % 10); 

const allElements = [];
document.querySelectorAll('h2, h3, p, ul li, ol li').forEach(el => allElements.push(el));

const targetElement = allElements[targetIndex];
const nextElement = allElements[targetIndex + 1] || allElements[0];

function changeColor(element, colorClass) {
    element.classList.toggle(colorClass);
}

if (targetElement) {
    targetElement.addEventListener('click', function () {
        changeColor(targetElement, 'blue-background'); 
    });
}


if (nextElement) {
    nextElement.addEventListener('click', function () {
        changeColor(nextElement, 'green-background');
    });
}




/// images
const imageContainer = document.getElementById('image-container');
const addButton = document.getElementById('add-button');
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');
const removeButton = document.getElementById('remove-button');


let images = [];


addButton.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = 'https://lviv.travel/image/seo/dc/6c/dc6ce62c2a8202d913e5a1221e83883db65f4ae6_1711617801.jpg?crop=5985%2C3142%2C-6%2C858&w=1200&h=630';
    img.alt = 'Фото міста Львів';
    img.width = 600;
    imageContainer.appendChild(img);  
    images.push(img);  
});

increaseButton.addEventListener('click', () => {
    if (images.length > 0) {
        const lastImg = images[images.length - 1];
        lastImg.width += 50;
    }
});

decreaseButton.addEventListener('click', () => {
    if (images.length > 0) {
        const lastImg = images[images.length - 1];
        if (lastImg.width > 50) {
            lastImg.width -= 50;
        }
    }
});

removeButton.addEventListener('click', () => {
    if (images.length > 0) {
        const lastImg = images.pop(); 
        imageContainer.removeChild(lastImg); 
    } else {
        alert("Немає зображень для видалення!"); 
    }
});


