$(document).ready(function(){
});

var wpm;
var readTime = {

getWPM: function (){
return wpm;
},
configWPM: function (thingy){
wpm = thingy;
},
convertToArray: function(html){
  return html;
},
getTextFromNodes: function (el){
return $(el).text();
},
removePunctuation: function(string){
var array = string.split("");
var arg = _.filter(array, function(val){
  if ((val != "?") && (val != "/n") && (val != "!") && (val != ".")) {
  return val;
}
});
var newString = arg.join('');
return newString;
},
countWords: function(string){
  var newArrayThing = string.split(" ");
  return newArrayThing.length;

},
calcWPM: function(el){
  var answer = el /wpm;
  var answerRound = Math.round(answer);
  return answerRound + " minute read";
},
words: function(el){
return readTime.calcWPM(readTime.countWords(readTime.removePunctuation(readTime.getTextFromNodes(readTime.convertToArray(el)))));
},
};
