let bookArr = [];



// Submiting Form Logic
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(bookForm);
    //Store data in object and push to array
    let obj = Array.from(document.querySelectorAll('#bookForm input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    bookArr.push(obj);

    // Add hidden class to book form
    let form = document.querySelector('.book-form');
    form.classList.add("hidden");


    // Clear fields
    let fields = Array.from(document.querySelectorAll("input"));
    fields.forEach((element) => {
        element.value = "";
    })

    let newCard = addCard(bookArr);
    console.log(newCard);
    let add_card = document.querySelector('#addcard');
    let cardContainer = document.querySelector('.card-container');

    cardContainer.removeChild(add_card);
    cardContainer.appendChild(newCard);
    cardContainer.appendChild(add_card);

    console.log(bookArr);
})

// Close Form Logic by adding the hidden class to bookForm
let closeForm = document.querySelector('.book-form');
let closebtn = document.querySelector('#close-btn');
closebtn.addEventListener('click', (e) => {
    closeForm.classList.add('hidden');
})


addcard.addEventListener('click', (e) => {
    bookForm = document.querySelector('.book-form');
    bookForm.classList.remove('hidden');
})



// takes in an array of objects and creates a card for the last object in the array

function addCard(arr) {
    let cardData = arr[arr.length - 1];
    let card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = cardData['bookTitle'];
    card.appendChild(title);

    let categoryList = document.createElement('ul');
    categoryList.classList.add('category');

    let listItems = [
        'Author:',
        'Pages:'
    ]

    for (let i = 0; i < listItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = listItems[i];
        categoryList.appendChild(listItem);
    }

    card.appendChild(categoryList);

    let answersList = document.createElement('ul');
    answersList.classList.add('answers');

    let answers = [
        cardData['bookAuthor'],
        cardData['pageCount']
    ]

    for (let i = 0; i < answers.length; i++) {
        let answer = document.createElement('li');
        answer.textContent = answers[i];
        answersList.appendChild(answer);
    }

    card.appendChild(answersList);

    return card;



}




