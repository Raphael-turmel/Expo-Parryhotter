import { useState, useEffect } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { fireDB } from '../firebase';

export default function Products() {
    const [product, setProduct] = useState([]);

    const styles = StyleSheet.create({
        image: {
            height: 150,
            width: 150
        },
        card: {
            borderWidth: 1,
            borderColor: "#AAAAAAA",
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            backgroundColor: 'white',
            elevation: 9,
        },
    })
    useEffect(() => {
        let productData = []
        let index = 0
        fireDB.collection("products")
            .onSnapshot((res) => {
                res.forEach((element) => {
                    productData.push(element.data())
                    productData[index].id = element.id;
                    index += 1
                })
                setProduct(productData)
            })

    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text>{item.name}</Text>
                <Image source={{ uri: item.image }} resizeMode='contain' style={styles.image} />
                <Text>{item.price} ʛ</Text>
            </View>
        );
    };

    return (
        <View style={{flex: 1}}>
            <FlatList
                columnWrapperStyle={{flexWrap:'wrap'}}
                scrollEventThrottle={1900}
                numColumns={5}
                horizontal={false}
                style={styles.flatlist}
                data={product}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}