import { View, Text, StyleSheet, Image, Dimensions, Button } from 'react-native';
import React from 'react'


var {width} = Dimensions.get("window");

const ProductCard = (props) => {
    const{ name, price, image, countInStock } = props;

    return(
        <View style={styles.container}>
            <Image 
            style={styles.image}
            resizeMode="contain"
            source={{uri:"https://www.razer.com/assets/images/razer-default-og-image.png"}}
            //source={{uri: image ? image: "https://www.razer.com/assets/images/razer-default-og-image.png"}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + "..." : name
                }
            </Text>
            <Text style={styles.price}>£{price}</Text>
            { countInStock > 0 ? (
                <View style={{ marginBottom: 30 }}>
                    <Button title ={"Add"} color={"#1d64db"} />
                </View>
            ): <Text style ={{marginTop: 20}}>Currently Unavailable</Text>}           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 18,
        height: width / 2 - 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        elevation: 8,
        backgroundColor: "white", 
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: "transparent",
        position: "absolute",
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 45 - 100,
        backgroundColor: "transparent",
        width: width / 2 -20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        color: "#2b4063",
        marginTop: 10
    }
})

export default ProductCard;