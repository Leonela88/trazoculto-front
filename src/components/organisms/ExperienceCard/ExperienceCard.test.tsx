import { render, screen } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';

describe('ExperienceCard', () => {
  it('renders the correct title', () => {
    render(<ExperienceCard />);
    expect(screen.getByText('Un poco de mi trayectoria editorial')).toBeInTheDocument();
  });

  it('renders experience items', () => {
    render(<ExperienceCard />);
    expect(screen.getByText('Editorial El Ateneo')).toBeInTheDocument();
    expect(screen.getByText('Edebé')).toBeInTheDocument();
    expect(screen.getByText('Salvat')).toBeInTheDocument();
    expect(screen.getByText('Editorial Minotauro')).toBeInTheDocument();
  });
});
