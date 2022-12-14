const usernames = document.querySelectorAll('.get-username-modal input[type="text"]');
const savePlayerUsernameBtn = document.querySelector('.save-username');
const modal = document.querySelector('.get-username-modal');

savePlayerUsernameBtn.addEventListener('click', () => {
    openModal();
});

function openModal() {
    const usernamesPlace = document.querySelectorAll('.username');
   
    if (usernames[0].value === '' && usernames[1].value == '') {
        alert('Inputs are empty');
    } else {
        if (usernames[0].value === usernames[1].value) {
            alert('Two input values are same please choose another name')
        } else {
            [usernamesPlace[0].textContent, usernamesPlace[1].textContent] = [usernames[0].value, usernames[1].value];
            modal.classList.add('close-modal');
        }
    }
}
