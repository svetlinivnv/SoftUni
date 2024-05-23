function extract(content) {
    let textContent = document.getElementById('content').textContent;
    let regex = /\(([^)]+)\)/g;
    let matches = textContent.match(regex);
    let outputArr = [];
    for (let match of matches) {
        match = match.substring(1, match.length - 1);
        outputArr.push(match);
    }
    let text = outputArr.join('; ');
    return text;
}
