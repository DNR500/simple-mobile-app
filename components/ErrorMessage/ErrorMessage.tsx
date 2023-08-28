import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';

import { Colors, FontSize, Spacing } from '../../theme/styles';

interface ErrorMessageProps {
  message: string;
  status?: 'warning' | 'error';
}

export const ErrorMessage = ({ message, status = 'error' }: ErrorMessageProps) => {
  const messageStyles = status === 'error' ? errorStyles : warningStyles;
  const iconSize = status === 'error' ? Spacing.s12 : 36;
  return (
    <View style={messageStyles.container}>
      <Ionicons
        name="alert-circle-outline"
        color={Colors.textWhite}
        size={iconSize}
        style={messageStyles.icon}
      />
      <Text style={messageStyles.message}>{message}</Text>
    </View>
  );
};

const errorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.error500,
    padding: Spacing.s5,
  },
  icon: {
    paddingBottom: Spacing.s2,
  },
  message: { color: Colors.textWhite },
});

const warningStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: Spacing.s3,
    alignItems: 'center',
    backgroundColor: Colors.secondary50,
    padding: Spacing.s2,
  },
  icon: {
    paddingBottom: 0,
  },
  message: { color: Colors.textWhite, fontSize: FontSize.md },
});
