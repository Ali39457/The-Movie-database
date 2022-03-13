import React,{Component} from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView,Image,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
const deviceWidth=Dimensions.get("window").width;

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {  
            array1:[
                { key:"1",title:"About TMDB"},
                { key:"2",title:"Contact Us"},
                { key:"3",title:"Support Form"},
                { key:"4",title:"API"},
                { key:"5",title:"System Status"},
                  ],
            array2:[
                { key:"1",title:"Contribution Bible"},
                { key:"2",title:"Add new Movie"},
                { key:"3",title:"Add new Tv Show"},
                  ],
            array3:[
                { key:"1",title:"Guidelines"},
                { key:"2",title:"Discussions"},
                { key:"3",title:"Leaderboard"},
                { key:"4",title:"Twitter"},
                  ],  
            array4:[
                { key:"1",title:"Terms of Use"},
                { key:"2",title:"API term of Use"},
                { key:"3",title:"Privacy Policy"},
                  ],               
        }
    }

    render() { 
        return (
            <ScrollView>
            <SafeAreaView>
            <View style={styles.container}>

            <ImageBackground source={require('../assets/footer.jpg')} resizeMode="cover" style={styles.image}>
            
              <TouchableOpacity style={styles.Button}> 
              <Text style={styles.text}>JOIN THE COMMUNITY</Text>
              </TouchableOpacity>

              <View>
              <Text style={styles.text2}>THE BASICS</Text>
              { this.state.array1.map(element=>
              <Text style={styles.text1} key={element.key}>{element.title}</Text>)}
              </View>

              <View>
              <Text style={styles.text2}>GET INVOLVED</Text>
              { this.state.array2.map(element=>
              <Text style={styles.text1} key={element.key}>{element.title}</Text>)}
              </View>

              <View>
              <Text style={styles.text2}>COMMUNITY</Text>
              { this.state.array3.map(element=>
              <Text style={styles.text1} key={element.key}>{element.title}</Text>)}
              </View>

              <View>
              <Text style={styles.text2}>LEGAL</Text>
              { this.state.array4.map(element=>
              <Text style={styles.text1} key={element.key}>{element.title}</Text>)}
              </View>

              </ImageBackground>
             
              </View>
    
       </SafeAreaView>
       </ScrollView> 
        )
        
    }
 
  };
  export default Footer;

  const styles = StyleSheet.create({
    container: { 
      flex:1,
        width:deviceWidth,
      },
      image:{
        height:600,
        width:deviceWidth,
      }, 
      Button:{
          width:180,
          height:35,
          marginTop:40,
          marginLeft:20,
          marginBottom:20,
          backgroundColor:"white",
          borderRadius:5,
          justifyContent:"center",
          alignItems:"center"
      },
      text:{
        fontSize:16,
        fontWeight:"900",
        color:"#2471A3",
    },
    text1:{
        fontSize:16,
        fontWeight:"500",
        color:"white",
        marginLeft:20,
    },
    text2:{
        fontSize:20,
        fontWeight:"900",
        color:"white",
        marginLeft:20,
        marginTop:15,
    },
});