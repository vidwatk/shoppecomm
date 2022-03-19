import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base"

const SearchedProducts = (props) => {
    const {productsFiltered} = props;

    return (
        <Content>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        //onPress ={navigation}
                        key={item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source = {{uri: item.image ? item.image:"https://www.razer.com/assets/images/razer-default-og-image.png" }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={StyleSheet.center}>
                    <Text style={{ alignSelf: "center" }} >No products match</Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default SearchedProducts;