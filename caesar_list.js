'use strict';

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Caesar cipher
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const alphaLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'æ', 'ø', 'å'];
const alphaUpper =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'Æ', 'Ø', 'Å'];
const alpLen = alphaLower.length
const resultContainer = document.querySelector('.result');
const output = document.querySelector('.output');
const input = document.querySelector('input');
const word = document.querySelector('.word');

// Functions

const insertResult = function(res) {
  const createEl = document.createElement('p');
  const htfml = res;
  const createContent = document.createTextNode(htfml);
  createEl.appendChild(createContent);
  output?.insertAdjacentElement("beforeend", createEl)
}

// Cipher list function
const caesarCipherListShifts = (inp, key = 0) => {
  let splittedInput = inp.toString().split(''); // Returns: [i, n, p]
  for(let i=0; i < alpLen; i++) {
    const asMap = splittedInput.map(char => {
      // Preserve input spaces
      if (alphaLower.indexOf(char.toLowerCase()) === -1) {
        return ' ';
      } 
      let inpCharInd = parseInt(alphaLower.indexOf(char.toLowerCase())) + parseInt(key);
      if(inpCharInd >= alpLen){
        return alphaUpper[inpCharInd-alpLen];
      } else {
        return alphaUpper[inpCharInd]; // Return shifted char
      }
    })
    // Join the shifted letters. (Re-assemble the shifted word(s))
    insertResult(asMap.join(''));
    console.log(asMap.join(''));
  key++;
  }
}

// Run cipher when Compute button is pressed
document.querySelector('.btn-compute').addEventListener('click', function() {
    
    caesarCipherListShifts(input.value)
})

// Clear result
document.querySelector('.btn-clear').addEventListener('click', function () {
  
    document.querySelector('input').value = '';
    document.getElementById('result').innerHTML = '';
});

/////////////////////////////////////////////////////////////
