import { Wallet } from '@cosmos-kit/core';

export const trustMobileInfo: Wallet = {
  name: 'trust-mobile',
  prettyName: 'Trust Mobile',
  logo: 'https://trustwallet.com/assets/images/media/assets/TWT.png',
  mode: 'wallet-connect',
  mobileDisabled: false,
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'mobile',
      os: 'android',
      link: 'https://play.google.com/store/apps/details?id=com.chainapsis.trust&hl=en&gl=US&pli=1',
    },
    {
      device: 'mobile',
      os: 'ios',
      link: 'https://apps.apple.com/us/app/trust-wallet/id1567851089',
    },
    {
      link: 'https://www.trust.app/download',
    },
  ],
  connectEventNamesOnWindow: ['trust_keystorechange'],
  walletconnect: {
    name: 'Trust Wallet',
    projectId:
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
  },
};
