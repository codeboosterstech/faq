let accordionItems = document.querySelectorAll(".accordion-items");

accordionItems.forEach(function (items) {
    let accordionTitle = items.querySelector(".accordion-title")
    let accordionContent = items.querySelector(".accordion-content")

    accordionTitle.addEventListener("click", function () {

        for (let i = 0; i < accordionItems.length; i++) {
            if (accordionItems
            [i] != items) {
                accordionItems[i].classList.remove("active")
            }
            else {
                items.classList.toggle("active")
            }
        }
    })
})
