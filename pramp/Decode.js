let result = GetDecodeDp("1213");
console.log(result);

function GetDecodeCount(input){
  let additionalWay = 0;
  for(let i = 0; i < input.length - 1; i++){
    let current = input[i];
    let next = input[i+1]
    if(current == "0")
    {
      continue;
    } else if(current == "1"){
      additionalWay ++;
    } else if(current == "2"){
      if (next <= "6"){
        additionalWay ++;
      }
    } else {
      continue;
    }
  }
  return additionalWay + 1;
}

function GetDecodeDp(input){
  var memo = {};
  return GetDecodeDpHelp(input, 0, memo);
}

function GetDecodeDpHelp(input, index, memo){
  if(index == input.length - 1){
    return 1;
  }

  if(memo[index]){
    return memo[index];
  }

  var result = GetDecodeDpHelp(input, index + 1, memo);
  if(input[index] == "1"){
    result ++;
  } else if(input[index] == "2"){
    if(input[index + 1] <= "6"){
      result ++;
    }
  } 
  memo[index] = result;
  return result;
}