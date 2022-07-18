

const onDragOver = (event) => {
    event.preventDefault();
}
const onDrop = (event) => {
    event.preventDefault();
    const draggedchampcardId = event.dataTransfer.getData('id');
    const draggedchampcard = document.getElementById(draggedchampcardId)
    event.target.appendChild(draggedchampcard);
    console.log('dropped')
}


const tiers = document.querySelectorAll('.tier');
tiers.forEach((tier) => {
    tier.ondragover = onDragOver;
    tier.ondrop = onDrop;
})