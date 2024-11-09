// components/sidebar.tsx
"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeToggle } from "./theme-toggle"
import {
    ChevronLeft,
    ChevronRight,
    Menu,
    Bot,
    Palette,
    Code,
    Music,
    // Calculator,
    GamepadIcon,
    Timer,
    DollarSign,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

const routes = [
    {
        group: "AI Tools",
        icon: Bot,
        routes: [
            { label: "AI Chat", href: "/ai-chat" },
            { label: "AI Writer", href: "/ai-writer" },
            { label: "AI Image Generator", href: "/ai-image-generator" },
            { label: "AI Voice Assistant", href: "/ai-voice-assistant" },
            { label: "AI Transcriber", href: "/ai-transcriber" },
            { label: "AI Language Translator", href: "/ai-language-translator" },
        ],
    },
    {
        group: "Design",
        icon: Palette,
        routes: [
            { label: "Logo Generator", href: "/logo-generator" },
            { label: "Color Palette Generator", href: "/color-palette" },
            { label: "Font Pairing Generator", href: "/font-pairing" },
            { label: "Golden Ratio Calculator", href: "/golden-ratio" },
            { label: "RGB to HEX Converter", href: "/rgb-hex" },
            { label: "Pixel Art Creator", href: "/pixel-art" },
            { label: "Color Contrast Checker", href: "/contrast-checker" },
            { label: "Mockup Generator", href: "/mockup-generator" },
            { label: "3D Model Viewer", href: "/3d-model-viewer" },
            { label: "SVG Optimizer", href: "/svg-optimizer" },
        ],
    },
    {
        group: "Development",
        icon: Code,
        routes: [
            { label: "UUID Generator", href: "/uuid" },
            { label: "Epoch Timestamp", href: "/epoch" },
            { label: "JSON Formatter", href: "/json" },
            { label: "Markdown Editor", href: "/markdown" },
            { label: "Responsive Testing", href: "/responsive" },
            { label: "Lorem Ipsum", href: "/lorem-ipsum" },
            { label: "Code Minifier", href: "/minifier" },
            { label: "Base64 Encoder", href: "/base64" },
            { label: "Code Beautifier", href: "/beautifier" },
            { label: "Regular Expression Tester", href: "/regex-tester" },
            { label: "API Tester", href: "/api-tester" },
            { label: "GitHub Repository Statistics", href: "/github-stats" },
        ],
    },
    {
        group: "Music",
        icon: Music,
        routes: [
            { label: "Guitar Tuner", href: "/guitar-tuner" },
            { label: "Chord Progression", href: "/chord-progression" },
            { label: "Metronome", href: "/metronome" },
            { label: "Scale Practice", href: "/scale-practice" },
            { label: "Perfect Pitch", href: "/perfect-pitch" },
            { label: "Interval Trainer", href: "/interval-trainer" },
            { label: "Sheet Music Generator", href: "/sheet-music-generator" },
            { label: "Drum Machine", href: "/drum-machine" },
            { label: "Music Theory Lessons", href: "/music-theory-lessons" },
        ],
    },
    {
        group: "Finance",
        icon: DollarSign,
        routes: [
            { label: "Compound Interest", href: "/compound-interest" },
            { label: "Savings Goal", href: "/savings-goal" },
            { label: "Bill Splitter", href: "/bill-splitter" },
            { label: "Currency Converter", href: "/currency-converter" },
            { label: "Loan Calculator", href: "/loan-calculator" },
            { label: "Expense Tracker", href: "/expense-tracker" },
        ],
    },
    {
        group: "Utilities",
        icon: Timer,
        routes: [
            { label: "Countdown Timer", href: "/timer" },
            { label: "Unit Converter", href: "/converter" },
            { label: "Password Generator", href: "/password" },
            { label: "Cryptography", href: "/crypto" },
            { label: "QR Code", href: "/qr-code" },
            { label: "Text Case", href: "/text-case" },
            { label: "Fourier Transform", href: "/fourier" },
            { label: "Word Count", href: "/word-count" },
            { label: "Weather Forecast", href: "/weather-forecast" },
            { label: "Barcode Generator", href: "/barcode-generator" },
            { label: "Digital Clock", href: "/digital-clock" },
        ],
    },
    {
        group: "Games",
        icon: GamepadIcon,
        routes: [
            { label: "Magic 8 Ball", href: "/magic-8-ball" },
            { label: "Snake", href: "/snake" },
            { label: "Tic Tac Toe", href: "/tic-tac-toe" },
            { label: "Dice Roller", href: "/dice" },
            { label: "Coin Flip", href: "/coin-flip" },
            { label: "Game of Life", href: "/game-of-life" },
            { label: "Sudoku Solver", href: "/sudoku-solver" },
            { label: "Chess Game", href: "/chess-game" },
            { label: "Memory Game", href: "/memory-game" },
        ],
    },
];

export function Sidebar({ className }: SidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [openGroups, setOpenGroups] = useState<string[]>([])

    const toggleGroup = (group: string) => {
        setOpenGroups(prev =>
            prev.includes(group)
                ? prev.filter(g => g !== group)
                : [...prev, group]
        )
    }

    return (
        <>
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden fixed left-4 top-4 z-40"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-80">
                    <SidebarContent
                        openGroups={openGroups}
                        toggleGroup={toggleGroup}
                        isCollapsed={false}
                    />
                </SheetContent>
            </Sheet>

            <div className={cn(
                "hidden md:flex relative border-r transition-all duration-300",
                isCollapsed ? "w-16" : "w-80",
                className
            )}>
                <div className="absolute right-[-20px] top-4 z-40">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="h-10 w-10 rounded-full bg-background border shadow-md"
                    >
                        {isCollapsed ? (
                            <ChevronRight className="h-4 w-4" />
                        ) : (
                            <ChevronLeft className="h-4 w-4" />
                        )}
                    </Button>
                </div>
                <SidebarContent
                    openGroups={openGroups}
                    toggleGroup={toggleGroup}
                    isCollapsed={isCollapsed}
                />
            </div>
        </>
    )
}

interface SidebarContentProps {
    openGroups: string[]
    toggleGroup: (group: string) => void
    isCollapsed: boolean
}

function SidebarContent({ openGroups, toggleGroup, isCollapsed }: SidebarContentProps) {
    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full w-full bg-background">
            <div className="px-3 py-2">
                <div className="flex items-center justify-between mb-2">
                    <h2 className={cn(
                        "text-lg font-semibold tracking-tight transition-all duration-300",
                        isCollapsed && "opacity-0"
                    )}>
                        Utilities
                    </h2>
                    {!isCollapsed && <ThemeToggle />}
                </div>
            </div>
            <ScrollArea className="flex-1 px-3">
                <div className="space-y-1">
                    {routes.map((group) => (
                        <Collapsible
                            key={group.group}
                            open={isCollapsed ? false : openGroups.includes(group.group)}
                            onOpenChange={() => !isCollapsed && toggleGroup(group.group)}
                        >
                            <CollapsibleTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start px-2",
                                        openGroups.includes(group.group) && "bg-muted"
                                    )}
                                >
                                    <group.icon className={cn(
                                        "h-5 w-5 mr-2",
                                        isCollapsed && "mr-0"
                                    )} />
                                    {!isCollapsed && (
                                        <>
                                            <span className="flex-1 text-left">{group.group}</span>
                                            <ChevronRight className={cn(
                                                "h-4 w-4 transition-transform",
                                                openGroups.includes(group.group) && "rotate-90"
                                            )} />
                                        </>
                                    )}
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-1">
                                {group.routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            "flex items-center w-full p-2 pl-9 text-sm font-medium rounded-lg hover:bg-muted transition-colors",
                                            pathname === route.href && "bg-muted text-primary"
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}