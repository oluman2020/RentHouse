import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import Colors from '../Config/Colors'
import StarIcon from './StarIcon'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';

const ListItem = ({ type, onPress, image, name, City, price,}) => {
  if (type =="main") {
    return (
      
      <TouchableOpacity onPress={onPress} style={styles.Touchable}  >
        <Image
          style={styles.image}
          source={image}
        />
        <View style={styles.textWrapper}>
          < Text style={{ fontSize: 13, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", color: "black", paddingLeft: 10 }}>{name}</Text>
          < Text style={{ fontSize: 12, color: "grey", fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", paddingLeft: 10 }}>{City}</Text>
        </View>
        <View stylestyle={styles.ListImageWrapper}>

        </View>
        <Text style={{ fontSize: 15, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", color: "purple", paddingLeft: 10, }}>{"$" + price}</Text>
      </TouchableOpacity>
      
    )
  }
  return (
    
    <TouchableOpacity onPress={onPress}   style={{marginVertical: 7,
       backgroundColor: "white", borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
      <View style={{ height: 80, width: '100%', paddingHorizontal:3,justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={image}
          style={{ height: 80, width: 90, resizeMode: 'stretch', borderRadius: 10, }}
        />
        <View style={{ paddingLeft: 5,flex:1,}}>
          <Text style={{ fontSize: 13, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", color: "black", paddingLeft: 10 }}>{name}</Text>
          <Text style={{ fontSize: 12, color: "grey", fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", paddingLeft: 10 }} >{City}</Text>
          <Text style={{ fontSize: 15, fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", color: "purple", paddingLeft: 10, }}>{"$" + price}</Text>
        </View>
        <MaterialCommunityIcons
          color="#6e6969"
          name="chevron-right"
          size={30}
        ></MaterialCommunityIcons>

      </View>
     
    </TouchableOpacity>
    

  )

}

  
const styles = StyleSheet.create({
  Touchable: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 225,
    width: 170,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: 20,
    marginTop: 10,

  },
  image: {
    height: 150,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    resizeMode: 'stretch'
  },
  ListImageWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  textWrapper: {

    flexDirection: 'row',
    paddingVertical: 7,
    paddingRight: 16


  }
})
export default ListItem