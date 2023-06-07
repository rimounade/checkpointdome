var btnplus = document.querySelectorAll('.btnplus')//get bouton plus
var btnmoins = document.querySelectorAll('.btnmoins')//get bouton moins
var DelTrash = document.querySelectorAll('.fa-trash')//get trash
var heart = document.querySelectorAll('.fa-heart')//get heart
/*bouton +*/
for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener('click', function () {
      
     btnplus[i].nextElementSibling.innerText++
      sommeTotal()})
   
    
}
/*bouton -*/
for (let i = 0; i < btnmoins.length; i++) {
    btnmoins[i].addEventListener('click', function () {
      if (btnmoins[i].previousElementSibling.innerText > 0) {
        btnmoins[i].previousElementSibling.innerText--
        sommeTotal()
       
      }
    })
  }
   /*trush*/
   for(let i=0;i<DelTrash.length;i++){
    DelTrash[i].addEventListener('click',function(){
        DelTrash[i].parentElement.parentElement.remove()
        sommeTotal()
    })
  }
  /*heart*/
  for(let i=0; i<heart.length; i++){
    heart[i].addEventListener('click', function(){
        heart[i].classList.toggle("heartcolor")
    })
  }
  /*somme*/
  function sommeTotal(){
    var price = document.querySelectorAll('.price')
    var quantite = document.querySelectorAll('.quantite')
    console.log(price)
    console.log(quantite)
    var somme = document.querySelector('#somme')
    var sum=0
    for(let i=0;i<price.length;i++){
        sum =sum + price[i].innerText * quantite[i].innerText
    }
    somme.innerText = sum

  }