//menu toggle + click event to cross finger
const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('open')
})

//list color
const list = document.querySelectorAll('.list')
function activLink() {
    list.forEach(item => {
        item.classList.remove('active')
        this.classList.add('active')
    });
}

list.forEach(item => {
    item.addEventListener('click', activLink)
});