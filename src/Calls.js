import React from 'react';
import {
 Text,
 View,
 Image,
 StyleSheet,
 ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const Call = () =>{
  
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
        <Text style={styles.title}>Thaleco  kkkk s  ss2</Text>
        <Text style={styles.subTitle}>Ontem 16:10</Text>
      </View>
      <View style={styles.icone_div}>
        <Icon name="home" size={20} color="#000" />
      </View> 
     
    </View>
  );
}

const Calls = () => {
  return (
    <>
      <ScrollView>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
       <Call/>
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
    width:'70%',
    
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

  icone_div:{
    width: 60,
    height:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center', 
  },

});

export default Calls;
