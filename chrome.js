let arr = [];
let oldLeads = []
const inputEl = document.getElementById("field");
const events = document.getElementById("button");
const ulEl = document.getElementById("ul");
const deleteBtn = document.getElementById("delete-btn")

// localStorage.setItem("arr","sourya")
// let namee=localStorage.getItem("arr")
// console.log(namee)
// localStorage.clear()

let leadsFromlocakstorage=JSON.parse(localStorage.getItem("arr") )
if (leadsFromlocakstorage) {
    arr = leadsFromlocakstorage
   foam(arr)
}
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    arr = []
   foam()
})



events.addEventListener("click", function () {
    let values = inputEl.value;
    arr.push(values);
    inputEl.value = "";
    localStorage.setItem("arr",JSON.stringify(arr))
    foam();
    
});

function foam(leads) {
    let listitem = "";
    for (let i = 0; i < arr.length; i++) {

        listitem += `<li>
        <a target='_blank' href='${arr[i]}'>
        ${arr[i]}</a></li>`;
    }
    ulEl.innerHTML = listitem;
}
