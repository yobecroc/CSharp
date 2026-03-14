// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CSharpBlockchain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CSharpBlockchain/i);
    expect(titleElement).toBeInTheDocument();
});
