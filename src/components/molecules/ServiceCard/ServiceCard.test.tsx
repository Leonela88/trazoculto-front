import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

describe('ServiceCard', () => {
  const props = {
    id: '01',
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders the title', () => {
    render(<ServiceCard {...props} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the id', () => {
    render(<ServiceCard {...props} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ServiceCard {...props} />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
