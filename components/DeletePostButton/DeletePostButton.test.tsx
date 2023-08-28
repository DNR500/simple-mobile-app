import { useNavigation } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';

import { DeletePostButton } from './DeletePostButton';
import { useDelete } from '../../hooks/useDelete';

jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    useNavigation: jest.fn(),
  };
});

jest.mock('../../hooks/useDelete', () => {
  return {
    __esModule: true,
    useDelete: jest.fn(),
  };
});

describe('<DeletePostButton />', () => {
  it('renders a pressable button', () => {
    const navigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate });

    const mutate = jest.fn();
    (useDelete as jest.Mock).mockReturnValue({ mutate });

    render(<DeletePostButton postId={3} />);

    expect(screen.getByAccessibilityHint('Delete post')).toBeDefined();
  });
});
