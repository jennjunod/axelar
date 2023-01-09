// qn_fetchNFTs.js

import ethers from "ethers"

(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://boldest-convincing-mound.discover.quiknode.pro/08566ae977504705359d988b326c9ee699063845/")

  const heads = await provider.send("qn_fetchNFTs", {
    wallet: "0x91b51c173a4bdaa1a60e234fc3f705a16d228740",
    omitFields: ["provenance", "traits"],
    page: 1,
    perPage: 10,
    contracts: [
      "0x2106c00ac7da0a3430ae667879139e832307aeaa",
      "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    ],
  })
  console.log(heads)
})()