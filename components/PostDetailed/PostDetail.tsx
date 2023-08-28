import { StyleSheet, Text, View } from 'react-native';

import { AuthorDetail } from './AuthorDetail';
import { Colors, FontSize, Spacing } from '../../theme/styles';
import { Post } from '../../types';

interface PostDetailedProps {
  post: Post;
}
export const PostDetail = ({ post }: PostDetailedProps) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Title</Text>
      <Text style={styles.content}>{post.title}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.content}>{post.body}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Author</Text>
      <AuthorDetail userId={post.userId} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primary100,
  },
  infoContainer: { flexDirection: 'column', gap: Spacing.s1, paddingBottom: Spacing.s3 },
  label: { fontSize: FontSize.md, color: Colors.primary50, fontWeight: 'bold' },
  content: { fontSize: FontSize.md },
});
