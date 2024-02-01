import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import './css/style.scss'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const SearchContext = React.createContext()

function App() {
	const [searchValue, setSearchValue] = React.useState('')
	return (
		<div className='App'>
			<div className='wrapper'>
				<SearchContext.Provider value={{searchValue, setSearchValue}}>
					<Header />
					<div className='content'>
						<div className='container'>
							<Routes>
								<Route
									path='/'
									element={
										<Home
											searchValue={searchValue}
											setSearchValue={setSearchValue}
										/>
									}
								/>
								<Route path='*' element={<NotFound />} />
								<Route path='/cart' element={<Cart />} />
							</Routes>
						</div>
					</div>
				</SearchContext.Provider>
			</div>
		</div>
	)
}

export default App
