#!/bin/bash
# Retry corrupted pickles/chutneys using Step 43 URLs

# Lime Pickle
curl -L -o public/images/grocery/lime-pickle.jpg "https://images.unsplash.com/photo-1550850584-455a131629e8?fm=jpg&q=60&w=800"

# Tamarind Chutney
curl -L -o public/images/grocery/tamarind-chutney.jpg "https://images.unsplash.com/photo-1617013451942-441bbba35a5e?fm=jpg&q=60&w=800"

# Mint Chutney
curl -L -o public/images/grocery/mint-chutney.jpg "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?fm=jpg&q=60&w=800"

echo "Pickles fixed."
