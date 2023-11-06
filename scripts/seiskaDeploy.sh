# move index.html to public root dir
mv build/public/videot/index.html build/public/index.html 

# move jwplayer analytics script to public root dir
mv build/public/videot/jwpltx.js build/public/jwpltx.js 

# create locales dir
mkdir build/public/locales 

# move locales to public root dir
mv build/public/videot/locales/* build/public/locales