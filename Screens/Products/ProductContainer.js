import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { Icon, Container, Header, Item, Text, Input } from "native-base"

import ProductList from "./ProductList"

const data = require("../../assets/products.json");
//console.log(data);
const ProductContainer = () => {

    const[products, setProducts] = useState([]);
    const[productsFiltered, setproductsFiltered] = useState([]);

    useEffect(() => {
        setProducts(data);
        setproductsFiltered(data);

        return() =>{
            setProducts([])
        }
    }, [])

    return(
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder='Search'
                        //onFocus={}
                        //onChange={(text) => }
                    />
                </Item>
            </Header>
            <View>
            <Text> Product Contaniner </Text>
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
        </Container>
        
    )
}

export default ProductContainer;