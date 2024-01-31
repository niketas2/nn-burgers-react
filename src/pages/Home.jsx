import React from 'react'
import Item from '../Components/BurgersBlock'
import Skeleton from '../Components/BurgersBlock/Skeleton'
import Categories from '../Components/Categories'

export const Home = () => {
	const [categoryId, setCategoryId] = React.useState(0)
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			'https://65b58d1941db5efd2867c3d0.mockapi.io/Items?category=' + categoryId
		)
			.then(res => {
				return res.json()
			})
			.then(arr => {
				setItems(arr)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId])

	return (
		<>
			<Categories value={categoryId} onChangeCategory={i => setCategoryId(i)} />
			<div className='name'>
				<div className='container'>Меню</div>
			</div>
			<div className='menu_list'>
				{isLoading
					? [...new Array(12)].map(() => <Skeleton />)
					: items.map(obj => (
							<Item
								key={obj.id}
								title={obj.title}
								price={obj.price}
								description={obj.description}
								image={obj.img}
							/>
					  ))}
			</div>
		</>
	)
}
export default Home
