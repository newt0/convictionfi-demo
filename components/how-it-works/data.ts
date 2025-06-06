import type { Step } from "./types";

// Sample data - replace with your actual content
const steps: Step[] = [
  {
    id: 1,
    title: "Mint",
    subtitle:
      "Mint an NFT, get an AI trader. Each NFT represents a trading philosophy (BTC_HODLER, SUI_MAXI etc.) with its own wallet. The AI executes trades automatically based on your chosen conviction.",
    description: [
      "Choose your conviction",
      "Select Mint Price",
      "Mint your NFT on Sui",
    ],
    image: "how-it-works/choose-and-mint.png",
    imageAlt: "Minting conviction NFT",
  },
  {
    id: 2,
    title: "NFT becomes AI Agent",
    subtitle:
      "Each minted NFT runs its own wallet and trades autonomously, using the mint amount as its budget. Strategy logic and AI prompts are stored as NFT metadata on Walrus.",
    description: [
      "Mint Price = Trading Budget",
      "NFT = Wallet + Signer + AI Agent",
      "AI Works on Walrus",
    ],
    image: "how-it-works/nft-becomes-ai-agent.png",
    imageAlt: "Deploying DeFAI Agent",
  },
  {
    id: 3,
    title: "Trade & Report",
    subtitle:
      "The agent trades based on strategy and market signals. Key updates—wallet balance, trade logs, and performance—are posted on Twitter. Each post invites social engagement, turning transparency into organic growth.",
    description: [
      "24/7 market monitoring by AI",
      "Autonomous trading execution",
      "Real-time updates reported via Twitter",
    ],
    image: "how-it-works/trade-and-report.png",
    imageAlt: "Autonomous crypto trading",
  },
  {
    id: 4,
    title: "Evolve",
    subtitle:
      "Agents evolve as strategy metadata is updated via Walrus. Logic adapts, but conviction remains fixed. While the system learns and adjusts over time, the original belief minted into the NFT stays untouched.",
    description: [
      "Strategy logic is updatable.",
      "Performance and user feedback drive continuous learning.",
      "Each strategy evolves and improves over time.",
    ],
    image: "how-it-works/learn-and-evolve.png",
    imageAlt: "Evolving AI Agent",
  },
  {
    id: 5,
    title: "Exit",
    subtitle:
      "Investing's hardest part is knowing when to exit—where AI should take over. ConvictionFi automatically exits based on preset triggers, sending proceeds to your wallet. No manual refund options to eliminate decision stress. Early exit available through NFT sales.",
    description: ["AUTO EXIT by AI", "MANUAL EXIT by selling NFT"],
    image: "how-it-works/exit-or-transfer.png",
    imageAlt: "Exit strategy",
  },
];

export { steps };
