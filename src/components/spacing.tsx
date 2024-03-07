import React from 'react';
import {View} from 'react-native';

interface SpacingProps {
  size: number;
  direction?: 'horizontal' | 'vertical';
  style?: any;
}

export function Spacing({size, direction = 'vertical', style}: SpacingProps) {
  return (
    <View
      style={[direction === 'vertical' ? {height: size} : {width: size}, style]}
    />
  );
}
