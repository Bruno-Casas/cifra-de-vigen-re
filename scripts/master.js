function get(param) {
	return document.querySelector(param)
}

//List events
get("#cifrar").addEventListener('click', () => {
	let result = vigenere(get("#text").value,get("#key").value)
	get("#result").innerHTML = result
})

get("#decifrar").addEventListener('click', () => {
	let result = vigenere(get("#text").value,get("#key").value,true)
	get("#result").innerHTML  = result
})

function vigenere(str, key, decrypt = false) {
	let result = '';
	//remoção de acentos
	let data = str.normalize('NFD')
		.replace(/[\u0300-\u036f\ ]/g, "")
		.toLocaleLowerCase();

	key = key.toLocaleLowerCase();
	for (let i = 0, cont = 0,
			dataSize = data.length,
			keySize = key.length,
			cycles = Math.ceil(dataSize / keySize),
			charCode,
			newChar; i < key.length; i++) {

		charCode = data.charCodeAt(i + keySize * (cont));

		if (charCode >= 97 && charCode <= 122) {
			if (!decrypt) {
				newChar = mathEncrypt(charCode, key.charCodeAt(i), 194)
			} else {
				newChar = mathDecrypt(charCode, key.charCodeAt(i), 194)
			}
			result += String.fromCharCode(newChar);
		} else {
			result += (i + keySize * cont >= dataSize) ? '' : String.fromCharCode(charCode);
		}

		if (keySize == i + 1 && cycles > ++cont) {
			result += decrypt ? "" : " ";
			i = -1
		}
	}
	return result;
}

function mathEncrypt(charP, charK, asciiCorrectionFactor) {
	return ((charP + charK) % asciiCorrectionFactor) % 26 + 97;
}

function mathDecrypt(charC, charK, asciiCorrectionFactor) {
	return ((charC - charK + 26) % asciiCorrectionFactor) % 26 + 97;
}

//Minha segunda opção para remoção de acentos.

/*function regular(data, regExp, subString, fix = true) {
	return data.replace(regExp, function (match, p1, p2) {
		if (fix) {
			if (p2.slice(p1, p1 + 1) == match.toLocaleUpperCase()) {
				return subString.toLocaleUpperCase();
			} else {
				return subString.toLocaleLowerCase();
			}
		} else {
			return subString;
		}

	})
}*/