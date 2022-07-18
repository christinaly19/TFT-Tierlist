const cards = document.querySelectorAll (".champcard");
const addCard = document.querySelector("#addCard");

/* dealing with already added cards*/
window.onload = function() {
}

/*When Card is added*/

const addCardToBank = (event) => {
    const card = createCard();
    const bank = document.querySelector("#cardbank");
    cardbank.appendChild(card);
}

addCard.onclick = addCardToBank;

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('champcard');
    card.setAttribute('draggable', 'true');
    card.id = Date.now(); /*gets unique id*/
    appendImage(card);
    card.onclick = deleteCard;
    card.ondragstart=onDragStart;
    card.ondragend = onDragEnd;
    return card;
}

const appendImage = (card) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/jpeg','image/x-png');
    input.style.visibility ='hidden';
    input.onchange =() => {
        const image = new Image (100,80);
        const file = input.files [0];
        console.log(file);
        const reader  = new FileReader();
        reader.onload = (event) => {
            image.src = event.target.result;
            image.style.pointerEvents = "none";
            card.appendChild(image);
        }
        reader.readAsDataURL(file);
    }
    input.click()
 }



const deleteCard = (event) => {
    const deletecardconfirm = window.confirm("Are you sure you want to delete this card?");
    if (deletecardconfirm){
        event.target.remove();
    }
}


/* card logic*/
const onDragStart = (event) => {
    console.log('started dragging')
    event.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        event.target.style.visibility= "hidden";
    }, 40)
}

const onDragEnd = (event) => {
    console.log('stopped drag')
    event.target.style.visibility = "visible";
}

cards.forEach((card) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd; 
})

