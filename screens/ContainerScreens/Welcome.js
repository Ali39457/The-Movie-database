import React from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,ImageBackground ,Dimensions} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
const deviceWidth=Dimensions.get("window").width;
export default function Welcome() {
  return (
    <ScrollView>
    <SafeAreaView>

      <View style={styles.container}>
<ImageBackground source={require('../assets/logo.jpg')} resizeMode="cover" style={styles.image}>
    
      <Text style={styles.text1}>Welcome.</Text>
      <Text style={styles.text2}>Millions of movies,TV {'\n'}shows and people to{'\n'}discover. Explore now</Text>
      <SearchBar style={styles.SearchBox} placeholder="Search..." onPress={() => alert("onPress")}
      onChangeText={(text) => console.log(text)} /> 
      
</ImageBackground>
      </View>

      
    </SafeAreaView>
    </ScrollView> 
  )
}


const styles = StyleSheet.create({
    container: { 
      flex:1,
        width:deviceWidth,
      },
      image:{
        height:380,
        width:deviceWidth,
      }, 
    text2:{
        fontSize:35,
        fontWeight:"500",
        color:"white",
        marginLeft:20,
        marginBottom:80,
    },
    text1:{
        fontSize:35,
        fontWeight:"900",
        color:"white",
        marginLeft:20,
        marginTop:40,
        marginBottom:10,
    },
});