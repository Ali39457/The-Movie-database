import React from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,ImageBackground,Dimensions,Button} from 'react-native';
import DotIcon from '../assets/DotIcon'
const deiveWidth=Dimensions.get("window").width;


export default function SignUp(props) {
    return (
        <ScrollView>
        <SafeAreaView>
    
          <View style={styles.container}>
         
          <View style={styles.container1}>
<ImageBackground source={require('../assets/Signup.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={styles.text1}>Join Today.{'\n'}</Text>
          <Text style={styles.text2}>Get access to maintain your own <Text style={styles.text4}>custom personal lists,
          {'\n'}track what you've seen</Text> and search and filter for <Text style={styles.text4}>what to{'\n'}watch next </Text>
          -regardless if it's in theatres, on Tv or {'\n'}available on popular streaming services like Netflix,{'\n'}
          Amazon Prime Video,Zee5 and Mubi.</Text>

          <View style={styles.Button}> 
          <Button title="Sign Up" color={"#7f00ff"}></Button>
          </View>
          <Text style={styles.text3}><DotIcon/>  Enjoy TMDB ad free</Text>
          <Text style={styles.text3}><DotIcon/>  Maintain a personal watchlist</Text>
          <Text style={styles.text3}><DotIcon/>  Filter by your subscribed streaming services and find something{'\n'}    to watch</Text>
          <Text style={styles.text3}><DotIcon/>  log to the movies and tv shows you've seen</Text>
          <Text style={styles.text3}><DotIcon/>  Build custom lists</Text>
          <Text style={styles.text3}><DotIcon/>  contribute to and improve our database</Text>
</ImageBackground>
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
      container1: {
        height:500,
        width:deiveWidth,
      },
      image:{
        height:500,
        width:deiveWidth,
      }, 
      text1:{
        fontSize:35,
        fontWeight:"900",
        color: 'white',
        marginLeft:20,
        marginTop:20,
      }, 
      text2:{
        fontSize:16,
        fontWeight:"200",
        color: 'white',
        marginLeft:20,
      },
      text3:{
        fontSize:13,
        fontWeight:"100",
        color: 'white',
        marginLeft:20,
      },
      text4:{
        fontSize:16,
        fontWeight:"200",
        color: 'lightgrey',
        marginLeft:20,
        fontStyle:"italic"
      },
      Button:{
          width:90,
          marginLeft:20,
          marginBottom:20,
          marginTop:40,
      },
});