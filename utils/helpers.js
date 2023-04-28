// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);
console.log(result);

function sendmessage(){
    var recipient = document.getElementById("recipient").value;
    var result=validateEmails(recipient);
    alert(result);
}


function validateEmails(emailString) {
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var result = emailString.replace(/\s/g, "").split(/,|;/);
    for(var i = 0;i < result.length;i++) {
        if(!regex.test(result[i])) {
            return false;
        }
    }
    return true;
}
