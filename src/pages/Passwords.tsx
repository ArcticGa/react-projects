const Passwords = () => {
	return (
		<div className='relative p-[50px] w-[400px] my-[100px] mx-auto rounded-[30px] bg-white text-black main-passwords'>
			<span className='mb-[5px] opacity-50'>Пароль:</span>
			<h2 className='font-bold text-[24px] rounded-[15px] outline-none w-full m-0'>
				2UYsAhMdPR7wBHwG
			</h2>
			<div className='flex items-center justify-between mt-5'>
				<span>Длина пароля:</span>
				<input
					className='w-20 p-2.5 border border-[#00000000] rounded-[10px]'
					type='text'
					value='10'
				/>
			</div>
			<div className='flex items-center justify-between mt-5'>
				<span>Прописные буквы:</span>
				<input
					className='styled-checkbox'
					id='checkbox1'
					type='checkbox'
					value='value1'
				/>
				<label htmlFor='checkbox1' />
			</div>
			<div className='flex items-center justify-between mt-5'>
				<span>Строчные буквы:</span>
				<input
					checked={true}
					className='styled-checkbox'
					id='checkbox2'
					type='checkbox'
					value='value1'
				/>
				<label htmlFor='checkbox2' />
			</div>
			<div className='flex items-center justify-between mt-5'>
				<span>Цифры:</span>
				<input
					className='styled-checkbox'
					id='checkbox3'
					type='checkbox'
					value='value1'
				/>
				<label htmlFor='checkbox3' />
			</div>
			<div className='flex items-center justify-between mt-5'>
				<span>Символы:</span>
				<input
					className='styled-checkbox'
					id='checkbox4'
					type='checkbox'
					value='value1'
				/>
				<label htmlFor='checkbox4' />
			</div>
			<button className='password-button'>Сгенерировать</button>
		</div>
	)
}

export default Passwords
