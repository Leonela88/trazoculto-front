import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import { vi } from 'vitest';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('updates field values on change', () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText('Nombre') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe', name: 'name' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = screen.getByPlaceholderText('E-mail') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'john@example.com', name: 'email' } });
    expect(emailInput.value).toBe('john@example.com');

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'Asesoría editorial', name: 'service' } });
    expect(select.value).toBe('Asesoría editorial');

    const messageArea = screen.getByPlaceholderText('Mensaje') as HTMLTextAreaElement;
    fireEvent.change(messageArea, { target: { value: 'Hello', name: 'message' } });
    expect(messageArea.value).toBe('Hello');
  });

  it('submits the form and shows success message', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'John Doe', name: 'name' } });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Asesoría editorial', name: 'service' } });
    fireEvent.change(screen.getByPlaceholderText('Mensaje'), { target: { value: 'Hello', name: 'message' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(screen.getByText('¡Mensaje enviado!')).toBeInTheDocument();
    });
    expect(screen.getByText(/Mariel se pondrá en contacto/i)).toBeInTheDocument();
  });
});
