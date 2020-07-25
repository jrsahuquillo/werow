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
    const $modality = screen.getByTestId('modality')
    const $helmsman = screen.getByLabelText(/Timonel/);
    const button = screen.getByRole('button');

    userEvent.type($name, 'name');
    userEvent.type($rowers, "1");
    userEvent.selectOptions($modality, ["fijo"]);
    userEvent.click($helmsman);
    userEvent.click(button);

    expect($name.value).toBe("");
    expect($rowers.value).toBe("");
    expect($helmsman.checked).toBe(false);

  });

  it('submit form button is disabled if form is not completed', () => {
    render(<Boats />);
    const button = screen.getByRole('button');
    const $name = screen.getByLabelText('Nombre');
    const $rowers = screen.getByLabelText(/Remeras/);
    const $modality = screen.getByTestId('modality')

    expect(button.disabled).toEqual(true);

    userEvent.type($name, 'name');
    expect(button.disabled).toEqual(true);

    userEvent.type($rowers, "1");
    expect(button.disabled).toEqual(true);

    userEvent.selectOptions($modality, ["fijo"]);
    expect(button.disabled).toEqual(false);

  });

});