#!/bin/bash

# Mango Pulp (Verified Mango Puree)
curl -L -o public/images/grocery/mango-pulp.jpg "https://images.unsplash.com/photo-1629180050285-7c56c6671f19?auto=format&fit=crop&q=80&w=1000"

# Tamarind Chutney (Verified Tamarind)
curl -L -o public/images/grocery/tamarind-chutney.jpg "https://images.unsplash.com/photo-1677938578361-3398b297ea7f?auto=format&fit=crop&q=80&w=1000"

# Mint Chutney (Verified Green Dip)
curl -L -o public/images/grocery/mint-chutney.jpg "https://images.unsplash.com/photo-1542994883-2295574c5d9b?auto=format&fit=crop&q=80&w=1000"

# Indian Style Yogurt (Verified Plain Yogurt)
# Using the ID found in plain-yogurt search: photo-1673990349292-ed2dfa7988c9
curl -L -o public/images/grocery/yogurt.jpg "https://images.unsplash.com/photo-1673990349292-ed2dfa7988c9?auto=format&fit=crop&q=80&w=1000"

echo "Updated Mango Pulp, Tamarind, Mint, Yogurt with Unsplash."
