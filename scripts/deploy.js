async function main() {
  // We get the contract to deploy
  const BabbyBees = await ethers.getContractFactory("BabbyBees");
  const babbyBees = await BabbyBees.deploy();

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });