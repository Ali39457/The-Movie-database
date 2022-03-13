import React,{useEffect,useState} from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,ImageBackground} from 'react-native';
import axios from "axios";
export default function OverviewScreen() {

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

      <ImageBackground source={require('../assets/OverView.jpg')} resizeMode="cover" style={styles.image}>
      
      <View style={styles.setText}>
      <Text style={styles.text1}>Overview</Text>
      <Text style={styles.text2}>{list && list[2].overview}</Text>
      </View>
      </ImageBackground>  
         
      </View>


 
    </SafeAreaView>
    </ScrollView> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  text1:{
    fontSize:35,
    fontWeight:"500",
    color:"white",
    marginLeft:20,
    marginBottom:5,
},
text2:{
    fontSize:15,
    fontWeight:"300",
    color:"white",
    marginLeft:20,
},
setText:{
    justifyContent:"center",
   
    flex: 1, 
    
},
image:{
    height:400
}

});