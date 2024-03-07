import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TxtProps {
  children: string;
  size?: number;
  lineHeight?: number;
  color?: string;
  weight?: 'light' | 'medium' | 'bold';
  style?: any;
}

export function Txt({
  children,
  size,
  lineHeight,
  color,
  weight = 'medium',
  style,
}: TxtProps) {
  return (
    <Text style={[styles[weight], {fontSize: size, lineHeight, color}, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  light: {
    fontFamily: 'GmarketSansTTFLight',
  },
  medium: {
    fontFamily: 'GmarketSansTTFMedium',
  },
  bold: {
    fontFamily: 'GmarketSansTTFBold',
  },
});
