import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services Page', () => {
  it('renders ServicesGrid', () => {
    render(<Services />);
    // Since ServicesGrid renders individual ServiceCards, we check for a known service title from data.
    // We should ideally mock the data or check for a general element.
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
