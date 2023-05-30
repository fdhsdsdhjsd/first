// Wait for the document to finish loading
  document.addEventListener("DOMContentLoaded", function() {
    // Find the <a> element with the href value "https://www.modycore.com/upgrade-account/"
    var link = document.querySelector('a[href="https://www.modycore.com/upgrade-account/"]');

    // Check if the element exists and update its inner text
    if (link) {
      link.innerText = "Upgrade Account";
      link.style.setProperty("color", "red", "important");
      // Add any other necessary styles with !important here
    }
  });
