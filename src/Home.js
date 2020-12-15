import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<img
				className='home_image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt=''
			/>

			<div className='home_row'>
				<Product
					id='12345432'
					title='New Apple iPhone 11 (64GB) - Black'
					detail='Fastest delivery: Tomorrow
                    Order within 7 hrs and 57 mins Details'
					price={51999}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg'
				/>
				<Product
					id='12345412'
					title='ASUS ZenBook Pro Duo Intel Core i9-10980HK 10th Gen 15.6" 4K UHD OLED Touchscreen Laptop (32GB RAM/1TB NVMe SSD/Windows 10/6GB NVIDIA GeForce RTX 2060'
					detail='Fastest delivery: Tomorrow
                    Order within 7 hrs and 57 mins Details'
					price={269294}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/91VR2ZXL9LL._SL1500_.jpg'
				/>
			</div>
			<div className='home_row'>
				<Product
					id='12395432'
					title='Devialet Gold Phantom (4500 Watts)'
					detail='This is not a speaker. This is Phantom. The best sound in the world. Encounter the physical impact of a high-end ultra-dense sound. Instantly. '
					price={299990}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/51P05w2sl4L._SL1000_.jpg'
				/>
				<Product
					id='42345432'
					title='World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books)'
					detail='A collection of worlds timeless classics, this box set includes the four greatest bestsellers, which have inspired readers for generations.'
					price={299}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg'
				/>
				<Product
					id='82345432'
					title='MI Watch Revolve Midnight Black'
					detail='Fastest delivery: Tomorrow 5PM
                    Order within '
					price={10999}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71lsOsQqEWL._SL1500_.jpg'
				/>
			</div>
			<div className='home_row'>
				<Product
					id='12345402'
					title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL'
					detail='34" Curved Ultrawide Quantum Dot Monitor with Thunderbolt 3 port to connect compatible Macs and PCs.
                    VA Panel with 1500 R Curvature ; Windows Certification: Windows10.0 ; Temperature: 10~40 ℃, Humidity: 10~80，non-condensing ; Power Supply: AC 100~240V'
					price={81500}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg'
				/>
			</div>
		</div>
	);
}

export default Home;
