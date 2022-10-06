const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

//Display items container
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');


submit.addEventListener('click', addItem);
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeSingleItem);



function showAction( value , action) {
    let showNotifaction = document.CreateElement("h4");
    if(action== true){
        showNotifaction.innerHTML = value;
        showNotifaction.classList.add("success");
        setTimeout(function(){
            showNotifaction.classList.remove("success");
        },3000);


    }
    


}


function createListItem(value){
    let parent = document.CreateElement('div');
    parent.classList.add('grocery-list');

    parent.innerHTML = ` <h4 class="grocery-item__title">${value}</h4>
    <a href="#" class="grocery-item__link">
        <i class="far fa-trash-alt"></i>
    </a>`;
    list.appendChild(parent);
}