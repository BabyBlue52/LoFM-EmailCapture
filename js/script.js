import $ from "jquery";

$(document).ready(function () {
  console.log("toasted");
  $(".submitForm").click(function () {
    var val = document.getElementById("email");
    var url = "";

    toasty();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        val: val
      })
    );
  });

  function toasty() {
    delay = setTimeout(openNotification(), 750);
    delay = setTimeout(closeNotification(), 4000);
  }

  const openNotification = () => {
    console.log("open");
    $("#toast-wrapper").animate({ bottom: "300" }, 500);
  };

  const closeNotification = () => {
    console.log("close");
  };
});
