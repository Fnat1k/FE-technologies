function validateForm() {
    const form = document.getElementById('validationForm');

    const fields = [
      { id: 'fullName', pattern: /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/, error: 'ПІБ повинен мати формат ТТТТТТ Т.Т.' },
      { id: 'idCard', pattern: /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/, error: 'ID-card повинен мати формат ТТ №ЧЧЧЧЧЧ' },
      { id: 'faculty', pattern: /^[А-ЯІЇЄҐа]+$/, error: 'Факультет повинен мати формат ТТТТ' },
      { id: 'birthDate', pattern: /^\d{2}\.\d{2}\.\d{4}$/, error: 'Дата народження у форматі ЧЧ.ЧЧ.ЧЧЧЧ' },
      { id: 'address', pattern: /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ]+$/, error: 'Адреса у форматі м. ТТТТТТ' },
    ];

    let isValid = true;

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorElement = document.getElementById(field.id + 'Error');

      if (!field.pattern.test(input.value)) {
        isValid = false;
        input.classList.add('error');
        errorElement.textContent = field.error;
      } else {
        input.classList.remove('error');
        errorElement.textContent = '';
      }
    });

    if (isValid) {
      const outputContent = document.getElementById('outputContent');
      const result = fields.map(field => {
        const input = document.getElementById(field.id);
        return `<strong>${field.id}:</strong> ${input.value}`;
      }).join('<br>');

      outputContent.innerHTML = result;
    }
  }
