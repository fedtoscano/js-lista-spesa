//seleziono l'elemento del DOM
const shoppingListEl = document.getElementById('shopping-list');

//creo l'array con gli elementi da acquistare
let userItem;
const shoppingListArr = [];

while(userItem !== 'stop'){
    userItem = prompt('Inserisci un elemento da acquistare! (digita stop per concludere)')
    shoppingListArr.push(userItem)
}
//per rimuovere l'ultimo elemento "stop" che viene pushato
shoppingListArr.pop();

let i = 0;
while(shoppingListEl.childElementCount < shoppingListArr.length){
    const newLi = document.createElement('li');
    newLi.innerHTML = shoppingListArr[i];
    i++;
    shoppingListEl.appendChild(newLi);
}