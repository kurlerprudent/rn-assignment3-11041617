
import { StyleSheet, Text, View } from 'react-native';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';


export default function App() {
  return (
    <View style={styles.container}>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection  />
     <FourthSection text="Mobile"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E0',
    
  },
});
