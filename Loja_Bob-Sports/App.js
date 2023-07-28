import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
// import {AppLoading} from 'expo';
// import { useFonts,Anton_400Regular } from '@expo-google-fonts-anton';

import Routes from './src/router';

// let [fontsLoaded] = useFonts({
//   Anton_400Regular,
// })

// if(!fontsLoaded){
//   return <AppLoading/>;

// }

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}

