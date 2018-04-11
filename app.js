

function validate() {

    var t1 = document.getElementById('id');
    var t2 = document.getElementById('name');
    var t3 = document.getElementsByName('gender');

    if (t1.value == "") {
        if (document.getElementById('p1') == null) {
            t1.insertAdjacentHTML('afterend', '<p id="p1"><font color="red"> Enter your id</font></p>');
        }
    }
   
    if (t2.value == "") {
        if (document.getElementById('p2') == null) {
            t2.insertAdjacentHTML('afterend', '<p id = "p2"><font color="red"> Enter your Name</font></p>');
        }
    }

    if (!(t3[0].checked || t3[1].checked)) {
        if (document.getElementById('p3') == null) {
            document.getElementById('r').insertAdjacentHTML('afterend', '<p id = "p3"><font color="red"> Select your gender</font></p>');
        }
    }

};

function i1(){

   document.getElementById('p1').parentNode.removeChild(document.getElementById('p1'));
}

function i2(){

    document.getElementById('p2').parentNode.removeChild(document.getElementById('p2'));
 }

 function i3(){

    document.getElementById('p3').parentNode.removeChild(document.getElementById('p3'));
 }

 function clr(){
     i1();  i2(); i3();
 }
