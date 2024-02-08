let elSitesTemplate = document.querySelector(".sites-template").content
let elResult = document.querySelector(".sites__list")
let sitesFragment = new DocumentFragment()



function renderSites(array) {
    for (let i = 0; i < array.length; i++) {
        let newTemplate = elSitesTemplate.cloneNode(true)
        newTemplate.querySelector(".sites__item-title").textContent = array[i].title
        newTemplate.querySelector(".sites__item-title").href = array[i].link
        newTemplate.querySelector(".sites__item-title").setAttribute("target","_blank")
        newTemplate.querySelector(".sites__item-paragraph").textContent = array[i].paragraph


        sitesFragment.appendChild(newTemplate)
    }
    elResult.appendChild(sitesFragment)
}
renderSites(sites)