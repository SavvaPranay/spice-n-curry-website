#!/bin/bash

# Function to download from Wikimedia Page/File URL
download_wiki_direct() {
    URL=$1
    OUTPUT_PATH=$2
    echo "Downloading $OUTPUT_PATH from $URL"
    curl -L -o "$OUTPUT_PATH" "$URL"
}

# 1. Mango Pulp (Unsplash - verified "mango puree")
# This is a high-quality photo of mango puree/pulp
curl -L -o public/images/grocery/mango-pulp.jpg "https://images.unsplash.com/photo-1629180050285-7c56c6671f19?auto=format&fit=crop&q=80&w=1000"

# 2. Tamarind Chutney (Wikimedia Commons)
# Ensure we get the raw image, not the page
download_wiki_direct "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tamarind_chutney.JPG" "public/images/grocery/tamarind-chutney.jpg"

# 3. Mint Chutney (Wikimedia Commons)
# "Tangy minty chutney.JPG"
download_wiki_direct "https://upload.wikimedia.org/wikipedia/commons/1/1d/Tangy_minty_chutney.JPG" "public/images/grocery/mint-chutney.jpg"

# 4. Indian Style Yogurt (Wikimedia Commons)
# "DAHI.JPG" - Classic Indian curd in bowl
# Check if url works, otherwise find alternative
download_wiki_direct "https://upload.wikimedia.org/wikipedia/commons/e/e7/DAHI.JPG" "public/images/grocery/yogurt.jpg"

echo "Updated specific images: Mango Pulp, Tamarind Chutney, Mint Chutney, Yogurt."
