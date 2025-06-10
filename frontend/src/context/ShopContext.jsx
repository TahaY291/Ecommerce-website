import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";
export const ShopContext  = createContext();
import axios from 'axios'

const ShopContextProvider = (props) => {
    const currency = '$';
    const  delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('')
    const  [showSearch , setShowSearch] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems]= useState({})
    const navigate = useNavigate()
    const  [token , setToken ] = useState('')

    const addToCart = async (itemId , size) => {
        if(!size){
            toast.error('Select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems)
        console.log(cartData[itemId])
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId,size } , { headers:{token} })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartCount = ()  =>  {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }

        return totalCount;
    }

    const getCartAmount =  () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product)=> product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        } 
        return totalAmount;
    }
    
    const updateQuantity = (itemId, size , quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity;
        setCartItems(cartData)
    }

    const getProductsData = async () => {
        try {
          const response = await axios.get(`${backendUrl}/api/product/list`);
          if (response.data.success) {
              setProducts(response.data.message);
          }else{
            toast.error(response.data.message)
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
    useEffect(()=>{
        getProductsData()
    },[])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }
    },[])

    const value = {
        products,token , setToken, currency, delivery_fee, search, setCartItems, setSearch, showSearch, setShowSearch, cartItems, addToCart , getCartCount , updateQuantity,getCartAmount, navigate, backendUrl
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;