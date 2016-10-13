/*
function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('');
}

getTempCallBack('VungTau', (err, temp) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});


function getTempPromise(location) {
  return new Promise((resolve, reject) => {
    reject('City not found');
  });
}

getTempPromise('HoChiMinh').then((temp) => {
  console.log('Promise Success');
}).catch((err) => {
  console.log(err);
});
*/

// Challenge Area
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (!isNaN(a) && !isNaN(b)) {
      resolve(a + b);
    } else {
      reject('A & B should be numbers');
    }
  });
}

addPromise('2', 3)
  .then((sum) => {
    return parseInt(sum, 10) + 1;
  })
  .then((su) => {
    console.log(`Great ${su}`);
  })
  .catch((err) => {
    console.log(err);
  });