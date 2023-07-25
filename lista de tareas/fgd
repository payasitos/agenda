function seleciondiv() {
    let selection = document.getElementById("myselect");
    let selectdOption = parseInt(selection.value);

    let divs = document.querySelectorAll('.card')

    for (let i = 0; i < divs.length; i++) {
        if (i < selectdOption) {
            divs[i].classList.remove("hidden");
        }
        else {
            divs[i].classList.add("hidden");
        }

    }

    console.log(divs.length)
}

let cardcount = 11

function Agregar() {

    let titulo = document.getElementById("titulo").value
    let link = document.getElementById("link").value
    let historia = document.getElementById("historia").value

    const card = document.createElement('div')
    card.classList.add("card")

    let title = document.createElement('h3')
    title.textContent = titulo;

    let image = document.createElement('img')
    title.setAttribute("src", link)

    let story = document.createElement('p')
    story.textContent = historia;

    card.append(title, image, story)
    const divcards = document.querySelector('.cards')
    divcards.appendChild(card)

}