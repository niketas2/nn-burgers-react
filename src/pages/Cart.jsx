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
		<div class='cart_content'>
			<div class='container'>
				<div class='cart_content_info'>
					<div class='cart_top'>
						<div class='cart_top_left'>
							<img src={CartInCart} />
							<h1>Корзина</h1>
						</div>
						<div class='cart_top_right'>
							<img src={Trash} alt='' />
							<a href='/empty cart.html'>Очистить корзину</a>
						</div>
					</div>
					<div class='item_delimiter'></div>
					<div class='cart_item_info'>
						<div class='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div class='add_delete'>
							<img src={Minus} class='delete' id='MinusItemFromCart' alt='' />
							<img src={Plus} class='add' id='AddItemToCart' alt='' />
						</div>
						<p class='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' class='deleteItem' id='DelItemFromCart' />
					</div>
					<div class='item_delimiter'></div>
					<div class='cart_item_info'>
						<div class='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div class='add_delete'>
							<img src={Minus} class='delete' id='MinusItemFromCart' alt='' />
							<img src={Plus} class='add' id='AddItemToCart' alt='' />
						</div>
						<p class='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' class='deleteItem' id='DelItemFromCart' />
					</div>
					<div class='item_delimiter'></div>
					<div class='cart_item_info'>
						<div class='itemName' id='CartItemName'>
							<img src={Hamburger} alt='' />
							<h4>Гамбургер</h4>
						</div>
						<div class='add_delete'>
							<img src={Minus} alt='' class='delete' id='MinusItemFromCart' />
							<img src={Plus} class='add' id='AddItemToCart' alt='' />
						</div>
						<p class='price' id='Price'>
							53 ₴
						</p>
						<img src={X} alt='' class='deleteItem' id='DelItemFromCart' />
					</div>
					<div class='item_delimiter'></div>
				</div>
				<div class='cart_bottom'>
					<div class='container'>
						<div class='cart_bottom_content'>
							<div class='all_items'>
								Всего:
								<p>3шт</p>
							</div>
							<div class='sum_to_pay'>
								Сумма заказа:
								<p class='sum' id='Sum'>
									159₴
								</p>
							</div>
						</div>
						<div class='buttons'>
							<Link to='/'>
								<button class='go_back' href='/index.html'>
									Вернуться назад
								</button>
							</Link>
							<button class='pay' href=''>
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
