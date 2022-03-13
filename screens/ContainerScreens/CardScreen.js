import React,{useEffect} from "react";
import { StyleSheet,ScrollView,} from 'react-native';
import { Card, CardTitle, CardAction, CardButton, CardImage } from 'react-native-cards';
import { useNavigation } from "@react-navigation/native";
import OverviewScreen from './OverviewScreen';
import axios from "axios";

export default function CardScreen(props) {
  
  const navigation=useNavigation();
  const[list,setList]=React.useState();

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=be8a205097e9489f423db17180c5b1e2')
      .then(({data})=>{
       setList(data.results)
    })
  }, []);

const onPress=()=>{
  navigation.navigate('DetailScreen')
}

  return (
    <ScrollView horizontal={true}>

<Card style={styles.container} >
    <CardImage  source={{uri: 'https://image.tmdb.org/t/p/w200/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'}} title={list && list[0].title} />
    <CardTitle style={styles.title} subtitle={list && list[0].release_date}/>
  <CardAction>
      <CardButton  name="ALi" onPress={() => onPress()}  title="Watch" color="#FEB557"/> 
      </CardAction>
</Card>


<Card style={styles.container} >
    <CardImage source={{uri: 'https://image.tmdb.org/t/p/w200/5P8SmMzSNYikXpxil6BYzJ16611.jpg'}} title={list && list[1].title}/>
    <CardTitle style={styles.title} subtitle={list && list[1].release_date}/>
  <CardAction>
      <CardButton onPress={() =>  onPress()} title="Watch" color="#FEB557"/>
      </CardAction>
</Card>
<Card style={styles.container} >
    <CardImage source={{uri: 'https://image.tmdb.org/t/p/w200/tAztR7AXEesMQAAi5ncFPSZtYlI.jpg'}} title={list && list[2].title}
    />
    <CardTitle style={styles.title} subtitle={list && list[2].release_date}
    />
  <CardAction>
      <CardButton onPress={() =>  onPress()} title="Watch" color="#FEB557"/>
      </CardAction>
</Card>

    </ScrollView> 
  )
}


const styles = StyleSheet.create({
  container: {
    height:200,
    marginLeft:20,
    width:200,
    marginTop:20,
  },
  title:{
    top:40,
  }

});