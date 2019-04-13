//1.grab the values inside <form>
//2.calculate them
//3.put the calculate value inside our website
function calc() {
	var a = parseInt(document.querySelector('#value1').value);
	var b = parseInt(document.querySelector('#value2').value);
	var opera = document.querySelector('#operator').value;
	var calculate;
	//conditional statement
	if (opera === 'add') {
		calculate = a + b;
	} else if (opera === 'min') {
		calculate = a - b;
	} else if (opera === 'div') {
		calculate = a / b;
	} else if (opera === 'mul') {
		calculate = a * b;
	};
	//make doc, grab specific element based on id - ('#result'),
	//and add to var calculate - (.innerHTML)
	document.querySelector('#result').innerHTML = calculate;
}