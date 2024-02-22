import React from 'react'
import {SearchContext} from '../../App'
import search from '../../assets/img/search.png'
import debounce from 'lodash.debounce'

function Search() {
    const [value, setValue] = React.useState()

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 250),
		[])
    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const {setSearchValue} = React.useContext(SearchContext)
    return (
        <div className='header_search'>
            <img src={search} alt='' className='search_img'></img>
            <input
                value={value}
                onChange={onChangeInput}
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
