# Spellbook

## A little spellcasting never hurt anybody.

> :warning: Currently this is for my personal use. If you can figure out how to use this in its current state with no docs have fun. :warning:
>
> :bangbang: This is also synced from a **private** monorepo via a github action. I have no idea how PR's will work and you may or may not have your changes credited, but who cares about the credit right?? :sweat: If you make a PR I will try to pull it into my monorepo in a way that credits you but no promises.

## Getting Started

## Content

The content lives in the mdx folder, because all the content is mdx. This allows anyone familiar with markdown to create simple pages, and developers to create more complex ones. The frontmatter in the content drives the layout of the page and can be extended to do more, like select what components are available to use in the mdx.

Clever use of the layout key in frontmatter and leverageing the full power of mdx will allow you to do some fairly complex pages while keeping your content almost if not entirely in plain markdown. For example the [remark-mdx-toc](https://github.com/liltechnomancer/remark-mdx-toc) component for example will allow you to add mdx driven table of contents to your pages, with components you can swap out in the `TableOfContents` map located in `components/mdx-components.js`

## Pages

The `index` page is special, as it is handled by `pages/index.js` where as other pages are processed in `pages/[...slug].js`. The frontmatter has a `layout` field that is used to pick a layout from the layout map located in `components/layout`. You can learn more on [layouts here](#layouts). You can create

## Layouts

Layouts are simple to define, in a way that hopefully still provides a lot of flexibility.

Start by adding an entry in the Layout object located in `components/Layout` you may be able to style it with tailwind and call it a day. If you need more styles you should make a layout class in an `scss` file located at `styles/layouts` and import it in the `index.scss` file located in the same directory. I suggest you name your layout something like `layout--whatever` so that you can write rules you are confident wont conflict with anything.

While I prefer to style components a variety of ways (currently with tailwind). I find that writing css traditionally is ideal for defining a page layout. This is why plugins add class names to elements to be styled naturally via the cascade with a layout.

## Navigation and Footer

The links, ctas, and logo in the navigation and footer are managed in the `navigation.js` file.

## Font and surrounding Utilities

> Need some cool fonts? Check out [Open Foundry](https://open-foundry.com/fonts) or [velvetyne](http://velvetyne.fr/)

If you want to replace the font put a new font in `public/fonts` and import it in `styles/fonts`. You will also need to add it to the tailwind config, and overwrite `sans` or `serif` if you want.

There is a script located at `social/social-base64.sh` that allows you to transform files located at `social-font.otf` and `social-image.png` if your files have different extensions simply modify lines 3 and 4.

Be sure to run `chmod 755 social/social-base64.sh` so that you can use the script to transform your assets to base64 and export them from the `index.js` file.
