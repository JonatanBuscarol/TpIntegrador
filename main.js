function hideandshow(mostrar, ocultar, texto) {
  var btn1 = "#" + mostrar;
  var btn2 = "#" + ocultar;
  var txt = "#" + texto;
  $(function () {
    $(txt).hide();
    $(btn2).hide();
    $(btn2).click(function () {
      $(txt).slideUp();
      $(btn1).show();
      $(btn2).hide();
    });
    $(btn1).click(function () {
      $(txt).slideDown();
      $(btn2).show();
      $(btn1).hide();
    });
  });
}
hideandshow("show1", "hide1", "txt1");
hideandshow("show2", "hide2", "txt2");
hideandshow("show3", "hide3", "txt3");

'use strict';
const switcher = document.querySelector(' .btnMod');
switcher.addEventListener('click', function () {
  document.getElementById("color").classList.toggle('normal');  
  document.getElementById("color").classList.toggle('oscuro');
    
});
