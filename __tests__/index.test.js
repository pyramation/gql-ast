import * as ast from '../src';

it('works', () => {
  expect(ast.document({ definitions: {} })).toMatchSnapshot();
});
