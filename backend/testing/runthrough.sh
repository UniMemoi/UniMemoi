#!/bin/sh

python3 parseContent.py
python3 parsetocsv.py
node csv_to_apkg.js
