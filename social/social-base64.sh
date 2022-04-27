#!/bin/bash
dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P) || exit
font=`base64 $dir/social-font.ttf -w 0`
image=`base64 $dir/social-image.png -w 0`

echo  -e "// --------------font---------------------;\n" > "$dir/index.js" 
echo  -e "export const font = \`$font\`;\n" >> "$dir/index.js" 
echo  -e "// --------------image--------------------;\n" >> "$dir/index.js" 
echo  -e "export const image = \`$image\`;\n" >> "$dir/index.js" 


# so much bash very wow