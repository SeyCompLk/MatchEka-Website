import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterAll(() => {
  cleanup();
});
