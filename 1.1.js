//Implement an algorithm to determine if a string has all unique characters.

var uniq = function(str){
  var chars = {};
  for(var i = 0; i < str.length; i++){
    if(!(str[i] in chars)){
      chars[str[i]] = str[i];
    } else{
      return false;
    }
  }
  return true;
}