const Users = () => {
	return (
		<div className='div-center'>
			<div className='w-[400px] h-[600px] bg-white text-black rounded-[30px] p-10'>
				<>
					<div className='relative'>
						<svg
							className='w-[18px] h-[18px] absolute top-[17px] left-5 opacity-30'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
						</svg>
						<input
							className='border border-black/10 p-[15px] rounded-[15px] w-full text-base pl-[50px]'
							type='text'
							placeholder='Найти пользователя...'
						/>
					</div>

					<ul className='list-none p-0 m-0 overflow-auto h-[400px] mt-[30px]'>
						<li className='flex items-center justify-between mb-[15px]'>
							<div className='flex'>
								<img
									className='rounded-[30px] w-[50px] h-[50px] mr-[15px]'
									src='https://reqres.in/img/faces/1-image.jpg'
									alt='User'
								/>
								<div>
									<h3 className='m-0 font-black mt-[5px] ml-0 text-[#182170]'>
										Amon Bower
									</h3>
									<p className='flex items-center text-sm m-0 text-black/50 mt-[3px]'>
										<svg
											className='w-4 h-4 mr-1'
											viewBox='0 0 96 96'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill='rgba(0, 0, 0, 0.2)'
												d='M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z'
											/>
										</svg>
										george.bluth@reqres.in
									</p>
								</div>
							</div>
							<img
								className='w-7 h-7 opacity-30 cursor-pointer hover:opacity-80'
								src='/assets/plus.svg'
								alt='Action'
							/>
						</li>
					</ul>

					<button className='bg-red-400 py-4 px-[15px] rounded-[15px] text-base text-white w-full border-0 outline-none cursor-pointer transition-all duration-100 ease-in-out hover:bg-red-500 active:translate-y-0.5'>
						Отправить приглашение
					</button>
				</>

				{/* <Success /> */}
				{/* <div className='flex items-center justify-center h-full flex-col'>
					<img
						className='w-[120px] h-[120px]'
						src='/assets/success.svg'
						alt='Success'
					/>
					<h3 className='text-[24px] mb-0 mt-2.5'>Успешно!</h3>
					<p className='text-center mb-[30px]'>
						Всем '10' пользователям отправлено приглашение.
					</p>
					<button className='w-[200px]'>Назад</button>
				</div> */}
			</div>
		</div>
	)
}

export default Users
