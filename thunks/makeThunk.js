// generalized utility for making thunks
// https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564

function makeThunk(fn) {
  var args = [].slice.call(arguments,1);
  return function (cb) {
    args.push(cb);
    fn.apply(null,args);
  };
}

function addAsync(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  }, 1000);
}

var thunk = makeThunk(addAsync,10,15);

thunk(function (sum) {
  console.log(sum)
})