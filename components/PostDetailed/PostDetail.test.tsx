import { render, screen } from '@testing-library/react-native';

import { PostDetail } from './PostDetail';
import { useUser } from '../../hooks/useUser';

jest.mock('../../hooks/useUser', () => {
  return {
    __esModule: true,
    useUser: jest.fn(),
  };
});

describe('<PostDetail />', () => {
  it('renders details and loader for user name', () => {
    (useUser as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: false,
    });

    render(
      <PostDetail post={{ id: 1, title: 'The first title', body: 'description', userId: 3 }} />
    );

    expect(useUser).toHaveBeenCalledWith(3);

    expect(screen.getByText('The first title')).toBeDefined();
    expect(screen.getByText('description')).toBeDefined();
    expect(screen.getByAccessibilityHint('loading')).toBeDefined();
  });

  it('renders user name', async () => {
    (useUser as jest.Mock).mockReturnValue({
      data: { name: 'Lucy Brian' },
      isLoading: false,
      isError: false,
    });

    render(
      <PostDetail post={{ id: 1, title: 'The first title', body: 'description', userId: 3 }} />
    );

    expect(useUser).toHaveBeenCalledWith(3);

    expect(screen.getByText('Lucy Brian')).toBeDefined();
  });

  it('renders error if user details can not be fetched', async () => {
    (useUser as jest.Mock).mockReturnValue({
      data: {},
      isLoading: false,
      isError: true,
    });

    render(
      <PostDetail post={{ id: 1, title: 'The first title', body: 'description', userId: 3 }} />
    );

    expect(useUser).toHaveBeenCalledWith(3);

    expect(screen.getByText('Problem getting user info')).toBeDefined();
  });
});
