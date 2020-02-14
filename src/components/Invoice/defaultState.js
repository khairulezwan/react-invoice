import invoiceConfig from '../../invoiceConfig';

export const defaultState = {
  editMode: false,
  lang: 'en',
  history: [],
  provider: {
    companyName: 'MamaCham Chicken Pie and Such',
    name: 'Puan Badariah',
    role: 'Director',
    addressLine1: 'No. 57 Jalan 4/9G',
    addressLine2: 'Bandar Baru Bangi',
    addressLine3: '43650',
    addressLine4: 'Malaysia',
    companyRegNo: 'Not Available',
    companyVatNo: 'Not Available',
    billingBankAccountIban: 'Iban',
    billingBankAccountBic: 'Bic',
    billingBankAccountNo: 'Account no.',
    billingBankAccountSortCode: 'Sort code',
    ...invoiceConfig.provider
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
    ...invoiceConfig.customer
  },
  invoiceMeta: {
    invoiceDate: '05/11/2017',
    invoiceSeries: 'EXP-',
    invoiceNo: '10001',
    currency: '£',
    brandName: 'Company',
    brandSubName: 'Name',
    vatRate: '20',
    ...invoiceConfig.invoiceMeta
  },
  invoiceEntries:
    invoiceConfig.invoiceEntries.length > 0 ?
    [...invoiceConfig.invoiceEntries]:
    [
      {
        dateProvided: '04/11/2017',
        description: 'Consultation',
        qty: '1',
        qtyType: 'h',
        rate: '200',
        total: '200',
      }
    ]
}