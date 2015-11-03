var letters = require("./possible-root-letters-sort");
var content;

var indexOfSorted = function (array, obj) {
    var low = 0,
    high = array.length-1;
    while (low < high) {
      var mid = (low + high) >> 1;
      array[mid] < obj ? low = mid + 1 : high = mid;
    }
    if(array[low] != obj) return -1;
    return low;
}

var dosort=function(arr){
  return arr.sort(function(a,b){
    return a[0]-b[0];
  });
}

var findCoordinates=function(item){
  var coords = [];
  var location=0,x=new RegExp(item,"g");
  while(result=x.exec(content)){
    coords.push([result.index,item.length,item]);
  }
  return coords;
}

exports.checkSyllables= function(fn){
  var coords = [];
  var wrongsyllables=[];
  content=fn;
  fn.replace(/[\u0f20-\u0fbf]+/g,function(m){
     var index = indexOfSorted(letters,m);
      if(index==-1&&!(m.substr(m.length-2)=="འི"||m.substr(m.length-2)=="འོ")){
        if(wrongsyllables.indexOf(m)==-1) wrongsyllables.push(m);
      }
    });
  wrongsyllables.forEach(function(item) {
    coords = coords.concat(findCoordinates(item));
  });
  return dosort(coords);
}

