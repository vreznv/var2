document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ваш код для валидации формы здесь

    // Пример отправки формы через fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Ответ сервера:', data);
        alert('Форма успешно отправлена!');
      })
      .catch(error => console.error('Ошибка при отправке формы:', error));
  });
});