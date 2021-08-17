const { version } = require("../package.json");
const harmonyMainnet = require("./tokens/harmony-mainnet.json");
const harmonyTestnet = require("./tokens/harmony-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "FuzzSwap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://d2ewbo85l33h8t.cloudfront.net/tokens/fuzzfinance.png",
    keywords: ["fuzzswap", "default"],
    tokens: [...harmonyMainnet, ...harmonyTestnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
