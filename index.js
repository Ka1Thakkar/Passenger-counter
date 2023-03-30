// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

console.log(countEl)

let count = 0
let total = 0

totalEl.textContent = total

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " - " + count
    if (saveEl.textContent == "Previous entries: ") {
        saveEl.textContent += count
    }
    else {
        saveEl.textContent += countStr
    }
    total += count
    totalEl.textContent = total
    count = 0
    countEl.textContent = 0
}

function reset(){
    count = 0
    total = 0
    saveEl.textContent = "Previous entries: "
    totalEl.textContent = total
}

