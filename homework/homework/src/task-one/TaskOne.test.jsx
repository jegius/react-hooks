import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskOne from './TaskOne';

describe('TaskOne form', () => {
  const fillValidForm = async (user) => {
    await user.type(screen.getByPlaceholderText(/first name/i), 'Oleg');
    await user.type(screen.getByPlaceholderText(/last name/i), 'Ivanov');
    await user.type(screen.getByPlaceholderText(/email/i), 'oleg@example.com');
    await user.type(screen.getByPlaceholderText(/^password$/i), 'abc1@');
    await user.type(screen.getByPlaceholderText(/confirm password/i), 'abc1@');
  };

  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('submits valid form and calls alert with payload', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(window.alert).toHaveBeenCalledTimes(1);

    const payload = JSON.parse(window.alert.mock.calls[0][0]);
    expect(payload).toEqual({
      firstName: 'Oleg',
      lastName: 'Ivanov',
      email: 'oleg@example.com',
      password: 'abc1@',
      confirmPassword: 'abc1@',
    });
  });

  test('shows error when firstName/lastName are empty', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    await user.type(screen.getByPlaceholderText(/email/i), 'oleg@example.com');
    await user.type(screen.getByPlaceholderText(/^password$/i), 'abc1@');
    await user.type(screen.getByPlaceholderText(/confirm password/i), 'abc1@');

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(
      screen.getByText(/first name and last name can not be empty/i),
    ).toBeInTheDocument();
    expect(window.alert).not.toHaveBeenCalled();
  });

  test('shows error when email is invalid', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    await user.type(screen.getByPlaceholderText(/first name/i), 'Oleg');
    await user.type(screen.getByPlaceholderText(/last name/i), 'Ivanov');
    await user.type(screen.getByPlaceholderText(/email/i), 'test');
    await user.type(screen.getByPlaceholderText(/^password$/i), 'abc1@');
    await user.type(screen.getByPlaceholderText(/confirm password/i), 'abc1@');

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(window.alert).not.toHaveBeenCalled();
  });

  test('shows error when password is weak', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    await user.type(screen.getByPlaceholderText(/first name/i), 'Oleg');
    await user.type(screen.getByPlaceholderText(/last name/i), 'Ivanov');
    await user.type(screen.getByPlaceholderText(/email/i), 'oleg@example.com');
    await user.type(screen.getByPlaceholderText(/^password$/i), 'abcde'); // no digit/special
    await user.type(screen.getByPlaceholderText(/confirm password/i), 'abcde');

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(
      screen.getByText(
        /password: should be at least 5 chars with 1 special symbol and 1 digit/i,
      ),
    ).toBeInTheDocument();
    expect(window.alert).not.toHaveBeenCalled();
  });

  test('shows error when confirm password does not match', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    await user.type(screen.getByPlaceholderText(/first name/i), 'Oleg');
    await user.type(screen.getByPlaceholderText(/last name/i), 'Ivanov');
    await user.type(screen.getByPlaceholderText(/email/i), 'oleg@example.com');
    await user.type(screen.getByPlaceholderText(/^password$/i), 'abc1@');
    await user.type(screen.getByPlaceholderText(/confirm password/i), 'abc1#');

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(
      screen.getByText(/confirm password must match password/i),
    ).toBeInTheDocument();
    expect(window.alert).not.toHaveBeenCalled();
  });

  test('clears fields after successful submit', async () => {
    const user = userEvent.setup();
    render(<TaskOne />);

    const firstName = screen.getByPlaceholderText(/first name/i);
    const lastName = screen.getByPlaceholderText(/last name/i);
    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/^password$/i);
    const confirmPassword = screen.getByPlaceholderText(/confirm password/i);

    await user.type(firstName, 'Oleg');
    await user.type(lastName, 'Ivanov');
    await user.type(email, 'oleg@example.com');
    await user.type(password, 'abc1@');
    await user.type(confirmPassword, 'abc1@');

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(firstName).toHaveValue('');
    expect(lastName).toHaveValue('');
    expect(email).toHaveValue('');
    expect(password).toHaveValue('');
    expect(confirmPassword).toHaveValue('');
  });
});
