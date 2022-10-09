import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {
  MultiSigWalletFactory,
  // eslint-disable-next-line camelcase
  MultiSigWalletFactory__factory,
  // eslint-disable-next-line node/no-missing-import
} from "../typechain";

describe("Mash", async () => {
  let WalletFactory: MultiSigWalletFactory__factory;
  let walletFactory: MultiSigWalletFactory;
  let addresses: SignerWithAddress[];
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async () => {
    WalletFactory = await ethers.getContractFactory("MultiSigWalletFactory");
    walletFactory = await WalletFactory.deploy();
    await walletFactory.deployed();
    addresses = await ethers.getSigners();
    [owner, addr1, addr2] = addresses;
  });

  describe("Wallet Creation", async () => {
    it("should be able to create a wallet with correct owner", async () => {
      const percetageConfirmation = 100;
      await walletFactory.createWallet([owner.address], percetageConfirmation);

      const walletAddress = (await walletFactory.getWallets())[0];

      expect((await walletFactory.getOwners(walletAddress))[0]).to.equal(
        owner.address
      );
      expect(
        await walletFactory.getPercentConfirmationRequired(walletAddress)
      ).to.equal(percetageConfirmation);
      expect(await walletFactory.getTransactionCount(walletAddress)).to.equal(
        0
      );
    });
  });
});
