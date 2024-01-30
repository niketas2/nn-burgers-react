import React from 'react'

function Categories() {
	const [activeCategory, setActiveCategory] = React.useState(0)

	const Categories = ['Бургеры', 'Картофель', 'Десерты', 'Напитки', 'Соусы']

	return (
		<div className='nav_menu'>
			<ul>
				{Categories.map((value, index) => (
					<li
						key={index}
						onClick={() => setActiveCategory(index)}
						className={activeCategory === index ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
