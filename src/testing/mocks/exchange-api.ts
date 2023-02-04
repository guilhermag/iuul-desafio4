import {
  SymbolResponse,
  ApiResponse,
  ConvertResult,
} from 'src/app/models/interfaces';

export const mockedSymbolResult: SymbolResponse[] = [
  {
    description: 'United Arab Emirates Dirham',
    code: 'AED',
  },
  {
    description: 'Afghan Afghani',
    code: 'AFN',
  },
  {
    description: 'Albanian Lek',
    code: 'ALL',
  },
  {
    description: 'Armenian Dram',
    code: 'AMD',
  },
  {
    description: 'Netherlands Antillean Guilder',
    code: 'ANG',
  },
  {
    description: 'Angolan Kwanza',
    code: 'AOA',
  },
  {
    description: 'Argentine Peso',
    code: 'ARS',
  },
  {
    description: 'Australian Dollar',
    code: 'AUD',
  },
  {
    description: 'Aruban Florin',
    code: 'AWG',
  },
  {
    description: 'Azerbaijani Manat',
    code: 'AZN',
  },
  {
    description: 'Bosnia-Herzegovina Convertible Mark',
    code: 'BAM',
  },
  {
    description: 'Barbadian Dollar',
    code: 'BBD',
  },
  {
    description: 'Bangladeshi Taka',
    code: 'BDT',
  },
  {
    description: 'Bulgarian Lev',
    code: 'BGN',
  },
  {
    description: 'Bahraini Dinar',
    code: 'BHD',
  },
  {
    description: 'Burundian Franc',
    code: 'BIF',
  },
  {
    description: 'Bermudan Dollar',
    code: 'BMD',
  },
  {
    description: 'Brunei Dollar',
    code: 'BND',
  },
  {
    description: 'Bolivian Boliviano',
    code: 'BOB',
  },
  {
    description: 'Brazilian Real',
    code: 'BRL',
  },
  {
    description: 'Bahamian Dollar',
    code: 'BSD',
  },
  {
    description: 'Bitcoin',
    code: 'BTC',
  },
  {
    description: 'Bhutanese Ngultrum',
    code: 'BTN',
  },
  {
    description: 'Botswanan Pula',
    code: 'BWP',
  },
  {
    description: 'Belarusian Ruble',
    code: 'BYN',
  },
  {
    description: 'Belize Dollar',
    code: 'BZD',
  },
  {
    description: 'Canadian Dollar',
    code: 'CAD',
  },
  {
    description: 'Congolese Franc',
    code: 'CDF',
  },
  {
    description: 'Swiss Franc',
    code: 'CHF',
  },
  {
    description: 'Chilean Unit of Account (UF)',
    code: 'CLF',
  },
  {
    description: 'Chilean Peso',
    code: 'CLP',
  },
  {
    description: 'Chinese Yuan (Offshore)',
    code: 'CNH',
  },
  {
    description: 'Chinese Yuan',
    code: 'CNY',
  },
  {
    description: 'Colombian Peso',
    code: 'COP',
  },
  {
    description: 'Costa Rican Colón',
    code: 'CRC',
  },
  {
    description: 'Cuban Convertible Peso',
    code: 'CUC',
  },
  {
    description: 'Cuban Peso',
    code: 'CUP',
  },
  {
    description: 'Cape Verdean Escudo',
    code: 'CVE',
  },
  {
    description: 'Czech Republic Koruna',
    code: 'CZK',
  },
  {
    description: 'Djiboutian Franc',
    code: 'DJF',
  },
  {
    description: 'Danish Krone',
    code: 'DKK',
  },
  {
    description: 'Dominican Peso',
    code: 'DOP',
  },
  {
    description: 'Algerian Dinar',
    code: 'DZD',
  },
  {
    description: 'Egyptian Pound',
    code: 'EGP',
  },
  {
    description: 'Eritrean Nakfa',
    code: 'ERN',
  },
  {
    description: 'Ethiopian Birr',
    code: 'ETB',
  },
  {
    description: 'Euro',
    code: 'EUR',
  },
  {
    description: 'Fijian Dollar',
    code: 'FJD',
  },
  {
    description: 'Falkland Islands Pound',
    code: 'FKP',
  },
  {
    description: 'British Pound Sterling',
    code: 'GBP',
  },
  {
    description: 'Georgian Lari',
    code: 'GEL',
  },
  {
    description: 'Guernsey Pound',
    code: 'GGP',
  },
  {
    description: 'Ghanaian Cedi',
    code: 'GHS',
  },
  {
    description: 'Gibraltar Pound',
    code: 'GIP',
  },
  {
    description: 'Gambian Dalasi',
    code: 'GMD',
  },
  {
    description: 'Guinean Franc',
    code: 'GNF',
  },
  {
    description: 'Guatemalan Quetzal',
    code: 'GTQ',
  },
  {
    description: 'Guyanaese Dollar',
    code: 'GYD',
  },
  {
    description: 'Hong Kong Dollar',
    code: 'HKD',
  },
  {
    description: 'Honduran Lempira',
    code: 'HNL',
  },
  {
    description: 'Croatian Kuna',
    code: 'HRK',
  },
  {
    description: 'Haitian Gourde',
    code: 'HTG',
  },
  {
    description: 'Hungarian Forint',
    code: 'HUF',
  },
  {
    description: 'Indonesian Rupiah',
    code: 'IDR',
  },
  {
    description: 'Israeli New Sheqel',
    code: 'ILS',
  },
  {
    description: 'Manx pound',
    code: 'IMP',
  },
  {
    description: 'Indian Rupee',
    code: 'INR',
  },
  {
    description: 'Iraqi Dinar',
    code: 'IQD',
  },
  {
    description: 'Iranian Rial',
    code: 'IRR',
  },
  {
    description: 'Icelandic Króna',
    code: 'ISK',
  },
  {
    description: 'Jersey Pound',
    code: 'JEP',
  },
  {
    description: 'Jamaican Dollar',
    code: 'JMD',
  },
  {
    description: 'Jordanian Dinar',
    code: 'JOD',
  },
  {
    description: 'Japanese Yen',
    code: 'JPY',
  },
  {
    description: 'Kenyan Shilling',
    code: 'KES',
  },
  {
    description: 'Kyrgystani Som',
    code: 'KGS',
  },
  {
    description: 'Cambodian Riel',
    code: 'KHR',
  },
  {
    description: 'Comorian Franc',
    code: 'KMF',
  },
  {
    description: 'North Korean Won',
    code: 'KPW',
  },
  {
    description: 'South Korean Won',
    code: 'KRW',
  },
  {
    description: 'Kuwaiti Dinar',
    code: 'KWD',
  },
  {
    description: 'Cayman Islands Dollar',
    code: 'KYD',
  },
  {
    description: 'Kazakhstani Tenge',
    code: 'KZT',
  },
  {
    description: 'Laotian Kip',
    code: 'LAK',
  },
  {
    description: 'Lebanese Pound',
    code: 'LBP',
  },
  {
    description: 'Sri Lankan Rupee',
    code: 'LKR',
  },
  {
    description: 'Liberian Dollar',
    code: 'LRD',
  },
  {
    description: 'Lesotho Loti',
    code: 'LSL',
  },
  {
    description: 'Libyan Dinar',
    code: 'LYD',
  },
  {
    description: 'Moroccan Dirham',
    code: 'MAD',
  },
  {
    description: 'Moldovan Leu',
    code: 'MDL',
  },
  {
    description: 'Malagasy Ariary',
    code: 'MGA',
  },
  {
    description: 'Macedonian Denar',
    code: 'MKD',
  },
  {
    description: 'Myanma Kyat',
    code: 'MMK',
  },
  {
    description: 'Mongolian Tugrik',
    code: 'MNT',
  },
  {
    description: 'Macanese Pataca',
    code: 'MOP',
  },
  {
    description: 'Mauritanian Ouguiya (pre-2018)',
    code: 'MRO',
  },
  {
    description: 'Mauritanian Ouguiya',
    code: 'MRU',
  },
  {
    description: 'Mauritian Rupee',
    code: 'MUR',
  },
  {
    description: 'Maldivian Rufiyaa',
    code: 'MVR',
  },
  {
    description: 'Malawian Kwacha',
    code: 'MWK',
  },
  {
    description: 'Mexican Peso',
    code: 'MXN',
  },
  {
    description: 'Malaysian Ringgit',
    code: 'MYR',
  },
  {
    description: 'Mozambican Metical',
    code: 'MZN',
  },
  {
    description: 'Namibian Dollar',
    code: 'NAD',
  },
  {
    description: 'Nigerian Naira',
    code: 'NGN',
  },
  {
    description: 'Nicaraguan Córdoba',
    code: 'NIO',
  },
  {
    description: 'Norwegian Krone',
    code: 'NOK',
  },
  {
    description: 'Nepalese Rupee',
    code: 'NPR',
  },
  {
    description: 'New Zealand Dollar',
    code: 'NZD',
  },
  {
    description: 'Omani Rial',
    code: 'OMR',
  },
  {
    description: 'Panamanian Balboa',
    code: 'PAB',
  },
  {
    description: 'Peruvian Nuevo Sol',
    code: 'PEN',
  },
  {
    description: 'Papua New Guinean Kina',
    code: 'PGK',
  },
  {
    description: 'Philippine Peso',
    code: 'PHP',
  },
  {
    description: 'Pakistani Rupee',
    code: 'PKR',
  },
  {
    description: 'Polish Zloty',
    code: 'PLN',
  },
  {
    description: 'Paraguayan Guarani',
    code: 'PYG',
  },
  {
    description: 'Qatari Rial',
    code: 'QAR',
  },
  {
    description: 'Romanian Leu',
    code: 'RON',
  },
  {
    description: 'Serbian Dinar',
    code: 'RSD',
  },
  {
    description: 'Russian Ruble',
    code: 'RUB',
  },
  {
    description: 'Rwandan Franc',
    code: 'RWF',
  },
  {
    description: 'Saudi Riyal',
    code: 'SAR',
  },
  {
    description: 'Solomon Islands Dollar',
    code: 'SBD',
  },
  {
    description: 'Seychellois Rupee',
    code: 'SCR',
  },
  {
    description: 'Sudanese Pound',
    code: 'SDG',
  },
  {
    description: 'Swedish Krona',
    code: 'SEK',
  },
  {
    description: 'Singapore Dollar',
    code: 'SGD',
  },
  {
    description: 'Saint Helena Pound',
    code: 'SHP',
  },
  {
    description: 'Sierra Leonean Leone',
    code: 'SLL',
  },
  {
    description: 'Somali Shilling',
    code: 'SOS',
  },
  {
    description: 'Surinamese Dollar',
    code: 'SRD',
  },
  {
    description: 'South Sudanese Pound',
    code: 'SSP',
  },
  {
    description: 'São Tomé and Príncipe Dobra (pre-2018)',
    code: 'STD',
  },
  {
    description: 'São Tomé and Príncipe Dobra',
    code: 'STN',
  },
  {
    description: 'Salvadoran Colón',
    code: 'SVC',
  },
  {
    description: 'Syrian Pound',
    code: 'SYP',
  },
  {
    description: 'Swazi Lilangeni',
    code: 'SZL',
  },
  {
    description: 'Thai Baht',
    code: 'THB',
  },
  {
    description: 'Tajikistani Somoni',
    code: 'TJS',
  },
  {
    description: 'Turkmenistani Manat',
    code: 'TMT',
  },
  {
    description: 'Tunisian Dinar',
    code: 'TND',
  },
  {
    description: "Tongan Pa'anga",
    code: 'TOP',
  },
  {
    description: 'Turkish Lira',
    code: 'TRY',
  },
  {
    description: 'Trinidad and Tobago Dollar',
    code: 'TTD',
  },
  {
    description: 'New Taiwan Dollar',
    code: 'TWD',
  },
  {
    description: 'Tanzanian Shilling',
    code: 'TZS',
  },
  {
    description: 'Ukrainian Hryvnia',
    code: 'UAH',
  },
  {
    description: 'Ugandan Shilling',
    code: 'UGX',
  },
  {
    description: 'United States Dollar',
    code: 'USD',
  },
  {
    description: 'Uruguayan Peso',
    code: 'UYU',
  },
  {
    description: 'Uzbekistan Som',
    code: 'UZS',
  },
  {
    description: 'Venezuelan Bolívar Fuerte (Old)',
    code: 'VEF',
  },
  {
    description: 'Venezuelan Bolívar Soberano',
    code: 'VES',
  },
  {
    description: 'Vietnamese Dong',
    code: 'VND',
  },
  {
    description: 'Vanuatu Vatu',
    code: 'VUV',
  },
  {
    description: 'Samoan Tala',
    code: 'WST',
  },
  {
    description: 'CFA Franc BEAC',
    code: 'XAF',
  },
  {
    description: 'Silver Ounce',
    code: 'XAG',
  },
  {
    description: 'Gold Ounce',
    code: 'XAU',
  },
  {
    description: 'East Caribbean Dollar',
    code: 'XCD',
  },
  {
    description: 'Special Drawing Rights',
    code: 'XDR',
  },
  {
    description: 'CFA Franc BCEAO',
    code: 'XOF',
  },
  {
    description: 'Palladium Ounce',
    code: 'XPD',
  },
  {
    description: 'CFP Franc',
    code: 'XPF',
  },
  {
    description: 'Platinum Ounce',
    code: 'XPT',
  },
  {
    description: 'Yemeni Rial',
    code: 'YER',
  },
  {
    description: 'South African Rand',
    code: 'ZAR',
  },
  {
    description: 'Zambian Kwacha',
    code: 'ZMW',
  },
  {
    description: 'Zimbabwean Dollar',
    code: 'ZWL',
  },
];

