import { StyleSheet, Text, View } from 'react-native';

import { Colors, FontSize, Spacing } from '../../theme/styles';
import { Comment } from '../../types';

interface CommentsItemProps {
  comment: Comment;
}
export const CommentItem = ({ comment }: CommentsItemProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{comment.name}</Text>
    <Text style={styles.message}>{comment.body}</Text>
    <Text style={styles.email}>{comment.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: Spacing.s2,
    backgroundColor: Colors.primary100,
    padding: Spacing.s4,
    marginBottom: Spacing.s3,
  },
  title: { color: Colors.textWhite, fontSize: FontSize.md, fontWeight: 'bold' },
  message: { color: Colors.textWhite, fontSize: FontSize.md },
  email: { color: Colors.textWhite, fontSize: FontSize.sm, textAlign: 'right' },
});
