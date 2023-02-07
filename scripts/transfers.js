const ethers = require("ethers");
const fs = require('fs');

const GameItemsAddress = '0x9912ad6261eed104f065f2890107df85D60d8B85';

const GameItemsAbi = JSON.parse(fs.readFileSync("artifacts/contracts/GameItems.sol/GameItems.json", "utf-8")); // abi of implementation
const provider = new ethers.providers.JsonRpcProvider("https://quiet-wild-tent.ethereum-goerli.discover.quiknode.pro/018d19bfda7792655e6705606fb07f32472264dc/");
const wallet = new ethers.Wallet(String("549ba6e02bef53dc4c75a17f887814ca45994251c41a9e97e4db9944ee8cf685"), provider);
const gameItems = new ethers.Contract(GameItemsAddress, GameItemsAbi.abi, wallet);

const balanceOf = async () => { const balance = await gameItems.balanceOf('0x2D2fc731665440dc243D404F5E333D8244f40D27', 4); console.log(BigInt(balance));}

const transferFrom = async () => {


   const response = await gameItems['safeTransferFrom(address,address,uint256,uint256,bytes)']('0x2D2fc731665440dc243D404F5E333D8244f40D27', '0x4b911885fB1BC27DD47B8Fee088A7dad75110438', 4, 1, "0x00");

    console.log(response);
}

transferFrom();


