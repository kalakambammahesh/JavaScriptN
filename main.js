var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

//Form submit event

form.addEventListener('submit', addItem);

//Delete event 

itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    console.log("working");

    //Get InputValue
    var newItem = document.getElementById('item');

    //Creat new li element

    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);
    //Add text node input value;
    li.appendChild(document.createTextNode(newItem.value));

    //Create delete button
    var button = document.createElement('button')
    button.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    button.appendChild(document.createTextNode('X'));
    li.appendChild(button)
    itemList.appendChild(li);
}

function removeItem(e) {
    console.log("remove item")
    if(e.target.classList.contains('delete')) {
       if(confirm("Yes or No")) {
        console.log("clicked on delete");
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    //console.log(text);
    var items = itemList.getElementsByTagName('li');
    //onsole.log(items);
    Array.from(items).forEach((item)=>{
        //console.log(item);a
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none'
        }
    });
}
