import React,{ Component, useEffect  } from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,Image,Dimensions,} from 'react-native';
import Welcome from "./ContainerScreens/Welcome";
import SignUp from "./ContainerScreens/SignUp";
import Footer from "./ContainerScreens/Footer";
import CardScreen from "./ContainerScreens/CardScreen";
const deiveWidth=Dimensions.get("window").width;
import axios from "axios";

export default function HomeScreen() {
  const[list,setList]=React.useState();

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=be8a205097e9489f423db17180c5b1e2')
      .then(({data})=>{
       setList(data.results)
    })

  }, []);

  return (
    <ScrollView>
    <SafeAreaView>

      <View style={styles.container}>
      <View>

      <View>
      <Welcome/>
      </View>

      
      <View  style={styles.Card1}>
      <Text style={styles.text}>What's Popular</Text>
      <CardScreen/>
      </View>

      <View  style={styles.Card2}>
      <Text style={styles.text}>Free to Watch</Text>
      <CardScreen/>
      </View>

      <View style={styles.Signup}>
      <SignUp />
      </View>
      <View style={styles.Footer}>
      <Footer />
      </View>
     
      </View>
      </View>

    </SafeAreaView>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height:350,
    width:deiveWidth,
    
  }, text:{
    fontSize:35,
    fontWeight:"900",
    color:"black",
    marginLeft:20,
  },
  text1:{
    fontSize:35,
    fontWeight:"900",
    bottom:80, 
    color: 'white',
    marginLeft:20,
  }, 
  text2:{
    fontSize:35,
    fontWeight:"500",
    bottom:80, 
    color: 'white',
    marginLeft:20,
  }, 
  SearchBox:{
    marginBottom:15,
    marginTop:40,

  }, 
  Signup:{
    marginTop:20,
  }, 
  Card1:{
    marginTop:50,
  },
  Card2:{
    marginTop:40,
  },
  Footer:{
    marginTop:10,
  },

});
