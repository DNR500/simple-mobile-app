import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { useUser } from '../../hooks/useUser';
import { Colors, FontSize, Spacing } from '../../theme/styles';
import { ErrorMessage } from '../ErrorMessage';

interface AuthorDetailProps {
  userId: number;
}
export const AuthorDetail = ({ userId }: AuthorDetailProps) => {
  const { data, isLoading, isError } = useUser(userId);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={Colors.primary100} accessibilityHint="loading" />
      ) : isError ? (
        <ErrorMessage message="Problem getting user info" status="warning" />
      ) : (
        <Text style={styles.content}>{data.name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { minHeight: Spacing.s13 },
  content: { fontSize: FontSize.md },
});
