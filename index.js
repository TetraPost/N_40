const request = require('request');
const url = 'https://www.google.com/';

// Promise 1
const willGetAnswer = new Promise(
  (resolve, reject) => {
    request(url, (error, response) => {
      if (response.statusCode === 200) {
        const answer = response.statusCode;
        resolve(answer);
      } else {
        const answer = new Error('some error found');
        reject(answer);
      }
    });
  },
);

// Promise 2
const getMessageAfterOkStatus = (answer) => {
  const message = `Connect ok:${answer}`;
  return Promise.resolve(message);
};

const askStatusCode = () => {
  console.log('Start. "Promise" will not wait you');
  willGetAnswer
    // second Promise
    .then(getMessageAfterOkStatus)
    // answerGood - promise resolve
    .then(answerGood => console.log(answerGood))
    // error - promise reject
    .catch(error => console.log(error.message));
  console.log('End. "Promise" will not wait you');
};

askStatusCode();
