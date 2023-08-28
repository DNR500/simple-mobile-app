import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, FontSize, Spacing } from '../../theme/styles';
import { Post } from '../../types';

export type RootStackParamList = {
  PostDetail: { id: number } | undefined;
};
interface PostItemProps {
  post: Post;
}

function arePostsEqual(oldProps: PostItemProps, newProps: PostItemProps) {
  return oldProps.post.id === newProps.post.id && oldProps.post.title === newProps.post.title;
}
export const PostItem = memo(({ post }: PostItemProps) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function postPressHandler() {
    navigate('PostDetail', { id: post.id });
  }

  return (
    <Pressable onPress={postPressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Ionicons name="paper-plane-outline" color={Colors.primary100} size={Spacing.s5} />
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: FontSize.md }}>{post.title}</Text>
        </View>
      </View>
    </Pressable>
  );
}, arePostsEqual);

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container: {
    flexDirection: 'row',
    gap: Spacing.s3,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary100,
    padding: Spacing.s3,
  },
  titleContainer: { flex: 1 },
  title: { fontSize: Spacing.s4 },
});
