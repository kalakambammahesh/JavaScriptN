//EXAMINE The DOCUMENT OBJECT 

// console.log("Working");
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// //document.title = 123;
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[20]);
// document.all[20].textContent = "Heello 123";

// console.log(document.forms[1]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.anchors);

//GET ELEMENT BY ID //
//var headerTil = document.getElementById('header-title')
//var header = document.getElementById('main-header');
// console.log(headerTil);
// headerTil.textContent = "Hello234"
// headerTil.innerText = "Hello***";
// headerTil.innerHTML = "<h3>Hell09999</h3>"
// console.log(headerTil);

//header.style.borderBottom = "solid 3px #000";

//GET ELEMENTS BY CLAS NAME//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items.length);
// console.log(items[3]);
// items[2].textContent = 123;
// items[2].style.fontWeight = "bold";
// items[2].style.backgroundColor = "yellow"
// console.log(items);

// Gives Error //items.style.backgroundColor = "#f4f4f4";

// for(var i = 0;i < items.length;i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }


//GET ELEMENTS BY TAG NAME//
//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li.length);
// console.log(li[3]);
// li[2].textContent = 123;
// li[2].style.fontWeight = "bold";
// li[2].style.backgroundColor = "yellow"
// console.log(li);

// //items.style.backgroundColor = "#f4f4f4";

// for(var i = 0;i < li.length;i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }


// QUERYSELECTOR //


// var header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 3px red";
// console.log(header);

// var input = document.querySelector('input');
// input.value = 123;

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// console.log(item);

// var lastItem = document.querySelector('.list-group-item:last-child');
// console.log(lastItem)

// var firstItem = document.querySelector('.list-group-item:first-child');
// console.log(firstItem);

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// console.log(secondItem)

//Query Selector All

// var titles = document.querySelectorAll('.title');
// titles[0].textContent = "Hello1234";
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');

// console.log(odd);

// for(var i = 0;i < odd.length;i++) {
//     odd[i].style.backgroundColor = "#f4f4f4"
// }

//TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList)
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[0])
// itemList.children[1].style.backgroundColor = 'red';

//FirstChild

// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild)

//LastChild

// console.log(itemList.lastChild);
// //FirstElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.backgroundColor= 'red';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling)

// console.log(itemList.previousElementSibling);
// console.log(itemList.previousSibling)

//CreateElement

//create a div

// var newDiv = document.createElement('div');
// newDiv.className = 'hell0';
// // Add id
// newDiv.id = "hello1";
// //Add attr

//  newDiv.setAttribute('title', "hello Div");

// //create text node

// var newDivText = document.createTextNode('Hello World');

// //Add Text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1)
// console.log(newDiv)

//Event Listner
// var button = document.getElementById('button');
// console.log(button)
// button.addEventListener('click', buttonClicked);

// function buttonClicked(e) {
    // console.log("Button Clicked");
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('#main').getElementsByClassName.backgroundColor = "#f4f4f4";
    //console.log(e);
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '<h3>';
    // console.log(e.clientX);
    // console.log(e.offsetX);

    // console.log(e.clientY);
    // console.log(e.offsetY);
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
//}
var button = document.getElementById('button');
var box = document.getElementById('box');
var output = document.getElementById('output');
//button.addEventListener('click', runEvent);\
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mouseup', runEvent);
//button.addEventListener('mousedown', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent)
//box.addEventListener('mouseover', runEvent)
box.addEventListener('mousemove', runEvent)
var itemInput = document.querySelector('input[type="text"');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e) {
    e.preventDefault();
    console.log('Event Type::'+e.type);

    console.log(e.target.value)
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    // output.innerHTML = '<h3>MouseX :' + e.offsetX + '</h3><h3>MouseY'
    // + e.offsetY + '</h3>';
    // box.style.backgroundColor =
    //     'rgb(' + e.offsetX+','+e.offsetY+',40)';
    // document.body.style.backgroundColor =
    // 'rgb(' + e.offsetX+','+e.offsetY+',40)';
}