import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import GitHub from '../../assets/svg/Github'
import { projectsArray } from '../../utils/arrays'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const navbarRef = useRef<HTMLDivElement | null>(null)

	const currentTitle =
		projectsArray.find(item => item.link === pathname)?.title ??
		'Главная страница'

	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (event: MouseEvent) => {
			if (
				navbarRef.current &&
				!navbarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	return (
		<header className='flex justify-center'>
			<div className='flex items-center justify-between max-w-3/4 w-full'>
				<div
					onClick={() => navigate('/')}
					className='w-[145px] text-2xl font-bold cursor-pointer'
				>
					Mini Projects
				</div>

				<div
					ref={navbarRef}
					className='relative navbar-projects cursor-pointer max-w-[260px] w-full'
				>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className='text-lg px-8 py-2 flex items-center justify-center gap-3'
					>
						{currentTitle !== 'Главная страница' && (
							<div className=' w-2 h-2 rounded-full bg-white' />
						)}

						<span>{currentTitle}</span>
					</div>

					{isOpen && (
						<div className='absolute -bottom-60 -left-68 w-[800px] grid grid-cols-3 overflow-hidden p-2 gap-2 rounded-2xl z-50 border border-[#ffffff2f] bg-background'>
							{projectsArray.map((project, index) => (
								<Link
									onClick={() => setIsOpen(false)}
									key={index}
									to={project.link}
									className='flex items-center justify-center gap-2 rounded-xl py-4 bg-transparent border border-[#ffffff23] max-w-[300px] w-full'
								>
									<div className='flex items-center gap-1.5 justify-center'>
										<span className='text-base'>{project.title}</span>
									</div>
								</Link>
							))}
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
