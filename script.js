const info = document.querySelector('.info').querySelectorAll('a');
info.forEach(el => {
    el.addEventListener('click', function(){
        info.forEach(e => e.classList.remove("active"))

        this.classList.add('active')
    })
})