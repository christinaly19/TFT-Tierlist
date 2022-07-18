const bank = document.querySelector('#cardbank');
const onDropCard = (event) => {
    const id= event.dataTransfer.getData('id');
    cardbank.appendChild(document.getElementById(id));
}

bank.ondrop = onDropCard;
bank.ondragover = (event) => event.preventDefault();
