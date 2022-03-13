import React from "react";
import { StyleSheet, Text,View,ScrollView,SafeAreaView} from 'react-native';

export default function DotIcon() {
    return (
        <ScrollView>
        <SafeAreaView>
    
          <View style={styles.container}>
          <Text style={styles.text}>{'\u2022'}</Text>
          </View>

   </SafeAreaView>
   </ScrollView> 
    )
  }

  const styles = StyleSheet.create({
      text:{
        fontSize:15,
        fontWeight:"bold",
        color: 'white',
        top:5,

      }, 
});