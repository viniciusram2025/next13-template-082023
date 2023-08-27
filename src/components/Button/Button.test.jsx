import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';

import { Button } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('Button', () => {
  it('should render the component', () => {
    const { container } = renderTheme(<Button>DefaultButton</Button>);

    const button = screen.getByRole('button', { name: 'DefaultButton' });

    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
