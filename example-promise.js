// function getTempCallback (location, callback) {
//   callback(undefined, 23);
//   callback('City not found');
// }
//
// getTempCallback ('Katerini', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout( function(){
//       resolve(42);
//       reject('City not fff');
//     }, 3000);
//   });
// }
//
// getTempPromise ('katerini').then(function (temp){
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('error', err);
// });

function addPromise (a,b) {
  return new Promise (function(resolve, reject){
    if (typeof(a) === "number" && typeof(b) === "number"){
      resolve(a+b);
    } else {
      reject('Both arguments have to be numbers');
    }
  });
}

addPromise(23,-2).then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err);
});
addPromise(42, "the meaning").then(function(sum){
  console.log(sum);
}, function(err){
  console.log(err);
});
