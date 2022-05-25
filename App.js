import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, SafeAreaView, NativeModules, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
const { StatusBarManager } = NativeModules;
import {
  BellSvg,
  CallSvg,
  MessageSvg,
  MenuSvg
} from './src/svg';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ icon, text, color }) => {
  return (
    <Pressable style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing[3],
      paddingHorizontal: spacing[8],
      borderRadius: spacing[6],
      backgroundColor: color,
    }}>
      {icon}
      <Text preset='button'>{text}</Text>
    </Pressable>
  )
}

const App = () => {

  // loaded custom font
  const [loaded] = useFonts({
    'GraphikRegular': require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium': require('./assets/fonts/GraphikMedium.otf'),
    'GraphikSemibold': require('./assets/fonts/GraphikSemibold.otf'),
  });
  if (!loaded) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.hero}>
        <View style={styles.heroContainer}>
          <View style={[styles.flexBox, { paddingVertical: spacing[3] }]}>
            <MenuSvg />
            <BellSvg />
          </View>
          <View style={[styles.flexBox, { paddingVertical: spacing[3] }]}>
            <Text preset='h1'>Covid-19</Text>
            <View style={styles.language}>
              <Image source={require('./assets/images/usa.png')} />
              <Text preset='darkBase' style={{ paddingHorizontal: spacing[2] }}>USA</Text>
              <AntDesign name="caretdown" size={14} color="#61688B" />
            </View>
          </View>
          <Text preset='h2' style={{ marginBottom: spacing[2] }}>Are you feeling sick?</Text>
          <Text >If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
          <View style={[styles.flexBox, { paddingVertical: spacing[3], marginTop: spacing[3] }]}>
            <Button icon={<CallSvg />} text="Call Now" color={colors.red} />
            <Button icon={<MessageSvg />} text="Send Sms" color={colors.blue} />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text preset='darkH2'>Prevention</Text>
          <View style={[styles.flexBox, { paddingVertical: spacing[6] }]}>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Image source={require('./assets/images/distance.png')} />
              <Text style={{ marginTop: 15 }} preset='darkBase'>Avoid close contact from others.</Text>
            </View>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Image source={require('./assets/images/hand-wash.png')} />
              <Text style={{ marginTop: 15 }} preset='darkBase'>Clean your hands often.</Text>
            </View>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <Image source={require('./assets/images/mask.png')} />
              <Text style={{ marginTop: 15 }} preset='darkBase'>Wear a facemask everywhere.</Text>
            </View>
          </View>

          <LinearGradient
            // Button Linear Gradient
            colors={[colors.purple, colors.lightPurple]}
            start={[.8, 1]}
            style={{
              borderRadius: 30,
              marginTop: spacing[6],
            }}
          >
            <View style={styles.footer}>
              <View style={styles.footerImage}>
                <Image style={styles.footerImg} source={require('./assets/images/girl.png')} />
              </View>
              <View style={styles.footerContent}>
                <Text preset='h3'>Do your own test!</Text>
                <Text style={{ marginTop: 10 }}>Follow the instructions to do your own test.</Text>
              </View>
            </View>
          </LinearGradient>



        </View>
      </View >




    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.deepPurple,
  },
  heroContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[5],
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  language: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    backgroundColor: colors.white,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[4],
  },
  contentContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[7],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    borderRadius: 30,
  },
  footerImage: {
    flex: 1.4,
  },
  footerImg: {
    transform: [
      { scale: 1.15 },
      { translateY: -8 },
    ],
  },
  footerContent: {
    flex: 2,
  }

});

export default App