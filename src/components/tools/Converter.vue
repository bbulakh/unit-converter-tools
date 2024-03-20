<template>
  <form class="p-[2rem]">
    <div class="flex flex-col">
      <label class="mb-3"
        >Enter Amount<input
          class="p-2 mt-2 border w-full rounded-md h-[50px]"
          type="number"
          v-model.number="amount"
      /></label>
      <div class="md:flex items-center justify-between gap-4">
        <label class="mb-3">
          From currency:
          <select
            class="p-2 w-full mt-2 border rounded-md h-[50px]"
            v-model="fromCurrency"
          >
            <option
              v-for="(name, code) in currencies"
              :key="code"
              :value="code"
            >
              {{ code }} - {{ name }}
            </option>
          </select>
        </label>
        <button
          class="my-3 md:mt-8 bg-accent md:rotate-90 w-10 h-10 flex items-center justify-center rounded"
          @click.prevent="swapCurrencies"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
        <label class="mb-3">
          To currency:
          <select
            class="p-2 mt-2 w-full border rounded-md h-[50px]"
            v-model="toCurrency"
          >
            <option
              v-for="(name, code) in currencies"
              :key="code"
              :value="code"
            >
              {{ code }} - {{ name }}
            </option>
          </select>
        </label>
      </div>

      <div class="my-3">
        <p class="text-xl">{{ result }}</p>
      </div>

      <div class="flex items-center md:w-[200px]  gap-3">
        <button
          class="w-full py-3 h-[50px] flex justify-center items-center text-center text-xl rounded-md bg-primary"
          @click.prevent="convert"
        >
          Convert
        </button>

        <div>
          <button
            class="w-[50px] h-[50px] flex items-center justify-center bg-accent rounded-md"
            @click.prevent="toggleDropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path
                  d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483m.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501m-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432z"
                />
                <path
                  d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"
                />
                <path
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"
                />
              </g>
            </svg>
          </button>
          <div class="relative">
            <ul
              class="bg-white *:border-b border max-w-[1000px] min-w-[200px] mx-auto rounded *:p-2 absolute z-10 right-0"
              :class="{ hidden: !showDropdown }"
            >
              <li
                class="last-of-type:border-none"
                v-for="(conversion, index) in historyStorage"
                :key="index"
              >
                {{ conversion.amount }} {{ conversion.fromCurrency }} =
                {{ conversion.convertedAmount }} {{ conversion.toCurrency }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fromCurrency: "USD",
      toCurrency: "RUB",
      amount: "",
      currencies: {
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        ALL: "Albanian Lek",
        AMD: "Armenian Dram",
        ANG: "Netherlands Antillean Guilder",
        AOA: "Angolan Kwanza",
        ARS: "Argentine Peso",
        AUD: "Australian Dollar",
        AWG: "Aruban Florin",
        AZN: "Azerbaijani Manat",
        BAM: "Bosnia-Herzegovina Convertible Mark",
        BBD: "Barbadian Dollar",
        BDT: "Bangladeshi Taka",
        BGN: "Bulgarian Lev",
        BHD: "Bahraini Dinar",
        BIF: "Burundian Franc",
        BMD: "Bermudan Dollar",
        BND: "Brunei Dollar",
        BOB: "Bolivian Boliviano",
        BRL: "Brazilian Real",
        BSD: "Bahamian Dollar",
        BTC: "Bitcoin",
        BTN: "Bhutanese Ngultrum",
        BWP: "Botswanan Pula",
        BYN: "Belarusian Ruble",
        BZD: "Belize Dollar",
        CAD: "Canadian Dollar",
        CDF: "Congolese Franc",
        CHF: "Swiss Franc",
        CLF: "Chilean Unit of Account (UF)",
        CLP: "Chilean Peso",
        CNH: "Chinese Yuan (Offshore)",
        CNY: "Chinese Yuan",
        COP: "Colombian Peso",
        CRC: "Costa Rican Colón",
        CUC: "Cuban Convertible Peso",
        CUP: "Cuban Peso",
        CVE: "Cape Verdean Escudo",
        CZK: "Czech Republic Koruna",
        DJF: "Djiboutian Franc",
        DKK: "Danish Krone",
        DOP: "Dominican Peso",
        DZD: "Algerian Dinar",
        EGP: "Egyptian Pound",
        ERN: "Eritrean Nakfa",
        ETB: "Ethiopian Birr",
        EUR: "Euro",
        FJD: "Fijian Dollar",
        FKP: "Falkland Islands Pound",
        GBP: "British Pound Sterling",
        GEL: "Georgian Lari",
        GGP: "Guernsey Pound",
        GHS: "Ghanaian Cedi",
        GIP: "Gibraltar Pound",
        GMD: "Gambian Dalasi",
        GNF: "Guinean Franc",
        GTQ: "Guatemalan Quetzal",
        GYD: "Guyanaese Dollar",
        HKD: "Hong Kong Dollar",
        HNL: "Honduran Lempira",
        HRK: "Croatian Kuna",
        HTG: "Haitian Gourde",
        HUF: "Hungarian Forint",
        IDR: "Indonesian Rupiah",
        ILS: "Israeli New Sheqel",
        IMP: "Manx pound",
        INR: "Indian Rupee",
        IQD: "Iraqi Dinar",
        IRR: "Iranian Rial",
        ISK: "Icelandic Króna",
        JEP: "Jersey Pound",
        JMD: "Jamaican Dollar",
        JOD: "Jordanian Dinar",
        JPY: "Japanese Yen",
        KES: "Kenyan Shilling",
        KGS: "Kyrgystani Som",
        KHR: "Cambodian Riel",
        KMF: "Comorian Franc",
        KPW: "North Korean Won",
        KRW: "South Korean Won",
        KWD: "Kuwaiti Dinar",
        KYD: "Cayman Islands Dollar",
        KZT: "Kazakhstani Tenge",
        LAK: "Laotian Kip",
        LBP: "Lebanese Pound",
        LKR: "Sri Lankan Rupee",
        LRD: "Liberian Dollar",
        LSL: "Lesotho Loti",
        LYD: "Libyan Dinar",
        MAD: "Moroccan Dirham",
        MDL: "Moldovan Leu",
        MGA: "Malagasy Ariary",
        MKD: "Macedonian Denar",
        MMK: "Myanma Kyat",
        MNT: "Mongolian Tugrik",
        MOP: "Macanese Pataca",
        MRU: "Mauritanian Ouguiya",
        MUR: "Mauritian Rupee",
        MVR: "Maldivian Rufiyaa",
        MWK: "Malawian Kwacha",
        MXN: "Mexican Peso",
        MYR: "Malaysian Ringgit",
        MZN: "Mozambican Metical",
        NAD: "Namibian Dollar",
        NGN: "Nigerian Naira",
        NIO: "Nicaraguan Córdoba",
        NOK: "Norwegian Krone",
        NPR: "Nepalese Rupee",
        NZD: "New Zealand Dollar",
        OMR: "Omani Rial",
        PAB: "Panamanian Balboa",
        PEN: "Peruvian Nuevo Sol",
        PGK: "Papua New Guinean Kina",
        PHP: "Philippine Peso",
        PKR: "Pakistani Rupee",
        PLN: "Polish Zloty",
        PYG: "Paraguayan Guarani",
        QAR: "Qatari Rial",
        RON: "Romanian Leu",
        RSD: "Serbian Dinar",
        RUB: "Russian Ruble",
        RWF: "Rwandan Franc",
        SAR: "Saudi Riyal",
        SBD: "Solomon Islands Dollar",
        SCR: "Seychellois Rupee",
        SDG: "Sudanese Pound",
        SEK: "Swedish Krona",
        SGD: "Singapore Dollar",
        SHP: "Saint Helena Pound",
        SLL: "Sierra Leonean Leone",
        SOS: "Somali Shilling",
        SRD: "Surinamese Dollar",
        SSP: "South Sudanese Pound",
        STD: "São Tomé and Príncipe Dobra (pre-2018)",
        STN: "São Tomé and Príncipe Dobra",
        SVC: "Salvadoran Colón",
        SYP: "Syrian Pound",
        SZL: "Swazi Lilangeni",
        THB: "Thai Baht",
        TJS: "Tajikistani Somoni",
        TMT: "Turkmenistani Manat",
        TND: "Tunisian Dinar",
        TOP: "Tongan Pa'anga",
        TRY: "Turkish Lira",
        TTD: "Trinidad and Tobago Dollar",
        TWD: "New Taiwan Dollar",
        TZS: "Tanzanian Shilling",
        UAH: "Ukrainian Hryvnia",
        UGX: "Ugandan Shilling",
        USD: "United States Dollar",
        UYU: "Uruguayan Peso",
        UZS: "Uzbekistan Som",
        VEF: "Venezuelan Bolívar Fuerte (Old)",
        VES: "Venezuelan Bolívar Soberano",
        VND: "Vietnamese Dong",
        VUV: "Vanuatu Vatu",
        WST: "Samoan Tala",
        XAF: "CFA Franc BEAC",
        XAG: "Silver Ounce",
        XAU: "Gold Ounce",
        XCD: "East Caribbean Dollar",
        XDR: "Special Drawing Rights",
        XOF: "CFA Franc BCEAO",
        XPD: "Palladium Ounce",
        XPF: "CFP Franc",
        XPT: "Platinum Ounce",
        YER: "Yemeni Rial",
        ZAR: "South African Rand",
        ZMW: "Zambian Kwacha",
        ZWL: "Zimbabwean Dollar",
      },
      exchangeRates: {},
      historyStorage: [],
      showDropdown: false,
    };
  },
  mounted() {
    this.fetchExchangeRates();
  },
  methods: {
    fetchExchangeRates() {
      fetch(
        "https://openexchangerates.org/api/latest.json?app_id=a606072adbd24f9eb49bffad5e6f402b"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response Error");
          }
          return response.json();
        })
        .then((data) => {
          this.exchangeRates = data.rates;
        })
        .catch((err) => alert(err));
    },
    swapCurrencies() {
      let temp = this.fromCurrency;
      this.fromCurrency = this.toCurrency;
      this.toCurrency = temp;
    },
    convert() {
      const convertedAmount =
        (this.amount * this.exchangeRates[this.toCurrency]) /
        this.exchangeRates[this.fromCurrency];
      this.result = `${this.toCurrency}: ${convertedAmount.toFixed(2)}`;

      const conversionDetails = {
        fromCurrency: this.fromCurrency,
        toCurrency: this.toCurrency,
        amount: this.amount,
        convertedAmount: convertedAmount.toFixed(2),
      };

      this.historyStorage.unshift(conversionDetails);
      this.updateDropdownList();
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    updateDropdownList() {
      if (this.historyStorage.length > 8) {
        this.historyStorage.pop();
      }
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

button {
  font-family: Koulen, Serif;
}
</style>
