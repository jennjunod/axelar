// axelarQuery.js

import {
    AxelarQueryAPI, CHAINS, Environment
  } from "@axelar-network/axelarjs-sdk"
  
  async function main() {
    const axelarQuery = new AxelarQueryAPI({
      environment: Environment.TESTNET,
    })
  
    const fee = await axelarQuery.getTransferFee(
      CHAINS.TESTNET.KUJIRA,
      CHAINS.TESTNET.AVALANCHE,
      "uausdc",
      1000000
    )
    console.log(fee)
    return { fee: { denom: 'uausdc', amount: '150000' } }
  }
  
  main()