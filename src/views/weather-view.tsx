import {HStack, VStack} from 'src/components/stack.tsx';
import LocationIcon from 'assets/icons/location.svg';
import {Txt} from 'src/components/txt.tsx';
import {colors} from 'src/constants/colors.ts';
import HamburgerIcon from 'assets/icons/hamburger.svg';
import SettingsIcon from 'assets/icons/settings.svg';
import {Spacing} from 'src/components/spacing.tsx';
import {Animated, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getShortTermForecast} from 'src/remotes/weather.ts';

export function WeatherView() {
  const {data: shortTerm, isPending} = useQuery({
    queryKey: ['weather', 'short-term'],
    queryFn: getShortTermForecast,
  });

  const current = shortTerm?.data[0];

  return (
    <View style={styles.view}>
      <Image
        source={require('../../assets/images/cloud-background.jpg')}
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

          <Spacing size={31} />

          <VStack align={'center'} gap={30}>
            <Image
              source={require('../../assets/images/cloud-circle.png')}
              style={styles.circle}
            />

            <VStack gap={14}>
              <VStack gap={3} align={'center'}>
                <Txt size={18} lineHeight={21} color={colors.primary500}>
                  {`지금은 ${current?.TMP}도, 구름이 둥실둥실`}
                </Txt>
                <Txt size={11} lineHeight={21} color={colors.primary400}>
                  ♬ Playing now : Daytime activity
                </Txt>
              </VStack>
            </VStack>
          </VStack>

          <Txt>{JSON.stringify(shortTerm, null, 2)}</Txt>
        </VStack>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
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
  circle: {
    overflow: 'visible',
    width: 188,
    height: 188,
    borderRadius: 188 / 2,
    shadowRadius: 30,
    shadowColor: 'rgba(64, 99, 115, 0.25)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
  },
});