export const mockedSymbolApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  symbols: {
    AED: {
      description: 'United Arab Emirates Dirham',
      code: 'AED',
    },
    AFN: {
      description: 'Afghan Afghani',
      code: 'AFN',
    },
    ALL: {
      description: 'Albanian Lek',
      code: 'ALL',
    },
    AMD: {
      description: 'Armenian Dram',
      code: 'AMD',
    },
    ANG: {
      description: 'Netherlands Antillean Guilder',
      code: 'ANG',
    },
    AOA: {
      description: 'Angolan Kwanza',
      code: 'AOA',
    },
    ARS: {
      description: 'Argentine Peso',
      code: 'ARS',
    },
    AUD: {
      description: 'Australian Dollar',
      code: 'AUD',
    },
    AWG: {
      description: 'Aruban Florin',
      code: 'AWG',
    },
    AZN: {
      description: 'Azerbaijani Manat',
      code: 'AZN',
    },
    BAM: {
      description: 'Bosnia-Herzegovina Convertible Mark',
      code: 'BAM',
    },
    BBD: {
      description: 'Barbadian Dollar',
      code: 'BBD',
    },
    BDT: {
      description: 'Bangladeshi Taka',
      code: 'BDT',
    },
    BGN: {
      description: 'Bulgarian Lev',
      code: 'BGN',
    },
    BHD: {
      description: 'Bahraini Dinar',
      code: 'BHD',
    },
    BIF: {
      description: 'Burundian Franc',
      code: 'BIF',
    },
    BMD: {
      description: 'Bermudan Dollar',
      code: 'BMD',
    },
    BND: {
      description: 'Brunei Dollar',
      code: 'BND',
    },
    BOB: {
      description: 'Bolivian Boliviano',
      code: 'BOB',
    },
    BRL: {
      description: 'Brazilian Real',
      code: 'BRL',
    },
    BSD: {
      description: 'Bahamian Dollar',
      code: 'BSD',
    },
    BTC: {
      description: 'Bitcoin',
      code: 'BTC',
    },
    BTN: {
      description: 'Bhutanese Ngultrum',
      code: 'BTN',
    },
    BWP: {
      description: 'Botswanan Pula',
      code: 'BWP',
    },
    BYN: {
      description: 'Belarusian Ruble',
      code: 'BYN',
    },
    BZD: {
      description: 'Belize Dollar',
      code: 'BZD',
    },
    CAD: {
      description: 'Canadian Dollar',
      code: 'CAD',
    },
    CDF: {
      description: 'Congolese Franc',
      code: 'CDF',
    },
    CHF: {
      description: 'Swiss Franc',
      code: 'CHF',
    },
    CLF: {
      description: 'Chilean Unit of Account (UF)',
      code: 'CLF',
    },
    CLP: {
      description: 'Chilean Peso',
      code: 'CLP',
    },
    CNH: {
      description: 'Chinese Yuan (Offshore)',
      code: 'CNH',
    },
    CNY: {
      description: 'Chinese Yuan',
      code: 'CNY',
    },
    COP: {
      description: 'Colombian Peso',
      code: 'COP',
    },
    CRC: {
      description: 'Costa Rican Colón',
      code: 'CRC',
    },
    CUC: {
      description: 'Cuban Convertible Peso',
      code: 'CUC',
    },
    CUP: {
      description: 'Cuban Peso',
      code: 'CUP',
    },
    CVE: {
      description: 'Cape Verdean Escudo',
      code: 'CVE',
    },
    CZK: {
      description: 'Czech Republic Koruna',
      code: 'CZK',
    },
    DJF: {
      description: 'Djiboutian Franc',
      code: 'DJF',
    },
    DKK: {
      description: 'Danish Krone',
      code: 'DKK',
    },
    DOP: {
      description: 'Dominican Peso',
      code: 'DOP',
    },
    DZD: {
      description: 'Algerian Dinar',
      code: 'DZD',
    },
    EGP: {
      description: 'Egyptian Pound',
      code: 'EGP',
    },
    ERN: {
      description: 'Eritrean Nakfa',
      code: 'ERN',
    },
    ETB: {
      description: 'Ethiopian Birr',
      code: 'ETB',
    },
    EUR: {
      description: 'Euro',
      code: 'EUR',
    },
    FJD: {
      description: 'Fijian Dollar',
      code: 'FJD',
    },
    FKP: {
      description: 'Falkland Islands Pound',
      code: 'FKP',
    },
    GBP: {
      description: 'British Pound Sterling',
      code: 'GBP',
    },
    GEL: {
      description: 'Georgian Lari',
      code: 'GEL',
    },
    GGP: {
      description: 'Guernsey Pound',
      code: 'GGP',
    },
    GHS: {
      description: 'Ghanaian Cedi',
      code: 'GHS',
    },
    GIP: {
      description: 'Gibraltar Pound',
      code: 'GIP',
    },
    GMD: {
      description: 'Gambian Dalasi',
      code: 'GMD',
    },
    GNF: {
      description: 'Guinean Franc',
      code: 'GNF',
    },
    GTQ: {
      description: 'Guatemalan Quetzal',
      code: 'GTQ',
    },
    GYD: {
      description: 'Guyanaese Dollar',
      code: 'GYD',
    },
    HKD: {
      description: 'Hong Kong Dollar',
      code: 'HKD',
    },
    HNL: {
      description: 'Honduran Lempira',
      code: 'HNL',
    },
    HRK: {
      description: 'Croatian Kuna',
      code: 'HRK',
    },
    HTG: {
      description: 'Haitian Gourde',
      code: 'HTG',
    },
    HUF: {
      description: 'Hungarian Forint',
      code: 'HUF',
    },
    IDR: {
      description: 'Indonesian Rupiah',
      code: 'IDR',
    },
    ILS: {
      description: 'Israeli New Sheqel',
      code: 'ILS',
    },
    IMP: {
      description: 'Manx pound',
      code: 'IMP',
    },
    INR: {
      description: 'Indian Rupee',
      code: 'INR',
    },
    IQD: {
      description: 'Iraqi Dinar',
      code: 'IQD',
    },
    IRR: {
      description: 'Iranian Rial',
      code: 'IRR',
    },
    ISK: {
      description: 'Icelandic Króna',
      code: 'ISK',
    },
    JEP: {
      description: 'Jersey Pound',
      code: 'JEP',
    },
    JMD: {
      description: 'Jamaican Dollar',
      code: 'JMD',
    },
    JOD: {
      description: 'Jordanian Dinar',
      code: 'JOD',
    },
    JPY: {
      description: 'Japanese Yen',
      code: 'JPY',
    },
    KES: {
      description: 'Kenyan Shilling',
      code: 'KES',
    },
    KGS: {
      description: 'Kyrgystani Som',
      code: 'KGS',
    },
    KHR: {
      description: 'Cambodian Riel',
      code: 'KHR',
    },
    KMF: {
      description: 'Comorian Franc',
      code: 'KMF',
    },
    KPW: {
      description: 'North Korean Won',
      code: 'KPW',
    },
    KRW: {
      description: 'South Korean Won',
      code: 'KRW',
    },
    KWD: {
      description: 'Kuwaiti Dinar',
      code: 'KWD',
    },
    KYD: {
      description: 'Cayman Islands Dollar',
      code: 'KYD',
    },
    KZT: {
      description: 'Kazakhstani Tenge',
      code: 'KZT',
    },
    LAK: {
      description: 'Laotian Kip',
      code: 'LAK',
    },
    LBP: {
      description: 'Lebanese Pound',
      code: 'LBP',
    },
    LKR: {
      description: 'Sri Lankan Rupee',
      code: 'LKR',
    },
    LRD: {
      description: 'Liberian Dollar',
      code: 'LRD',
    },
    LSL: {
      description: 'Lesotho Loti',
      code: 'LSL',
    },
    LYD: {
      description: 'Libyan Dinar',
      code: 'LYD',
    },
    MAD: {
      description: 'Moroccan Dirham',
      code: 'MAD',
    },
    MDL: {
      description: 'Moldovan Leu',
      code: 'MDL',
    },
    MGA: {
      description: 'Malagasy Ariary',
      code: 'MGA',
    },
    MKD: {
      description: 'Macedonian Denar',
      code: 'MKD',
    },
    MMK: {
      description: 'Myanma Kyat',
      code: 'MMK',
    },
    MNT: {
      description: 'Mongolian Tugrik',
      code: 'MNT',
    },
    MOP: {
      description: 'Macanese Pataca',
      code: 'MOP',
    },
    MRO: {
      description: 'Mauritanian Ouguiya (pre-2018)',
      code: 'MRO',
    },
    MRU: {
      description: 'Mauritanian Ouguiya',
      code: 'MRU',
    },
    MUR: {
      description: 'Mauritian Rupee',
      code: 'MUR',
    },
    MVR: {
      description: 'Maldivian Rufiyaa',
      code: 'MVR',
    },
    MWK: {
      description: 'Malawian Kwacha',
      code: 'MWK',
    },
    MXN: {
      description: 'Mexican Peso',
      code: 'MXN',
    },
    MYR: {
      description: 'Malaysian Ringgit',
      code: 'MYR',
    },
    MZN: {
      description: 'Mozambican Metical',
      code: 'MZN',
    },
    NAD: {
      description: 'Namibian Dollar',
      code: 'NAD',
    },
    NGN: {
      description: 'Nigerian Naira',
      code: 'NGN',
    },
    NIO: {
      description: 'Nicaraguan Córdoba',
      code: 'NIO',
    },
    NOK: {
      description: 'Norwegian Krone',
      code: 'NOK',
    },
    NPR: {
      description: 'Nepalese Rupee',
      code: 'NPR',
    },
    NZD: {
      description: 'New Zealand Dollar',
      code: 'NZD',
    },
    OMR: {
      description: 'Omani Rial',
      code: 'OMR',
    },
    PAB: {
      description: 'Panamanian Balboa',
      code: 'PAB',
    },
    PEN: {
      description: 'Peruvian Nuevo Sol',
      code: 'PEN',
    },
    PGK: {
      description: 'Papua New Guinean Kina',
      code: 'PGK',
    },
    PHP: {
      description: 'Philippine Peso',
      code: 'PHP',
    },
    PKR: {
      description: 'Pakistani Rupee',
      code: 'PKR',
    },
    PLN: {
      description: 'Polish Zloty',
      code: 'PLN',
    },
    PYG: {
      description: 'Paraguayan Guarani',
      code: 'PYG',
    },
    QAR: {
      description: 'Qatari Rial',
      code: 'QAR',
    },
    RON: {
      description: 'Romanian Leu',
      code: 'RON',
    },
    RSD: {
      description: 'Serbian Dinar',
      code: 'RSD',
    },
    RUB: {
      description: 'Russian Ruble',
      code: 'RUB',
    },
    RWF: {
      description: 'Rwandan Franc',
      code: 'RWF',
    },
    SAR: {
      description: 'Saudi Riyal',
      code: 'SAR',
    },
    SBD: {
      description: 'Solomon Islands Dollar',
      code: 'SBD',
    },
    SCR: {
      description: 'Seychellois Rupee',
      code: 'SCR',
    },
    SDG: {
      description: 'Sudanese Pound',
      code: 'SDG',
    },
    SEK: {
      description: 'Swedish Krona',
      code: 'SEK',
    },
    SGD: {
      description: 'Singapore Dollar',
      code: 'SGD',
    },
    SHP: {
      description: 'Saint Helena Pound',
      code: 'SHP',
    },
    SLL: {
      description: 'Sierra Leonean Leone',
      code: 'SLL',
    },
    SOS: {
      description: 'Somali Shilling',
      code: 'SOS',
    },
    SRD: {
      description: 'Surinamese Dollar',
      code: 'SRD',
    },
    SSP: {
      description: 'South Sudanese Pound',
      code: 'SSP',
    },
    STD: {
      description: 'São Tomé and Príncipe Dobra (pre-2018)',
      code: 'STD',
    },
    STN: {
      description: 'São Tomé and Príncipe Dobra',
      code: 'STN',
    },
    SVC: {
      description: 'Salvadoran Colón',
      code: 'SVC',
    },
    SYP: {
      description: 'Syrian Pound',
      code: 'SYP',
    },
    SZL: {
      description: 'Swazi Lilangeni',
      code: 'SZL',
    },
    THB: {
      description: 'Thai Baht',
      code: 'THB',
    },
    TJS: {
      description: 'Tajikistani Somoni',
      code: 'TJS',
    },
    TMT: {
      description: 'Turkmenistani Manat',
      code: 'TMT',
    },
    TND: {
      description: 'Tunisian Dinar',
      code: 'TND',
    },
    TOP: {
      description: "Tongan Pa'anga",
      code: 'TOP',
    },
    TRY: {
      description: 'Turkish Lira',
      code: 'TRY',
    },
    TTD: {
      description: 'Trinidad and Tobago Dollar',
      code: 'TTD',
    },
    TWD: {
      description: 'New Taiwan Dollar',
      code: 'TWD',
    },
    TZS: {
      description: 'Tanzanian Shilling',
      code: 'TZS',
    },
    UAH: {
      description: 'Ukrainian Hryvnia',
      code: 'UAH',
    },
    UGX: {
      description: 'Ugandan Shilling',
      code: 'UGX',
    },
    USD: {
      description: 'United States Dollar',
      code: 'USD',
    },
    UYU: {
      description: 'Uruguayan Peso',
      code: 'UYU',
    },
    UZS: {
      description: 'Uzbekistan Som',
      code: 'UZS',
    },
    VEF: {
      description: 'Venezuelan Bolívar Fuerte (Old)',
      code: 'VEF',
    },
    VES: {
      description: 'Venezuelan Bolívar Soberano',
      code: 'VES',
    },
    VND: {
      description: 'Vietnamese Dong',
      code: 'VND',
    },
    VUV: {
      description: 'Vanuatu Vatu',
      code: 'VUV',
    },
    WST: {
      description: 'Samoan Tala',
      code: 'WST',
    },
    XAF: {
      description: 'CFA Franc BEAC',
      code: 'XAF',
    },
    XAG: {
      description: 'Silver Ounce',
      code: 'XAG',
    },
    XAU: {
      description: 'Gold Ounce',
      code: 'XAU',
    },
    XCD: {
      description: 'East Caribbean Dollar',
      code: 'XCD',
    },
    XDR: {
      description: 'Special Drawing Rights',
      code: 'XDR',
    },
    XOF: {
      description: 'CFA Franc BCEAO',
      code: 'XOF',
    },
    XPD: {
      description: 'Palladium Ounce',
      code: 'XPD',
    },
    XPF: {
      description: 'CFP Franc',
      code: 'XPF',
    },
    XPT: {
      description: 'Platinum Ounce',
      code: 'XPT',
    },
    YER: {
      description: 'Yemeni Rial',
      code: 'YER',
    },
    ZAR: {
      description: 'South African Rand',
      code: 'ZAR',
    },
    ZMW: {
      description: 'Zambian Kwacha',
      code: 'ZMW',
    },
    ZWL: {
      description: 'Zimbabwean Dollar',
      code: 'ZWL',
    },
  },
};

export const mockedConvertApiResponse: ApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  query: {
    from: 'BRL',
    to: 'USD',
    amount: 100,
  },
  info: {
    rate: 0.197545,
  },
  historical: false,
  date: '2023-01-27',
  result: 19.75448,
};

export const mockedConvertHigherApiResponse: ApiResponse = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  query: {
    from: 'BRL',
    to: 'USD',
    amount: 110000,
  },
  info: {
    rate: 0.197545,
  },
  historical: false,
  date: '2023-01-27',
  result: 19.75448,
};

export const mockedConverResult: ConvertResult = {
  rate: 0.197545,
  amount: 100,
  date: new Date().toLocaleDateString('pt-BR'),
  time: new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }),
  finalCurrency: 'USD',
  originCurrency: 'BRL',
  result: 19.75448,
  higherValue: false,
};
