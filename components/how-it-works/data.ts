import type { Step } from "./types";

// Sample data - replace with your actual content
const steps: Step[] = [
  {
    id: 1,
    title: "Mint",
    subtitle:
      "Begin your journey by exploring our platform's features and capabilities. Our intuitive interface makes it easy to find exactly what you need, when you need it, without any unnecessary complexity.",
    description: [
      "Choose your trading thesis",
      "Set risk parameters",
      "Mint your NFT on Sui blockchain",
    ],
    image: "/placeholder.svg?height=600&width=500",
    imageAlt: "Minting conviction NFT",
  },
  {
    id: 2,
    title: "Deploy",
    subtitle: "Your NFT becomes a live DeFAI Agent",
    description: [
      "NFT is deployed as a smart contract wallet",
      "Agent receives funds and config",
      "Start autonomous execution",
    ],
    image: "/placeholder.svg?height=600&width=500",
    imageAlt: "Deploying DeFAI Agent",
  },
  {
    id: 3,
    title: "Trade",
    subtitle: "The agent trades 24/7 based on your encoded strategy.",
    description: [
      "Market monitoring via AI signals",
      "Real-time token swaps via DEX",
      "Risk-managed execution",
    ],
    image: "/placeholder.svg?height=600&width=500",
    imageAlt: "Autonomous crypto trading",
  },
  {
    id: 4,
    title: "Evolve",
    subtitle: "Agent evolves using Walrus decentralized memory.",
    description: [
      "Storage of trade history & performance",
      "Prompt updates via on-chain governance",
      "Zero-knowledge secure logs",
    ],
    image: "/placeholder.svg?height=600&width=500",
    imageAlt: "Evolving AI Agent",
  },
  {
    id: 5,
    title: "Exit",
    subtitle: "Withdraw profits or sell your evolved NFT.",
    description: [
      "Transfer or list the NFT",
      "Withdraw residual funds",
      "Keep or archive your evolved agent",
    ],
    image: "/placeholder.svg?height=600&width=500",
    imageAlt: "Exit strategy",
  },
];

export { steps };
