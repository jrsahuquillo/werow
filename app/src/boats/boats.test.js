import React from 'react';
import { render, screen, queryByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Boats from './';

describe('Boats', () => {
  it('can create a new boat', () => {
    render(<Boats />);
    const $name = screen.getByLabelText('Nombre');
    const $rowers = screen.getByLabelText(/Remeras/);
    const $helmsman = screen.getByLabelText(/Timonel/);
    const button = screen.getByRole('button');

    userEvent.type($name, 'name');
    userEvent.type($rowers, "1");
    userEvent.click($helmsman);
    userEvent.click(button);

    const createdBoat = screen.queryByText(/1 👤/)
    expect(createdBoat).toBeInTheDocument();
    const withHelmsman = screen.queryByText(/Con Timonel/)
    expect(withHelmsman).toBeInTheDocument();
  });

  it('empties the form after submit', () => {
    render(<Boats />);
    const $name = screen.getByLabelText('Nombre');
    const $rowers = screen.getByLabelText(/Remeras/);
    const $helmsman = screen.getByLabelText(/Timonel/);
    const button = screen.getByRole('button');

    userEvent.type($name, 'name');
    userEvent.type($rowers, "1");
    userEvent.click($helmsman);
    userEvent.click(button);

    expect($name.value).toBe("");
    expect($rowers.value).toBe("");
    expect($helmsman.checked).toBe(false);
  });

  it('keeps created boat after reload browser', () => {
    localStorage.clear();
    render(<Boats />);
    const $name = screen.getByLabelText('Nombre');
    const $rowers = screen.getByLabelText(/Remeras/);
    const $helmsman = screen.getByLabelText(/Timonel/);
    const button = screen.getByRole('button');

    userEvent.type($name, 'name');
    userEvent.type($rowers, "2");
    userEvent.click($helmsman);
    userEvent.click(button);

    // Reload browser??
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };
    window.location.reload();

    const createdBoat = screen.queryByText(/2 👤/)
    expect(createdBoat).toBeInTheDocument();
    const withHelmsman = screen.queryByText(/Con Timonel/)
    expect(withHelmsman).toBeInTheDocument();

  });

});