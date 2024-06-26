import { mount, shallow } from "enzyme"
import React from "react"
import renderer from "react-test-renderer"
import App from "../App"
import Box from "../Components/Box"
import Header from "../Components/Header"
import AccountsProvider from "../context/providers/AccountsProvider"



describe('App', () => {
    it("render without crashing", () => {
        shallow(<App />);
    })
    it('should match snapshot', () => {
        const tree = renderer
          .create(
            <App />
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    it('renders the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
      });
      it('renders the AccountsProvider and wraps the entire component', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(AccountsProvider)).toHaveLength(1);
        expect(wrapper.find(AccountsProvider).children()).toHaveLength(1);
      });
      it('renders the main container and boxes correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('main')).toHaveLength(1);
        expect(wrapper.find('.container')).toHaveLength(1);
        expect(wrapper.find(Box)).toHaveLength(2);
      });
      
})