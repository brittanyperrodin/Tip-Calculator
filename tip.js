var bill = prompt("What's the total of your bill? Do not include dollar sign");
var tip15 = bill * 0.15
var tip20 = bill * 0.20
if (bill <= 49)	{
	console.log(tip15);
}
else if (bill > 49)		{
	console.log(tip20);
}
	else	{
	console.log(0);
};
