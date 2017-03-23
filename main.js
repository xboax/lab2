

submitFunction = () => {
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;
	let result = parseFloat(b)-(parseFloat(a)-1);
	document.getElementById("result").setAttribute("value", result.toString());
};
submitFunction2 = () => {
	
	let result2 = 7-2*(5-2);
	document.getElementById("result2").setAttribute("value", result2.toString());
};
submitFunction3 = () => {
	
	let result3 = 5+05;
	document.getElementById("result3").setAttribute("value", result3.toString());
};
submitFunction4 = () => {
	let a = document.getElementById("a2").value;
	let b = document.getElementById("b2").value;
	let c = document.getElementById("c2").value;
	let D = (b*b) - (4*a*c);
	if (D<0){
	document.getElementById("result4").setAttribute("value", "Дискримінант <0,дійсних коренів немає");
	document.getElementById("result5").setAttribute("value"," " );
	}
	else{
	let K= Math.pow(D,1/2);
	let result4 = (-b-K)/(2*a);
	let result5 = (-b+K)/(2*a);
	document.getElementById("result4").setAttribute("value", result4.toString());
	document.getElementById("result5").setAttribute("value", result5.toString());}
};