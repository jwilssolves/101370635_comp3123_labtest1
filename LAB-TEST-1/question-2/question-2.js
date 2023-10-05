// Richard Jordan Wilson
// 101370635
// 10/5/2023

// Honestly this one doesnt need much dictation its very straightforward, especially because 90% of the question is coded in the lab test doccument
// Functions
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = {'message': 'delayed success!'};
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((reject) => {
    setTimeout(() => {
      try {
        throw new Error('delayed exception!');
      } catch(e) {
        reject({'error': e.message });
      }
    }, 500);
  });
};

// Function call and handling of resolve and reject results
resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

rejectedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  