import { useEffect, useState } from 'react'

type VariantProps = {
	onClick?: () => void
	waiting?: boolean
	thinking?: boolean
	value: string
}

const variants = [
	{
		name: 'paper',
		beat: 'rock',
	},
	{
		name: 'rock',
		beat: 'scissors',
	},
	{
		name: 'scissors',
		beat: 'paper',
	},
]

function Variant({ onClick, waiting, thinking, value }: VariantProps) {
	if (waiting) {
		return (
			<svg
				className='w-[140px]'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g>
					<g>
						<path
							fill='rgba(0, 0, 0, 0.3)'
							d='M16,1C7.7157202,1,1,7.7157202,1,16s6.7157202,15,15,15s15-6.7157192,15-15S24.2842808,1,16,1z M16,27.7857151    C9.4909277,27.7857151,4.2142859,22.5090733,4.2142859,16S9.4909277,4.2142859,16,4.2142859S27.7857151,9.4909277,27.7857151,16    S22.5090733,27.7857151,16,27.7857151z'
						/>
					</g>
					<g>
						<path
							fill='rgba(0, 0, 0, 0.3)'
							d='M22.5761719,22.1396484c-0.2148438,0-0.4316406-0.0693359-0.6152344-0.2119141l-6.5771484-5.1396484    C15.1416016,16.5986328,15,16.3076172,15,16V9.4228516c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1v6.0893555    l6.1933594,4.8393555c0.4345703,0.340332,0.5117188,0.96875,0.171875,1.4038086    C23.1679688,22.0078125,22.8740234,22.1396484,22.5761719,22.1396484z'
						/>
					</g>
				</g>
			</svg>
		)
	}

	if (thinking) {
		return <img className='w-[140px]' src='/assets/loading.svg' />
	}

	return (
		<img
			onClick={onClick}
			className='cursor-pointer transition-all duration-100 ease-in-out hover:scale-[1.1]'
			width={180}
			src={`assets/${value}.svg`}
			alt='Variant'
		/>
	)
}

const RPS = () => {
	const [user, setUser] = useState({
		selected: false,
		variant: 'paper',
		wins: 0,
	})

	const [bot, setBot] = useState({
		thinking: false,
		waiting: true,
		variant: '',
		wins: 0,
	})

	const onClickRefresh = () => {
		setUser(prev => ({
			selected: false,
			variant: 'paper',
			wins: prev.wins,
		}))
		setBot(prev => ({
			thinking: false,
			waiting: true,
			variant: '',
			wins: prev.wins,
		}))
	}

	const onClickToggleVariant = () => {
		const arr = variants.map(obj => obj.name)
		const index = arr.findIndex(v => v === user.variant)
		const newVariant = arr[(index + 1) % 3]

		setUser(prev => ({
			...prev,
			variant: newVariant,
		}))
	}

	const onClickClickNext = () => {
		setUser(prev => ({
			...prev,
			selected: true,
		}))
		setBot(prev => ({ ...prev, thinking: true, waiting: false }))
		setTimeout(() => {
			setBot(prev => ({
				...prev,
				thinking: false,
				selected: true,
				variant: variants[Math.floor(Math.random() * 3)].name,
			}))
		}, 1000)
	}

	useEffect(() => {
		if (bot.selected && user.selected) {
			const userVariantBeat = variants.find(obj => obj.name === user.variant)
			if (user.variant === bot.variant) {
				return
			}
			if (userVariantBeat.beat === bot.variant) {
				setUser(prev => ({ ...prev, wins: prev.wins + 1 }))
			} else {
				setBot(prev => ({ ...prev, wins: prev.wins + 1 }))
			}
		}
	}, [bot.variant, user.variant])

	return (
		<div className='div-center'>
			<div className='p-[100px] w-full max-w-[900px] bg-white text-black rounded-[30px]'>
				<header className='flex justify-between items-center pl-[70px] pr-[60px]'>
					<h3 className='text-center text-[24px] '>
						<span>Вы:</span> <b>{user.wins}</b>
					</h3>
					<h3>
						<img
							onClick={onClickRefresh}
							className='cursor-pointer'
							src='/assets/refresh.svg'
							alt='Refresh'
						/>
						VS
					</h3>
					<h3>
						PC: <b className='block text-[62px] font-black'>{bot.wins}</b>
					</h3>
				</header>

				<div className='flex justify-between my-[50px] mx-0'>
					<div className='flex items-center'>
						<div
							className={`user ${user.selected ? 'pointer-events-none' : ''}`}
						>
							<Variant
								key={user.variant}
								onClick={onClickToggleVariant}
								value={user.variant}
							/>
						</div>

						{!user.selected && (
							<img
								onClick={onClickClickNext}
								className='w-20 ml-[30px] transition-all duration-100 ease-in-out opacity-30 cursor-pointer hover:translate-y-2.5 hover:opacity-100'
								src='/assets/arrow-right.svg'
								alt='Arrow'
							/>
						)}
					</div>

					<div className={bot.selected ? 'pointer-events-none' : ''}>
						<Variant
							waiting={bot.waiting}
							thinking={bot.thinking}
							value={bot.variant}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RPS
