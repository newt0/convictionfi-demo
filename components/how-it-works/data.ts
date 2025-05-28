import type { Step } from "./types";

// Sample data - replace with your actual content
const steps: Step[] = [
  {
    id: 1,
    title: "Choose & Mint",
    subtitle:
      "You select a trading thesis—like staking $SUI or holding $BTC—and mint an NFT agent. Your conviction is now on-chain. From this point on, the agent acts on your behalf, no setup or dashboards required.",
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
    title: "Initialize & Deploy",
    subtitle:
      "The NFT creates a smart wallet and deposits the full mint amount. It loads strategy logic from Walrus and is deployed via Sui Agent Kit. From here, the autonomous agent is ready to operate without intervention.",
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
    title: "Trade & Report",
    subtitle:
      "The agent trades based on strategy and market signals. Key updates—wallet balance, trade logs, and performance—are posted on Twitter. Each post invites social engagement, turning transparency into organic growth.",
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
    subtitle:
      "Agents evolve as strategy metadata is updated via Walrus. Logic adapts, but conviction remains fixed. While the system learns and adjusts over time, the original belief minted into the NFT stays untouched.",
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
    subtitle:
      "Most agents exit automatically via triggers or time locks. But users can still intervene—selling the NFT or requesting a refund if allowed. The belief defines the path, but user agency remains intact throughout.",
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
