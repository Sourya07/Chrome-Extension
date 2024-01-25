let arr = [];
const inputEl = document.getElementById("field");
const events = document.getElementById("button");
const ulEl = document.getElementById("ul");

events.addEventListener("click", function () {
    let values = inputEl.value;
    arr.push(values);
    foam();
    inputEl.value = "";
});

function foam() {
    let listitem = "";
    for (let i = 0; i < arr.length; i++) {

        listitem += `<li>
        <a target='_blank' href='${arr[i]}'>${arr[i]}</a></li>`;
    }
    ulEl.innerHTML = listitem;
}
