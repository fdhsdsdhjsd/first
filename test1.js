document.addEventListener('DOMContentLoaded', function() {
  var element = document.querySelector('#elNavSecondary_45 a');
  if (element) {
    element.textContent = 'Upgrade Account';
    element.style.transition = 'background-color 2s';
    element.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
  
    element.addEventListener('mouseover', function() {
      element.style.backgroundColor = 'rgba(255, 0, 0, 0)';
    });
  
    element.addEventListener('mouseout', function() {
      element.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    });
  }
});
