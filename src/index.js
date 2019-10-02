const backendURL = "http://localhost:3000/api/v1"
const bubblesContainer = document.querySelector("body > ul")
// const bobaURL = "http://bobamade.com/wp-content/uploads/2018/09/cropped-Site-Icon2018-09-512x512.png"
// const corgiURL = "https://media2.giphy.com/media/Kd5XdzdEhNqhYWe14S/source.gif"
const startButton = document.querySelector("#create")
const scoreNumber = document.querySelector("#number")
const boba = document.querySelectorAll(".boba")
let counter = 0

fetch(`http://localhost:3000/api/v1/users`)
.then(resp => resp.json())
.then(console.log)


document.getElementById('create').addEventListener('click', function () {
    let boba = document.getElementsByClassName('boba');
    for (var i = 0; i < boba.length; i++) {
        boba[i].classList.add('animate');
    }
})


function removeElement(elementId) {
    // Removes an element from the document
    // console.log(elementId)
    let element = document.querySelector(`[data-bub='${elementId}']`);
    // console.log(element[0])
    element.className = "matt"
    element.remove();
    // element[0].parentNode.removeChild(element[0]);
}

bubblesContainer.addEventListener("click", e => {
    console.log(e.target)
    if(e.target.className === "boba animate"){
        counter++
        scoreNumber.innerText = counter
        removeElement(e.target.dataset.id)
    }
})


