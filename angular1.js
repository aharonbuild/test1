// JavaScript For Angular School

var num1,num2,cal,er = 1;
let input_id = document.querySelector('#formNum1');
let input_id2 = document.querySelector('#formNum2');

input_id.addEventListener("keypress",ValidationKeyPress);
input_id2.addEventListener("keypress",ValidationKeyPress);


            function ValidationKeyPress(e){
                
                if(e.key == !isNaN){
                    alert("great");
                }
                
            }
            
            function calculate(tif){
                
                num1 = parseInt(document.getElementById("formNum1").value);
                num2 = parseInt(document.getElementById("formNum2").value);
                switch(tif){
                        case 0:
                            cal = num1 + num2;
                            ter = "+";
                            break;
                          case 1:
                            cal = num1 - num2;
                            ter = "-";
                            break;
                          case 2:
                             cal = num1 / num2;
                            ter = "/";
                            break;
                          case 3:
                            cal = num1 * num2;
                            ter = "*";
                            break;
                        }

                document.getElementById("LblRes").innerHTML = "the resalt is "+ cal;
                log(ter);
                er ++;
            }
            function log(yty){
                var btn = document.createElement("p");
                btn.innerHTML = num1+ yty +num2 + "=" + cal + "<button id = 'logid"+er+"' onclick = 'edit(logid"+er+")'>edit</button>" + "<button>remove</button>";
                document.getElementById("grid").appendChild(btn);
            }
            function edit(tt){
                var tochen = document.getElementById(tt).innerHTML;
            }


// Select the node that will be observed for mutations
var targetNode = document.getElementById('grid');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

