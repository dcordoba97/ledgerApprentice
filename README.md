# Welcome to ledgerApprentice15!

The usage of this Ledger-like program is pretty straight forward.
______________________________________________________________________________
REQUIREMENTS
NodeJs, JS, IDE, This folder, basic terminal knowledge.
______________________________________________________________________________
INSTRUCTIONS

1.- Open the folder in your favorite IDE
2.- Once open, open a new terminal window
3.- run :$ npm i -g
4.- Wait for everything to set up and you are good to go!
5.- try using one of the examples!
______________________________________________________________________________
COMMANDS
The avaliable commands are: print
______________________________________________________________________________
FLAGS
The avaliable flags are: -f, --file <file>
______________________________________________________________________________
SINTAXIS
ledgerApprentice15 <flag> <argument> <command>
______________________________________________________________________________
EXAMPLE
ledgerApprentice15 -f files/index.ledger print

; Income
2011/11/21 Payment for hard work completed
        Bank:Paypal             $350.00
        Income:Hard Work
2012/7/1 Partial payment from Client X
        Bank:Paypal             $100
        Receivable:ClientX

; Bitcoin trades
2012/11/16 Sold some bitcoins
        Asset:Bitcoin Wallet    -3.5 BTC
        Bank:Paypal             $42.21
2012/11/29 Purchased bitcoins
        Asset:Bitcoin Wallet    15 BTC
        Bank:Paypal             -$300

2012/2/5 I owe Joe for a favor
        Payable:Joe:Favor       -$10
        Expense:Favor

; Client X
2012/7/1 Client X owes me for past work completed
        Receivable:ClientX              $1000
        Income:ClientX:Work

; Expenses
2013/2/20 Purchased reddit gold for the year
        Asset:Bitcoin Wallet            -10 BTC
        Expense:Web Services:Reddit.
______________________________________________________________________________
EXAMPLE 2
ledgerApprentice15 -f files/Payable.ledger print

2012/2/5 I owe Joe for a favor
        Payable:Joe:Favor       -$10
        Expense:Favor
    
______________________________________________________________________________
CONTACT

If you have any questions please contact me via e-mail or github!

e-mail: diegocordobatapia@gmail.com
github: /dcordoba97

