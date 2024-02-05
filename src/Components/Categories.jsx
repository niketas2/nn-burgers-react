import React from 'react'

function Categories({value, onChangeCategory}) {

	const Categories = [
		'Бургеры',
		'Картофель',
		'Десерты',
		'Мороженное',
		'Напитки',
		'Соусы',
	]

	return (
		<div className='nav_menu'>
			<ul>
				{Categories.map((categoryName, index) => (
					<li
						key={index}
						onClick={() => onChangeCategory(index)}
						className={value === index ? 'active' : ''}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
