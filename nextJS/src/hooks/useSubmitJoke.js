import { useState } from "react";
import { localhost, sepolia } from "viem/chains";

export function useSubmitJoke(publicClient, walletClient, dadJokesContract) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (setup, punchline) => {
    // Retrieve the wallet address using the Wallet Client
    const [address] = await walletClient.requestAddresses();
    await walletClient.switchChain({ id: 31337 }); // localhost chain id

    const { request } = await publicClient.simulateContract({
      address: dadJokesContract.address,
      abi: dadJokesContract.abi,
      functionName: "addJoke",
      args: [setup, punchline],
      account: address,
    });
    await walletClient.writeContract(request);
    setIsModalOpen(false);
  };

  return { isModalOpen, setIsModalOpen, handleSubmit };
}
