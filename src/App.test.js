// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeStream/i);
    expect(titleElement).toBeInTheDocument();
});
