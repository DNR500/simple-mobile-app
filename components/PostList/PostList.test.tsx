import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { PostList } from './PostList';

jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    useNavigation: jest.fn().mockReturnValue({ navigate: jest.fn() }),
  };
});

describe('<PostList />', () => {
  it("renders 'No posts' message", () => {
    render(<PostList isError={false} isLoading={false} posts={[]} />);
    expect(screen.getByText('No posts')).toBeDefined();
  });

  it("renders 'Problem loading posts' error message", () => {
    render(<PostList isError isLoading={false} posts={[]} />);
    expect(screen.getByText('Problem loading posts')).toBeDefined();
  });

  it("renders 'Problem loading posts' error message", () => {
    render(<PostList isError={false} isLoading posts={[]} />);
    expect(screen.getByAccessibilityHint('loading')).toBeDefined();
  });

  it('renders post titles', () => {
    render(
      <PostList
        isError={false}
        isLoading={false}
        posts={[{ id: 1, title: 'The first title', body: 'description', userId: 3 }]}
      />
    );
    expect(screen.getByText('The first title')).toBeDefined();
  });

  it('renders pressable item that navigates to the post details page', () => {
    const navigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate });

    render(
      <PostList
        isError={false}
        isLoading={false}
        posts={[{ id: 1, title: 'The first title', body: 'description', userId: 3 }]}
      />
    );

    fireEvent.press(screen.getByText('The first title'));

    expect(navigate).toHaveBeenCalledWith('PostDetail', { id: 1 });
  });
});
