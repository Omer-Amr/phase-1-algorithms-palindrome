function isPalindrome(word) {
  // Write your algorithm hereconst splitted = word.split("");
  const splittedWord = word.split("");
  const copySplittedWord = [...splittedWord]
  const reversed = copySplittedWord.reverse("");

  for(let i = 0; i < splittedWord.length; i++){
    if(reversed[i] !== splittedWord [i]){
      return false;
    }
    else{
      return true;
    }
  }
}

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
