import {Link} from 'react-router-dom'
import cart from '../assets/img/cart.png'
import logoPng from '../assets/img/logo.png'
import search from '../assets/img/search.png'

function Header() {
	return (
		<header>
			<div className='container'>
				<div className='header_content'>
					<div className='header_name_logo'>
						<div className='header_logo'>
							<Link to='/'>
								<img src={logoPng} alt='' />
							</Link>
						</div>
						<div className='header_name'>
							<h1>NN Burgers</h1>
							<p>Самые вкусные бургеры кєбенуматері</p>
						</div>
					</div>
					<div className='header_search'>
						<img src={search} alt='' className='search_img'></img>
						<input
							type='search'
							id='searchInput'
							className='search'
							name='search'
							placeholder='Найти бургер...'
						/>
					</div>
					<div className='header_cart'>
						<Link to='/cart'>
							<p>0 ₴</p>
							<div className='button_delimiter'></div>
							<img src={cart} alt='' />
							<p>0</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
