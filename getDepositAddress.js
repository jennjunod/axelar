// getDepositAddress.js

import {
    AxelarAssetTransfer
  } from "@axelar-network/axelarjs-sdk"
  
  const sdk = new AxelarAssetTransfer({
    environment: "testnet",
  })
  
  const depositAddress = await sdk.getDepositAddress(
    "kujira",                                     // source chain
    "avalanche",                                  // destination chain
    "0xF16DfB26e1FEc993E085092563ECFAEaDa7eD7fD", // destination address
    "uausdc"                                      // denom of asset. See note (2) below
  )
  
  console.log(depositAddress)
