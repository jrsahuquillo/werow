import React from 'react';
import { render, screen, queryByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Boats from './';

describe('Boats', () => {
  it('can create a new boat', () => {
    render(<Boats />);
    const $name = screen.getByLabelText('Nombre');
    const $rowers = screen.getByLabelText(/Remeras/);
    const $modality = screen.getByTestId('modality')
    const $helmsman = screen.getByLabelText(/Timonel/);
    const button = screen.getByRole('button');

    userEvent.type($name, 'aName');
    userEvent.type($rowers, "1");
    userEvent.selectOptions($modality, ["fijo"]);
    userEvent.click($helmsman);
    userEvent.click(button);

    const boat = screen.getByRole("listitem")
    expect(boat).toHaveTextContent("aName")
    expect(boat).toHaveTextContent(/1 👤/)
    expect(boat).toHaveTextContent("Banco Fijo")
    expect(boat).toHaveTextContent(/Con Timonel/)
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

});