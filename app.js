
//var firstname = " shaima"
//var lastname = " sawaie"
//console.log ( firstname + lastname)
//var x=1
//console . log("1")
//console . log ("hello")

//alert (" welcom to my websit")
//var ask = prompt("you like tea")
//var x = "yes"
//var y="No"
//if (ask == "yes")

 //var ask = prompt (" what is your favorit type of tea")

// else
 
// alert (" its sad")
//document.write ('<h3>'+ ask + '</h3>');

//var guessname= prompt("guessnam")
////if (guessname == 3)
////{

 // alert ("you got the fiirst guess right")
//}
//else
//alert (" thanks")
<<<<<<< HEAD
/]var result = prompt("How many words are in the paragraph?"); 
=======
var result = prompt("How many words are in the paragraph?"); 
>>>>>>> e9d7dd6394f273a98c8d187e23ed8cd4e1c8f8f5
function tea (){
    while (result<190||result>200||result==isNaN(result)) 
    {
        var result = prompt("You need to give number How many words are in the paragraph?!")
    }
  alert ("success")

var ask = prompt (" what is your favorit type of tea");

  if (ask == "black tea"){
    var times= prompt ("how many time you wish to it on my page ")

    for ( var t =0; t< times ;t++){
      document.write("<div>"+ "<h3>"+ ask + "<h3>"+"<img src = 'https://www.thespruceeats.com/thmb/psfnIpFCKyPIt71Bf3vz5Yvdm0o=/2121x1414/filters:fill(auto,1)/Dry-black-tea-581a73a03df78cc2e85d2f7d.jpg'>"+"</div>"
    )
    }

  }
}
tea();

function teafun (typeoftea){
var output = ''
for (t = 0 ; t < typeoftea ; t++ )
{
  console.log(output);
  output = output + " <img src= 'https://image.freepik.com/free-vector/types-tea-set-porcelain-cups-with-beverage_82574-5997.jpg' alt = 'tea' >"
}
return output;
}
document.write(teafun (tea))
