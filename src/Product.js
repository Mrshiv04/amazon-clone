import React from 'react';
import './Product.css';

function Product({ id, title, price, rating, image, detail }) {
	return (
		<div className='product'>
			<div className='product_info'>
				<h3>{title}</h3>
				{/* <p>{detail}</p> */}
				<p className='product_price'>
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className='product_rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p>&#11088;</p>
						))}
				</div>
			</div>

			<img src={image} alt='product_image' />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
