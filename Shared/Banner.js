import { Image, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from "react-native-swiper/src"


var {width} = Dimensions.get("window")

const Banner = () => {
    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        setBannerData(["https://images-platform.99static.com//pQKPl0rlxBpjl-g0kGulMOK438U=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/86/86488/attachment_86488271",
                       "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2014%2F11%2Fdj-khaled-x-bo-play-beoplay-h6-headphones-0.jpg?w=960&cbr=1&q=90&fit=max",
                       "https://www.headphonesty.com/wp-content/uploads/2020/01/Man-Using-HD-350BT-Headphones--1200x1200-cropped.jpg" 
                    ])
        return () => {
            setBannerData([])
        }    
    }, [])

    return(
        <ScrollView>
            <View style = {styles.container}>
            <View style = {styles.swiper}>
                <Swiper
                style={{height: width/2}}
                showButtons={false}
                autoplay={true}
                autoplayTimeout = {2}
                >
                    {bannerData.map((item) => {
                        return(
                            <Image
                                key={item}
                                style= {styles.imageBanner}
                                resizeMode="contain"
                                source={{uri: item}}
                            />
                        );
                    })}
                </Swiper>
                <View style = {{height: 20}}></View>
            </View>
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gainsboro"
    },
    swiper: {
        width: 400,
        alignItems: "center",
        marginTop: 10
    },
    imageBanner: {
        height: 200,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;
