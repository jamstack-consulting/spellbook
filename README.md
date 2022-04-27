# Spellbook

> :warning: Currently this is for my personal use. If you can figure out how to use this in its current state with no docs have fun. :warning:
>
> :bangbang: This is also synced from a **private** monorepo via a github action. I have no idea how PR's will work and you may or may not have your changes credited, but who cares about the credit right?? :sweat: If you make a PR I will try to pull it into my monorepo in a way that credits you but no promises.

## A little spellcasting never hurt anybody.

The links, ctas, and logo in the navigation and footer are managed in the `navigation.js` file.

> Need some cool fonts? Check out [Open Foundry](https://open-foundry.com/fonts)

There is a script located at `social/social-base64.sh` that allows you to transform files located at `social-font.otf` and `social-image.png` if your files have different extensions simply modify lines 3 and 4.

Be sure to run `chmod 755 social/social-base64.sh` so that you can use the script to transform your assets to base64 and export them from the `index.js` file.
