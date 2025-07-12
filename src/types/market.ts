export interface MarketData {
    pair: string;
    icon: string;
    price: number;
    change: number;
    listedAt: number;
    chart?: string; // URL or SVG for the per/day chart
} 