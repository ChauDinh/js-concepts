function transformString(n) {
  // Initialize string contains N 'a' characters
  let str = '';
  for (let i = 0; i < n; i++) {
    str += 'a';
  }

  let i = 0;
  
  while (i < str.length - 1) {
    if (str[i] === str[i+1]) {
      if (str[i] === 'z') {
        break; // cannot go further
      } else {
        str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) + 1) + str.slice(i+2);
        i = Math.max(0, i-1);
      }
    } else {
      i++;
    }
  }
  
  return str;
}

console.log(transformString(4));