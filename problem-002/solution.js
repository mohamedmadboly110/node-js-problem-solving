function isVow(arr) {
  return arr.map((num) => {
    const char = String.fromCharCode(num);
    return "aeiou".includes(char) ? char : num;
  });
}

console.log(isVow([100, 100, 116, 105, 117, 121]));
