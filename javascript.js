let height = window.innerHeight

document.querySelector("#divListOfLists").style.height = `${height*0.55}px`
let divOfListsHeight = parseInt(document.querySelector("#divListOfLists").style.height.slice(0, -2))

let btnImages = document.querySelectorAll('#btnImages')
for (const btnImage of btnImages) {
    btnImage.parentNode.style.height = `${divOfListsHeight*0.25}px`
    btnImage.parentNode.style.width = `${divOfListsHeight*0.25}px`

    btnImage.style.height = `${divOfListsHeight*0.15}px`
    btnImage.style.width = `${divOfListsHeight*0.15}px`
}

document.querySelector("#lowMenu").style.height = `${divOfListsHeight*0.5}px`

// alert(document.querySelector("#btnNotes").parentNode.width)