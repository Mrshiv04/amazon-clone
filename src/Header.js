import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
	return (
		<nav className='header'>
			<Link to='/'>
				<img
					className='header_logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='logo'
				/>
			</Link>
			<div className='header_search'>
				<input type='text' className='header_searchInput' />
				<SearchIcon className='header_searchIcon' />
			</div>

			<div className='header_nav'>
				<Link to='/login' className='header_link'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Hello Shivam</span>
						<span className='header_optionLineTwo'>Sign In</span>
					</div>
				</Link>

				<Link to='/' className='header_link'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Returns</span>
						<span className='header_optionLineTwo'>& Orders</span>
					</div>
				</Link>

				<Link to='/' className='header_link'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Your</span>
						<span className='header_optionLineTwo'>Prime</span>
					</div>
				</Link>
				<Link to='/checkout' className='header_link'>
					<div className='header_optionBasket'>
						<AddShoppingCartIcon />
						<span className='header_optionLineTwo header_basketCount'>0</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
