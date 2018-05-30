// synchronous thunk
function add(x,y) {
  return x + y;
}

var thunk = function () {
  return add(10, 15);
};

console.log(thunk());

// From a synchronous perspective it is a function that has everything already that it needs to do
// to give you some value back, you do not need to pass any argument, you call it an gives you a value back