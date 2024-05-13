const fs = require('fs');
const path = require('path');

// Function to get list of files in a directory
function getFilesInDirectory(directory) {
    return fs.readdirSync(directory);
}

// Function to delete a file
function deleteFile(filePath) {
    fs.unlinkSync(filePath);
}

// Main function to compare files and delete duplicates
function compareAndDeleteDuplicates(folder1, folder2) {
    const filesInFolder1 = getFilesInDirectory(folder1);
    const filesInFolder2 = getFilesInDirectory(folder2);

    // Find duplicate files in folder1 and delete them
    filesInFolder1.forEach(file1 => {
        if (filesInFolder2.includes(file1)) {
            const filePath = path.join(folder1, file1);
            console.log(`Deleting duplicate file: ${filePath}`);
            deleteFile(filePath);
        }
    });

    console.log('Duplicates deleted successfully.');
}

// Replace 'path/to/folder1' and 'path/to/folder2' with actual folder paths
const folder1 = 'Galaxy A53 5G\Вътрешно място за съхранение\DCIM\Camera';
const folder2 = 'E:\Galaxy A53 04-04-2024';

compareAndDeleteDuplicates(folder1, folder2);
