

const randomNumber = Math.floor(Math.random() * 122) + 1230;
console.log(randomNumber)


var generateBtn = document.querySelector(".generate-btn");
var showPin = document.getElementById("showRandomPin");



generateBtn.addEventListener("click", function () {
        const randomPinCreate = Math.floor(Math.random() * 4444) + 1222;
        showPin.value = randomPinCreate;

})


const submitBtn = document.getElementById("submitBtn");
const repin = document.getElementById("repin");
var button = document.getElementsByClassName("button");

for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
                repin.value = repin.value + this.value;
        })
}

// notify area 

const notify = document.querySelector(".notify");
function success() {
        const right = document.getElementById("right");
        right.textContent = "✅ Pin Matched... Secret door is opening for you";
        right.classList.add("notify");
}
function notMatch() {
        const wrong = document.getElementById("wrong");
        wrong.textContent = "❌ Pin Didn't Match, Please try again";
        wrong.classList.add("notify")
}

function work() {

        if (repin.value == '') {
               
              window.alert("please input the field");
                right.style.display = "none";
                wrong.style.display = "none"

        }else if (showPin.value == repin.value) {

                success();
                right.style.display = "block"
                wrong.style.display = "none"
        }else {
                notMatch();
                right.style.display = "none";
                wrong.style.display = "block";
                a();
        }

}


// number deleate and bacspace button
function clearNumber() {
        repin.value = '';
}
function backspace() {
        repin.value = repin.value.substring(0, repin.value.length - 1);

}



// submit button click coutnr system 
var counter = 1;

function a() {
        if (counter < 4) {
                document.getElementById('repin').innerText = repin;
                document.getElementById("try").innerText = counter + " try left";
                counter++;
                if (counter == 4) {
                        document.getElementById("try").textContent = "times out"
                }
        }
        else {
                document.getElementById("sub").disabled = true;
        }
}