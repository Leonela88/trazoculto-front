import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders copyright and brand name', () => {
    render(<Footer />);
    expect(screen.getByText('©')).toBeInTheDocument();
    expect(screen.getByText('trazoculto')).toBeInTheDocument();
  });

  it('renders the year 2026', () => {
    render(<Footer />);
    expect(screen.getByText('2026')).toBeInTheDocument();
  });

  it('renders the author name', () => {
    render(<Footer />);
    expect(screen.getByText(/by Mariel/i)).toBeInTheDocument();
    expect(screen.getByText(/Pannunzio/i)).toBeInTheDocument();
  });
});
