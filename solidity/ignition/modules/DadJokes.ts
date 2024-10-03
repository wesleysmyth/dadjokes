// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const DadJokesModule = buildModule("DadJokesModule", (m) => {
  const dadjokes = m.contract("DadJokes");
  return { dadjokes };
});

export default DadJokesModule;
