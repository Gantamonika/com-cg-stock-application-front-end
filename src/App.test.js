
import { render, screen } from '@testing-library/react';
import StockData from './components/StockData';
import { Provider } from 'react-redux';
import store from './redux/store';
import UpdateStock from './components/UpdateStock';



beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});


//Stock--------------------------------------------------

// positive test case 
test('render Data from StockData', () => {
  render(
    <Provider store={store} >
      <StockData />
    </Provider>);
  const linkElement = screen.getByText('Stock');
  expect(linkElement).toBeInTheDocument();
});



// negative test case 
test('render Data from StockData negative test case', () => {
  render(
    <Provider store={store} >
      <StockData />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



test('render Data from Update Stock', () => {
   
  render(
    <Provider store={store} >
       <UpdateStock/>
    </Provider>)
  const linkElement = screen.getByText('Update Stock');
  expect(linkElement).toBeInTheDocument();
});


test('render Data from Update Stock negative test case', () => {
  render(
    <Provider store={store} >
      <UpdateStock/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data  Delete Stock by id', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>)
  const linkElement = screen.getByText('Delete StockBy Id');
  expect(linkElement).toBeInTheDocument();
});


test('render Data Delete Stock by id negative test case ', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Add New Stock', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>)
  const linkElement = screen.getByText('Add Stock');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Add New Stock negative test case ', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from List of all Stocks', () => {
  render(
    <Provider store={store} >
       <StockData/>
    </Provider>)
  const linkElement = screen.getByText('Find all stocks');
  expect(linkElement).toBeInTheDocument();
});

test('render Data List of all Stocks negative test case ', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Find Stock by id', () => {
   
  render(
    <Provider store={store} >
       <StockData/>
    </Provider>)
  const linkElement = screen.getByText('Find Stock By Id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Find Stock by id negative test case ', () => {
  render(
    <Provider store={store} >
      <StockData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

//