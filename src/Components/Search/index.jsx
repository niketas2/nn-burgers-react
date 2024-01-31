import React from 'react'
import search from '../../assets/img/search.png'

function Search({searchValue, setSearchValue}) {
	return (
		<div className='header_search'>
			<img src={search} alt='' className='search_img'></img>
			<input
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				type='search'
				id='searchInput'
				className='search'
				name='search'
				placeholder='Найти бургер...'
			/>
		</div>
	)
}

export default Search
