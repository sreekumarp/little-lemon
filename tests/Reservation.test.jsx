import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Reservation from '../src/components/reservation/Reservation';

// Mock props
const availableTimesMock = [
  { value: '', label: 'Choose Time' },
  { value: '1', label: '08:00 AM - 10:00 AM' },
];
const dispatchMock = vi.fn();

describe('Reservation Component', () => {
  it('should allow typing in the Name input', async () => {
    render(<Reservation availableTimes={availableTimesMock} dispatch={dispatchMock} />);
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    await userEvent.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');
  });

  it('should allow typing in the Email input', async () => {
    render(<Reservation availableTimes={availableTimesMock} dispatch={dispatchMock} />);
    const emailInput = screen.getByPlaceholderText(/enter email/i);
    await userEvent.type(emailInput, 'john@example.com');
    expect(emailInput).toHaveValue('john@example.com');
  });

  it('should allow typing in the Phone input', async () => {
    render(<Reservation availableTimes={availableTimesMock} dispatch={dispatchMock} />);
    const phoneInput = screen.getByPlaceholderText(/enter phone/i);
    await userEvent.type(phoneInput, '1234567890');
    expect(phoneInput).toHaveValue('1234567890');
  });
});
