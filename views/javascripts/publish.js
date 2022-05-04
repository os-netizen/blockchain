import {abi, bytecode} from './abicode'




const serverUrl = "https://jrhct3nepajw.usemoralis.com:2053/server";
const appId = "GzSUUx4WrVeCG5BEomiP0KdHc1aGhQmVDw5iElq7";
Moralis.start({ serverUrl, appId });

//login function
login = async () => {
  Moralis.authenticate().then(function (user) {
    console.log(user.get("ethAddress"));
    //   console.log(abi);
  });
};

//upload an image
uploadImage = async () => {
  const data = formFile.files[0];
  const file = new Moralis.File(data.name, data);
  await file.saveIPFS();

  console.log(file.ipfs(), file.hash());

  return file.ipfs();
};

//upload the metadata object

uploadMetaData = async (imageURL) => {
  const object = {
    companyName: document.getElementById("companyName").value,
    "NFT series name": document.getElementById("NFTprojectName").value,
    noOfNft: document.getElementById("noOfNFT").value,
    image: imageURL,
  };
  const file = new Moralis.File("file.json", {
    base64: btoa(JSON.stringify(object)),
  });
  await file.saveIPFS();
  console.log(file.ipfs(), file.hash());
  return file.ipfs();
};

//function to goooo
let ipfsMetaData = 0;
gogogo = async () => {
  const image = await uploadImage();
  ipfsMetaData = await uploadMetaData(image);
  document.getElementById("publish").style.display = "none";
  document.getElementById("mint").style.display = "block";
  return ipfsMetaData;
};



const mintNow = () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum, "rinkeby")

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()

    const factory = new ContractFactory(abi, bytecode, signer)

       contract = await factory.deploy();
};

export {gogogo, mintNow};