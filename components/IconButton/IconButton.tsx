import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View, GestureResponderEvent } from 'react-native';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  backgroundColor?: string;
  size: number;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | undefined;
  accessibilityHint?: string;
}
export function IconButton({
  icon,
  color,
  size,
  onPress,
  backgroundColor,
  accessibilityHint,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      accessibilityHint={accessibilityHint}>
      <View style={{ ...styles.container, backgroundColor }}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    margin: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
