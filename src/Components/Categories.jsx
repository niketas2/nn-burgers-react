import React from 'react'

function Categories() {
	const [activeCategory, setActiveCategory] = React.useState(0)
	const onClickCategory = index => {
		setActiveCategory(index)
	}

	const Categories = ['Бургеры', 'Картофель', 'Десерты', 'Напитки', 'Соусы']

	return (
		<div className='nav_menu'>
			<div className='container'>
				<ul>
					{Categories.map((value, index) => (
						<li
							onClick={() => setActiveCategory(index)}
							className={activeCategory === index ? 'active' : ''}
						>
							{value}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Categories
