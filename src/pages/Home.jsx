import React from 'react'
import Item from '../Components/BurgersBlock'
import Skeleton from '../Components/BurgersBlock/Skeleton'
import Categories from '../Components/Categories'
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/categorySlice";
import axios from "axios";

export const Home = () => {
	const dispatch = useDispatch()
	const categoryId= useSelector((state)=> state.categorySlice.categoryId)
	const onChangeCategory= (id) =>{
		dispatch(setCategoryId(id))
	}
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const {searchValue} = React.useContext(SearchContext)

	React.useEffect(() => {
		setIsLoading(true)
		const category = categoryId >= 0 ? `category=${categoryId}` : ''
		const search = searchValue === searchValue ? `&search=${searchValue}`: ''

		axios.get(`https://65b58d1941db5efd2867c3d0.mockapi.io/Items?${category}${search}`)
			.then((res) => {
				setItems(res.data)
				setIsLoading(false)
			})

		window.scrollTo(0, 0)
	}, [categoryId, searchValue])

	return (
		<>
			<Categories value={categoryId} onChangeCategory={onChangeCategory} />
			<div className='name'>
				<div className='container'>Меню</div>
			</div>
			<div className='menu_list'>
				{isLoading
					? [...new Array(12)].map((_,index) => <Skeleton key ={index}/>)
					: items.filter(obj =>{
						return obj.title.toLowerCase().includes(searchValue.toLowerCase())
					})
						.map((obj) => (
						<Item
							key={obj.id}
							title={obj.title}
							price={obj.price}
							description={obj.description}
							image={obj.img}
						/>
					))}
			</div>
		</>
	)
}
export default Home
