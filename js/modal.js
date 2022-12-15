const usernames = document.querySelectorAll('.get-username-modal input[type="text"]');
const savePlayerUsernameBtn = document.querySelector('.save-username');
const modal = document.querySelector('.get-username-modal');
const gamePoint = document.querySelector('#limitPoint');

savePlayerUsernameBtn.addEventListener('click', () => {
    openModal();
});

function openModal() {
    const usernamesPlace = document.querySelectorAll('.username');
   
    if (usernames[0].value === '' && usernames[1].value === '' && gamePoint.value === '') {
        alert('Inputs are empty');
    } else {

        if (usernames[0].value === usernames[1].value) {
            alert('Two input values are same please choose another name')
        } else if (gamePoint.value == 0) alert('Game point has not to be zero');
        else {
            [usernamesPlace[0].textContent, usernamesPlace[1].textContent] = [usernames[0].value, usernames[1].value];
            modal.classList.add('close-modal');
        }
    }
}
