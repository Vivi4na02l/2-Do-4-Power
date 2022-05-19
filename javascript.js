let height = window.innerHeight

let divList = document.querySelector("#divList")

divList.style.height = `${height*0.55}px`
let divOfListsHeight = parseInt(document.querySelector("#divList").style.height.slice(0, -2))

let btnImages = document.querySelectorAll('#btnImages')
for (const btnImage of btnImages) {
    btnImage.parentNode.style.height = `${divOfListsHeight*0.25}px`
    btnImage.parentNode.style.width = `${divOfListsHeight*0.25}px`

    btnImage.style.height = `${divOfListsHeight*0.15}px`
    btnImage.style.width = `${divOfListsHeight*0.15}px`
}

document.querySelector("#lowMenu").style.height = `${divOfListsHeight*0.5}px`

if (localStorage.lists) {
    lists = JSON.parse(localStorage.getItem("lists"))
}

if (!localStorage.lists || lists.length == 0) {
    divList.innerHTML = `
        <p>You have no lists yet</p>
    `
} else {
    putAllTasks()
}


for (const check of document.querySelectorAll("#cbComplete")) {
    check.addEventListener('click', function() {
        clickedList = this.parentNode.children[1].firstElementChild.innerHTML

        posList = lists.findIndex(pos => pos.name == clickedList)
        if (lists[posList].isDone == true) {
            lists[posList].isDone = false
            localStorage.setItem('lists', JSON.stringify(lists));

            this.parentNode.children[1].firstElementChild.style.color = "#c40505"
            this.parentNode.children[1].firstElementChild.style.textDecoration = "none"
        } else {
            lists[posList].isDone = true
            localStorage.setItem('lists', JSON.stringify(lists));

            this.parentNode.children[1].firstElementChild.style.color = "#80c605"
            this.parentNode.children[1].firstElementChild.style.textDecoration = "line-through"
        }

    })
}

document.querySelector("#txtFilter").addEventListener('input', function() {
    let filter = document.querySelector("#txtFilter").value

    allLists = `
        <div class="d-flex flex-column py-4" style="width: 100%; height: ${divOfListsHeight}px; overflow-y: scroll;">
    `
    
    for (const list of lists) {
        if (list.name.includes(filter)) {
            allLists += `
                <span class="d-flex flex-row" style="width: 100%; height: ${divOfListsHeight/10}px">
                    <span class="d-flex flex-row ml-5 mt-2">
                        <input class="mt-1 mr-2" type="checkbox" id="cbComplete">
                        <a>
                            <p style="color: #c40505;">${list.name}</p>
                        </a>
                    </span>

                    <a id="btnTrash">
                        <img src="images/trash.png" style="width: 100%; height: ${divOfListsHeight/10}px">
                    </a>
                </span>
            `   
        }
    }

    allLists += `</div>`

    divList.innerHTML = allLists
})

for (const trash of document.querySelectorAll("#btnTrash")) {
    trash.addEventListener('click', function() {
        clicked = this.parentNode.firstElementChild.children[1].firstElementChild.innerHTML
        posList = lists.findIndex(pos => pos.name == clicked)

        if (lists[posList].isDone && confirm("Are you sure you want to delete this task?")) {

            lists2 = []
            for (const pos of lists) {
                if (pos.name != clicked) {
                    lists2.push(pos)
                }
            }
            lists = lists2

            localStorage.setItem('lists', JSON.stringify(lists));

        } else {
            if (!lists[posList].isDone && confirm("Are you sure you want to delete this task?")) {
                alert("You can only delete completed tasks!")
            }
        }

        
    })
}

function putAllTasks() {
    let allLists = ''

    allLists = `
        <div class="py-4" style="display: flex; flex-direction: column; width: 100%; height: ${divOfListsHeight}px; overflow-y: scroll;">
    `
    
    for (const list of lists) {
        allLists += `
            <span class="d-flex flex-row justify-content-between" style="width: 100%; height: ${divOfListsHeight/10}px">
                <span class="d-flex flex-row ml-5 mt-2">
                    <input class="mt-1 mr-2" type="checkbox" id="cbComplete">
                    <a>
                        <p style="color: #c40505;">${list.name}</p>
                    </a>
                </span>

                <a id="btnTrash">
                    <img src="images/trash.png" style="width: 100%; height: ${divOfListsHeight/10}px">
                </a>
                
            <span/>
        `
    }

    allLists += `</div>`

    divList.innerHTML = allLists
}