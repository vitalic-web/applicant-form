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

const validationErrorMessages = {
  name: 'В имени могут быть только буквы',
  surname: 'В фамилии могут быть только буквы',
  email: 'Пожалуйста укажите электронную почту',
  file: 'загружайте файл размером не более 16 mb',
  gender: 'укажите пол',
  git: 'Проверьте правильность ссылки'
}

export {
  applicantForm,
  validationErrorMessages,
};
