const share_button = document.querySelector(".share-button")
const share_popup = document.querySelector(".share-popup")
const profile = document.querySelector(".profile")
const footer = document.querySelector(".card-footer")

share_button.addEventListener('click', () => {
    share_popup.classList.toggle("active");
    profile.classList.toggle("active");
    share_button.classList.toggle("active")
    footer.classList.toggle("active")
})
