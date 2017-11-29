//Convert Text to DNA Sequence
 function convertDna() {
  var binOutput = ""
  var binOutputArray = []
  var dnaArray = []
  var dnaFinalArray = []
  var input = document.getElementById("textInputDna").value;
  var binaryoutput = document.getElementById("binaryOutputDna");
  binaryoutput.value = "";
  var dnaOutput = document.getElementById("dnaOutput");
  dnaOutput.value = "";
  for (var i = 0; i < input.length; i++) {
      binaryoutput.value += "0" + input[i].charCodeAt(0).toString(2);  
  }
  var binaryOutputValue = binaryoutput.value
  console.log(binaryOutputValue);
  binOutputArray = binaryOutputValue.match(/../g)
  console.log(binOutputArray);
  
  for (var i = 0; i < binOutputArray.length; i++) {
    if (binOutputArray[i] == "00") {
      dnaArray.push("A")
    } else if (binOutputArray[i] == "01") {
      dnaArray.push("T")
    } else if (binOutputArray[i] == "10") {
      dnaArray.push("G")
    } else if (binOutputArray[i] == "11") {
      dnaArray.push("C")
    }
  }
  console.log(dnaArray);
  
  dnaFinalArray = dnaArray.join("")
  console.log(dnaFinalArray);
  dnaOutput.innerHTML = dnaFinalArray
}

//Convert Text to RNA Sequence
function convertRna() {
 var binOutput = ""
 var binOutputArray = []
 var rnaArray = []
 var rnaFinalArray = []
 var input = document.getElementById("textInputRna").value;
 var binaryOutput = document.getElementById("binaryOutputRna");
 binaryOutput.value = "";
 var rnaOutput = document.getElementById("rnaOutput");
 rnaOutput.value = "";
 for (var i = 0; i < input.length; i++) {
     binaryOutput.value += "0" + input[i].charCodeAt(0).toString(2);  
 }
 var binaryOutputValue = binaryOutput.value
 console.log(binaryOutputValue);
 binOutputArray = binaryOutputValue.match(/../g)
 console.log(binOutputArray);
 
 for (var i = 0; i < binOutputArray.length; i++) {
   if (binOutputArray[i] == "00") {
     rnaArray.push("A")
   } else if (binOutputArray[i] == "01") {
     rnaArray.push("U")
   } else if (binOutputArray[i] == "10") {
     rnaArray.push("G")
   } else if (binOutputArray[i] == "11") {
     rnaArray.push("C")
   }
 }
 console.log(rnaArray);
 
 rnaFinalArray = rnaArray.join("")
 console.log(rnaFinalArray);
 rnaOutput.innerHTML = rnaFinalArray
}

//Convert DNA Sequence to Binary
function convertDnaToBinary() {
 var binaryArray = []
 var input = document.getElementById("dnaInput").value;
 var binaryOutput = document.getElementById("binaryOutputFromDna");
 for (var i = 0; i < input.length; i++) {
   if (input[i] == "A" || input[i] == 'a') {
     binaryArray.push("00")
   } else if (input[i] == "T" || input[i] == 't') {
     binaryArray.push("01")
   } else if (input[i] == "G" || input[i] == 'g') {
     binaryArray.push("10")
   } else if (input[i] == "C" || input[i] == 'c') {
     binaryArray.push("11")
   } else {
     binaryArray.push(-1)
   }
 }
 console.log(binaryArray); 
 binaryOutput.innerHTML = binaryArray.join("") 
}
 
//Convery DNA to Complimentary Strand and then to ASCII
function complimentaryStrand() {
 var complimentaryArray = []
 var newBinaryArray = []
 var input = document.getElementById("dnaComplimentaryInput").value;
 var dnaComplimentaryOutput = document.getElementById("dnaComplimentaryOutput");
 var dnaComplimentaryBinaryOutput = document.getElementById("dnaComplimentaryBinaryOutput");
 var asciiOutput = document.getElementById("asciiOutput")
 for (var i = 0; i < input.length; i++) {
   if (input[i] == "A" || input[i] == 'a') {
     complimentaryArray.push("T")
   } else if (input[i] == "T" || input[i] == 't') {
     complimentaryArray.push("A")
   } else if (input[i] == "G" || input[i] == 'g') {
     complimentaryArray.push("C")
   } else if (input[i] == "C" || input[i] == 'c') {
     complimentaryArray.push("G")
   } 
 }
 console.log(complimentaryArray); 
 dnaComplimentaryOutput.innerHTML = complimentaryArray.join("") 
 
 for (var i = 0; i < complimentaryArray.length; i++) {
   if (complimentaryArray[i] == "A" || complimentaryArray[i] == 'a') {
     newBinaryArray.push("00")
   } else if (complimentaryArray[i] == "T" || complimentaryArray[i] == 't') {
     newBinaryArray.push("01")
   } else if (complimentaryArray[i] == "G" || complimentaryArray[i] == 'g') {
     newBinaryArray.push("10")
   } else if (complimentaryArray[i] == "C" || complimentaryArray[i] == 'c') {
     newBinaryArray.push("11")
   } 
 }
 console.log(newBinaryArray);
 dnaComplimentaryBinaryOutput.innerHTML = newBinaryArray.join("")
 console.log(dnaComplimentaryBinaryOutput.innerHTML);
 
 //Not sure how to accomplish converting binary back to ASCII
 asciiOutput.innerHTML = parseInt(dnaComplimentaryBinaryOutput.innerHTML).toString(10);
}
 