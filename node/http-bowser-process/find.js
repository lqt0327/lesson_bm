// a  'i am good'
function match(string) {
  for (let char of string) {
    if (char === 'a') {
      return true;
    }
  }
  return false;
}
// 'ab'  'i ab good'
function match1(string) {
  let foundA = false
  for (let char of string) {
    if (char === 'a') {
      foundA = true;
    } else if (foundA && char === 'b') {
      return true;
    } else {
      foundA = false;
    }
  }
  return false;
}
console.log(match1('i abxb good'))

//  'abc'  'i abc good'
function match2(string) {
  let foundA = false, foundB = false;
  for (let char of string) {
    if (char === 'a') {
      foundA = true;
    } else if (foundA && char === 'b') {
      foundB = true;
    } else if (foundB && char === 'c') {
      return true;
    } else {
      foundA = false;
      foundB = false;
    }
  }
  return false;
}
