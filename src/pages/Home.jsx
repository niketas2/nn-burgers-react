import React from 'react'
import Item from '../Components/BurgersBlock'
import Skeleton from '../Components/BurgersBlock/Skeleton'
import Categories from '../Components/Categories'
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setFilters} from "../redux/slices/categorySlice";
import axios from "axios";
import qs from 'qs'
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const isMounted = React.useRef(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categoryId = useSelector((state) => state.categorySlice.categoryId)
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const {searchValue} = React.useContext(SearchContext)
    const setSearch = React.useRef(false)
    const fetchBurgers = () => {
        setIsLoading(true)
        const category = categoryId >= 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        axios.get(`https://65b58d1941db5efd2867c3d0.mockapi.io/Items?${category}${search}`)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            dispatch(setFilters({
                ...params,
            }))
            setSearch.current = true
        }
    }, [])

    React.useEffect(() => {
        if (!setSearch.current) {
            fetchBurgers()
        }
        setSearch.current = false
        window.scrollTo(0, 0)
    }, [categoryId, searchValue])

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                searchValue
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, searchValue])

    return (
        <>
            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
            <div className='name'>
                <div className='container'>Меню</div>
            </div>
            <div className='menu_list'>
                {isLoading
                    ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>)
                    : items.filter(obj => {
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
