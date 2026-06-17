---
path: /search-items-that-match-query
title: Search items that match query
description: A nifty one-liner to filter data by a search query based on multiple fields
date: 2020-10-23
category: Tutorial
tags: ['tutorial', 'javascript', 'es6', 'filter', 'join', 'includes', 'search query']
series: 4
---

## TL;DR

```js
const items = [
  /* some items */
];

const itemsThatAreCool = items.filter(item => [item.name, item.description].join(' ').includes('cool'));
```

Right? Let's examine this beauty with an example ⬇️

## Too Long; Read Anyway

Imagine you're working with the following data:

```js
const phones = [
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    cameras: ['Ultra Wide', 'Wide'],
    description:
      '5G. A14 Bionic. All‑new design. Ceramic Shield. Edge‑to‑edge OLED display. Night mode on every camera. All in two perfect sizes — including the new iPhone 12 mini.',
  },
  {
    id: 'iphone-12-pro',
    name: 'iPhone 12 Pro',
    cameras: ['Ultra Wide', 'Wide', 'Telephoto'],
    description:
      '5G. A14 Bionic. All‑new design. Ceramic Shield. LiDAR Scanner. A Pro camera system optimized for low light — and pushed even further on iPhone 12 Pro Max.',
  },
  {
    id: 'iphone-11',
    name: 'iPhone 11',
    cameras: ['Ultra Wide', 'Wide'],
    description:
      'A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. And the highest‑quality video in a smartphone, so your memories look better than ever.',
  },
  {
    id: 'iphone-xr',
    name: 'iPhone XR',
    cameras: ['Wide'],
    description:
      'All-screen design. Longest battery life ever in an iPhone. Fastest performance. Water and splash resistant. Studio-quality photos and 4K video. More secure with Face ID. The new iPhone XR. It’s a brilliant upgrade.',
  },
];
```

Now let's say you want user's to be able to search for phones by name, you'd do something like this

```js
const phones = [
  /* Same as above */
];

let searchQuery = '12';

const phonesFilteredByName = phones.filter(phone => phone.name.includes(searchQuery));
```

Nice, but what if later on you want users to also be able to search based on the phone's description? Do you add another condition for the return? That would get messy fast as you add lookup fields, right?

How about we compose a string with all the fields we want to lookup?

```js
const phones = [
  /* Same as above */
];

let searchQuery = 'iPhone';

const phonesFilteredByNameAndDescription = phones.filter(phone =>
  `${phone.name} ${phone.description}`.includes(searchQuery)
);
```

Better, but having to type the `${}` every time we add a field can be troublesome, what if it's late, we haven't slept and for some reason we forget to put a field inside `${}` then we'll also be matching the word 'phone' and 'whatever field we intended to look for'. Not to mention that we'd eventually end up with a very long string that gets hard to read and could potentially lead to hours of debugging, JavaScript isn't gonna yell at us, as far as it is concerned, everything is fine.

So, a nicer syntax would be something like this

```js
const phones = [
  /* Same as above */
];

let searchQuery = 'iPhone';

const phonesFilteredByNameAndDescription = phones.filter(phone =>
  [phone.name, phone.description].join(' ').includes(searchQuery)
);
```

No we don't have to worry about wrapping each field in `${}`, we just add it to an array, straightforward. Then every field will be joined to a string into which we can lookup for the search query!

I think this is nicer because we now have dependency array we can easily modify to fit our needs.

Let's say we want to include the cameras array into our lookup, how do we do that?

```js
const phones = [
  /* Same as above */
];

let searchQuery = 'Telephoto';

const phonesFilteredByNameDescriptionAndCameras = phones.filter(phone =>
  [phone.name, phone.description, ...phone.cameras].join(' ').includes(searchQuery)
);
```

Nice! Now the cameras will be part of our lookup string. One last thing to note here is that `String.includes` is case sensitive so it might me good to through in a `String.toLowerCase` both to the lookup string and search query 🙃
