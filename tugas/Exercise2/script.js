var bil1;
var bil2;
var hasil;
var opr;
var operand = false;
function angka(num){
	var input = document.getElementById("field").value;
	if(input == "0"){
		input = num;
	}else{
		input += num;
	}
	document.getElementById('field').value = input;
}

function titik(){
	var input = document.getElementById("field").value;
	if(input.includes(".") == false){
		input += ".";
	}
	document.getElementById("field").value = input;
}

function hapus(){
	document.getElementById('field').value = "0";
	val1 = 0;
	val2 = 0;
	operand = false;
}

function operator(o) {
	operand = true;
	bil1 = parseFloat(document.getElementById("field").value);
	opr = o;
	document.getElementById("field").value = "0";
}

function samadengan() {
	if (operand == true) {
		bil2 = parseFloat(document.getElementById("field").value);
		switch(opr){
			case '*' :
				hasil = bil1 * bil2;
				document.getElementById("field").value = hasil;			
				break;
			case '/' :
				hasil = bil1 / bil2;
				document.getElementById("field").value = hasil;
				break;
			case '-' :
				hasil = bil1 - bil2;
				document.getElementById("field").value = hasil;
				break;
			case '+' :
				hasil = bil1 + bil2;
				document.getElementById("field").value = hasil;
				break;
		}
		operand = false
		hasil = 0;
		bil1 = 0;
		bil2 = 0;
	}
}


    

