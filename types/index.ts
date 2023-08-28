export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { id: number };
};
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
}
