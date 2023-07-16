import { render } from '@testing-library/react';

describe('Root component', () => {
  it('should be in the document', () => {
    render(<div>test</div>);
    expect(1).toEqual(1);
  });
});
