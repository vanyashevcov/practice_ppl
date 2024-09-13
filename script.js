// Ініціалізація редактора CodeMirror
var codeMirror = CodeMirror.fromTextArea(document.getElementById('task1'), {
  lineNumbers: true,
  mode: 'htmlmixed',
  theme: 'material',
  lineWrapping: true  // Додає автопереноси
});

// Зберігаємо початковий вміст редактора
var initialCode = codeMirror.getValue();

// Функція для оновлення вмісту iframe з результатом
function updateOutput() {
  var code = codeMirror.getValue();
  var iframe = document.getElementById('output');
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(code);
  iframeDoc.close();
}

// Викликаємо updateOutput при кожній зміні в редакторі
codeMirror.on('change', updateOutput);

// Викликаємо функцію одразу після завантаження сторінки, щоб відобразити початковий код
updateOutput();

// Функція для скидання вмісту редактора до початкового стану
function resetPage() {
  codeMirror.setValue(initialCode);
  // Очищаємо повідомлення про результати
  var resultElement = document.getElementById('result');
  resultElement.textContent = '';
  resultElement.classList.remove('result-success', 'result-failure');
  // Приховуємо кнопку наступного завдання, якщо вона є
  var nextButton = document.querySelector('.next-button');
  if (nextButton) {
    nextButton.style.display = 'none';
  }
  // Оновлюємо результат після скидання
  updateOutput();
}
