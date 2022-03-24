let ingredientItems = [
    '500g de feijão carioquinha cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    'cheiro verde a gosto',
    '200g de farinha de mandioca',
];

let ingredientList = document.querySelector("ingredients-list");

for (let i = 0; i < ingredientItems.length; i++) {
    let ingredient = ingredientItems[i];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;

    ingredientList.appendChild(ingredientListItem);
    // console.log(ingredientListItem);
}