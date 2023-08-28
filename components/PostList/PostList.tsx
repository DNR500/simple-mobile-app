import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { PostItem } from './PostItem';
import { Colors, Spacing } from '../../theme/styles';
import { Post } from '../../types';
import { ErrorMessage } from '../ErrorMessage';
interface renderPostItemProps {
  item: Post;
}
const renderPostItem = ({ item }: renderPostItemProps) => <PostItem post={item} />;

interface PostListProps {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
}
export const PostList = ({ posts, isLoading, isError }: PostListProps) => (
  <View style={!(posts && posts.length) && { paddingTop: Spacing.s4 }}>
    {isLoading ? (
      <ActivityIndicator color={Colors.primary100} size="large" accessibilityHint="loading" />
    ) : isError ? (
      <ErrorMessage message="Problem loading posts" />
    ) : posts && posts.length ? (
      <FlatList data={posts} renderItem={renderPostItem} keyExtractor={(item) => `${item.id}`} />
    ) : (
      <Text style={{ textAlign: 'center', color: Colors.primary100 }}>No posts</Text>
    )}
  </View>
);
