document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var upgradeWord = "upgrade";

    if (currentUrl.includes(upgradeWord)) {
      var element = document.querySelector('[data-navitem-id="47"]');
      if (element) {
        element.style.color = "#2ecc71";
      }
    }
  });
