document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('#burger');
    let menu = document.querySelector('.menu_burger');
    if (burger && menu) {
        burger.addEventListener("click", function () {
            if (!this.classList.contains('open')) {
                this.classList.add('open')
                menu.classList.add('open')
            } else {
                this.classList.remove('open')
                menu.classList.remove('open')
            }


        })
    }

});