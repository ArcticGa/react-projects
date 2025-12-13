const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
]

const Quiz = () => {
	return (
		<div className='w-[600px] rounded-[30px] p-10 mx-auto bg-white text-black relative'>
			<>
				<div className='h-2.5 rounded-[30px] bg-white mb-[25px] '>
					<div
						style={{ width: '50%' }}
						className='h-full rounded-[30px] w-[80%] bg-green-500 transition-all duration-300 ease-in-out'
					></div>
				</div>
				<h1 className='m-0 text-[32px] font-bold'>Что такое useState?</h1>
				<ul className='list-none p-0'>
					<li className='p-[15px] border-2 border-black/10 rounded-[15px] mb-2.5 cursor-pointer transition-all duration-100 ease-in-out hover:border-black/30'>
						Это функция для хранения данных компонента
					</li>
					<li className='p-[15px] border-2 border-black/10 rounded-[15px] mb-2.5 cursor-pointer transition-all duration-100 ease-in-out hover:border-black/30'>
						Это глобальный стейт
					</li>
					<li className='p-[15px] border-2 border-black/10 rounded-[15px] mb-2.5 cursor-pointer transition-all duration-100 ease-in-out hover:border-black/30'>
						Это когда на ты никому не нужен
					</li>
				</ul>
			</>

			{/* RESULT */}
			{/* <div className='text-center'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
					alt='image'
					className='w-[150px]'
				/>
				<h2 className='mb-0'>Вы отгадали 3 ответа из 10</h2>
				<button className='font-bold rounded-[30px] border-0 py-[15px] px-[30px] text-xl bg-[#ff006e] text-white mt-5 cursor-pointer'>
					Попробовать снова
				</button>
			</div> */}
		</div>
	)
}

export default Quiz
