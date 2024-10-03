"use client";

import { useEffect, useState } from "react";
import { ConnectPublicClient } from "@/lib/client";
import { getContract } from "viem";
import dadJokesABI from "@/lib/dadJokesABI.json";

const publicClient = ConnectPublicClient();
const dadJokesContract = getContract({
    address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    abi: dadJokesABI,
    client: { public: publicClient },
});

const useJokes = () => {
    // Specify the type of the state
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                // Specify the type of the fetched jokes
                const fetchedJokes = await dadJokesContract.read.getJokes();
                setJokes(fetchedJokes);
            } catch (error) {
                console.error("Error fetching jokes:", error);
            }
        };

        fetchJokes();
    }, []);

    return jokes;
};

export default useJokes;
