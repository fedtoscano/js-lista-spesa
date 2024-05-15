//seleziono l'elemento del DOM
const shoppingListEl = document.getElementById('shopping-list');

//creo l'array con gli elementi da acquistare
const shoppingListArr = ['pane', 'patate', 'frutta', 'verdura', 'millennium falcon in scala 1:1'];

let i = 0;
while(shoppingListEl.childElementCount < shoppingListArr.length){
    const newLi = document.createElement('li');
    newLi.innerHTML = shoppingListArr[i];
    i++;
    shoppingListEl.appendChild(newLi);
}