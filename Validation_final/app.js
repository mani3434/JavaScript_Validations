

window.onload = f1;

function f1() {


    if (localStorage.getItem("data")) {

        var t = [];
        t = JSON.parse(localStorage.getItem("data"));

        var body = document.getElementById("tbl");
        body.innerHTML = "";


        var table = document.createElement("table");
        table.setAttribute("border", 1);

        var h = ["Id", "Name", "gender", "CityName", "Ph Num"];
        var row = table.insertRow(-1);
        for (var i = 0; i < 5; i++) {
            var hcell = document.createElement("th");
            hcell.innerHTML = h[i];
            row.appendChild(hcell);
        }

        for (var i = 0; i < t.length; i++) {
            row = table.insertRow(-1);

            var cell = row.insertCell(0);
            cell.innerHTML = t[i].id;
            var cell1 = row.insertCell(1);
            cell1.innerHTML = t[i].name;
            var cell2 = row.insertCell(2);
            cell2.innerHTML = t[i].gender;
            var cell3 = row.insertCell(3);
            cell3.innerHTML = t[i].city;
            var cell4 = row.insertCell(4);
            cell4.innerHTML = t[i].number;

        }

        body.appendChild(table);

    }
};





function validate() {

    var t1 = document.getElementById('id');
    var t2 = document.getElementById('name');
    var t3 = document.getElementsByName('gender');
    var t4 = document.getElementById('city');
    var t5 = document.getElementById('number');
    
    var f = true;

    if (t1.value.length == 0) {
        if (document.getElementById('p1') == null) {
            t1.insertAdjacentHTML('afterend', '<p id="p1"><font color="red"> Enter your id</font></p>');
        }
        f= false;
    }

    if (t2.value == "") {
        if (document.getElementById('p2') == null) {
            t2.insertAdjacentHTML('afterend', '<p id = "p2"><font color="red"> Enter your Name</font></p>');
        }
        f= false;
    }

    if (!(t3[0].checked || t3[1].checked)) {
        if (document.getElementById('p3') == null) {
            document.getElementById('r').insertAdjacentHTML('afterend', '<p id = "p3"><font color="red"> Select your gender</font></p>');
           
        }
        f= false;
    }


    if (t4.value == "") {
        if (document.getElementById('p4') == null) {
            t4.insertAdjacentHTML('afterend', '<p id = "p4"><font color="red"> Enter your city name</font></p>');
        }
        f= false;
    }

    if (t5.value == "") {
        if (document.getElementById('p5') == null) {
            t5.insertAdjacentHTML('afterend', '<p id = "p5"><font color="red"> Enter your phone number</font></p>');
        }
        f= false;
    }

    if(f) {

        var g = function () {
            if (t3[0].checked) {
                return t3[0].value;
            }
            else if (t3[1].checked) {
                return t3[1].value;
            }
        };

        var d1 = {
            "id": t1.value,
            "name": t2.value,
            "gender": g(),
            "city": t4.value,
            "number": t5.value
        };

        var data = [];

        if (localStorage.getItem("data")) {

            var temp = JSON.parse(localStorage.getItem("data"));
            temp.push(d1);
            localStorage.setItem("data", JSON.stringify(temp));
        }
        else {
            data.push(d1);
            localStorage.setItem("data", JSON.stringify(data));
        }

        f1();
        //document.getElementById('tbl').parentNode.appendChild(document.getElementById('tbl'));
        //document.getElementById('tbl').style.visibility = "visible";
    }
};

 function rtbl() {

    f1;
//     if(document.getElementById('tbl') != null){
//         document.getElementById('tbl').style.visibility= "hidden"; 
//     }
//     //document.getElementById('tbl').parentNode.removeChild(document.getElementById('tbl'));

//     // f1;
//     //document.getElementById('tbl').parentNode.appendChild(document.getElementById('tbl'));
}

function i1() {
    if (document.getElementById('p1') != null) {
        document.getElementById('p1').parentNode.removeChild(document.getElementById('p1'));
    }
};

function i2() {
    if (document.getElementById('p2') != null) {
        document.getElementById('p2').parentNode.removeChild(document.getElementById('p2'));
    }
};

function i3() {
    if (document.getElementById('p3') != null) {
        document.getElementById('p3').parentNode.removeChild(document.getElementById('p3'));
    }
};
function i4() {
    if (document.getElementById('p4') != null) {
        document.getElementById('p4').parentNode.removeChild(document.getElementById('p4'));
    }
};
function i5() {
    if (document.getElementById('p5') != null) {
        document.getElementById('p5').parentNode.removeChild(document.getElementById('p5'));
    }
};

function clr() {
    i1(); i2(); i3(); i4(); i5();
};
