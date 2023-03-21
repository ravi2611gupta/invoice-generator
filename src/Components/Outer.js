import React, { useContext, useRef } from "react";
// import jsPDF from 'jspdf';
import Pdf from "react-to-pdf";
import AppContext from "../Context/AppContext";
import Form from "./Form";

const Outer = () => {
  const formRef = useRef(null);

  const context = useContext(AppContext);
  const { setCurrency } = context;

  const currency_list = [
    {name: "Afghan Afghani",code: "AFA",symbol: "؋",id: 1},
    {name: "Albanian Lek",code: "ALL",symbol: "Lek",id: 2},
    {name: "Algerian Dinar",code: "DZD",symbol: "دج",id: 3},
    {name: "Angolan Kwanza",code: "AOA",symbol: "Kz",id: 4},
    {name: "Argentine Peso",code: "ARS",symbol: "$",id: 5},
    {name: "Armenian Dram",code: "AMD",symbol: "֏",id: 6},
    {name: "Aruban Florin",code: "AWG",symbol: "ƒ",id: 7},
    {name: "Australian Dollar",code: "AUD",symbol: "$",id: 8},
    {name: "Azerbaijani Manat",code: "AZN",symbol: "m",id: 9},
    {name: "Bahamian Dollar",code: "BSD",symbol: "B$",id: 10},
    {name: "Bahraini Dinar",code: "BHD",symbol: ".د.ب",id: 11},
    {name: "Bangladeshi Taka",code: "BDT",symbol: "৳",id: 12},
    {name: "Barbadian Dollar",code: "BBD",symbol: "Bds$",id: 13},
    {name: "Belarusian Ruble",code: "BYR",symbol: "Br",id: 14},
    {name: "Belgian Franc",code: "BEF",symbol: "fr",id: 15},
    {name: "Belize Dollar",code: "BZD",symbol: "$",id: 16},
    {name: "Bermudan Dollar",code: "BMD",symbol: "$",id: 17},
    {name: "Bhutanese Ngultrum",code: "BTN",symbol: "Nu.",id: 18},
    {name: "Bitcoin",code: "BTC",symbol: "฿",id: 19},
    {name: "Bolivian Boliviano",code: "BOB",symbol: "Bs.",id: 20},
    {name: "Bosnia-Herzegovina Convertible Mark",code: "BAM",symbol: "KM",id: 21},
    {name: "Botswanan Pula",code: "BWP",symbol: "P",id: 22},
    {name: "Brazilian Real",code: "BRL",symbol: "R$",id: 23},
    {name: "British Pound Sterling",code: "GBP",symbol: "£",id: 24},
    {name: "Brunei Dollar",code: "BND",symbol: "B$",id: 25},
    {name: "Bulgarian Lev",code: "BGN",symbol: "Лв.",id: 26},
    {name: "Burundian Franc",code: "BIF",symbol: "FBu",id: 27},
    {name: "Cambodian Riel",code: "KHR",symbol: "KHR",id: 28},
    {name: "Canadian Dollar",code: "CAD",symbol: "$",id: 29},
    {name: "Cape Verdean Escudo",code: "CVE",symbol: "$",id: 30},
    {name: "Cayman Islands Dollar",code: "KYD",symbol: "$",id: 31},
    {name: "CFA Franc BCEAO",code: "XOF",symbol: "CFA",id: 32},
    {name: "CFA Franc BEAC",code: "XAF",symbol: "FCFA",id: 33},
    {name: "CFP Franc",code: "XPF",symbol: "₣",id: 34},
    {name: "Chilean Peso",code: "CLP",symbol: "$",id: 35},
    {name: "Chilean Unit of Account",code: "CLF",symbol: "CLF",id: 36},
    {name: "Chinese Yuan",code: "CNY",symbol: "¥",id: 37},
    {name: "Colombian Peso",code: "COP",symbol: "$",id: 38},
    {name: "Comorian Franc",code: "KMF",symbol: "CF",id: 39},
    {name: "Congolese Franc",code: "CDF",symbol: "FC",id: 40},
    {name: "Costa Rican Colón",code: "CRC",symbol: "₡",id: 41},
    {name: "Croatian Kuna",code: "HRK",symbol: "kn",id: 42},
    {name: "Cuban Convertible Peso",code: "CUC",symbol: "$, CUC",id: 43},
    {name: "Czech Republic Koruna",code: "CZK",symbol: "Kč",id: 44},
    {name: "Danish Krone",code: "DKK",symbol: "Kr.",id: 45},
    {name: "Djiboutian Franc",code: "DJF",symbol: "Fdj",id: 46},
    {name: "Dominican Peso",code: "DOP",symbol: "$",id: 47},
    {name: "East Caribbean Dollar",code: "XCD",symbol: "$",id: 48},
    {name: "Egyptian Pound",code: "EGP",symbol: "ج.م",id: 49},
    {name: "Eritrean Nakfa",code: "ERN",symbol: "Nfk",id: 50},
    {name: "Estonian Kroon",code: "EEK",symbol: "kr",id: 51},
    {name: "Ethiopian Birr",code: "ETB",symbol: "Nkf",id: 52},
    {name: "Euro",code: "EUR",symbol: "€",id: 53},
    {name: "Falkland Islands Pound",code: "FKP",symbol: "£",id: 54},
    {name: "Fijian Dollar",code: "FJD",symbol: "FJ$",id: 55},
    {name: "Gambian Dalasi",code: "GMD",symbol: "D",id: 56},
    {name: "Georgian Lari",code: "GEL",symbol: "ლ",id: 57},
    {name: "German Mark",code: "DEM",symbol: "DM",id: 58},
    {name: "Ghanaian Cedi",code: "GHS",symbol: "GH₵",id: 59},
    {name: "Gibraltar Pound",code: "GIP",symbol: "£",id: 60},
    {name: "Greek Drachma",code: "GRD",symbol: "₯, Δρχ, Δρ",id: 61},
    {name: "Guatemalan Quetzal",code: "GTQ",symbol: "Q",id: 62},
    {name: "Guinean Franc",code: "GNF",symbol: "FG",id: 63},
    {name: "Guyanaese Dollar",code: "GYD",symbol: "$",id: 64},
    {name: "Haitian Gourde",code: "HTG",symbol: "G",id: 65},
    {name: "Honduran Lempira",code: "HNL",symbol: "L",id: 66},
    {name: "Hong Kong Dollar",code: "HKD",symbol: "$",id: 67},
    {name: "Hungarian Forint",code: "HUF",symbol: "Ft",id: 68},
    {name: "Icelandic Króna",code: "ISK",symbol: "kr",id: 69},
    {name: "Indian Rupee",code: "INR",symbol: "₹",id: 70},
    {name: "Indonesian Rupiah",code: "IDR",symbol: "Rp",id: 71},
    {name: "Iranian Rial",code: "IRR",symbol: "﷼",id: 72},
    {name: "Iraqi Dinar",code: "IQD",symbol: "د.ع",id: 73},
    {name: "Israeli New Sheqel",code: "ILS",symbol: "₪",id: 74},
    {name: "Italian Lira",code: "ITL",symbol: "L,£",id: 75},
    {name: "Jamaican Dollar",code: "JMD",symbol: "J$",id: 76},
    {name: "Japanese Yen",code: "JPY",symbol: "¥",id: 77},
    {name: "Jordanian Dinar",code: "JOD",symbol: "ا.د",id: 78},
    {name: "Kazakhstani Tenge",code: "KZT",symbol: "лв",id: 79},
    {name: "Kenyan Shilling",code: "KES",symbol: "KSh",id: 80},
    {name: "Kuwaiti Dinar",code: "KWD",symbol: "ك.د",id: 81},
    {name: "Kyrgystani Som",code: "KGS",symbol: "лв",id: 82},
    {name: "Laotian Kip",code: "LAK",symbol: "₭",id: 83},
    {name: "Latvian Lats",code: "LVL",symbol: "Ls",id: 84},
    {name: "Lebanese Pound",code: "LBP",symbol: "£",id: 85},
    {name: "Lesotho Loti",code: "LSL",symbol: "L",id: 86},
    {name: "Liberian Dollar",code: "LRD",symbol: "$",id: 87},
    {name: "Libyan Dinar",code: "LYD",symbol: "د.ل",id: 88},
    {name: "Litecoin",code: "LTC",symbol: "Ł",id: 89},
    {name: "Lithuanian Litas",code: "LTL",symbol: "Lt",id: 90},
    {name: "Macanese Pataca",code: "MOP",symbol: "$",id: 91},
    {name: "Macedonian Denar",code: "MKD",symbol: "ден",id: 92},
    {name: "Malagasy Ariary",code: "MGA",symbol: "Ar",id: 93},
    {name: "Malawian Kwacha",code: "MWK",symbol: "MK",id: 94},
    {name: "Malaysian Ringgit",code: "MYR",symbol: "RM",id: 95},
    {name: "Maldivian Rufiyaa",code: "MVR",symbol: "Rf",id: 96},
    {name: "Mauritanian Ouguiya",code: "MRO",symbol: "MRU",id: 97},
    {name: "Mauritian Rupee",code: "MUR",symbol: "₨",id: 98},
    {name: "Mexican Peso",code: "MXN",symbol: "$",id: 99},
    {name: "Moldovan Leu",code: "MDL",symbol: "L",id: 100},
    {name: "Mongolian Tugrik",code: "MNT",symbol: "₮",id: 101},
    {name: "Moroccan Dirham",code: "MAD",symbol: "MAD",id: 102},
    {name: "Mozambican Metical",code: "MZM",symbol: "MT",id: 103},
    {name: "Myanmar Kyat",code: "MMK",symbol: "K",id: 104},
    {name: "Namibian Dollar",code: "NAD",symbol: "$",id: 105},
    {name: "Nepalese Rupee",code: "NPR",symbol: "₨",id: 106},
    {name: "Netherlands Antillean Guilder",code: "ANG",symbol: "ƒ",id: 107},
    {name: "New Taiwan Dollar",code: "TWD",symbol: "$",id: 108},
    {name: "New Zealand Dollar",code: "NZD",symbol: "$",id: 109},
    {name: "Nicaraguan Córdoba",code: "NIO",symbol: "C$",id: 110},
    {name: "Nigerian Naira",code: "NGN",symbol: "₦",id: 111},
    {name: "North Korean Won",code: "KPW",symbol: "₩",id: 112},
    {name: "Norwegian Krone",code: "NOK",symbol: "kr",id: 113},
    {name: "Omani Rial",code: "OMR",symbol: ".ع.ر",id: 114},
    {name: "Pakistani Rupee",code: "PKR",symbol: "₨",id: 115},
    {name: "Panamanian Balboa",code: "PAB",symbol: "B/.",id: 116},
    {name: "Papua New Guinean Kina",code: "PGK",symbol: "K",id: 117},
    {name: "Paraguayan Guarani",code: "PYG",symbol: "₲",id: 118},
    {name: "Peruvian Nuevo Sol",code: "PEN",symbol: "S/.",id: 119},
    {name: "Philippine Peso",code: "PHP",symbol: "₱",id: 120},
    {name: "Polish Zloty",code: "PLN",symbol: "zł",id: 121},
    {name: "Qatari Rial",code: "QAR",symbol: "ق.ر",id: 122},
    {name: "Romanian Leu",code: "RON",symbol: "lei",id: 123},
    {name: "Russian Ruble",code: "RUB",symbol: "₽",id: 124},
    {name: "Rwandan Franc",code: "RWF",symbol: "FRw",id: 125},
    {name: "Salvadoran Colón",code: "SVC",symbol: "₡",id: 126},
    {name: "Samoan Tala",code: "WST",symbol: "SAT",id: 127},
    {name: "São Tomé and Príncipe Dobra",code: "STD",symbol: "Db",id: 128},
    {name: "Saudi Riyal",code: "SAR",symbol: "﷼",id: 129},
    {name: "Serbian Dinar",code: "RSD",symbol: "din",id: 130},
    {name: "Seychellois Rupee",code: "SCR",symbol: "SRe",id: 131},
    {name: "Sierra Leonean Leone",code: "SLL",symbol: "Le",id: 132},
    {name: "Singapore Dollar",code: "SGD",symbol: "$",id: 133},
    {name: "Slovak Koruna",code: "SKK",symbol: "Sk",id: 134},
    {name: "Solomon Islands Dollar",code: "SBD",symbol: "Si$",id: 135},
    {name: "Somali Shilling",code: "SOS",symbol: "Sh.so.",id: 136},
    {name: "South African Rand",code: "ZAR",symbol: "R",id: 137},
    {name: "South Korean Won",code: "KRW",symbol: "₩",id: 138},
    {name: "South Sudanese Pound",code: "SSP",symbol: "£",id: 139},
    {name: "Special Drawing Rights",code: "XDR",symbol: "SDR",id: 140},
    {name: "Sri Lankan Rupee",code: "LKR",symbol: "Rs",id: 141},
    {name: "St. Helena Pound",code: "SHP",symbol: "£",id: 142},
    {name: "Sudanese Pound",code: "SDG",symbol: ".س.ج",id: 143},
    {name: "Surinamese Dollar",code: "SRD",symbol: "$",id: 144},
    {name: "Swazi Lilangeni",code: "SZL",symbol: "E",id: 145},
    {name: "Swedish Krona",code: "SEK",symbol: "kr",id: 146},
    {name: "Swiss Franc",code: "CHF",symbol: "CHf",id: 147},
    {name: "Syrian Pound",code: "SYP",symbol: "LS",id: 148},
    {name: "Tajikistani Somoni",code: "TJS",symbol: "SM",id: 149},
    {name: "Tanzanian Shilling",code: "TZS",symbol: "TSh",id: 150},
    {name: "Thai Baht",code: "THB",symbol: "฿",id: 151},
    {name: "Tongan Pa'anga",code: "TOP",symbol: "$",id: 152},
    {name: "Trinidad & Tobago Dollar",code: "TTD",symbol: "$",id: 153},
    {name: "Tunisian Dinar",code: "TND",symbol: "ت.د",id: 154},
    {name: "Turkish Lira",code: "TRY",symbol: "₺",id: 155},
    {name: "Turkmenistani Manat",code: "TMT",symbol: "T",id: 156},
    {name: "Ugandan Shilling",code: "UGX",symbol: "USh",id: 157},
    {name: "Ukrainian Hryvnia",code: "UAH",symbol: "₴",id: 158},
    {name: "United Arab Emirates Dirham",code: "AED",symbol: "إ.د",id: 159},
    {name: "Uruguayan Peso",code: "UYU",symbol: "$",id: 160},
    {name: "US Dollar",code: "USD",symbol: "$",id: 161},
    {name: "Uzbekistan Som",code: "UZS",symbol: "лв",id: 162},
    {name: "Vanuatu Vatu",code: "VUV",symbol: "VT",id: 163},
    {name: "Venezuelan BolÃvar",code: "VEF",symbol: "Bs",id: 164},
    {name: "Vietnamese Dong",code: "VND",symbol: "₫",id: 165},
    {name: "Yemeni Rial",code: "YER",symbol: "﷼",id: 166},
    {name: "Zambian Kwacha",code: "ZMK",symbol: "ZK",id: 167},
    {name: "Zimbabwean dollar",code: "ZWL",symbol: "$",id: 168}
];

  return (
    <div className="min-h-screen w-10/12 flex justify-center pt-10">
      <div className="w-[62%]" ref={formRef}>
        <Form />
      </div>
      <div className="w-2/12 px-3">
        <Pdf targetRef={formRef} filename={`Gen-${Date.now()}.pdf`}>
          {({ toPdf }) => (
            <button
              className="h-10 px-5 w-full bg-violet-700 text-white rounded-md"
              onClick={toPdf}
            >
              Download Invoice
            </button>
          )}
        </Pdf>

        <div className="col-span-6 sm:col-span-3 mt-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Currency
          </label>
          <select
            id="country"
            name="country"
            onChange={(e)=> setCurrency(e.target.value)}
            className="block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {currency_list.map((data) => {
              return(
                <option key={data.id} value={data.symbol}>{data.name} - {data.code}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Outer;
