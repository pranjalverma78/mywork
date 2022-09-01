burger = document.querySelector(".burger")
menubar = document.querySelector(".menubar")
rightnav = document.querySelector(".rightnav")
search = document.querySelector(".search")

burger.addEventListener('click',()=>{
    menubar.classList.toggle('hid-class');

})

search.addEventListener('click',()=>{
    rightnav.classList.toggle('v-resp-right-nav')
})