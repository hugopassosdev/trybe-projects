function handleSubmit(event) {
    event.preventDefault();
}
window.onload = function () {
    const submitBtn = document.querySelector('#buttonSubmit');
    submitBtn.addEventListener('click', handleSubmit);
};

// Função para limpar as informações
function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }
//   Habilitando essa função em nosso botão
window.onload = function () {
    const clearBtn = document.querySelector('#buttonClear');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#buttonClear');
    submitBtn.addEventListener('click', handleSubmit);
  };
