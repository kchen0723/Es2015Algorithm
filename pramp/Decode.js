let result = GetDecodeCount("1262");
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