"use client";
import { memo } from "react";
import { CryptoTableProps } from "@/types/crypto-table";

function CryptoTable({ tableColumn, children, loading }: CryptoTableProps) {
    if (loading) {
        return (
            <div className="w-full text-center py-10 text-gray-500 dark:text-gray-300">
                Loading...
            </div>
        );
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="min-w-full text-sm text-left whitespace-nowrap">
                <thead>
                    <tr className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {tableColumn.map((col) => (
                            <th key={col} className="px-4 md:px-6 py-3 whitespace-nowrap">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}

export default memo(CryptoTable)
