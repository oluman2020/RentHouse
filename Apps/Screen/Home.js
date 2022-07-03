import { Text, StyleSheet, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderIcon from '../Com/HeaderIcon'
import Header from './Header'
import { Platform } from "react-native";
import { Icon } from 'react-native-elements';
import ListItem from '../Com/ListItem';
import StarIcon from '../Com/StarIcon'
import Detail from './Detail';
import IconBack from '../Com/IconBack';

export default function Home({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1, padding: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <HeaderIcon />
                <View style={styles.WrapperWelcome}>
                    <Text style={styles.textWelcome}>Find</Text>
                    <Text style={styles.textWelcome}>Your Dream Home</Text>
                </View>
                <View style={{
                    paddingHorizontal: 15,
                    marginTop: 4,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <View style={styles.Search}>
                        <TextInput
                            placeholder="Find Your Dream Home"
                            style={styles.TextInput} />

                        <View style={{ backgroundColor: "blue", height: 35, width: 35, borderRadius: 17, }}>
                            <TouchableOpacity style={{ paddingTop: 8 }}>
                                <Icon
                                    name='search'
                                    type='font-awesome'
                                    size={20}
                                    color='white'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 5, flexDirection: 'row', paddingLeft: 7, borderRadius: 17, }}>
                        <ListItem
                            type='main'
                            image={require("../assets/lekki.jpg")}
                            price='100'
                            name='Modern House'
                            City='Akure'
                            onPress={() => navigation.navigate("Detail")}
                        />
                        <ListItem
                            type='main'
                            name='Traditional house'
                            price='500'
                            City='Akure'
                            image={require("../assets/olden.jpg")}
                        />
                        <ListItem
                            type='main'
                            name='Hotel alagbaka'
                            price='10000'
                            City='Akure'
                            image={require("../assets/hotel.jpg")}
                        />
                        <ListItem
                            type='main'
                            name='Chapel of Grace'
                            price='7000'
                            City='Akure'
                            image={require("../assets/chapel.jpg")}
                        />

                    </ScrollView>
                </View>
                <View style={{ paddingHorizontal: 8, marginTop: 8 }}  >
                    <Text style={{ fontSize: 16, paddingTop: 7, fontFamily: 'sans-serif-condensed' }}>Recomended For You</Text>
                </View>

                <View>
                    <View>
                        <ListItem

                            name='Chapel of Grace'
                            price='7000'
                            City='Akure'
                            image={require("../assets/lekki.jpg")} />

                        <ListItem

                            name='Chapel of Grace'
                            price='7000'
                            City='Akure'
                            image={require("../assets/chapel.jpg")} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    Screen: {
        flex: 1,
        padding: 5,
    },
    WrapperWelcome: {
        paddingHorizontal: 20,
    },
    textWelcome: {
        fontSize: 30,
        fontWeight: '700',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    },

    TextInput: {
        fontSize: 15,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    },
    Search: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    }
})