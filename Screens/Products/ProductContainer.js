import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { Icon, Container, Header, Item, Text, Input } from "native-base"

import ProductList from "./ProductList"
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';

const data = require("../../assets/products.json");
//console.log(data);
const ProductContainer = () => {

    const[products, setProducts] = useState([]);
    const[productsFiltered, setproductsFiltered] = useState([]);
    const[focus, setFocus] = useState();

    useEffect(() => {
        setProducts(data);
        setproductsFiltered(data);
        setFocus(false);

        return() =>{
            setProducts([])
            setproductsFiltered([])
            setFocus()
        }
    }, [])

    const searchProduct = (text) => {
        setproductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toString().toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    return(
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder='Search'
                        onFocus={openList}
                        onChange={(text) => searchProduct(text)}
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ): null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProducts
                    productsFiltered = {productsFiltered}
                />
            ): (
                <View>
            <View>
                <Banner />
            </View>
            <View style= {{marginTop: 100}}>
            <FlatList
                horizontal
                data={products}
                renderItem={({item}) => <ProductList 
                key={item.id}
                item={item}/>}
                keyExtractor={item => item.name}
            />
            </View>
        </View>
            )}
            
        </Container>
        
    )
}

export default ProductContainer;