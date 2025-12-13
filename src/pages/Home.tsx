import { Link } from 'react-router'
import { projectsArray } from '../utils/arrays'

const Home = () => {
	return (
		<div>
			<div className='mt-10 flex flex-col items-center'>
				<Link
					to='/rps'
					className='text-center mb-8 border p-2 rounded-full flex items-center gap-2 border-[#ffffff23] bg-[#ffffff03] cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out'
				>
					<span className='py-1 px-3 rounded-full text-sm text-[#d3d3d3] bg-[#7b39ed]'>
						New 🎉
					</span>
					<span className='text-[#d3d3d3]'>Rock Paper Scissors</span>
					<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 24 24'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z'></path>
					</svg>
				</Link>
				<h1 className='text-center text-6xl font-bold h1-shadow leading-18'>
					Список Проектов <br /> Для Практики
				</h1>
				<p className='mt-10 text-xl text-center text-[#ccc]'>
					Список небольших проектов созданных в целях практики.
				</p>
			</div>

			<div className='flex flex-col items-center justify-center mt-12 text-center'>
				<div className='grid grid-cols-3 gap-6'>
					{projectsArray.map((project, index) => {
						const Svg = project.svg

						return (
							<Link
								key={index}
								to={project.link}
								className='border border-[#ffffff23] rounded-xl p-4 bg-[#ffffff03] max-w-[300px] w-full'
							>
								<div className='flex items-center gap-2 justify-center'>
									<Svg />
									<span className='text-xl'>{project.title}</span>
								</div>
								<div>{project.text}</div>
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Home
