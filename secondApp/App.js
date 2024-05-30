
import { StyleSheet, Text, View } from 'react-native';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';

export default function App() {
  return (
    <View style={styles.container}>
     <FirstSection/>
     <SecondSection/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#F7F0E8',
    
  },
});
