//Because the Nature of JS is different from c++, just implement a function that reverse a string without using reverse().

var reverse = function(str){
  var length = str.length;
  var newStr = [];
  str = str.split("");
  for(var i = 0; i < length; i++){
    newStr.push(str.pop());
  }
  return newStr.join('');
}