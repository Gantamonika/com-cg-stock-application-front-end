
import { render, screen } from '@testing-library/react';
import StockData from './components/StockData';
import { Provider } from 'react-redux';
import store from './redux/store';
import UpdateStock from './components/UpdateStock';
import ManagerData from './components/ManagerData';
import UpdateManager from './components/UpdateManager';
import AdminData from './components/AdminData';
import UpdateAdmin from './components/UpdateAdmin';
import AddAdmin from './components/AddAdmin';
import InvestorData from './components/InvestorData';
import UpdateInvestor from './components/UpdateInvestor';














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

//Manager---------------------------------

// positive test case 
test('render Data from managerData', () => {
  render(
    <Provider store={store} >
      <ManagerData/>
    </Provider>);
  const linkElement = screen.getByText('Manager');
  expect(linkElement).toBeInTheDocument();
});



// negative test case 
test('render Data from managerData', () => {
  render(
    <Provider store={store} >
      <ManagerData />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



test('render Data from Update manager', () => {
   
  render(
    <Provider store={store} >
       <UpdateManager/>
    </Provider>)
  const linkElement = screen.getByText('Update manager');
  expect(linkElement).toBeInTheDocument();
});


test('render Data from Update manager', () => {
  render(
    <Provider store={store} >
      <UpdateManager/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data from List of all Manager', () => {
  render(
    <Provider store={store} >
       <ManagerData/>
    </Provider>)
  const linkElement = screen.getByText('Find all manager');
  expect(linkElement).toBeInTheDocument();
});

test('render Data List of all Manager', () => {
  render(
    <Provider store={store} >
      <ManagerData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Find Manager by id', () => {
   
  render(
    <Provider store={store} >
       <ManagerData/>
    </Provider>)
  const linkElement = screen.getByText('Find Manager By Id');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Find manager by id', () => {
  render(
    <Provider store={store} >
      <ManagerData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

//Admin--------------------------------------------------







test('render Data from AdminData', () => {
  render(
    <Provider store={store} >
      <AdminData />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data from Update Admin', () => {
  render(
    <Provider store={store} >
      <UpdateAdmin/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data Delete Admin by id', () => {
  render(
    <Provider store={store} >
      <AdminData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Add New Admin', () => {
  render(
    <Provider store={store} >
      <AddAdmin/>
    </Provider>)
  const linkElement = screen.getByText('Add Admin');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Add New Admin', () => {
  render(
    <Provider store={store} >
      <AddAdmin/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



test('render Data List of all Admin', () => {
  render(
    <Provider store={store} >
      <AdminData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



test('render Data Find Admin by id', () => {
  render(
    <Provider store={store} >
      <AdminData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
})

//Investor--------------------------------------------------

// positive test case 
test('render Data from InvestorData', () => {
  render(
    <Provider store={store} >
      <InvestorData />
    </Provider>);
  const linkElement = screen.getByText('Investor');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Delete Investor by id', () => {
  render(
    <Provider store={store} >
      <InvestorData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Add New Investor', () => {
  render(
    <Provider store={store} >
      <InvestorData/>
    </Provider>)
  const linkElement = screen.getByText('Add Investor');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Add New Investor', () => {
  render(
    <Provider store={store} >
      <InvestorData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data List of all Investors', () => {
  render(
    <Provider store={store} >
      <InvestorData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data Find Investor by id', () => {
  render(
    <Provider store={store} >
      <InvestorData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});