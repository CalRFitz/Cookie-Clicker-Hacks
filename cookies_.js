document.querySelector("cookies").addEventListener("click", function(){
  Console.log("Giving you the cookies.");  
  Game.cookies+=(1+Game.cookies)*100*(10+Game.cookies);
});
