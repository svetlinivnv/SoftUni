function encodeAndDecodeMessages() {

    const messages = document.querySelectorAll('textarea');
    const inputMessageEl = messages[0];
    const receivedMessageEl = messages[1];

    const buttons = document.querySelectorAll('button');
    const encodeBtnEl = buttons[0];
    const decodeBtnEl = buttons[1];
    
    function messageEncoder() {
        let encodedMessage = '';
        let message = inputMessageEl.value.split('');
        message.forEach(char => {
            let charAscii = char.charCodeAt(0) + 1;
            encodedMessage += String.fromCharCode(charAscii);
        });
        receivedMessageEl.value = encodedMessage;
        inputMessageEl.value = '';
        decodeBtnEl.disabled = false;
    }
    
    function messageDecoder() {
        let decodedMessage = '';
        let message = receivedMessageEl.value.split('');
        message.forEach(char => {
            let charAscii = char.charCodeAt(0) - 1;
            decodedMessage += String.fromCharCode(charAscii);
        });
        receivedMessageEl.value = decodedMessage;
        decodeBtnEl.disabled = true;
    }
    encodeBtnEl.addEventListener('click', messageEncoder);
    decodeBtnEl.addEventListener('click', messageDecoder);
}