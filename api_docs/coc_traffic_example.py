#!/usr/bin/env python

# make sure to install these packages before running:
# pip install pandas
# pip install sodapy

import pandas as pd
from sodapy import Socrata

# Unauthenticated client only works with public data sets. Note 'None'
# in place of application token, and no username or password:
app_token = 'YZQnQVHi89zaZ88qLXoFirjBI'

client = Socrata("data.cityofchicago.org", app_token)

# Example authenticated client (needed for non-public datasets):
# client = Socrata(data.cityofchicago.org,
#                  MyAppToken,
#                  userame="user@example.com",
#                  password="AFakePassword")

# First 2000 results, returned as JSON from API / converted to Python list of
# dictionaries by sodapy.
results = client.get("m65n-ux8y", limit=2000)

# Convert to pandas DataFrame
results_df = pd.DataFrame.from_records(results)

print(results_df)