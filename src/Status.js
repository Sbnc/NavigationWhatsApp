import React from 'react';
import {
 Text,
 View,
 Image,
 StyleSheet,
 ScrollView
} from 'react-native';


const StatusItem = () =>{
  return(
    <View style={styles.box}>
  
      
        <View style={styles.image_div}>
          <Image
          style={styles.image}
          source={{
              uri: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/01/images-600x377.png',
            }}
          />
        </View>
        <View style={styles.text_div}>
          <Text style={styles.title}>Sasa s2</Text>
          <Text style={styles.subTitle}>Há 22 minutos</Text>
        </View>
     
    </View>
  );
}

const StatusUser = () =>{
  return(
    <View style={styles.boxUser}>
  
      
        <View style={styles.image_div}>
          <Image
          style={styles.image}
          source={{
              uri: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/01/images-600x377.png',
            }}
          />
          <View style={styles.image_add}><Text style={styles.image_add_icon}>+</Text></View>
        </View>
        <View style={styles.text_div}>
          <Text style={styles.title}>Meu Status</Text>
          <Text style={styles.subTitle}>Toque para atualizar seu status</Text>
        </View>
     
    </View>
  );
}


const Status = () => {
  return (
    <> 
       <ScrollView>
          <StatusUser/>
          <Text style={styles.title_info} >Atualizações Recentes</Text>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <Text style={styles.title_info} >Atualizações Vistas</Text>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
          <StatusItem/>
       </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  box:{
    padding: 10,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:0.5,
    borderBottomColor:'#022b3a',
       
    
  },


  boxUser:{
    padding: 10,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',   

  },
  
  
  image_div:{
    width: 60,
    height:60,
    borderRadius:30, 
    
   
  },
  image: {
    width: 60,
    height:60,
    borderRadius:30, 
    borderWidth:3,
    borderColor:'#1b998b',
  },
  text_div:{
    paddingLeft:10,
    
  },
  title:{
    fontSize:18,
    color:'#022b3a',
    fontWeight:'bold',
  },
  subTitle: {
    fontSize:15,
    color:'#1f7a8c',
  },
  title_info:{
    fontSize:15,
    color:'#2a3d45',
    padding: 15,
  
  },
  image_add:{
    width:20,
    height:20,
    backgroundColor:'#1b998b',
    position:'absolute',
    left:40,
    top:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  image_add_icon:{
    color:'#fff',
    fontSize: 13,
    fontWeight:'bold',
  }

});
export default Status;