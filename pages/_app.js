import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = {
  chainId: 9398423,
  rpc: ["https://froopyland.dymension.xyz/5/kafirdym_9398423-1/evmrpc"],
  nativeCurrency: {
    decimals: 18,
    name: "KafirChain",
    symbol: "KFR",
  },
  shortName: "KFR",
  slug: "KafirChain",
  testnet: true,
  chain: "KafirChain",
  name: "KafirChain Testnet",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
