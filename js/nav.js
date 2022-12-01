const hamburger = document.getElementById("hamburger")
const menuItem = document.querySelectorAll(".menu-item")

hamburger.addEventListener("click", () => {
    let body = document.body.classList

    body.contains("menu-active") ?
        body.remove("menu-active") :
        body.add("menu-active")
})

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        document.body.classList.remove("menu-active")
    })
})