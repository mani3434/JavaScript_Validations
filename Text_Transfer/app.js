


var str1 = document.getElementById("i1");
var str2  = document.getElementById("i2");


    document.getElementById("s1").addEventListener("click", function(){
       
        for(var i=0; i<str1.value.length; i++){    
            timeOut(i);   
        };

        function timeOut(i){

             setTimeout( function(){
                
                str2.value += str1.value.charAt(i);
                
                 //str1.value = str1.value.splice(i, str1.value.length);
                 
                //  console.log("bs "+str1.value);
                //  str1.value = str1.value.slice(i,str1.value.length);
                //  console.log("as "+str1.value);
                //  //console.log(str1.value.slice(str1.value.substring(i)));
                //  console.log(i);
                
                 
             },i*1000);
         };
        
    });

    document.getElementById("s2").addEventListener("click",function(){

        for(var i = str2.value.length; i > 0; i++){

            timeOut(i)
        }
        function timeOut(i){

            setTimeout( function(){
               
               str1.value += str2.value.charAt(i);
               
                //str1.value = str1.value.splice(i, str1.value.length);
                
                
            },i*1000);
        };

    });



    





