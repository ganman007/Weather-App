function generatedPassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){


    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-=_+{}[];':<>?/.,";

    let allowedChars="";
    let password="";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length<=0){
        return `(password length must be atleast 1)`
    }
    else if (allowedChars.length === 0){
        return `(atleast 1 character need to set true)`
    }

    for(let i=0; i<length; i++){
        const randomindex= Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomindex];
    }

    document.getElementById("prop").textContent=`Your Generated password: ${password}`;
}


const passwordlength =12;
const includeLowercase= true;
const includeUppercase=true;
const includeNumbers= true;
const includeSymbols=true;

const password = generatedPassword(passwordlength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);

console.log(`Generated Password:${password}`);

