This is a Decentralized voting app system[`backend here`](https://github.com/Riocodex/Voting-dapp).

## Getting Started
First run the development server
```bash
npm run start
```
Then run the blockchain server
```bash
npx hardhat node
```

Then deploy the smart contract to the hardhat blockchain
```bash
npx hardhat run src/backend/scripts/deploy.js --network localhost
```

Next go to your browser [http://localhost:3000](http://localhost:3000) to open the user interface.

Ensure you have [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) installed with ethereum

With all these setup youre good to go

## Using The Website
- Connect Wallet

- Register (note you can only register once with one address, to register   again ensure to change your account, simply do so by going to your metamask and connecting with another account )
- When youre done registering with different accounts you will see the names on screen
- Now you have registered as candidates the vote section should be up insert the name of user you want to vote for
- Note that you cant vote twice with the same account.
- When youre done voting and registering..to pick winner click decide winner 


