import { StyleSheet, Text, View } from 'react-native';

import { CommentItem } from './CommentItem';
import { Colors, FontSize } from '../../theme/styles';
import { Comment } from '../../types';

interface CommentsListProps {
  comments?: Comment[];
}
export const CommentsList = ({ comments }: CommentsListProps) => (
  <View>
    {comments && comments.length ? (
      comments.map((comment) => <CommentItem comment={comment} key={comment.id} />)
    ) : (
      <Text style={styles.noComments}>No comments for this post</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  noComments: { textAlign: 'center', fontSize: FontSize.sm, color: Colors.primary100 },
});
