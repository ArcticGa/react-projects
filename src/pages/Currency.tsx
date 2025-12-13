const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP']

const Currency = () => {
	const onChangeCurrency = (cur: string) => {
		console.log(cur)
	}

	const value = 0
	const currency = 'RUB'

	return (
		<div className='flex gap-[30px] w-[800px] my-[100px] mx-auto bg-white p-[30px] rounded-[15px] text-black'>
			<div className='block'>
				<ul className='flex list-none p-0 m-0 border border-black/20 rounded-[5px] overflow-hidden'>
					{defaultCurrencies.map(cur => (
						<li
							onClick={() => onChangeCurrency(cur)}
							className={`${
								currency === cur && 'bg-[#16b67f] text-white'
							} inline-flex py-2.5 px-5 border-r border-black/20 cursor-pointer justify-center flex-1 hover:bg-black/30 active:bg-black/40 last-of-type:inline-flex 
							last-of-type:items-center 
							last-of-type:flex-[0 0 50px] last-of-type:border-r-0`}
							key={cur}
						>
							{cur}
						</li>
					))}
					<li>
						<svg height='16px' viewBox='0 0 50 50' width='16px'>
							<rect fill='none' height='50' width='50' />
							<polygon points='47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 ' />
						</svg>
					</li>
				</ul>
				<input
					// onChange={e => onChangeValue(e.target.value)}
					value={value}
					type='number'
					// placeholder={0}
					className='border border-black text-[3rem] font-bold p-5 outline-none mt-5 rounded-[5px] w-full'
				/>
			</div>
			<div className='block'>
				<ul className='flex list-none p-0 m-0 border border-black/20 rounded-[5px] overflow-hidden'>
					{defaultCurrencies.map(cur => (
						<li
							onClick={() => onChangeCurrency(cur)}
							className={`${
								currency === cur && 'bg-[#16b67f] text-white'
							} inline-flex py-2.5 px-5 border-r border-black/20 cursor-pointer justify-center flex-1 hover:bg-black/30 active:bg-black/40 last-of-type:inline-flex 
							last-of-type:items-center 
							last-of-type:flex-[0 0 50px] last-of-type:border-r-0`}
							key={cur}
						>
							{cur}
						</li>
					))}
					<li>
						<svg height='16px' viewBox='0 0 50 50' width='16px'>
							<rect fill='none' height='50' width='50' />
							<polygon points='47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 ' />
						</svg>
					</li>
				</ul>
				<input
					// onChange={e => onChangeValue(e.target.value)}
					value={value}
					type='number'
					// placeholder={0}
					className='border border-black text-[3rem] font-bold p-5 outline-none mt-5 rounded-[5px] w-full'
				/>
			</div>
		</div>
	)
}

export default Currency
