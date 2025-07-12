"use client";

import React, { useMemo, useState } from "react";
import CryptoTable from "@/components/CryptoTable";
import Navbar from "@/components/Navbar";
import { HotColumnData } from "@/constants/static";
import { MarketData } from "@/types/market";
import { useMarkets } from "@/hooks/useMarkets";
import Image from "next/image";

function Dashboard() {
    const [column] = useState(HotColumnData);
    const [activeTab, setActiveTab] = useState("Hot List");
    const { markets, isLoading } = useMarkets();
    console.log(markets, 'markets', isLoading);

    // TODO: Replace with real data from useMarkets
    const data: MarketData[] = markets;
    const now = Date.now();
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

    // filter data based on active tab
    const filteredData: MarketData[] = useMemo(() => {
        return data.filter((item) => {
            if (activeTab === "Hot List") return Math.abs(item.change) >= 3;
            if (activeTab === "New List") return item.listedAt * 1000 > oneWeekAgo;
            return true;
        })
    }, [activeTab, data, oneWeekAgo]);

    return (
        <div className="min-h-screen bg-white dark:bg-[#131932]">
            <Navbar />
            <div className="mt-12 flex flex-col justify-center items-center w-[90%] md:w-[70%] mx-auto">
                <div className="w-full mb-4">
                    <h1 className="text-3xl font-semibold mb-4 dark:text-white">
                        Catch your Next Trading Opportunity
                    </h1>

                    {/* Tab Buttons */}
                    <div className="flex w-full bg-gray-100 dark:bg-[#1a213d] gap-4">
                        {["Hot List", "New List"].map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 mr-3 py-2 font-semibold text-[12px] uppercase  transition ${activeTab === cat
                                    ? "text-green-500 border-b-2 "
                                    : " text-black dark:text-white"
                                    }`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Table */}
                    <CryptoTable tableColumn={column} data={filteredData} loading={isLoading}>
                        {filteredData.map((item) => (
                            <tr key={item.pair} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#232b45] transition">
                                {/* Trending Pairs */}
                                <td className="px-4 md:px-6 py-4 flex items-center gap-2 whitespace-nowrap">
                                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow border border-gray-100 dark:border-gray-700">
                                        <Image src={item.icon} alt={item.pair} width={28} height={28}
                                        // onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                        //     (e.currentTarget as HTMLImageElement).src =
                                        //         "https://ui-avatars.com/api/?name=" +
                                        //         encodeURIComponent(item.pair);
                                        // }}
                                        />
                                    </span>
                                    <span className="font-medium  text-gray-900 dark:text-white">{item.pair}</span>
                                </td>
                                {/* Last Price */}
                                <td className="px-4 md:px-6 py-4 whitespace-nowrap font-semibold text-gray-800 dark:text-gray-100">
                                    ₹ {item.price.toLocaleString()}
                                </td>
                                {/* 24 hrs Change */}
                                <td className={`px-4 md:px-6 py-4 whitespace-nowrap font-semibold ${item.change < 0 ? "text-red-500" : "text-green-500"}`}>
                                    {item.change > 0 ? "+" : ""}{item.change.toFixed(2)} %
                                </td>
                                {/* Per/Day Chart */}
                                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                                    {item.change < 0  ? (
                                        <svg width="54" height="25" viewBox="0 0 54 25" fill="none">
                                            <g clipPath="url(#clip0_1_857)">
                                                <path
                                                    d="M-0.234375 0.14032L6.07195 8.78549L17.2131 4.65085L27.5134 18.3704L37.4709 10.8528L53.7656 24.322"
                                                    stroke="#DE7373"
                                                    strokeWidth="1.118"
                                                />
                                                <path
                                                    d="M53.7656 24.3225L37.4709 11.4119L27.5134 18.9295L17.2131 5.20996L6.07195 9.34461L-0.234375 0.699432V24.3225H53.7656Z"
                                                    fill="#F2C5C5"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_857">
                                                    <rect
                                                        width="54"
                                                        height="24"
                                                        fill="white"
                                                        transform="matrix(-1 0 0 1 54 0.141022)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <svg width="56" height="25" viewBox="0 0 56 25" fill="none">
                                            <path
                                                d="M55.2344 0.957977L48.9281 9.60315L37.7869 5.4685L27.4866 19.188L17.5291 11.6705L1 23.3227"
                                                stroke="#38A463"
                                                strokeWidth="1.118"
                                            />
                                            <path
                                                d="M1 23.8818L17.5291 12.2296L27.4866 19.7471L37.7869 6.02762L48.9281 10.1623L55.2344 1.51709V24.4409L1 23.8818Z"
                                                fill="#D9EDE1"
                                            />
                                        </svg>
                                    )}
                                </td>
                                {/* Trade Button */}
                                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                                    <button className="border border-green-500 text-black dark:text-white  px-5 py-1.5 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-green-900 transition-all min-w-[70px]">
                                        Trade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </CryptoTable>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
