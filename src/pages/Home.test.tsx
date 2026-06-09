import { render, screen } from '@testing-library/react';
import Home from './Home';

// BioCard and ExperienceCard are tested in their own files, 
// here we just check if Home renders correctly.
describe('Home Page', () => {
  it('renders BioCard and ExperienceCard', () => {
    render(<Home />);
    expect(screen.getByText('Biografía')).toBeInTheDocument();
    expect(screen.getByText('Un poco de mi trayectoria editorial')).toBeInTheDocument();
  });
});
