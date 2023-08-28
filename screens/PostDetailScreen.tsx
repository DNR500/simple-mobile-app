import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

import { CommentsList } from '../components/CommentsList';
import { DeletePostButton } from '../components/DeletePostButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { IconButton } from '../components/IconButton';
import { PostDetail } from '../components/PostDetailed';
import { useCommentsForPost } from '../hooks/useComments';
import { usePost } from '../hooks/usePost';
import { useToggleFavourite } from '../hooks/useToggleFavourite';
import { Colors, FontSize, Spacing } from '../theme/styles';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;
export function PostsDetailScreen({ route, navigation }: Props) {
  const postId = route?.params?.id;
  const posts = usePost(postId);
  const comments = useCommentsForPost(postId);
  const { isFavourite, toggleFavourite } = useToggleFavourite(postId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon={isFavourite ? 'star' : 'star-outline'}
          color={tintColor}
          size={FontSize.xl}
          onPress={toggleFavourite}
        />
      ),
    });
  }, [toggleFavourite, toggleFavourite]);

  return (
    <View>
      {posts.isLoading ? (
        <ActivityIndicator color={Colors.primary100} size="large" />
      ) : posts.isError ? (
        <ErrorMessage message="Problem loading post" />
      ) : posts.data && Number.isFinite(posts.data.id) ? (
        <ScrollView style={{ padding: Spacing.s5 }}>
          <PostDetail post={posts.data} />
          <View style={styles.commentsContainer}>
            {comments.isLoading ? (
              <ActivityIndicator color={Colors.primary100} size="large" />
            ) : comments.isError ? (
              <ErrorMessage message="Problem loading comments" status="warning" />
            ) : (
              <CommentsList comments={comments.data} />
            )}
          </View>
          {!comments.isLoading && !posts.isLoading && <DeletePostButton postId={postId} />}
        </ScrollView>
      ) : (
        <Text>No post found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  commentsContainer: { paddingTop: Spacing.s4 },
});
