// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const urlDog = "https://dog.ceo/api/breeds/image/random";

const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const renderDog = (item) => {
    return `
    <div class="dog-image">
        <img src="${item.message}" alt="dog" >
    </div>
    `
}

const dogBox = document.querySelector(".dog-box");

function getDog(url) {
    let count = 1;
    const timerId = setInterval(async function () {
        if (count === 10) {
            clearInterval(timerId);
        }
        const dog = await getData(url);
        dogBox.insertAdjacentHTML('afterbegin', renderDog(dog));
        count++;
    }, 3000);
}

try {
    getDog(urlDog);
} catch (error) {
    console.log('Ошибочка');
}

