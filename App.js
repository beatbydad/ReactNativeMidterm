import React, { Component } from 'react';
import Home from './components/Home';
import Lists from './components/listproducts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Addproducts from './components/addproducts';





const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home'component={Home}/>
      <Stack.Screen name='Listproducts'component={Lists}/>
      <Stack.Screen name='Addproduct'component={Addproducts}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='Home'component={Home}/>
//           <Stack.Screen name='Listproducts'component={Lists}/>
//           <Stack.Screen name='Addproduct'component={Addproducts}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

export default App;