# Technical Assessment
The program is for getting ETH value from [Bored Ape Yatch Club (BAYC)](https://boredapeyachtclub.com/#/).

## Installation
- Please make sure you have [Node.js](https://nodejs.org/en) installed
- Clone this repo
- Run `npm install` to install dependencies

## Usage
```bash
$ node main.js --epoch <timestamp>
```

### example
```bash
$ node main.js --epoch 1692698406

┌──────────────────────────┬────────────────────────┐
│ BoredApeYachtClub (BAYC) │ 2023-08-22             │
├──────────────────────────┼────────────────────────┤
│ ETH balance:             │ 0.010201 ETH           │
├──────────────────────────┼────────────────────────┤
│ ETH value:               │ $17.00 (@$1666.84/ETH) │
└──────────────────────────┴────────────────────────┘
```

To get help you could run
```bash
$ node main.js --help
```