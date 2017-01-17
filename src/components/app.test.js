//import { renderComponent , expect } from '../../test/test_helper';
import ReactTestUtils from 'react-addons-test-utils';
import App from './app';

describe('App' , () => {

  it('renders something', () => {
    var content = ReactTestUtils.renderIntoDocument( <div>React simple starter</div> );
    expect(ReactTestUtils.isCompositeComponent(content)).toBeTruthy();
  });
});
