function addAsync(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  }, 1000);
}

var thunk = function (cb) {
  addAsync(10, 15, cb);
};

// thunk(function (sum) {
//   sum; //25
// });

thunk(function (sum) {
  console.log(sum); //25
});


// Asynchronous thunk is a function that doesn't need any arguments passed to it to do its job,
// except you need to pass it a callback so that you can get the value out.