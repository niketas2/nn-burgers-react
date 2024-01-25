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
							<Item title='123' price='123' description='123' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
