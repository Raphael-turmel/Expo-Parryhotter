import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { fireDB } from '../firebase';

export default function AddProduct() {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productImage, setProductImage] = useState();
    const [productDesc, setProductDesc] = useState();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text>Nom du produit</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 200
                }}
                onChangeText={setProductName}
                value={productName}
            />
            <Text>Prix du produit</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 200
                }}
                onChangeText={setProductPrice}
                value={productPrice}
            />
            <Text>Image du produit</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 200
                }}
                onChangeText={setProductImage}
                value={productImage}
            />
            <Text>Description du produit</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 200
                }}
                onChangeText={setProductDesc}
                value={productDesc}
            />
            <Button
                title="Ajouter produit"
                onPress={() => {
                    fireDB.collection('products').add({
                        name: productName,
                        price: productPrice,
                        image: productImage,
                        description: productDesc
                    })
                    setProductDesc('')
                    setProductImage('')
                    setProductName('')
                }
                }
            />
        </View>
    )
}