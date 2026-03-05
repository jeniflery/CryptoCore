// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoCore/i);
    expect(titleElement).toBeInTheDocument();
});
