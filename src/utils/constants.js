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
    name: 'Пол *',
    inputs: [
      {
        name: 'Мужской',
        id: 'male',
        type: 'radio'
      },
      {
        name: 'Женский',
        id: 'female',
        type: 'radio'
      },
    ],
  },
  github: {
    name: 'Github',
    input: {
      name: 'Вставьте ссылку на Github',
      id: 'git',
      type: 'url'
    }
  },
  buttonName: 'Отправить'
};

export {
  applicantForm,
};
