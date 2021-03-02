function validation() {
    var alertMsg = ("ERROR");
    
    var fname = document.forms["address"]["fname"].value;
    var email = document.forms["address"]["email"].value;
    var adr = document.forms["address"]["adr"].value;
    var country = document.forms["address"]["country"].value;
    var city = document.forms["address"]["city"].value;
    var pcode = document.forms["address"]["pcode"].value;

    var cname = document.forms["payment"]["cname"].value;
    var ccnum = document.forms["payment"]["ccnum"].value;
    var expmonth = document.forms["payment"]["expmonth"].value;
    var expyear = document.forms["payment"]["expyear"].value;
    var cvv = document.forms["payment"]["cvv"].value;


    if(blankCheck(fname)) {                    // Checking if the full name is blank
        alertMsg += ("\nFull Name is blank");  
    }

    if(blankCheck(email)) {                    // Checking if the email is blank
        alertMsg += ("\nEmail is blank");
    } 
    else if(testEmailAddress(email)) {         // Checking if the email is valid
        alertMsg += ("\nEmail is invalid");
    }

    if(blankCheck(adr)) {                      // Checking if the address is blank
        alertMsg += ("\nAddress is blank");  
    } 

    if(blankCheck(country)) {                  // Checking if the country is blank
        alertMsg += ("\nCountry is blank");  
    }

    if(blankCheck(city)) {                     // Checking if the city is blank
        alertMsg += ("\nCity is blank");  
    }

    if(blankCheck(pcode)) {                    // Checking if the city is blank
        alertMsg += ("\nPostal code is blank");  
    }
    else if(isNaN(pcode)) {                    // Checking if the postal code only has numbers
        alertMsg += ("\nPostal code is invalid");
    }

    if(blankCheck(cname)) {                    // Checking if the card name is blank
        alertMsg += ("\nName on Card is blank");  
    }
    
    if(blankCheck(ccnum)) {                    // Checking if the Credit card number is blank
        alertMsg += ("\nCredit card Number is blank");  
    } 
    else if(isNaN(ccnum)) {                    // Checking if the Credit card only has numbers
        alertMsg += ("\nCredit card Number is invalid");
    }
    else if(testCard(ccnum)) {                 // Checking if the Credit card number is valid
        alertMsg += ("\nCredit card Number is invalid");
    }

    if(blankCheck(expmonth)) {                 // Checking if the Expiry month is blank
        alertMsg += ("\nExpiry month is blank");  
    } 
    else if(monthCheck(expmonth)) {            // Checking if the Expiry month is valid
        alertMsg += ("\nExpiry month is invalid");
    }
    
    if(blankCheck(expyear)) {                  // Checking if the Expiry year is blank
        alertMsg += ("\nExpiry year is blank");  
    } 
    else if(isNaN(expyear)) {                  // Checking if the Expiry year only has numbers
        alertMsg += ("\nExpiry year is invalid");
    }
    else if(yearCheck(expyear)) {              // Checking if the Expiry year is valid
        alertMsg += ("\nExpiry year is invalid");
    }

    if(blankCheck(cvv)) {                      // Checking if the CVV is blank
        alertMsg += ("\nCVV is blank");  
    } 
    else if(isNaN(cvv)) {                      // Checking if the CVV only has numbers
        alertMsg += ("\nCVV is invalid");
    }
    else if(cvvCheck(cvv)) {                   // Checking if the CVV is valid
        alertMsg += ("\nCVV is invalid");
    }

    if(alertMsg != "ERROR") {                  // Checking if there has been any errors
        alert(alertMsg);                       // Printing the errors
    }
    else{
        location.href = "../html/thankyou.html";
  
    }
    
}

function blankCheck(input) {
    if (input == "") {    // Checking if the input is blank
        return true;
    }
}

function testEmailAddress(emailToTest) { 
    var atSymbol = emailToTest.indexOf("@");           // Check for @
    if (atSymbol < 1){return true;}

    var dot = emailToTest.indexOf(".");                // Check that there are 2 character before the dot
    if (dot <= atSymbol + 2){return true;}              
    
    if (dot === emailToTest.length - 1){return true;}  // Check that the dot is not at the end
}

function testCard(ccnum) {
    console.log(typeof ccnum)
    if (ccnum.length != 16) {                          // Checking if there are 16 digits since master and visa cards has 16 digit 
        return true;
    } 
    else if (ccnum[0] != "4" && ccnum[0] != "5" ) {    // Checking if number start with 4 (visa) or 5 (master card)
        return true;
    }
}

function monthCheck(month) {
    var valid = true;
    var monthlist = ["january","february","march","april","may","june","july","august","september","october","november","december"];  // List of all the month and their name 
    for (i=0; i < monthlist.length; i++) {             // Checking for the number of months
        if(month.toLowerCase() == monthlist[i]) {      // Checking the month inputed matches any of the months in the list regardless of capitalization
            valid = false;
        }
    }
    return valid;
}

function yearCheck(year) {
    if(parseInt(year) < 2019) {                        // Checking if the expiry year has passed alr
        return true;
    }
}

function cvvCheck(cvv) {                               // Checking if there is 3 digit in the cvv number
    if(cvv.length != 3) {
        return true;
    }
}