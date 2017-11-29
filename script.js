 //method 1 - displays in browser
 function convert() {
  var binOutput = ""
  var binOutputArray = []
  var dnaArray = []
  var input = document.getElementById("textInput").value;
  var output = document.getElementById("binaryOutput");
  output.value = "";
  for (var i = 0; i < input.length; i++) {
      output.value += "0" + input[i].charCodeAt(0).toString(2);  
  }
  var outputValue = output.value
  console.log(outputValue);
  binOutputArray = outputValue.match(/../g)
  console.log(binOutputArray);
  
  for (var i = 0; i < binOutputArray.length; i++) {
    if (binOutputArray[i] == "00") {
      dnaArray.push("A")
    } else if (binOutputArray[i] = "01") {
      dnaArray.push("T")
    } else if (binOutputArray[i] = "10") {
      dnaArray.push("G")
    } else if (binOutputArray[i] = "11") {
      dnaArray.push("C")
    }
  }
  console.log(dnaArray);
}







//method 2
// var output = []
// 
// function textToBin(text) {
//   var length = text.length
//   for (var i = 0; i < length; i++) {
//     var bin = text[i].charCodeAt().toString(2);
//     output.push(Array(8-bin.length+1).join("0") + bin);
//   } 
//   return output;
// }
// 
// cat = textToBin('cat')
// console.log(cat)
// console.log(output);
// console.log(output.map(String))
// 


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
 

 
