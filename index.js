


function subtract(firstNum, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    return Intl.NumberFormat().format(secondNum - firstNum);
    
}
function add(firstNum, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    return Intl.NumberFormat().format(secondNum + firstNum);
    
}
function multiply(firstNum, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    return Intl.NumberFormat().format(roundToTwo(firstNum * secondNum));
    
}
function divide(firstNum, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    return Intl.NumberFormat().format(roundToTwo(secondNum / firstNum));
    
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function clear () {

    document.querySelector(".output").innerText = '';
    firstNum = '';
    secondNum = '';
    ops = '';
};

function calculator(firstNum, secondNum, ops){
    return  document.querySelector(".output").innerText = ops(firstNum, secondNum) ;
    
}

function animatePress(buttonPress) {
    

    $("."+buttonPress).addClass("pressed")


    setTimeout(function () {
        $("."+buttonPress).removeClass("pressed")
    },100);
}


var calcOperation = [];
var calcNumbers1 = document.querySelectorAll(".numbers").length
var calcNumbers2 = document.querySelectorAll(".numbers").length
var calcOps = document.querySelectorAll(".ops").length
var firstNum = ''
var secondNum = ''
var opsKey = ''

for (i=0; i<calcNumbers1; i++){
    document.querySelectorAll(".numbers")[i].addEventListener("click",function(event){
        var num1 = this.innerText
        
        console.log(event.target)
        document.querySelector(".output").innerText += num1;

    //    console.log(document.querySelector(".output").innerText);
        // animatePress(this.id)
       return document.querySelector(".output").innerText 
            });

};

    document.addEventListener("keydown",function(event){
        for (i=0; i<calcNumbers1; i++){
            if (event.key == document.querySelectorAll(".numbers")[i].innerText) {
        // var num1 = event.key
        // console.log(event.key);
        document.querySelector(".output").innerText += event.key;

    //    console.log(document.querySelector(".output").innerText);

       return document.querySelector(".output").innerText 
    };
};
});



            

//NOTE: trying to use the queryselector to look for the clear call or other operations.
for (i=0; i<calcOps; i++){
document.querySelectorAll(".ops")[i].addEventListener("click",function(event){

    var opsButton = this.innerText;

    // console.log(opsButton);

    switch (opsButton) {
            case "Clear":
                clear();
                break;

            case "/":
                firstNum = document.querySelector(".output").innerText 
                    document.querySelector(".output").innerText = ''
                  ops = divide 
                 console.log(ops)
                 break;

            case "*":
                firstNum = document.querySelector(".output").innerText 
                document.querySelector(".output").innerText = ''
                ops = multiply
                break;

             case "-":
                firstNum = document.querySelector(".output").innerText 
                document.querySelector(".output").innerText = ''
                ops = subtract 
                break;

            case "+":
                firstNum = document.querySelector(".output").innerText 
                document.querySelector(".output").innerText = ''
                ops = add
                break;
            case "=":
                secondNum = document.querySelector(".output").innerText;
                calculator(firstNum, secondNum, ops);
                break;

            default:
                break;
        }
        // return operator

        });

};

//keypress for operations 

document.addEventListener("keydown",function(event){
    // if (event.key == "Enter") {
    //         opsKey = "="
    //     } else { opsKey = event.key};

    for (i=0; i<calcOps; i++){
        if (event.key == document.querySelectorAll(".ops")[i].innerText) 
                // if (event.key == "Enter") {
                //     opsKey = "="
                // } else { opsKey = event.key};
                    {
                
            

    // var num1 = event.key
    console.log(event.key);
    switch (event.key) {
        case "Clear":
            clear();
            break;

        case "/":
            firstNum = document.querySelector(".output").innerText 
                document.querySelector(".output").innerText = ''
              ops = divide 
             console.log(ops)
             break;

        case "*":
            firstNum = document.querySelector(".output").innerText 
            document.querySelector(".output").innerText = ''
            ops = multiply
            break;

         case "-":
            firstNum = document.querySelector(".output").innerText 
            document.querySelector(".output").innerText = ''
            ops = subtract 
            break;

        case "+":
            firstNum = document.querySelector(".output").innerText 
            document.querySelector(".output").innerText = ''
            ops = add
            break;
        case "=":
              
            secondNum = document.querySelector(".output").innerText;
            calculator(firstNum, secondNum, ops);
            break;

        default:
            break;
    }

        } 
        // else if (event.key == "Enter") {
        //     secondNum = document.querySelector(".output").innerText;
        //     calculator(firstNum, secondNum, ops);
        // };

    
    };
});



//NOTE: creating a log for the second num in calculation
if (firstNum !== ''){
    for (i=0; i<calcNumbers2; i++){
        document.querySelectorAll(".numbers")[i].addEventListener("click",function(event){
            var num2 = this.innerText
            //  console.log(num2);
             // console.log(event);
                 
             
            document.querySelector(".output").innerText += num2;
             // newList = calcOperation.push(num1);
              // console.log(calcOperation)
            //  return document.querySelector(".output").innerText;
             });
            };
        
            document.addEventListener("keydown",function(event){
                for (i=0; i<calcNumbers2; i++){
                if (event.key == document.querySelectorAll(".numbers")[i].innerText) {
                    // var num1 = event.key
                    console.log(event.key);
                    document.querySelector(".output").innerText += event.key;
            
                //    console.log(document.querySelector(".output").innerText);
            
                   return document.querySelector(".output").innerText 
                };
            };
            });
}
else {
    
};

document.addEventListener("keydown",function(event){
    console.log(event)

});