function editElement(htmlElement, match, replacer) {
    const content = htmlElement.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    htmlElement.textContent = edited;    
}