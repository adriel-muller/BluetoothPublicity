import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar, Image } from "react-native";
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Promoção Americanas', body: 'Lorem ipsum', key: '1', imagem: require('../assets/images/americanas.png')},
        { title: 'Promoção Renner', body: 'Lorem ipsum', key: '2', imagem: require('../assets/images/renner.png')},
        { title: 'Promoção C&A', body: 'Lorem ipsum', key: '3', imagem: require('../assets/images/cea.png')},
    ]);

    return(
        <View style={globalStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#111"/>
            <FlatList
                data={reviews}
                renderItem={({ item }) =>(
                   <TouchableOpacity onPress={() => navigation.navigate('Promo', item)}>
                       <Card>
                        <View  style={globalStyles.cartao}>
                           <View>
                                <Image
                                source={item.imagem}
                                style={{ width: 70, height: 70, alignSelf: "center", resizeMode: "contain", alignSelf: "center" }}
                                />
                           </View>
                            <View style={{ marginLeft: 5, marginRight: 10}}>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                                <Text style={globalStyles.normalText}>Nova promoção disponível! Clique para ver</Text>
                            </View>
                        </View>   
                       </Card>
                   </TouchableOpacity> 
                )}
            />
        </View>
    )
}
