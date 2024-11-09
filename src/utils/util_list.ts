interface UtilityApp {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  category: string;
}

export const utilityApps: UtilityApp[] = [
  // AI tools
  {
    id: "ai-chat",
    name: "AI Chat",
    description:
      "Interactive AI chat interface for real-time conversations with an AI chatbot.",
    icon: "🤖",
    path: "/ai-chat",
    category: "AI Tools",
  },
  {
    id: "ai-writer",
    name: "AI Writer",
    description:
      "Generate high-quality text content using advanced AI language models.",
    icon: "✍️",
    path: "/ai-writer",
    category: "AI Tools",
  },
  {
    id: "ai-image-generator",
    name: "AI Image Generator",
    description:
      "Create images from textual descriptions using AI-driven generative technology.",
    icon: "🖼️",
    path: "/ai-image-generator",
    category: "AI Tools",
  },
  {
    id: "ai-voice-assistant",
    name: "AI Voice Assistant",
    description:
      "Voice-enabled AI assistant for executing tasks and answering queries.",
    icon: "🎙️",
    path: "/ai-voice-assistant",
    category: "AI Tools",
  },
  {
    id: "ai-transcriber",
    name: "AI Transcriber",
    description:
      "Convert audio to text with high accuracy using AI transcription services.",
    icon: "📝",
    path: "/ai-transcriber",
    category: "AI Tools",
  },
  {
    id: "ai-language-translator",
    name: "AI Language Translator",
    description:
      "Translate text between multiple languages instantly with AI-powered translation.",
    icon: "🌐",
    path: "/ai-language-translator",
    category: "AI Tools",
  },
  // Design Category
  {
    id: "svg-optimizer",
    name: "SVG Optimizer",
    description:
      "Optimize and clean SVG files for enhanced web performance and reduced file sizes.",
    icon: "🎨",
    path: "/svg-optimizer",
    category: "Design",
  },
  {
    id: "logo-generator",
    name: "Logo Generator",
    description:
      "Create custom logos using a wide variety of templates and design tools.",
    icon: "📛",
    path: "/logo-generator",
    category: "Design",
  },
  {
    id: "color-palette",
    name: "Color Palette Generator",
    description:
      "Generate beautiful color palettes for your design projects, including complementary and triadic schemes.",
    icon: "🌈",
    path: "/color-palette",
    category: "Design",
  },
  {
    id: "font-pairing",
    name: "Font Pairing Generator",
    description:
      "Find the perfect font combinations for your text to enhance readability and aesthetics.",
    icon: "🔠",
    path: "/font-pairing",
    category: "Design",
  },
  {
    id: "mockup-generator",
    name: "Mockup Generator",
    description:
      "Generate realistic product mockups for visualizing designs on different surfaces.",
    icon: "📱",
    path: "/mockup-generator",
    category: "Design",
  },
  {
    id: "golden-ratio",
    name: "Golden Ratio Calculator",
    description:
      "Calculate the golden ratio for any given length, widely used in design and architecture for its aesthetic appeal.",
    icon: "📏",
    path: "/golden-ratio",
    category: "Design",
  },
  {
    id: "rgb-hex",
    name: "RGB to HEX Converter",
    description:
      "Convert RGB color values to HEX codes and vice versa for accurate color representation in digital design.",
    icon: "🎨",
    path: "/rgb-hex",
    category: "Design",
  },
  {
    id: "pixel-art",
    name: "Pixel Art Creator",
    description:
      "Design and create pixel art illustrations with a variety of tools and templates.",
    icon: "🖌️",
    path: "/pixel-art",
    category: "Design",
  },
  {
    id: "contrast-checker",
    name: "Color Contrast Checker",
    description:
      "Ensure text is readable by checking color contrast against WCAG standards.",
    icon: "🔍",
    path: "/contrast-checker",
    category: "Design",
  },
  {
    id: "3d-model-viewer",
    name: "3D Model Viewer",
    description:
      "View and interact with 3D models directly in your browser, supporting various file formats.",
    icon: "🖼️",
    path: "/3d-model-viewer",
    category: "Design",
  },

  // Development Category
  {
    id: "uuid",
    name: "UUID Generator",
    description:
      "Generate unique UUIDs for use in database keys, tracking, or other unique identifiers.",
    icon: "🔑",
    path: "/uuid",
    category: "Development",
  },
  {
    id: "json",
    name: "JSON Formatter",
    description:
      "Format and beautify JSON data for easier reading and troubleshooting.",
    icon: "📋",
    path: "/json",
    category: "Development",
  },
  {
    id: "minifier",
    name: "Code Minifier",
    description:
      "Minify JavaScript, CSS, and HTML files to improve performance by reducing file size.",
    icon: "⚙️",
    path: "/minifier",
    category: "Development",
  },
  {
    id: "api-tester",
    name: "API Tester",
    description:
      "Test and debug APIs directly in the browser to streamline development processes.",
    icon: "🛠️",
    path: "/api-tester",
    category: "Development",
  },
  {
    id: "epoch",
    name: "Epoch Timestamp",
    description:
      "Convert dates to epoch timestamps and vice versa for easier time calculations.",
    icon: "🕰️",
    path: "/epoch",
    category: "Development",
  },
  {
    id: "markdown",
    name: "Markdown Editor",
    description: "Write and preview Markdown content with real-time rendering.",
    icon: "✍️",
    path: "/markdown",
    category: "Development",
  },
  {
    id: "responsive",
    name: "Responsive Testing",
    description:
      "Test and visualize how your website looks on different devices and screen sizes.",
    icon: "📱",
    path: "/responsive",
    category: "Development",
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description:
      "Generate placeholder text for use in design mockups and prototypes.",
    icon: "📄",
    path: "/lorem-ipsum",
    category: "Development",
  },
  {
    id: "base64",
    name: "Base64 Encoder",
    description: "Encode and decode Base64 strings for data transmission.",
    icon: "🔢",
    path: "/base64",
    category: "Development",
  },
  {
    id: "beautifier",
    name: "Code Beautifier",
    description:
      "Beautify and format code to improve readability and maintainability.",
    icon: "🖌️",
    path: "/beautifier",
    category: "Development",
  },
  {
    id: "regex-tester",
    name: "Regular Expression Tester",
    description: "Test and debug regular expressions with real-time feedback.",
    icon: "🔍",
    path: "/regex-tester",
    category: "Development",
  },
  {
    id: "github-stats",
    name: "GitHub Repository Statistics",
    description:
      "View detailed statistics and insights for GitHub repositories.",
    icon: "📊",
    path: "/github-stats",
    category: "Development",
  },

  // Finance Category
  {
    id: "compound-interest",
    name: "Compound Interest Calculator",
    description:
      "Calculate compound interest on your investments or savings over time.",
    icon: "📈",
    path: "/compound-interest",
    category: "Finance",
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Convert currencies in real-time using up-to-date exchange rates.",
    icon: "💵",
    path: "/currency-converter",
    category: "Finance",
  },
  {
    id: "loan-calculator",
    name: "Loan Calculator",
    description:
      "Calculate monthly payments, interest, and principal on loans to help with financial planning.",
    icon: "💳",
    path: "/loan-calculator",
    category: "Finance",
  },
  {
    id: "savings-goal",
    name: "Savings Goal Calculator",
    description:
      "Set and track your savings goals over time to stay on top of your financial targets.",
    icon: "🏦",
    path: "/savings-goal",
    category: "Finance",
  },
  {
    id: "bill-splitter",
    name: "Bill Splitter",
    description:
      "Easily split bills and expenses among friends or family to ensure everyone pays their fair share.",
    icon: "💰",
    path: "/bill-splitter",
    category: "Finance",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description:
      "Track your daily expenses to better manage your budget and spending habits.",
    icon: "📝",
    path: "/expense-tracker",
    category: "Finance",
  },
  {
    id: "tax-calculator",
    name: "Tax Calculator",
    description:
      "Calculate your taxes based on income, deductions, and credits to ensure accurate financial planning.",
    icon: "📊",
    path: "/tax-calculator",
    category: "Finance",
  },
  {
    id: "investment-portfolio",
    name: "Investment Portfolio Manager",
    description:
      "Manage your investment portfolio, track performance, and analyze your holdings.",
    icon: "📈",
    path: "/investment-portfolio",
    category: "Finance",
  },
  {
    id: "budget-planner",
    name: "Budget Planner",
    description:
      "Create and manage a detailed budget to track your income and expenses effectively.",
    icon: "📝",
    path: "/budget-planner",
    category: "Finance",
  },
  {
    id: "retirement-savings",
    name: "Retirement Savings Calculator",
    description:
      "Calculate how much you need to save for a comfortable retirement based on your goals.",
    icon: "🏖️",
    path: "/retirement-savings",
    category: "Finance",
  },
  // Games Category
  {
    id: "sudoku",
    name: "Sudoku Solver",
    description:
      "Interactive Sudoku puzzle solver with multiple difficulty levels for users of all skill levels.",
    icon: "🎮",
    path: "/sudoku-solver",
    category: "Games",
  },
  {
    id: "magic-8-ball",
    name: "Magic 8 Ball",
    description:
      "Get random answers to yes or no questions with this classic decision-making game.",
    icon: "🎱",
    path: "/magic-8-ball",
    category: "Games",
  },
  {
    id: "snake",
    name: "Snake Game",
    description:
      "Classic Snake game where the player navigates to eat food and grow the snake while avoiding obstacles.",
    icon: "🐍",
    path: "/snake",
    category: "Games",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description:
      "Play the classic game of Tic Tac Toe against a computer or another player.",
    icon: "❌",
    path: "/tic-tac-toe",
    category: "Games",
  },
  {
    id: "dice",
    name: "Dice Roller",
    description:
      "Roll a dice for quick random results in games or decision making.",
    icon: "🎲",
    path: "/dice",
    category: "Games",
  },
  {
    id: "coin-flip",
    name: "Coin Flip",
    description: "Flip a virtual coin for quick decisions, heads or tails.",
    icon: "🪙",
    path: "/coin-flip",
    category: "Games",
  },
  {
    id: "game-of-life",
    name: "Game of Life",
    description:
      "Simulation of cellular automata following Conway’s rules for creating patterns and sequences.",
    icon: "🌐",
    path: "/game-of-life",
    category: "Games",
  },
  {
    id: "chess-game",
    name: "Chess Game",
    description:
      "Play a game of chess with options for beginner and advanced settings.",
    icon: "♟️",
    path: "/chess-game",
    category: "Games",
  },
  {
    id: "memory-game",
    name: "Memory Game",
    description:
      "Challenge your memory by matching pairs of cards in this interactive game.",
    icon: "🧠",
    path: "/memory-game",
    category: "Games",
  },

  {
    id: "guitar-tuner",
    name: "Guitar Tuner",
    description:
      "Accurate and easy-to-use guitar tuner for perfect tuning every time.",
    icon: "🎸",
    path: "/guitar-tuner",
    category: "Music",
  },
  {
    id: "chord-progression",
    name: "Chord Progression",
    description:
      "Explore different chord progressions to enhance your musical compositions.",
    icon: "🎶",
    path: "/chord-progression",
    category: "Music",
  },
  {
    id: "metronome",
    name: "Metronome",
    description:
      "Adjustable metronome to practice timing and rhythm at various tempos.",
    icon: "⏱️",
    path: "/metronome",
    category: "Music",
  },
  {
    id: "scale-practice",
    name: "Scale Practice",
    description:
      "Practice musical scales to improve your instrumental skills and theory knowledge.",
    icon: "🎼",
    path: "/scale-practice",
    category: "Music",
  },
  {
    id: "perfect-pitch",
    name: "Perfect Pitch",
    description:
      "Training tool to develop perfect pitch and enhance your musical ear.",
    icon: "🎧",
    path: "/perfect-pitch",
    category: "Music",
  },
  {
    id: "interval-trainer",
    name: "Interval Trainer",
    description:
      "Learn to identify musical intervals to improve your ear training.",
    icon: "🎵",
    path: "/interval-trainer",
    category: "Music",
  },
  {
    id: "sheet-music-generator",
    name: "Sheet Music Generator",
    description: "Generate sheet music from digital compositions or notations.",
    icon: "🎹",
    path: "/sheet-music-generator",
    category: "Music",
  },
  {
    id: "drum-machine",
    name: "Drum Machine",
    description:
      "Create drum patterns and practice rhythm with a digital drum machine.",
    icon: "🥁",
    path: "/drum-machine",
    category: "Music",
  },
  {
    id: "music-theory-lessons",
    name: "Music Theory Lessons",
    description:
      "Interactive music theory lessons to build a strong musical foundation.",
    icon: "📚",
    path: "/music-theory-lessons",
    category: "Music",
  },

  // Utilities Category
  {
    id: "timer",
    name: "Countdown Timer",
    description:
      "Set a countdown timer for tracking time limits or creating alarms.",
    icon: "⏳",
    path: "/timer",
    category: "Utilities",
  },
  {
    id: "converter",
    name: "Unit Converter",
    description:
      "Convert units across various categories like length, weight, and temperature.",
    icon: "🔄",
    path: "/converter",
    category: "Utilities",
  },
  {
    id: "password",
    name: "Password Generator",
    description:
      "Generate secure, random passwords for enhanced security and data protection.",
    icon: "🔒",
    path: "/password",
    category: "Utilities",
  },
  {
    id: "qr-code",
    name: "QR Code Generator",
    description:
      "Generate QR codes for sharing links, contact information, and more.",
    icon: "📱",
    path: "/qr-code",
    category: "Utilities",
  },
  {
    id: "word-count",
    name: "Word Count",
    description:
      "Count the words and characters in a given text to ensure readability or length limits.",
    icon: "📝",
    path: "/word-count",
    category: "Utilities",
  },
  {
    id: "digital-clock",
    name: "Digital Clock",
    description:
      "Displays the current time in a digital format, perfect for web dashboards or personal use.",
    icon: "⏰",
    path: "/digital-clock",
    category: "Utilities",
  },
];
