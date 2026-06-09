import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('Header', () => {
  it('renders hero content on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/El editor no dice lo que todos saben/i)).toBeInTheDocument();
    expect(screen.getByText('Ver Servicios')).toBeInTheDocument();
  });

  it('renders services banner on services page', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Servicios' })).toBeInTheDocument();
    expect(screen.getByText(/¿Tenés un proyecto o pregunta?/i)).toBeInTheDocument();
  });

  it('renders contact banner on contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Contacto' })).toBeInTheDocument();
    expect(screen.getByText(/Aquí es donde las palabras llegan a mí/i)).toBeInTheDocument();
  });

  it('renders Nav component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
