// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import StockData from './components/StockData';
import SpringBootData from './components/SpringBootData';
import { Provider } from 'react-redux';
import store from './redux/store';

// Website https://jestjs.io/ 
// learning resources https://jestjs.io/docs/getting-started  
//api https://jestjs.io/docs/api  

// run - 
// npm start 
// afterwards 
// Watch Usage
//  › Press a to run all tests.
//  › Press f to run only failed tests.
//  › Press q to quit watch mode.
//  › Press p to filter by a filename regex pattern.
//  › Press t to filter by a test name regex pattern.
//  › Press Enter to trigger a test run.

// sytnax to write test cases 
// test('a string value that describes this test', () => { });

// beforeAll();
// beforeEach();
// afterAll();
// afterEach();

// use this hook to render a component only once before all the test cases 
beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});




// positive test case 
test('render Data from StockData', () => {
  render(
    <Provider store={store} >
      <StockData />
    </Provider>);
  const linkElement = screen.getByText('Stock Component');
  expect(linkElement).toBeInTheDocument();
});


// positive test case 
test('render Data from SpringBootData', () => {
  render(
    <Provider store={store} >
      <SpringBootData />
    </Provider>);
  const linkElement = screen.getByText('Get All Stocks');
  expect(linkElement).toBeInTheDocument();
});

// negative test case 
test('render Data from SpringBootData', () => {
  render(
    <Provider store={store} >
      <SpringBootData />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
