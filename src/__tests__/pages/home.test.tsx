import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '../../pages/Home';

afterAll(() => {
  cleanup();
});

const resizeWindow = (x: number, y: number) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  act(() => {
    window.dispatchEvent(new Event('resize'));
  });
};

describe('User interaction tests in mobile version', () => {
  beforeAll(() => {
    resizeWindow(414, 736);
  });
  test('Should toggle between live and upcoming matches when buntton clicked', () => {
    const { queryByTestId } = render(<Home />);

    expect(queryByTestId('resp-live-tile')).toBeInTheDocument();
    expect(queryByTestId('resp-upcoming-tile')).not.toBeInTheDocument();

    fireEvent.click(queryByTestId('upcoming-btn') as HTMLButtonElement);

    expect(queryByTestId('resp-live-tile')).not.toBeInTheDocument();
    expect(queryByTestId('resp-upcoming-tile')).toBeInTheDocument();
  });
});
