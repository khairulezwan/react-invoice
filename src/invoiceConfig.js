/*
* YOUR DEFAULT INVOICE INFO TO BE CONFIGURED HERE
* */

export default {
  editMode: false,
  lang: 'en',
  history: [],
  provider: {
    companyName: 'MamaCham',
    name: 'Puan Badariah',
    role: 'Director',
    addressLine1: '57, Jalan 4/9G',
    addressLine2: 'Bandar Baru Bangi',
    addressLine3: '43650',
    addressLine4: 'Malaysia',
    companyRegNo: 'Not Available',
    companyVatNo: 'Not Available',
    billingBankAccountIban: 'Iban',
    paymentTerm: 'Weekly',
    billingBankAccountNo: '7010221692',
    billingBankAccountSortCode: 'Sort code',
  },
  customer: {
    companyName: 'CompanyName Ltd',
    name: 'FirstName LastName',
    role: 'Director',
    addressLine1: '9000 House Name',
    addressLine2: 'City',
    addressLine3: 'PostCode',
    addressLine4: 'Country',
    companyRegNo: '10203040',
    companyVatNo: '100200300',
  },
  invoiceMeta: {
    invoiceDate: '25/11/2020',
    invoiceSeries: 'SERIES-',
    invoiceNo: '10001',
    currency: 'RM',
    brandName: 'MamaCham',
    brandSubName: 'Chicken Pies',
    vatRate: '0',
  },
  invoiceEntries: [
    {
      dateProvided: '25/11/2020',
      description: 'Item description',
      qty: '1',
      qtyType: ' pcs ',
      rate: '2.7',
      total: '2.7',
    }
  ]
}