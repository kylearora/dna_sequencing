 //method 1 - displays in browser
 function convert() {
  var output = document.getElementById("binaryOutput");
  var input = document.getElementById("textInput").value;
  output.value = "";
  for (var i = 0; i < input.length; i++) {
      output.value += "0" + input[i].charCodeAt(0).toString(2) + " ";
  }
}


//method 2
var output = []

function textToBin(text) {
  var length = text.length
  for (var i = 0; i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  } 
  return output.join(" ");
}

console.log(textToBin("test"));
console.log(output);

//split array into chunks

// function chunk (arr, len) {
//   var chunks = [],
//       i = 0,
//       n = arr.length;
//   while (i < n) {
//     chunks.push(arr.slice(i, i += len));
//   }
//   return chunks;
// }

// console.log(chunk(output, 2));
 

 
