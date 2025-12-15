import CurrencySvg from '../assets/svg/CurrencySvg'
import PasswordSvg from '../assets/svg/PasswordSvg'
import QuizSvg from '../assets/svg/QuizSvg'
import RegisterSvg from '../assets/svg/RegisterSvg'
import RPSSvg from '../assets/svg/RPSSvg'
import TodoSvg from '../assets/svg/TodoSvg'
import UserSvg from '../assets/svg/UserSvg'

export const projectsArray = [
	{
		svg: TodoSvg,
		title: 'Todo',
		text: 'Todo компонент. Можно записать какие-нибудь задачи. Отмечать их, удалять. Так же есть разбивка по категориям.',
		link: '/todo',
	},
	{
		svg: PasswordSvg,
		title: 'Password Generator',
		text: 'Генератор пароля. Имеет гибкую настройку для генерации.',
		link: '/passwords',
	},
	{
		svg: CurrencySvg,
		title: 'Currency Converter',
		text: 'Конвертер валют. Конвертация с помощью стороннего API с множеством валют.',
		link: '/currency',
	},
	{
		svg: RegisterSvg,
		title: 'Register Component',
		text: 'Небольшой компонент для регистрации. Тут уклон больше на умение обработки формы.',
		link: '/register',
	},
	{
		svg: UserSvg,
		title: 'Users List',
		text: 'Небольшой список пользователей. Работа с массивами, хуками и API. Реализован как "Отправка приглашений на мероприятие".',
		link: '/users',
	},
	{
		svg: QuizSvg,
		title: 'Quiz',
		text: 'Небольшой тест. Несколько вопросов по Фронтенд тематике. Плюс реализовано пару фишек.',
		link: '/quiz',
	},
	{
		svg: RPSSvg,
		title: 'Rock Paper Scissors',
		text: 'Игра в Камень-Ножницы-Бумага. Прикольная штука.',
		link: '/rps',
	},
]
