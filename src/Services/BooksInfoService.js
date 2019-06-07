const BOOK_MAPPING = [{
    value: 'math',
    label: 'Math',
    authorWallet: '0x744cdf92e7b218ad8eC566870B602545e7278F77',
    feeAmount: 0.01,
    content: [{
      page: 1,
      hash: 'QmSo5UeHKe6949UAss3dEhhEJrGgkQ84BRAwrwDtk4S1b6'
    },{
      page: 2,
      hash: 'QmZMzc8yDePyB6Cz9HRXFyxmo6My5eRUYuv5QBcgp6US53'
    }],
  },
  {
    value: 'chemistry',
    label: 'Chemistry',
    authorWallet: '0x744cdf92e7b218ad8eC566870B602545e7278F77',
    feeAmount: 0.01,
    content: [{
      page: 1,
      hash: 'QmTvpRV3edtjTg8bt2Av8X8JcWBtDoKtfQB5EaD89ud3Dt'
    },{
      page: 2,
      hash: 'QmbsL57d3XzoUpu92pgdpWu6naKjUKfn2dv4LN5kudN7Dn'
    }],
  },
  {
    value: 'helloBook',
    label: 'Hello Book',
    authorWallet: '0x744cdf92e7b218ad8eC566870B602545e7278F77',
    feeAmount: 0.01,
    content: [{
      page: 1,
      hash: 'QmXeX7qjJCw1DReJxY2dYXrdD2C1CxbTr9F1jbvvonpNdf'
    },{
      page: 2,
      hash: 'QmXQYAx93FDFKbHzvhU8HrHTngw3yzfjH1T75YxrKJsPgL'
    }],
  },
];

export function getBookMapping() {
  return BOOK_MAPPING;
}
