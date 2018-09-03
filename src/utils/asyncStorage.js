import React, {
  Component
} from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';

class AsyncStoreView extends Component {

  constructor(props) {
    super(props)
  }

  async storeData(key, item) {
    try {
      var jsonItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonItem;
    } catch (error) {
      console.log(error.message);
    }
  }
  

  async retrieveData(key) {
    try {
    const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
    console.log(error.message);
  }
}


  render() {
    return (
       <View ></View>
    );
  }
}

export default AsyncStoreView;