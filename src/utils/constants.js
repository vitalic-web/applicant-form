const applicantForm = {
  title: 'Анкета соискателя',
  personalData: {
    name: 'Личные данные',
    inputs: [
      {
        name: 'Имя',
        id: 'name',
        type: 'text'
      },
      {
        name: 'Фамилия',
        id: 'surname',
        type: 'text'
      },
      {
        name: 'Электронная почта',
        id: 'email',
        type: 'email'
      },
    ],
    buttonName: 'Загрузить резюме'
  },
  gender: {
    name: 'Пол',
    inputs: ['Мужской', 'Женский'],
  },
  github: {
    name: 'Github',
    input: 'Вставьте ссылку на Github',
  },
  buttonName: 'Отправить'
};

export {
  applicantForm,
};
