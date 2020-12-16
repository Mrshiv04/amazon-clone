import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					className='checkout_ad'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Winter/winter_hero_1500x300.jpg'
					alt='advertisement'
				/>
				{basket?.length === 0 ? (
					<div>
						<h1>Basket is empty</h1>
					</div>
				) : (
					<div>
						<h1 className='checkout_title'>Your shopping basket</h1>

						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>

			{basket.length > 0 && (
				<div className='checkout_right'>
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
