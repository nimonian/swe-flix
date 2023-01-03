# HTML & CSS

Do `npm init -y`, `npm i -D live-server` and make a `"dev": "live-server"` script.

The live-server extension for VS Code is a good escape-hatch in case any of the apprentices are a bit overwhelmed and just want to focus on writing html/css. If they have the bandwidth, getting them to use `npm` and structure their work as a project is a good way of introducing the framework they'll be using over the first 9 weeks.

CSS variables don't get mentioned in the activate/workshop but I think they're one of the more important features of modern css - definitely worth mentioning if you get the chance!

Emmet abbreviations for the win! They're so good.
```
(div.card>h1.title)*5
```
and also "Wrap with abbreviation" in the command palette.

The slickest way to center stuff is:
```css
.parent {
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  background-color: black;
}
.child {
  width: 30px;
  height: 30px;
  background-color: gray;
}
```
then in the html, for example:
```html
<div class=parent>
  <div class="child"></div>
</div>
```

Grid and flex are brilliant utilities for laying out. [Flexbox Froggy](https://flexboxfroggy.com/) is a super way to learn flex.

A nice place to get color palettes is [colorhunt](https://colorhunt.co/). A good post on dark theme is [50 shades of gray](https://blog.karenying.com/posts/50-shades-of-dark-mode-gray).

A nice place to get fonts is [Google Fonts](https://fonts.google.com/) and [icons too](https://fonts.google.com/icons?icon.set=Material+Icons)!

The best (only?) way to learn is to build things!
