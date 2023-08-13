// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. 
// Пользователь должен иметь возможность удалить любого пользователя из списка. 
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. 
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const urlUsers = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
}

const listElem = document.querySelector('.user-list');

const renderUserItem = (element) => {
    return `
    <div class="user__item" data-userid="${element.id}">
        <h3 class="user__name">${element.name}</h3>
        <p class="user__email"><span>Email:</span> ${element.email}</p>
        <p class="user__address"><span>Adress:</span> ${element.address.suite}, ${element.address.street}, ${element.address.city}, ${element.address.zipcode}</p>
        <p class="user__phone"><span>Phone number:</span> ${element.phone}</p>
        <p class="website"><span>Website:</span> ${element.website}</p>
        <button class="delete">Delete user</button>
      </div>
    `
}
const deleteUserItem = (item) => {
    item.remove();

}
const deleteUserFromLocalSt = (id) => {
    const usersLocalSt = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < usersLocalSt.length; i++) {
        if (usersLocalSt[i].id === id) {
            usersLocalSt.splice(i, 1);
            localStorage.users = JSON.stringify(usersLocalSt);
            return;
        }
    }
}

try {
    const userList = await getData(urlUsers);
    localStorage.users = JSON.stringify(userList);
    userList.forEach(element => {
        listElem.insertAdjacentHTML('beforeend', renderUserItem(element))
    });
    listElem.addEventListener('click', (event) => {
        if (event.target.tagName !== "BUTTON") {
            return;
        } else {
            const targetUser = event.target.parentElement;
            deleteUserFromLocalSt(Number(targetUser.dataset.userid));
            deleteUserItem(targetUser);
        }
    })
} catch (error) {
    console.log("Что-то пошло не так");
}




