function repeatString(string, repetitions) {
  let buffer = "";

  for (let i = 0; i < repetitions; i++) {
    buffer += string;
  }
  return buffer;
}

console.log(repeatString("abc", 3));