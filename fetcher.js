import readline from "readline";
import fetch from "node-fetch";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayCoolAsciiArt = () => {
  console.log("\n");
  console.log(
    "\x1b[33m" +
      "████████╗██╗██████╗ ██████╗ ███████╗██████╗ ███████╗    ₿" +
      "\x1b[0m"
  );
  console.log(
    "\x1b[33m" +
      "╚══██╔══╝██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝    " +
      "\x1b[0m"
  );
  console.log(
    "\x1b[33m" +
      "   ██║   ██║██████╔╝██████╔╝█████╗  ██████╔╝███████╗    " +
      "\x1b[0m"
  );
  console.log(
    "\x1b[33m" +
      "   ██║   ██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║    " +
      "\x1b[0m"
  );
  console.log(
    "\x1b[33m" +
      "   ██║   ██║██║     ██║     ███████╗██║  ██║███████║    " +
      "\x1b[0m"
  );
  console.log(
    "\x1b[33m" +
      "   ╚═╝   ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝    " +
      "\x1b[0m"
  );
  console.log("\n");
};

async function fetchTransactions(address) {
  try {
    const response = await fetch(
      `http://localhost:${
        process.env.PORT || 3000
      }/transactions?address=${address}`
    );
    const data = await response.json();
    console.log("Transaction Data:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
}

function showMenu() {
  return new Promise((resolve) => {
    console.log("\nSelect an option:");
    console.log("1. FetchTransactionsReceipt");
    console.log("2. Another Function (Add more later)");
    console.log("3. Exit");
    rl.question("Choose an option (1-3): ", (choice) => {
      resolve(choice);
    });
  });
}

function getAddress() {
  return new Promise((resolve) => {
    rl.question("Enter the address: ", (address) => {
      resolve(address);
    });
  });
}

async function main() {
  displayCoolAsciiArt();
  while (true) {
    const choice = await showMenu();

    if (choice === "1") {
      const address = await getAddress();
      await fetchTransactions(address);
    } else if (choice === "2") {
      console.log("Option 2 selected)");
    } else if (choice === "3") {
      console.log("Goodbye!");
      rl.close();
      break;
    } else {
      console.log("Invalid option. Please choose between 1-3.");
    }
  }
}
main();
