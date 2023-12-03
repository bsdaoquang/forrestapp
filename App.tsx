import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={require('./src/assets/images/bg-forrest.jpeg')}
        imageStyle={{
          opacity: 0.8,
        }}
        style={[styles.container]}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View
            style={[
              styles.container,
              {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                backgroundColor: 'rgba(142, 68, 173, 0.5)',
                paddingVertical: 20,
              },
            ]}>
            <View style={[styles.container]}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/wired/64/ffffff/floating-island-forest.png',
                }}
                style={[styles.imgLogo]}
              />
              <Text style={[styles.title]}>Forrest</Text>
            </View>
            <View
              style={[
                styles.container,
                {
                  flex: 2,
                },
              ]}>
              <View
                style={{
                  marginBottom: 24,
                }}>
                <TextInput
                  placeholderTextColor="#e0e0e0"
                  placeholder="Email"
                  keyboardType="email-address"
                  style={[styles.input]}
                />
                <TextInput
                  placeholderTextColor="#e0e0e0"
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry
                  style={[styles.input]}
                />
              </View>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    fontWeight: '600',
                    textDecorationLine: 'underline',
                    textDecorationColor: 'white',
                  },
                ]}>
                Opp's, i forgot password
              </Text>
            </View>
            <View style={[styles.container]}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.text]}>Ok, let's go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: 34,
  },

  button: {
    backgroundColor: '#bcaabd',
    width: Dimensions.get('window').width * 0.5,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  text: {
    color: 'white',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontWeight: '500',
  },

  input: {
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: Dimensions.get('window').width - 64,
    color: 'white',
    fontSize: Platform.OS === 'ios' ? 18 : 14,
  },
});
