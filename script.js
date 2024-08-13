var codeMirror = CodeMirror.fromTextArea(document.getElementById('task1'), {
  lineNumbers: true,
  mode: 'htmlmixed',
  theme: 'material',
  lineWrapping: true  // Ця опція додає автопереноси
});

codeMirror.on('change', function(cm) {
  cm.save();
  updateOutput();
});

function updateOutput() {
  var code = codeMirror.getValue();
  var outputFrame = document.getElementById('output').contentDocument;
  outputFrame.open();
  outputFrame.write(code);
  outputFrame.close();
}

function resetPage() {
  location.reload();
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}