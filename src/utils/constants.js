import { AboutCard } from '../pages/Home/components/AboutCard';

export const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://kinder.acceleratorpracticum.ru/api/';
export const EMAIL_PATTERN = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}';

export const album = [
  {
    image_url:
      'https://images.unsplash.com/photo-1696655496030-079414c31e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    image_url:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

export const cardsData = [
  {
    id: 'ab1',
    color: 'green',
    title: 'Экономия вашего времени',
    description:
      'Родители и опекуны могут быстро и легко находить подходящие детские учреждения, ознакомиться с информацией и бронировать места, всё это в одном месте.',
  },
  {
    id: 'ab2',
    color: 'blue',
    title: 'Информированный выбор',
    description:
      'Пользователи получают доступ к подробной информации о детских школах и садах, включая отзывы и рейтинги от других родителей.',
  },
  {
    id: 'ab3',
    color: 'orange',
    title: 'Удобство и доступность',
    description:
      'Сервис доступен 24/7 через интернет, что позволяет родителям и опекунам искать и бронировать места в детских учреждениях в любое удобное для них время и место.',
  },
  {
    id: 'ab4',
    color: 'green',
    title: 'Качественное образование',
    description:
      'Мы работаем только с проверенными детскими учреждениями, гарантируя вашему ребенку лучшее образование и развитие.',
  },
  {
    id: 'ab5',
    color: 'blue',
    title: 'Легкая навигация',
    description:
      'Наш интерфейс разработан с учетом потребностей пользователей, что позволяет легко находить и сравнивать детские школы и сады.',
  },
  {
    id: 'ab6',
    color: 'orange',
    title: 'Поддержка и консультации',
    description:
      'Наша команда готова помочь вам с вопросами и предоставить консультацию по выбору детского учреждения.',
  },
];

export const exampleSlides = cardsData.map((card) => (
  <AboutCard dataCard={card} />
));
