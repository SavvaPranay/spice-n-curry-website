#!/bin/bash

# Bhujia (Sev) - Verified Unsplash
curl -L -o public/images/menu/bhujia.jpg "https://images.unsplash.com/photo-1769019401093-38f564d6408a?auto=format&fit=crop&q=80&w=1000"

# Gulab Jamun - Verified Unsplash
curl -L -o public/images/menu/gulab-jamun-mix.jpg "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&q=80&w=1000"

# Lime Pickle (Using generic pickle if specific not found, but trying specific)
# Using a high quality "Indian Pickle" image which looks like mixed/lime
curl -L -o public/images/grocery/lime-pickle.jpg "https://images.unsplash.com/photo-1589135233689-d52aa20d4408?auto=format&fit=crop&q=80&w=1000"

# Chutneys
# Tamarind (Brown sauce)
curl -L -o public/images/grocery/tamarind-chutney.jpg "https://images.unsplash.com/photo-1606437703373-ba41334c9735?auto=format&fit=crop&q=80&w=1000"
# Mint (Green sauce)
curl -L -o public/images/grocery/mint-chutney.jpg "https://images.unsplash.com/photo-1604153018860-6b3a3250b719?auto=format&fit=crop&q=80&w=1000"

# User changed snacks to /menu, let's make sure they are there
# Ensure Mathri/Mixture/Soan Papdi are there (downloaded in part 2)
# If part 2 failed for them, re-download here? 
# Part 2 succeeded for Mixture, Mathri, Soan Papdi.

echo "Remaining images downloaded."
