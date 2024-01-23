function Item({title, description, price}) {
	return (
		<div className='menu_item'>
			<img src='img/hamburger.png' alt='' />
			<h4>{title}</h4>
			<p className='menu_item_info'>{description}</p>
			<div className='container'>
				<div className='menu_item_bottom'>
					<p className='price' id='Price'>
						{price} грн
					</p>
					<button className='add_button' id='AddToCartButton'>
						+ Добавить
					</button>
				</div>
			</div>
		</div>
	)
}
export default Item
