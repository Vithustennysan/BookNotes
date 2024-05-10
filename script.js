function overlay(){
    document.querySelector(".overlay").style.display = "block"
    document.getElementById("remover").style.display = "block"
    document.getElementById("popup").style.display = "block"
}

function remove(){
    event.target.parentElement.remove()
}

function removeOverlay() {
    document.querySelector(".overlay").style.display = "none"
    document.getElementById("remover").style.display = "none"
    document.getElementById("popup").style.display = "none"
}

let container = document.getElementById("container")

function clearNote() {
    document.getElementById("noteTitle").value = ""
    document.getElementById("noteOwner").value = ""
    document.getElementById("noteContent").value = ""
}
function addNote() {

    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")
    let btn = document.createElement("button")

    btn.onclick = () => remove(event)
    div.className = "default-note"

    let noteTitle =  document.getElementById("noteTitle").value
    let noteOwner =  document.getElementById("noteOwner").value
    let noteContent =  document.getElementById("noteContent").value

    if ( noteTitle != "" && noteOwner != "" && noteContent != ""){
        h2.textContent =noteTitle
        h4.textContent = noteOwner
        p.textContent = noteContent
        btn.textContent = "Delete"
        div.append(h2)
        div.append(h4)
        div.append(p)
        div.append(btn)
        container.append(div)
        clearNote()
        removeOverlay()
    }else{
        alert("Fill all the blanks!")
    }

}
