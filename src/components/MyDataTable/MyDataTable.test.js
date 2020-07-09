import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyDataTable from './MyDataTable';

describe('<MyDataTable />', () => {
  test('it should mount', () => {
    render(<MyDataTable />);
    
    const myDataTable = screen.getByTestId('MyDataTable');

    expect(myDataTable).toBeInTheDocument();
  });
});