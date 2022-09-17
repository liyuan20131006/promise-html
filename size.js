function getMemory () {
  var _memory = process.memoryUsage().heapUsed
  console.log(_memory / 1024 / 1024 + 'MB')
}

var size = 30 * 1024 * 1024;
var arr1 = new Array(size);
getMemory();
var arr2 = new Array(size);
getMemory();

// var arr3 = new Array(size);
// getMemory();
// arr3 = undefined;

// var arr4 = new Array(size);
// getMemory();
// arr4 = undefined;

// var arr5 = new Array(size);
// getMemory();
// arr5 = undefined;

// var arr6 = new Array(size);
// getMemory();

(function () {
  var arr3 = new Array(size);
  getMemory();
  var arr4 = new Array(size);
  getMemory();
  var arr5 = new Array(size);
  getMemory();
  setInterval(() => {
    var arr6 = new Array(size);
    getMemory();
  }, 1000)
})();
console.log(global.gc)
global.gc()
