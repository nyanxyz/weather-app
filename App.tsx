/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import LocationIcon from './assets/icons/location.svg';
import SettingsIcon from './assets/icons/settings.svg';
import HamburgerIcon from './assets/icons/hamburger.svg';
import {HStack, VStack} from './src/components/stack.tsx';
import {Txt} from './src/components/txt.tsx';
import {colors} from './src/constants/colors.ts';

function App(): React.JSX.Element {
  return (
    <View style={styles.view}>
      <Image
        source={require('./assets/images/cloud-background.jpg')}
        style={styles.bgImage}
      />

      <SafeAreaView>
        <VStack>
          <HStack
            justify={'space-between'}
            align={'center'}
            style={styles.header}>
            <HStack align={'center'} gap={6}>
              <LocationIcon />
              <Txt size={13} color={colors.primary500}>
                경기도 안양시 만안구
              </Txt>
            </HStack>
            <HStack gap={10} align={'center'}>
              <HamburgerIcon />
              <SettingsIcon />
            </HStack>
          </HStack>
        </VStack>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    fontFamily: 'GmarketSansTTFMedium',
  },
  bgImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    paddingVertical: 15,
    paddingRight: 17,
    paddingLeft: 21,
  },
  text: {
    fontFamily: 'GmarketSansTTFMedium',
  },
});

export default App;
