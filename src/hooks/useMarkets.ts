import { useEffect, useState } from "react";
import { onValue, ref, off } from "firebase/database";
import { rtdb } from "@/lib/firebase";
import { MarketData } from "@/types";

//This is a custom Hook which we can use it just like a normal hook
export function useMarkets() {
    const [markets, setMarkets] = useState<MarketData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const cryptoDataRef = ref(rtdb, "markets");
        const unsubscribe = onValue(
            cryptoDataRef,
            (snapshot) => {
                const val = snapshot.val();
                if (val) {
                    const result = Object.values(val) as MarketData[];
                    setMarkets(result);
                } else {
                    setMarkets([]);
                }
                setIsLoading(false);
            },
            (error) => {
                console.error("Firebase Realtime Database error:", error);
                setIsLoading(false);
            }
        );
        return () => {
            off(cryptoDataRef, "value", unsubscribe);
        };
    }, []);

    return { markets, isLoading };
}
