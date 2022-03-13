import React,{useEffect} from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView} from 'react-native';
import CardScreen from "./ContainerScreens/CardScreen";
import Footer from "./ContainerScreens/Footer";
import OverviewScreen from "./ContainerScreens/OverviewScreen";
import About from "./ContainerScreens/About";
import axios from "axios";

export default function DetailScreen() {
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
        <OverviewScreen />
        </View> 

        <View style={styles.About}>
        <About />
        </View> 

        <View style={styles.Footer}>
        <Footer />
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
  Footer:{
    marginTop:5,
  },
  About:{
    marginTop:10,
  },
  Card2:{
    marginTop:10,
    marginBottom:10
  },
  text:{
    fontSize:20,
    fontWeight:"900",
    color:"black",
    marginLeft:20,
  },

});