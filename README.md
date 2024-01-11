<p align="center">
  <img src="./show1.png">
</p>


# Oranj

Whether you're building a forum, discussion platform, or any other community-driven app, **Oranj** provides a couple of useful components for rapid development.

<br>

## Features

- **Dynamic Stories:** Keep users engaged with the unique Hot and Cold indicators. *Stories that are gaining popularity turn vibrant orange, while those receiving less attention adopt a cold blue hue.*

- **Data-Driven Menus:** Menus that are shaped by data.

- **Lazy Loading Posts:** Load content as users scroll, ensuring a smooth and efficient browsing experience.

<br>

## Customization
### Menus
To create a simple menu, you can define it as follow

```javascript
const menu = [
  {text: "Home"},
  {text: "Our Services"},
  {text: "Contact Us", MainIcon: ContactIcon} // Or we can add icons to any item we want
]
```

<br>

however what's important is that menus will be shaped according to the data that you feed it, for example
if I want to add switches, nested lists, dividers, buttons ... I can easily just plug them without worrying about anything else

```javascript
const userProfileItems = [
  {type: "section", text: "Settings", data: settings}, // section with switches
  {type: "divider"}, // divider for asthetics
  {text: "Help Center", MainIcon: HelpIcon}, // Normal menu item
  {type: "nested", text: "More", MainIcon: ReadMoreIcon, data: moreCategories}, // nested menu within the current menu
  ...
  {text: "Log In / Sign Up", MainIcon: LoginIcon},
];
```

The result would be something like the following:

![Menu with different item types](./assets/one.gif)

<br>
<br>

Speaking of nested menus, you can easily create a nested menu within another menu or a nested `DropDownList` with as many levels as you want
all you have to do, is add `isNested: true` to root. and the rest will be taken care of.

```javascript
{isNested: true, data: your-data}
```

below is an example with of a drop down list that contains another drop down lists

![A 2 level nested drop down menu](./assets/two.gif)

<br>
<br>

We can nest as deeply as we want, not that it is a good UX experience, but just to demonstrate
how easy it is to compose these components together.

But what will happen if I load it with too much content, does it overflow?
Each **Oranj** component comes with a safety fallback, so in our previous example if we injected a lot of data into our menu
instead of overflowing it will just show an `n` item and a `show more`. (of course `n` can be customized)

![show more, by default when many items can't fit](./assets/three.gif)

<br>
<br>

### Stories
### Infinite Scroll
### Posts

## Getting Started

To get started with Oranj, follow these steps:

```bash
$ pnpm install
$ pnpm dev
```

