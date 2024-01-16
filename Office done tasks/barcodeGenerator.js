function generateBarcodes(startRange, endRange) {
    const result = [];
  
    for (let a = Number(startRange[0]); a <= Number(endRange[0]); a++) {
      for (let b = Number(startRange[1]); b <= Number(endRange[1]); b++) {
        for (let c = Number(startRange[2]); c <= Number(endRange[2]); c++) {
          for (let d = Number(startRange[3]); d <= Number(endRange[3]); d++) {
            const barcode = `${a}${b}${c}${d}`;
            if (!hasEvenDigit(barcode)) {
              result.push(barcode);
            }
          }
        }
      }
    }
  
    return result.join(' ');
  }
  
  function hasEvenDigit(number) {
    // Check if the number contains any even digit
    return [...number].some(digit => parseInt(digit) % 2 === 0);
  }
  
  // Example usage
  const startRange = '2345';
  const endRange = '6789';
  const result = generateBarcodes(startRange, endRange);
  console.log(result);