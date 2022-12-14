const itemsParent = document.querySelectorAll('.game-choices');

const firstPlayer = {
    name: usernames[0].textContent,
    selectedItem: null,
    result: 0
}

const secondPlayer = {
    name: usernames[1].textContent,
    selectedItem: null,
    result: 0
}


const getUserSelectiond = (event, gameChoicesElement) => {
    event.stopPropagation();

    const itemParentElements = gameChoicesElement.parentElement;
    let selectedUserItem = null;
    
    event.target.id === 'rock' ? selectedUserItem = 'rock' : null;
    event.target.id === 'paper' ? selectedUserItem = 'paper' : null;
    event.target.id === 'scissor' ? selectedUserItem = 'scissor' : null;

    itemParentElements.classList.value === 'first-player-part' ? firstPlayer.selectedItem = selectedUserItem : null;
    itemParentElements.classList.value === 'second-player-part' ? secondPlayer.selectedItem = selectedUserItem : null;

    if (firstPlayer.selectedItem !== null && secondPlayer.selectedItem !== null) {
        compareItems();
    }
}

const compareItems = () => {
    let outputNumebr = document.querySelectorAll('.player-point');

    if (firstPlayer.selectedItem!== secondPlayer.selectedItem) {
        firstPlayer.selectedItem === 'rock' && secondPlayer.selectedItem === 'paper' ?  secondPlayer.result++ : null;
        firstPlayer.selectedItem === 'paper' && secondPlayer.selectedItem === 'rock' ?  firstPlayer.result++ : null;
        firstPlayer.selectedItem === 'paper' && secondPlayer.selectedItem === 'scissor' ?  secondPlayer.result++ : null;
        firstPlayer.selectedItem === 'scissor' && secondPlayer.selectedItem === 'paper' ?  firstPlayer.result++ : null;
        firstPlayer.selectedItem === 'rock' && secondPlayer.selectedItem === 'scissor' ?  firstPlayer.result++ : null;
        firstPlayer.selectedItem === 'scissor' && secondPlayer.selectedItem === 'rock' ?  secondPlayer.result++ : null;   

        [outputNumebr[0].textContent, outputNumebr[1].textContent] = [firstPlayer.result, secondPlayer.result];
    } else {
        firstPlayer.selectedItem, secondPlayer.selectedItem = null;
        alert('Tie'); 
    }
    
    if (firstPlayer.result === +gamePoint.value) alert(`${firstPlayer.name} win!`);
    else if (secondPlayer.result === +gamePoint.value) alert(`${secondPlayer.name} win!`);

    firstPlayer.selectedItem = null;
    secondPlayer.selectedItem = null;
}

itemsParent.forEach(itemParent => {
    itemParent.addEventListener('click', (event) => {
        getUserSelectiond (event, itemParent);
    })
})