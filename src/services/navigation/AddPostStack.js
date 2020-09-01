import React, { useState, useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AddPostScreen from '../../screens/MainScreens/AddPostScreen';
import AddPhotoScreen from '../../screens/MainScreens/AddPhotoScreen';
import AddItemScreen from '../../screens/MainScreens/AddItemScreen';
import SearchLookScreen from '../../screens/MainScreens/SearchLookScreen';
import PhotoGrid from '../../screens/MainScreens/PhotoGrid';
const AddPostStack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <AddPostStack.Navigator>
      <AddPostStack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          headerShown: false,
        }}
      />
      <AddPostStack.Screen name="AddPhoto" component={AddPhotoScreen} />
      <AddPostStack.Screen name="AddItem" component={AddItemScreen} />
      <AddPostStack.Screen name="SearchLook" component={SearchLookScreen} />
      <AddPostStack.Screen name="PhotoGrid" component={PhotoGrid} />
    </AddPostStack.Navigator>
  );
}
