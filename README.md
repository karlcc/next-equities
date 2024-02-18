## Perform Metric for Stock Portfolio
## Motivation
Providing a comprehensive approach to evaluating the risk and rewards of investment portfolio. While most metric tools only present risk and rewards separately, I need a system combines these factors to give view of portfolio's performance.
## Expected result
At the watchlist page, you can add, edit, delete and compute the perform metric. For demo, I typical select CAR25 from the book of Dr. Howard Bandy - Quantitative Technical Analysist. Also compute the Correlation coefficient to the market, preset to "spy".
Related article: [Risk and Reward](https://blueowlpress.com/system-development/all-things-being-equal-risk-and-reward/)

* Click on the Equity Curve to check the 10 equally likely equity curves from the Monte Carlos simulation:

* Equity Curve at Safe F.

## Terms

CAR25 is a conservative metric that can be used to compare alternative uses of funds.  It is the compound annual rate of return for the risk normalized profit at the 25th percentile of the distribution

SAFEF is the fixed percentage position size at the trade system.

## Assumptions and Limitations

During calculation, assume:
* the position sizing can be more than 100% of account, maximum is 400%,
* 0 interest rate,
* buy with fixed fractional position sizing every trades everyday,
* commission omit

## 🚀 Deployment
Easily deploy your Next.js app with <a href="https://vercel.com/">Vercel</a> by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/karlorz/next-equities-client)

## 🎯 App Fork
### 1. Clone this template
    
1. Using `git clone`

   ```bash
   git clone 
   ```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create `.env` file and set env variables from `.env.example` file.

### 4. Prepare husky
It is required if you want husky to work

```bash
npm run prepare
```

### 5. Run the dev server

You can start the server using this command:

```bash
npm run dev
```

and open http://localhost:3000/ to see this app.

## ⚙️ Scripts overview
The following scripts are available in the `package.json`:
- `dev`: Run development server
- `build`: Build the app
- `start`: Run production server
- `preview`: Run `build` and `start` commands together
- `lint`: Lint the code using Eslint
- `lint:fix`: Fix linting errors
- `format:check`: Checks the code for proper formatting
- `format:write`: Fix formatting issues
- `typecheck`: Type-check TypeScript without emitting files
- `test`: Run unit tests
- `test:watch`: Run unit tests in watch mode
- `e2e`: Run end-to-end tests
- `e2e:ui`: Run end-to-end tests with UI
- `postbuild`: Generate sitemap
- `prepare`: Install Husky for managing Git hooks
