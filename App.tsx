import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as BlogProvider } from './src/contexts/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Blog Posts'>
          <Stack.Screen name="Blog Posts" component={IndexScreen} />
          <Stack.Screen name="Blog Post" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} options={{ title: "Create Blog Post" }}/>
          <Stack.Screen name="Edit" component={EditScreen} options={{ title: "Edit Blog Post" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};
