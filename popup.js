document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var form = d.createElement('form');
      form.action = 'http://localhost:3000/';
      form.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      form.appendChild(i);
      d.body.appendChild(f);
      form.submit();
    });
  }, false);
}, false);