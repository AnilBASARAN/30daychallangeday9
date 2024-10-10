/* compress
Write a function, compress, that takes in a string as an argument.
 The function should return a compressed version of the string
  where consecutive occurrences of the same characters are compressed into the number of occurrences followed 
  by the character.
 Single character occurrences should not be changed. */

 const compress = (s) => {
    s = s+"."
    let result = [];
    
    for(let i= 0,j=0; i < s.length;i++){
      while(s[i] === s[j]){
        i++;
      }
       const times = (i-j)+"";
      if(times != 1) result.push(times);
        result.push(s[j]);
      
      j=i;
      }
    return result.join("");
    };
