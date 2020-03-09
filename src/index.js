module.exports = function check(str, bracketsConfig) {

  let string = str;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {  
      let pair = bracketsConfig[j].join('');  
      string = string.replace(pair,'');
    }  
  }
  return string.length === 0;
}
