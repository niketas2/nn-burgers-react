import Categories from './Components/Categories'
import Header from './Components/Header'
import Item from './Components/Item'
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
							<Item
								title='Гамбургер'
								price='53'
								description='Біфштекс із яловичини, цибуля, шматочок маринованого огірка, заправлені гірчицею і кетчупом, у запашній булочці із пшеничного борошна'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
