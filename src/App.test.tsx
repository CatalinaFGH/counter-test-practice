import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('renders "Counter App Test Practice" as a text', () => {
        //Arrange
        const { getByText } = render(<App/>);
        //Act
        //Assert
        const titleElement = getByText('counter app test practice', { exact: false });
        //expect(titleElement).toBeInTheDocument();
        expect(titleElement).toBeDefined();
    });
});