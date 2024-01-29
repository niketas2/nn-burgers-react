import React from 'react'
import Categories from './Components/Categories'
import Header from './Components/Header'
import Item from './Components/ItemBlock/Item'
import Skeleton from './Components/ItemBlock/Skeleton'
import './css/style.scss'

function App() {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		fetch('https://65b58d1941db5efd2867c3d0.mockapi.io/Burgers')
			.then(res => {
				return res.json()
			})
			.then(arr => {
				setItems(arr)
				setIsLoading(false)
			})
	}, [])

	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<Categories />
				<div className='name'>
					<div className='container'>Меню</div>
				</div>
				<div className='content'>
					<div className='container'>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
