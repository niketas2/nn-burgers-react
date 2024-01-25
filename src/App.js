import Categories from './Components/Categories'
import Header from './Components/Header'
import Item from './Components/Item'
import items from './assets/items.json'
import './css/style.scss'

function App() {
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
							{items.map(obj => (
								<Item
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
