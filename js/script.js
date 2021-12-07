$(document).ready(function () {
  const btn = document.getElementById('#toast');

  const openNotification = () => {
    console.log("open");
    $("#toast-wrapper").animate({ bottom: "300" }, 500);
  };

  const closeNotification = () => {
    console.log("close");
  };

  console.log("toasted");
  
  btn.click(function() {
    toasty();
  })
  
  function toasty() {
    delay = setTimeout(openNotification(), 750);
    delay = setTimeout(closeNotification(), 4000);
  }
 
});
