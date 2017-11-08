var x = prompt("Enter a word.");
var y = document.getElementById('name');
var x1 = (x.charAt(1)).toUpperCase() + x.slice(2) + (x.charAt(0)).toLowerCase();

y.innerHTML = "Pig Latin form of the word " + "<h1 id='ori'>"+(x.charAt(0)).toUpperCase() + x.slice(1) + "</h1> is <h1 id='pl'>" + x1.concat("ay") +"</h1>.";