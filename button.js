import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';

export default class MyButton extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.onPress} style={{height:40,width:60,backgroundColor:'yellow',borderRadius:10,marginTop:10,justifyContent:"center",alignItems:'center'}}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}