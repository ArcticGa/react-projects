import { useState } from 'react'
import { useNavigate } from 'react-router'
import GitHub from '../../assets/svg/Github'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<header className='flex justify-center'>
			<div className='flex items-center justify-between max-w-3/4 w-full'>
				<div
					onClick={() => navigate('/')}
					className='w-[145px] text-2xl font-bold cursor-pointer'
				>
					Mini Projects
				</div>

				<div className='relative navbar-projects cursor-pointer'>
					<div onClick={() => setIsOpen(!isOpen)} className='text-lg px-8 py-2'>
						Главная страница
					</div>

					{isOpen && (
						<div className='absolute -bottom-15 left-0'>
							<div>aboba</div>
							<div>aboba</div>
						</div>
					)}
				</div>

				<div className='w-[145px]'>
					<a href='https://github.com/ArcticGa/Portfolio' target='_blank'>
						<GitHub />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
