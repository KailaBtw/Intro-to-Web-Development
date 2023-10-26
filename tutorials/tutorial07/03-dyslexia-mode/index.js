/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


function dyslexiaMode() {
  document.querySelector(".content").style.letterSpacing = "0.35ch"
  document.querySelector(".content").style.wordSpacing = "1.225ch"
  document.querySelector(".content").style.fontVarientLigatures = "none"
  document.querySelector(".content").style.lineHeight = "2.0"
  document.querySelector(".content").style.fontWeight = "600"
  document.querySelector(".content").style.color = "#000"
  document.querySelector(".content").style.fontSize = "150%"
  document.querySelector(".content").style.maxWidth = "650px"
  document.querySelector(".content").style.marginLeft = "30%"
}