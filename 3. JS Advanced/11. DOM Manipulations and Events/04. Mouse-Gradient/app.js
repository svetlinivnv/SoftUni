function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    
    gradientElement.addEventListener('mousemove', moveInElement);
    gradientElement.addEventListener('mouseout', moveOutOfElement);
 
    function moveInElement(event) {
        let result = Math.floor(event.offsetX / (event.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = `${result}%`;
    }
 
    function moveOutOfElement() {
        document.getElementById('result').textContent = "";
    }
};