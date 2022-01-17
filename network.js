export default {
  id: 'cosmos-hub-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Encichain',
  description: 'Encichain is a decentralized philanthropic blockchain',
  logo: `encilogo.png`,
  website: 'https://example.com',
  apiURL: 'http://localhost:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'http://localhost:26657',
  stakingDenom: 'ENCI',
  coinLookup: [
    {
      viewDenom: 'ENCI',
      chainDenom: 'uenci',
      chainToViewConversionFactor: 1e-6,
      icon: `/_nuxt/assets/images/currencies/enci.png`,
    },
  ],
  addressPrefix: 'enci',
  validatorAddressPrefix: 'enci',
  validatorConsensusaddressPrefix: 'encivalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/564'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'ENCI',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `/favicon.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
