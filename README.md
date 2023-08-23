# Technical Assessment
The program is for getting ETH value from [Bored Ape Yatch Club (BAYC)](https://boredapeyachtclub.com/#/).

## Installation
- Please make sure you have [Node.js](https://nodejs.org/en) installed
- Clone this repo
- Run `npm install` to install dependencies

## Usage
```bash
$ node main.js --epoch <timestamp>

# example output
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

# output
Options:
      --version  Show version number                                   [boolean]
  -e, --epoch    The epoch timestamp to convert              [number] [required]
  -a, --address  ETH address
                [string] [default: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"]
  -n, --name     ETH name         [string] [default: "BoredApeYachtClub (BAYC)"]
  -h, --help     Show help                                             [boolean]
```