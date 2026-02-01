#!/bin/bash

# Function to download from Wikimedia Page URL
download_wiki() {
    PAGE_URL=$1
    OUTPUT_PATH=$2
    # Extract the original file URL (full resolution or large preview)
    # Wikimedia pages have "Original file" link or we can find `upload.wikimedia.org`
    IMAGE_URL=$(curl -s "$PAGE_URL" | grep -o 'https://upload.wikimedia.org/wikipedia/commons/[^"]*' | grep -v 'thumb' | head -n 1)
    
    if [ -z "$IMAGE_URL" ]; then
        echo "Failed to find image for $OUTPUT_PATH from $PAGE_URL"
    else
        echo "Downloading $OUTPUT_PATH from $IMAGE_URL"
        curl -L -o "$OUTPUT_PATH" "$IMAGE_URL"
    fi
}

mkdir -p public/images/menu
mkdir -p public/images/grocery

# --- SNACKS (User moved these to /menu in grocery.ts) ---
download_wiki "https://commons.wikimedia.org/wiki/File:Bikaneri_Bhujia.jpg" "public/images/menu/bhujia.jpg"
# If Bikaneri_Bhujia.jpg fails (page might not exist, I saw "Shop_selling..." in search), try alternate
if [ ! -s "public/images/menu/bhujia.jpg" ]; then
    download_wiki "https://commons.wikimedia.org/wiki/File:Namkeen_Sev.jpg" "public/images/menu/bhujia.jpg"
fi

download_wiki "https://commons.wikimedia.org/wiki/File:Bombaymix.jpg" "public/images/menu/mixture.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Mathri.JPG" "public/images/menu/mathri.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Soan_Papdi.jpg" "public/images/menu/soan-papdi.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Gulab_jamun_(dish).jpg" "public/images/menu/gulab-jamun-mix.jpg"

# --- PICKLES/CHUTNEYS (User kept these in /grocery? Let's check grocery.ts. Yes, mostly grocery) ---
# Wait, user only changed snacks to /menu. Pickles seem to be in /grocery in the file (lines 79+).
download_wiki "https://commons.wikimedia.org/wiki/File:Mango_Pickle.jpg" "public/images/grocery/mango-pickle.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Lime_pickle.jpg" "public/images/grocery/lime-pickle.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Tamarind_Chutney.jpg" "public/images/grocery/tamarind-chutney.jpg"
download_wiki "https://commons.wikimedia.org/wiki/File:Mint_Chutney.jpg" "public/images/grocery/mint-chutney.jpg"

echo "Snacks and Pickles downloaded."
