import React from 'react';
import { render, screen, queryByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Trainings from './';

describe('Trainings', () => {
  it('can create a new training', () => {
    render(<Trainings />);
    const $date = screen.getByLabelText('Fecha');
    const $time = screen.getByLabelText('Hora');
    const $level = screen.getByTestId(/level/);
    const $boat = screen.getByTestId(/boat/)
    const button = screen.getByRole('button');

    userEvent.type($date, "2020-07-31");
    userEvent.type($time, "18:00");
    userEvent.selectOptions($level, ["1"]);
    userEvent.selectOptions($boat, ["Falucho(fijo)"]);
    userEvent.click(button);

    const training = screen.getByRole("listitem")
    expect(training).toHaveTextContent("2020-07-31")
    expect(training).toHaveTextContent("18:00")
    expect(training).toHaveTextContent("Nivel: 1")
    // expect(training).toHaveTextContent("Falucho(fijo)") // Needs to mockup options
  });

  // it('can´t create a new training if there aren´t created boats', () => {
  //   render(<Trainings />);
  // });

});