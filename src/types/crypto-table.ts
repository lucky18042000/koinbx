import { ReactNode } from "react";
import { MarketData } from "./market";

export interface CryptoTableProps {
    tableColumn: string[];
    data: MarketData[];
    children: ReactNode;
    loading?: boolean;
} 