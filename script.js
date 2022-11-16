var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.firstChild.style.color == "red") {
      like.firstChild.style.color = "black";
    } else {
      like.firstChild.style.color = "red";
    }
  });
}


var plus = document.getElementsByClassName("plus-btn");
var priceT = document.getElementsByClassName("pricet");
for (let i = 0; i < plus.length; i++) {
  let oneplus = plus[i];

  oneplus.addEventListener("click", function () {
    oneplus.previousElementSibling.value++;
    var priceU = document.getElementsByClassName("priceu")[i].innerHTML;
   var PT=priceU* oneplus.previousElementSibling.value;
    
    priceT[i].textContent=PT;

  });
}



var minus = document.getElementsByClassName("minus-btn");
var priceT = document.getElementsByClassName("pricet");
for (let i = 0; i < minus.length; i++) {
 
  let oneplus = minus[i];
  oneplus.addEventListener("click", function () 
  {
 
  if(  oneplus.nextElementSibling.value>1){
    oneplus.nextElementSibling.value--;
    var priceU = document.getElementsByClassName("priceu")[i].innerHTML;
    var PT=priceU* oneplus.nextElementSibling.value;
    
    priceT[i].textContent=PT;


    
   
}
  })
}




var del= document.getElementsByClassName("delete")
for (let i=0;i<del.length;i++){
    let onedel =del[i] ;
    onedel.addEventListener("click",function()
    {
onedel.parentElement.remove();
    }
    )}



 var p = document.getElementsByClassName("Pricet");

 for (let i = 0; i < p.length; i++) {
    alert(p[i]);
 let onep=price[i]*plus[i];
 let price = parseFloat(priceElement.innerText.replace('$', ''))
                let quantity = quantityElement.value
                total = total + (price * quantity) }
    









