import { getAllByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterApp from './CounterApp';

describe('CounterApp component', () => {
    it('adds +1 when the addHandler button was clicked', () => {
        //Arrange
        const { getAllByRole, getByRole, getByText } = render(<CounterApp value={0}/>);
        //Act
        const addHandlerButton = getByRole('button');
        userEvent.click(addHandlerButton);
        //Assert
        const updatedCounter = getByText('1');
        expect(updatedCounter).toBeDefined();
    });
});

