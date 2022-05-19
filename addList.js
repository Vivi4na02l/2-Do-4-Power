let lists

if (!localStorage.lists) {
    lists = []
    localStorage.setItem('lists', JSON.stringify(lists));
} else {
    lists = JSON.parse(localStorage.getItem("lists"))
}

document.querySelector("#formAddList").addEventListener('submit', function(){
    let listName = document.querySelector("#txtListName").value
    let description = document.querySelector("#txtDescription").value
    let date = document.querySelector("#dtLimitDate").value
    let dificulty = document.querySelector("#sltDificulty").value
    let isDone = false
    let doneDate = ''

    if (!lists.find(pos => pos.name != listName)) {
        let list = {
            name: listName,
            description: description,
            date: date,
            dificulty: dificulty,
            isDone: isDone,
            doneDate: doneDate,
        }
    
        lists.push(list)   
        localStorage.setItem('lists', JSON.stringify(lists));
    } else {
        alert("This list's name already exists!")
    }
})