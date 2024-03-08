function extractFile(path) {
    let pathArr = path.split('\\');
    let file = pathArr.pop();
    let fileArr = file.split('.');
    let extension = fileArr.pop();
    let fileName = fileArr.join('.');
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');