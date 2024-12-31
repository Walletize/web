![Walletize](public/images/hero-dark.png)

# Walletize

The open-source personal finance app that's simple and modern.

## About

Walletize is a web application designed to help individuals efficiently manage their personal finances. Track your income, expenses, assets, and liabilities while getting comprehensive insights into your net worth and overall financial health.

Key features:
- Multi-currency support
- Shared financial accounts
- Cross-device synchronization
- Asset tracking (savings, investments, real estate, etc.)
- Transaction management
- Modern, intuitive interface

## How to Use

There are two ways to use Walletize:

### 1. Managed Service

Visit [www.walletize.app](https://www.walletize.app) to use the managed version. This is the easiest way to get started - simply create an account and start tracking your finances. The managed version includes automatic updates, backups, and technical support.

### 2. Self-Hosting with Docker

Before self-hosting Walletize, you'll need to set up the Walletize server first:

Set up [walletize-server](https://github.com/justinjap/walletize-server) by following the instructions in its README

Once you have the server running, you can proceed with setting up the web application:

1. Clone this repository:
   ```bash
   git clone https://github.com/justinjap/walletize.git
   cd walletize
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/walletize"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

3. Build and run the Docker container:
   ```bash
   docker compose up -d
   ```

4. Access Walletize at `http://localhost:3000`



