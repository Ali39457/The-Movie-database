import React from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,TouchableOpacity,Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const deviceWidth=Dimensions.get("window").width;
export default function About() {
  return (
    <ScrollView>
    <SafeAreaView>

      <View style={styles.container}>

      <ScrollView style={styles.Icon} horizontal={true}>
      <MaterialCommunityIcons name="facebook"   size={30} /> 
      <Text>{'\n'}</Text>
      <MaterialCommunityIcons name="twitter"  size={30} />
      <Text>{'\n'}</Text>
      <MaterialCommunityIcons name="instagram"  size={30} />
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <MaterialCommunityIcons name="vector-link"  size={30} />
      <Text>{'\n'}</Text>
      </ScrollView>
      
      <View style={styles.setText}>
        <Text style={styles.text1}>Status</Text>
        <Text style={styles.text2}>Released</Text>

        <Text style={styles.text1}>Original language</Text>
        <Text style={styles.text2}>English</Text>

        <Text style={styles.text1}>Budget</Text>
        <Text style={styles.text2}>$250,000,000.00</Text>

        <Text style={styles.text1}>Revenue</Text>
        <Text style={styles.text2}>$1,074,144,248.00</Text>

        <Text style={styles.text1}>Keywords</Text>
        
        <TouchableOpacity style={styles.Button}> 
              <Text style={styles.text3}>space opera</Text>
              </TouchableOpacity>

        <View style={{borderBottomColor: 'black',borderBottomWidth: 1}}/>

        <Text style={styles.text1}>Content Score</Text>
        <View style={styles.setText1}>
        <Text style={styles.text4}>100</Text>
        </View>
        <Text style={styles.text2}>Yes!Looking good!</Text>
        
        </View>
        <TouchableOpacity style={styles.Button2}> 
              
              <Text style={styles.text5}><MaterialCommunityIcons name="lock"   size={24} /> LOGIN TO EDIT</Text>
              </TouchableOpacity>
         
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
    fontSize:18,
    fontWeight:"500",
    marginLeft:20,
    color:"black",
},
text2:{
    fontSize:18,
    fontWeight:"300",
    marginLeft:20,
    marginBottom:25,
    color:"black",
},
text3:{
        fontSize:16,
        fontWeight:"400",
        color:"black",
},
text4:{
    fontSize:18,
    fontWeight:"500",
    marginLeft:20,
    color:"white",
},
text5:{
    fontSize:18,
    fontWeight:"600",
    color:"white",
},
setText:{
    marginTop:20,
    marginBottom:20,
},
setText1:{
    backgroundColor:"#290C0C",
    width:300,
    height:30,
    marginLeft:20,
    justifyContent:"center",
    borderRadius:7,
},
Button:{
    width:deviceWidth/2,
    height:35,
    marginLeft:20,
    backgroundColor:"silver",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    top:5,
    marginBottom:40,
},
Button2:{
    width:deviceWidth/2,
    height:40,
    marginLeft:20,
    backgroundColor:"#290C0C",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    top:5,
    marginBottom:40,
},
Icon:{
    marginLeft:20,
    
}

});