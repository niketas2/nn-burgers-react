import React from 'react'
import {Link} from 'react-router-dom'
import Hamburger from '../assets/img/burgers/hamburger.png'
import CartInCart from '../assets/img/cart_in_cart.png'
import Minus from '../assets/img/minus.png'
import Plus from '../assets/img/plus.png'
import Trash from '../assets/img/trash.png'
import X from '../assets/img/x.png'

const Cart = () => {
	return (
		<div className='cart_content'>
			<div className='container'>
				<div className='cart_content_info'>
					<div className='cart_top'>
						<div className='cart_top_left'>
							<img src={CartInCart} alt=""/>
							<h1>Корзина</h1>
						</div>
						<div className='cart_top_right'>
							<img src={Trash} alt='' />
							<a href='#'>Очистить корзину</a>
						</div>
					</div>
					<div className='item_delimiter'></div>
					<div className='cart_item_info'>
						<div className='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div className='add_delete'>
							<img src={Minus} className='delete' id='MinusItemFromCart' alt='' />
							<img src={Plus} className='add' id='AddItemToCart' alt='' />
						</div>
						<p className='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' className='deleteItem' id='DelItemFromCart' />
					</div>
					<div className='item_delimiter'></div>
					<div className='cart_item_info'>
						<div className='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div className='add_delete'>
							<img src={Minus} className='delete' id='MinusItemFromCart' alt='' />
							<img src={Plus} className='add' id='AddItemToCart' alt='' />
						</div>
						<p className='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' className='deleteItem' id='DelItemFromCart' />
					</div>
					<div className='item_delimiter'></div>
					<div className='cart_item_info'>
						<div className='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div className='add_delete'>
							<img src={Minus} alt='' className='delete' id='MinusItemFromCart' />
							<img src={Plus} className='add' id='AddItemToCart' alt='' />
						</div>
						<p className='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' className='deleteItem' id='DelItemFromCart' />
					</div>
					<div className='item_delimiter'></div>
				</div>
				<div className='cart_bottom'>
					<div className='container'>
						<div className='cart_bottom_content'>
							<div className='all_items'>
								Всего:
								<p>3шт</p>
							</div>
							<div className='sum_to_pay'>
								Сумма заказа:
								<p className='sum' id='Sum'>
									159₴
								</p>
							</div>
						</div>
						<div className='buttons'>
							<Link to='/'>
								<button className='go_back'>
									Вернуться назад
								</button>
							</Link>
							<button className='pay'>
								Оплатить сейчас
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Cart
