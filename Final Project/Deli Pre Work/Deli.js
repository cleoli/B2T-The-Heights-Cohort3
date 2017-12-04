/*
    Deli Counter
        The local deli is putting in a new computerized queue to keep track of their customers and improve productivity. 
        At the beginning of the day, the deli is empty so the queue should be represented by an empty array. 
        Build an array of objects that holds the customer’s name, and what they ordered. 
        Build a function that puts a string containing what the person ordered and a string containing the name of the person wishing to join the line in the array. 
        Build a function that displays everyone’s current place in line on an HTML table. If there is nobody in line, it should say "The line is currently empty.". 
        Remember that people like to count from 1, not from 0 ("zero") like computers. Build a function which should call out (i.e. display on the webpage) the next person in line and then remove them from the front. 
        If there is nobody in line, it should call out (display on the webpage) that "There is nobody waiting to be served!".
*/

var cusL=[]/*length=0*/;

function orderIn(name1, order1){
    var customer={
        name: name1,
        order: order1
    }

    return customer;
}

function queue(){
    
}
function addOrder(){
    var ele = document.getElementById('addOrd');
    var a = document.getElementById('groupI2');
    var orders = document.getElementsByName('orderI');
    var tempO=[];
    for(var i=0; i<orders.length; i++){
        tempO.push(orders[i].value);
    }
    a.removeChild(ele);
    a.innerHTML += "<br><input type='text' name='orderI' class='orderI' placeholder='Enter customer&#039s order'>";    
    a.innerHTML += "<button id='addOrd' onclick='addOrder()'>Add Another Order</button>";
    for(var j=0; j<tempO.length; j++){
        orders[j].value = tempO[j];
    }
}

function erasI(n){
    var tempP = n.placeholder;
    n.placeholder="";
    if(!n.value){
        setInterval(function(){n.placeholder=tempP;}, 5000);
    }
}