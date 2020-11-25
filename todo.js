// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// //<h1>Hello World</h1>
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h);



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem)


var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)

var ul = document.getElementById('list');
var li;


function addItem() {

    var input = document.querySelector('#input');
    var item = input.value;

    ul = document.getElementById('list')
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
        //A
    }
    else {
        //create li
        li = document.createElement('li')

        //create  a checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')
        //(id="check" )


        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item')//Optional

        //Add elements on Webpage

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)

        ul.insertBefore(li, ul.childNodes[0]);


        setTimeout( () => {
            li.className = 'visual';
        } ,2);

        input.value = '';
    }

}


function removeItem() {
    li = ul.children
    // console.log(li);
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
    console.log("Delete Button Clicked")
}