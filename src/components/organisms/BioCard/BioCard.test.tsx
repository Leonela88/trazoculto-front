import { render, screen, fireEvent } from '@testing-library/react';
import BioCard from './BioCard';

describe('BioCard', () => {
  it('renders the title', () => {
    render(<BioCard />);
    expect(screen.getByText('Biografía')).toBeInTheDocument();
  });

  it('initially shows "Leer más" button', () => {
    render(<BioCard />);
    expect(screen.getByText('Leer más')).toBeInTheDocument();
  });

  it('toggles to "Leer menos" when clicked', () => {
    render(<BioCard />);
    const button = screen.getByText('Leer más');
    fireEvent.click(button);
    expect(screen.getByText('Leer menos')).toBeInTheDocument();
  });

  it('toggles back to "Leer más" when clicked twice', () => {
    render(<BioCard />);
    const button = screen.getByText('Leer más');
    fireEvent.click(button);
    fireEvent.click(screen.getByText('Leer menos'));
    expect(screen.getByText('Leer más')).toBeInTheDocument();
  });
});
