function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const buttonStatus = button.textContent;
    const extraContent = document.getElementById('extra');
    
    if (buttonStatus === 'More') {
        extraContent.style = 'display: block';
        button.textContent = 'Less';
    } else {
        extraContent.style = 'display: none';
        button.textContent = 'More';
    }
}