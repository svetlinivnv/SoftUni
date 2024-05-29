function focused() {
    const inputs = document.querySelectorAll('div input');
    
    function addFocusedClass(event) {
        event.target.parentNode.classList.add('focused');
    }
    
    function removeFocusedClass(event) {
        event.target.parentNode.classList.remove('focused');
    }
    
    inputs.forEach(input => {
        input.addEventListener('focus', addFocusedClass);
        input.addEventListener('blur', removeFocusedClass);
    });
    }