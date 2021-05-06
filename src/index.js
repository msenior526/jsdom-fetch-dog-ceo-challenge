console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        const imageContainer = document.getElementById('dog-image-container');
        json.message.forEach((element) => {
            const image = document.createElement('img');
            image.src = element;
            imageContainer.appendChild(image);
        })
    })
})

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        const dogBreedList = document.getElementById('dog-breeds');
        for ( const key in json.message) {
            const listItem = document.createElement('li');
            listItem.innerText = key;
            listItem.addEventListener('click', (e) => {
                listItem.style.color = "red";
            })
            dogBreedList.appendChild(listItem);
        }
    })
})


