const decrypt = (cipher, encryptedText) => {
	const alphaArray= 'abcdefghijklmnopqrstuvwxyz'.split('');
  const cipherArray = cipher.split('');
  let result = '';

  for (var i = 0; i < encryptedText.length; i++) {
  	let relativeIndex;
    if (cipherArray.indexOf(encryptedText[i]) >= 0 ) {
    	relativeIndex = cipherArray.indexOf(encryptedText[i]);
	    result += alphaArray[relativeIndex];
	  } else {
    	result += encryptedText[i];
    }
  }
  return result;
}

let example = decrypt('oephjizkxdawubnytvfglqsrcm','knlfgnb, sj koqj o yvnewju');

console.log(example)
