import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { Icon, Container, Header, Item, Text, Input } from "native-base"

import ProductList from "./ProductList"
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require("../../assets/products.json");
const productCategories = require("../../assets/categories.json")
//console.log(categories);
//console.log(data);
var {height} = Dimensions.get("window")
const ProductContainer = (props) => {

    const[products, setProducts] = useState([]);
    const[productsFiltered, setproductsFiltered] = useState([]);
    const[focus, setFocus] = useState();
    const[categories, setCategories] = useState([]);
    const[productsCtg, setProductsCtg] = useState([]);
    const[active, setActive] = useState();
    const[initialState, stateInitialState] = useState();

    useEffect(() => {
        setProducts(data);
        setproductsFiltered(data);
        setFocus(false);
        setCategories(productCategories);
        setProductsCtg(data);
        setActive(-1);
        stateInitialState(data);

        return() =>{
            setProducts([])
            setproductsFiltered([])
            setFocus()
            setCategories([])
            setActive()
            stateInitialState()
        }
    }, [])

    //Product Methods
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

    //Categories
    const changeCtg = (ctg) => {
        {
            ctg === "all"
                ?[setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    )
                ]
        }
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
                <ScrollView>
                    <View>
            <View>
                <Banner />
            </View>
            <View>
                <CategoryFilter 
                    categories={categories}
                    categoryFilter={changeCtg}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
                />
            </View>
            {productsCtg.length > 0 ? (
                <View style= {styles.listContainer}>
                    {productsCtg.map((item) => {
                        return(
                            <ProductList 
                                navigation= {props.navigation}
                                key={item._id}
                                item={item}
                            />
                        )
                    })}
                </View>
            ): (
                <View style= {[styles.center, {height: height / 2}]}>
                    <Text>No Products Found</Text>
                </View>
            )}
        </View>
                </ScrollView>
                
            )}
            
        </Container>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ProductContainer;