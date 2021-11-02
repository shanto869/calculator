
var resultField = $('#result');

//insert number

function insertNumber(number){

	var existNumber = resultField.val();

	resultField.val(existNumber + number)
}


// clear number

function clearResult(){
	resultField.val('')
}


// calculate number

function calculate(){
	var result = eval(resultField.val())
	resultField.val(result)
}


// delete number

function deleteNumber(){
	var presentValue = resultField.val();
	if (presentValue!=''){
		resultField.val(presentValue.slice(0,-1));
	}
}

