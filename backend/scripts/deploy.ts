import { ethers } from "hardhat";

async function main() {
  const MashFactory = await ethers.getContractFactory(
    "push"
  );
  const mashFactory = await MashFactory.deploy();

  await mashFactory.deployed();

  console.log("MashFactory deployed to:", mashFactory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
