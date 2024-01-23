function Header() {
	return (
		<header>
			<div className='container'>
				<div className='header_content'>
					<div className='header_name_logo'>
						<div className='header_logo'>
							<a href='#'>
								<img src='img/logo.png' alt='' />
							</a>
						</div>
						<div className='header_name'>
							<h1>NN Burgers</h1>
							<p>Самые вкусные бургеры кєбенуматері</p>
						</div>
					</div>
					<div className='header_search'>
						<img src='img/search.png' alt='' className='search_img'></img>
						<input
							type='search'
							id='searchInput'
							className='search'
							name='search'
							placeholder='Найти бургер...'
						/>
					</div>
					<div className='header_cart'>
						<a href='/cart.html'>
							<p>0 ₴</p>
							<div className='button_delimiter'></div>
							<img src='img/cart.png' alt='' />
							<p>0</p>
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
