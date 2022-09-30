let arr = ["a", "f", " ", " ", "b", "e"];
ReverseWord(arr, 0, arr.length - 1);
//console.log(arr);

function ReverseWord(arr){
  //reverse whole arr
  ReverseWordHelp(arr, 0, arr.length - 1);
  console.log(arr);

  var startIndex = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == " "){
      ReverseWordHelp(arr, startIndex, i - 1);
      startIndex = i + 1;
      console.log(arr);
    }
  }
  if(startIndex < arr.length - 1){  //last case
    ReverseWordHelp(arr, startIndex, arr.length - 1);
  }
  console.log(arr);
}

function ReverseWordHelp(arr, startIndex, endIndex){
  if(startIndex < 0 || endIndex < 0 || startIndex >= arr.length || endIndex >= arr.length){
    return;
  }
  var middle = startIndex + (endIndex - startIndex) / 2
  for(var i = startIndex; i <= middle; i++){
    var temp = arr[i];
    arr[i] = arr[endIndex - (i- startIndex)];
    arr[endIndex - (i- startIndex)] = temp;
  }
}