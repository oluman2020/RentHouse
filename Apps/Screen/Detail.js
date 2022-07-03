import { Text, StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import IconBack from '../Com/IconBack'


export default function Detail({ navigation }) {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <ImageBackground

                    style={{ height: 260, width: '100%', resizeMode: 'stretch', zIndex: -1 }}
                    source={require('../assets/lekki.jpg')}
                >
                    <IconBack type='transparent-with-back' onPress={() => navigation.goBack()} />
                </ImageBackground>
                <View style={styles.container}>
                    <View style={styles.contain1}>
                        <View>
                            <Text style={{ fontSize: 17,color:'black',fontWeight:'bold' }}>Modern House</Text>
                        </View>

                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        top: -50,
        backgroundColor: 'white',
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        zIndex: 99,
        bottom: 0,
    },
    contain1: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "center",

    }

})