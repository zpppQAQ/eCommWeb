import React, {useEffect, useState} from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Item from '../../components/Item.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../state';
import {Box,Typography, useMediaQuery } from '@mui/material';


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state)=>state.cart.items);
    // console.log("🚀 ~ file: ShoppingList.jsx:14 ~ ShoppingList ~ items:", items)
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    async function getItems(){
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            {method: "GET"}
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data));
    }
    useEffect(()=>{
        getItems();
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const topRatedItems = items.filter(
        (item)=>item.attributes.category === "topRated"
    );
    const bestSellersItems = items.filter(
        (item)=>item.attributes.category === "bestSellers"
    );
    const newArrivalsItems = items.filter(
        (item)=>item.attributes.category === "newArrivals"
    );



  return (
    <Box width="80%" margin="80px auto">
        <Typography variant="h3" textAlign="center">
            Our Featured <b>Products</b>
        </Typography>
        <Tabs
            textColor='primary'
            indicatorColor='primary'
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ sx:{display: isNonMobile? "block" : "none"}}}
            sx={{
                m:"25px",
                "& .MuiTabs-flexContainer" : {
                    flexWrap: "wrap"
                }
            }}
        >
            <Tab label="ALL" value="all"/>
            <Tab label="New Arrivals" value="newArrivals"/>
            <Tab label="Best Sellers" value="bestSellers"/>
            <Tab label="Top Rated" value="topRated"/>
        </Tabs>
        {/* products */}
        <Box
            margin=" 0 auto"
            display="grid"
            gridTemplateColumns="repeat(auto-fill,300px)"
            justifyContent="space-around"
            rowGap="20px"
            columnGap="1.33%"
        >
            {value==="all" && items.map((item)=>(
                <Item item={item} key={`${item.name}-${item.id}`}/>
            ))}
            {value==="newArrivals" && newArrivalsItems.map((item)=>(
                <Item item={item} key={`${item.name}-${item.id}`}/>
            ))}
            {value==="bestSellers" && bestSellersItems.map((item)=>(
                <Item item={item} key={`${item.name}-${item.id}`}/>
            ))}
            {value==="topRated" && topRatedItems.map((item)=>(
                <Item item={item} key={`${item.name}-${item.id}`}/>
            ))}
        </Box>
        



    </Box>

  )
}

export default ShoppingList


