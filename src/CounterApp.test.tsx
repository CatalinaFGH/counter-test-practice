import { getAllByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterApp from './CounterApp';

describe('CounterApp component', () => {
    it('adds +1 when the addHandler button was clicked', () => {
        //Arrange
        const { getAllByRole, getByRole } = render(<CounterApp value={0}/>);
        //Act
        const addHandlerButton = getAllByRole('button');
        userEvent.click(addHandlerButton[0]);
        //Assert
        const updatedCounter = getByRole('heading');
        expect(updatedCounter).toBeDefined();
        expect(updatedCounter).toBe(1);
    });
    //Este test testea que al hacer click en el botón +1 suceda algo,
    // es decir, se defina algo
});

