import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Nav from './Nav';

describe('Nav', () => {
  it('renders logo and brand name', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText('trazoculto')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
  });

  it('links have correct hrefs', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText('Contacto').closest('a')).toHaveAttribute('href', '/contact');
    expect(screen.getByText('Servicios').closest('a')).toHaveAttribute('href', '/services');
  });
});
