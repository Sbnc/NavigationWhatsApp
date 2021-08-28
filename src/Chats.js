import React from 'react';
import {
 Text,
 View,
 Image,
 StyleSheet,
 ScrollView
} from 'react-native';


const Chat = () =>{
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
          <Text style={styles.title}>hahahahauhsuahsuha s2</Text>
          <Text style={styles.subTitle}>Mensagem de teste</Text>
        </View>
     
    </View>
  );
}


const Chats = () => {
  return (
    <>
      <ScrollView>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
       <Chat/>
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
  image_div:{
    width: 60,
    height:60,
    borderRadius:30, 
   
  },
  image: {
    width: 60,
    height:60,
    borderRadius:30, 
    borderWidth:0.5,
    borderColor:'#022b3a',
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
  }

});
export default Chats;