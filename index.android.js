import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry, Image, Text, TextInput,ScrollView,FlatList } from 'react-native';
import MyButton from './button'

const items = [];

class SampleProject extends Component {
  //---------------
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDo:'',
  }


  addItem(){
    console.warn('addlendik bilader',this.state.toDo);
    items.push(this.state.toDo)
    this.setState({toDo:''})
  }
  
  renderItem(item){
    return(
      <View  key={item} style={{marginTop:5}}>
            <Text>{item}</Text>
      </View>
    );
  }

  
  render() {    
    return (                                
      <View style={{flex:1,margin:10,backgroundColor:'white'}}>
          <TextInput onChangeText={(v)=> this.setState({toDo: v})} placeholder='Yazı Gir' style={{height:50,backgroundColor:'skyblue',borderRadius:10}} />
          <MyButton onPress={this.addItem} text='Ekle' />
        <ScrollView>
          {
            items.map((item)=>this.renderItem(item))
          }
        </ScrollView>      
          </View>
    );
  }
  //------------
}

const styles = StyleSheet.create({
  container:{   
  },
  item:{
    fontSize:20,
    color:'red',
    padding:5
  }, 
  
})

AppRegistry.registerComponent('SampleProject', () => SampleProject);