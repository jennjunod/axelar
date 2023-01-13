## Axelar & Ethers Examples

How to use the [AxelarJS SDK](https://docs.axelar.dev/dev/axelarjs-sdk/intro) and [Ethers.js](https://docs.ethers.org/v5/).

## Outline

- [Setup](#setup)
  - [Copy Environment Variable Example](#copy-environment-variable-example)
  - [Install Dependencies](#install-dependencies)
- [Commands](#commands)
  - [Get Deposit Address](#get-deposit-address)
  - [Get Estimate of Transfer Fees](#get-estimate-of-transfer-fees)
  - [Fetch NFTs](#fetch-nfts)

## Setup

### Copy Environment Variable Example

Go to [QuickNode](https://www.quicknode.com/), setup an Ethereum Mainnet node, and run the following command to copy the environment variable template.

```bash
cp .env.example .env
```

Set your QuickNode API URL to the environment variable in `.env`.

### Install Dependencies

```bash
npm i
```

## Commands

### Get Deposit Address

```bash
node getDepositAddress.js
```

```
axelar1qyfns43srq5llf2z96ukwa20lg84mtha3kqtwl2hrasas9922p8qeljw78
```

### Get Estimate of Transfer Fees

```bash
node getEstimateOfTransferFees.js
```

```js
{
  fee: {
    denom: 'uausdc',
    amount: '150000'
  }
}
```

### Fetch NFTs

```bash
node qn_fetchNFTs.js
```

```js
{
  owner: '0x91b51c173a4bdaa1a60e234fc3f705a16d228740',
  assets: [
    {
      name: 'Loopy Donuts #855',
      collectionTokenId: '855',
      collectionName: 'Loopy Donuts',
      imageUrl: 'https://quicknode.mypinata.cloud/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/855.png',
      collectionAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
      chain: 'ETH',
      network: 'mainnet',
      description: 'Loopy Donuts',
      currentOwner: '0x91b51c173a4bDAa1A60e234fC3f705A16D228740'
    },
    {
      name: 'Loopy Donuts #2979',
      collectionTokenId: '2979',
      collectionName: 'Loopy Donuts',
      imageUrl: 'https://quicknode.mypinata.cloud/ipfs/QmSNmVFTJv6cG9M8ZRU8T9F4Kz9HHxmV85ssGP5W8ZsTPa/2979.png',
      collectionAddress: '0x2106C00Ac7dA0A3430aE667879139E832307AeAa',
      chain: 'ETH',
      network: 'mainnet',
      description: 'Loopy Donuts',
      currentOwner: '0x91b51c173a4bDAa1A60e234fC3f705A16D228740'
    }
  ],
  totalItems: 28,
  totalPages: 3,
  pageNumber: 1
}
```