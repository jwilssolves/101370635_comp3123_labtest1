// Richard Jordan Wilson
// 101370635
// 10/5/2023

function lowerCaseWords(mixedArray) {
  return new Promise(function (resolve, reject) {

    // Mapping lowercase words to new array "justStrings"
    const justStrings = mixedArray
         .filter(item => typeof item === 'string')
         .map(word => word.toLowerCase());

        // Checks promise status and executes 
         if (justStrings.length > 0) {
          resolve(justStrings);
        } else {
          reject("No lowercase words found ruh roh");
        }

  });
}

// Function call and array declaration
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then(result => {
    console.log(result);
})

// If promise is rejected this displays "No lowercase words found ruh roh"
.catch(error => {
  console.error(error);
});