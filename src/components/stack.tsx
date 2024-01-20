import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface StackProps {
  children: ReactNode;
  direction: 'row' | 'column';
  gap?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  style?: any;
}

export function Stack({
  children,
  direction,
  gap = 0,
  align = 'stretch',
  justify = 'flex-start',
  style,
}: StackProps) {
  return (
    <View
      style={[
        styles.stack,
        styles[direction],
        {gap, alignItems: align, justifyContent: justify},
        style,
      ]}>
      {children}
    </View>
  );
}

export function VStack({children, ...props}: Omit<StackProps, 'direction'>) {
  return (
    <Stack direction="column" {...props}>
      {children}
    </Stack>
  );
}

export function HStack({children, ...props}: Omit<StackProps, 'direction'>) {
  return (
    <Stack direction="row" {...props}>
      {children}
    </Stack>
  );
}

const styles = StyleSheet.create({
  stack: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
