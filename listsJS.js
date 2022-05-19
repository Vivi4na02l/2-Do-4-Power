let height = window.innerHeight

document.querySelector("#divListOfLists").style.height = `${height*0.70}px`
let divOfListsHeight = parseInt(document.querySelector("#divListOfLists").style.height.slice(0, -2))

document.querySelector("#lowMenu").style.height = `${divOfListsHeight*0.5}px`