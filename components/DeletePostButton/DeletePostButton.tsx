import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert, View } from 'react-native';

import { useDelete } from '../../hooks/useDelete';
import { Colors, FontSize } from '../../theme/styles';
import { RootStackParamList } from '../../types';
import { IconButton } from '../IconButton';

type PostListScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'PostList'>;
interface DeletePostButtonProps {
  postId: number;
}
export const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  const { navigate } = useNavigation<PostListScreenRouteProp>();

  const deletePost = useDelete(
    postId,
    () => {
      navigate('PostList');
    },
    () => {
      Alert.alert('Unable to delete post', '', [
        {
          text: 'OK',
        },
      ]);
    }
  );
  const onDeletePressed = () => {
    Alert.alert('Delete Post', 'Are you sure you want to delete this post', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => deletePost.mutate(postId),
      },
    ]);
  };

  return (
    <View style={{ minHeight: 100 }}>
      <IconButton
        icon="trash-outline"
        size={FontSize.xl}
        onPress={onDeletePressed}
        color={Colors.textWhite}
        backgroundColor={Colors.error500}
        accessibilityHint="Delete post"
      />
    </View>
  );
};
