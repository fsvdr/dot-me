---
path: /how-to-calculate-travel-distance-and-time
title: 'How to calculate driving travel distance and time'
description: Google Maps. Right? Let's go with Google Maps and call it a day. Cool? NO. Not this time pal, let me show you just how much you're missing out on Mapbox. The cool kid in town.
date: 2020-09-14
category: Tutorial
tags: ['tutorial', 'mapbox', 'maps', 'driving', 'distance', 'javascript', 'google maps', 'travel distance', 'travel time']
series: 3
---

## Making a case for Mapbox

Let me just say... it is no fun working with Google Maps APIs. I'm sorry, don't @ me it might be just me but the burden of working with anything Google is enough to make me roll my eyes and want to cuddle my bed pillow till the weekend.

Fortunately the Internet is a big place and there are other players in town (yes there are, just... google or even better [duckduckgo](https://duckduckgo.com) them).

And when it comes to maps I've found that [Mapbox](https://mapbox.com) is __the__ alternative. Not only is it really easy to get started but they also have a very **[generous free tier](https://www.mapbox.com/pricing/)** for most of their services unlike (_cof cof_ you know who).

Enough rambling, you're here for the code so let's get to it ...

## Creating an account

> You can skip this step if you already have an account 🙃

First of you're going to need a Mapbox account before we do anything so head over to their [signup page](https://account.mapbox.com/auth/signup/).

Once you do that you'll receive an email to confirm your account click the big blue button and just like that you'll be ready to start coding 🎉

If everything went right you should be looking at the dashboard, it's a pretty simple UI and if you look closer you'll see that Mapbox has already created a default access token for us!

![Mapbox Dashboard](mapbox-dashboard.png '— Mapbox Dashboard')

Good stuff. We could plug this token right into our app and everything would work just fine.

## The Navigation Service

Now, the service we need to calculate the travel distance between geographical points is the [Navigation Service](https://docs.mapbox.com/api/navigation/), specifically we care about the *Matrix API* which defined by their own documentation:

> The Mapbox Matrix API returns travel times between many points.

So if we pass 3 geographical points to it, say A, B and C the API will return us a ~~matrix~~ table with each and every travel combination between these points so we get the travel time from A to A, A to B, A to C, B to A, B to B and so on ...

Here's the table I ~~stole~~ borrowed from their documentation which helps me visualize this 

![Navigation Matrix](navigation-matrix.png '— Navigation Matrix')

Aren't we getting duplicated travels here? Isn't A to B the same as B to A? Well no, turns out the API is smart enough to understand that the path you took from A to B isn't necessarily going to be the same path you take on your way back cause... you know, lanes and/or traffic as we'll see in a bit.

## The Code Dammit!

Ok so the way we interact with this API is through a `js ·· GET` HTTP request to `html ·· https://api.mapbox.com/directions-matrix/v1/{profile}/{coordinates}`.

Where `profile` is one of:
  * `js ·· mapbox/driving` - if you prefer to drive 🚗
  * `js ·· mapbox/walking` - if you prefer to walk 🚶‍♂️
  * `js ·· mapbox/cycling` - if you prefer to bike 🚲
  * `js ·· mapbox/driving-traffic` - if you prefer to drive and you care about the traffic ⭐



And where `js ·· coordinates` is a list of `js ·· {longitude},{latitude}` each separated by a semicolon (`;`). You can pass a minimum of two and a maximum of 25 if you're a busy person...

Note that it is __longitude__ *then* __latitude__ and not the other way around otherwise it's not going to work and you'll be sad 🙁.

So far I've delivered you the travel time between points but this post is about time *and* distance so let's keep rolling.

Another parameter we can pass to our HTTP request is `js ·· annotations` this tells the API what sort of matrix are we interested in and the possible values are `js ·· duration` for travel times (this is the default), `js ·· distance` for travel distances or you can use both values separated by a comma (,).

One other parameter you might want to use is `js ·· approaches`. See by default the travel that gets calculated doesn't care about lanes so it could be from either side of the road. Because driving on the wrong side of the lane is considered cheating, we can set its value to `js ·· curb` to indicate that we want to care about arriving on the right side of the road. One important thing to notice is that we need to provide a value for each geographical point so if we want to calculate the travels between three points we would pass `js ·· approaches=curb;curb;curb`.

With all this we have a fine request of the shape: `html ·· https://api.mapbox.com/directions-matrix/v1/mapbox/driving-traffic/{coordinates}?annotations=duration,distance&approaches=curb;curb`. But you know what we're missing? ~~Some tunes for the ride~~ Our access token.

## Authenticating our request

We can't just go around sending random requests without some sort of authentication, that's what our access token from the dashboard comes in handy. 

For the sake of this tutorial we'll stick to the default token Mapbox generated for us but when moving to real world production apps __you should create specific tokens for each different project__.

You'll also probably want to put your token in an [environment variable](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html) before using it in your code because we don't want it to be lying around for other people to grab it and make requests on our behalf.

Now that it's all safe to use, add an `js ·· access_token` parameter to the request with your access token as the value (if using environment variables, which again you should you would access it with `js ·· process.env.THE_NAME_OF_YOUR_VARIABLE`).

## Request and you shall receive

Assuming you're making this request from Node.js you could create a fetch call by plugging in some random coordinates:

```js
const fetch = require('isomorphic-fetch'); // In order to use fetch

const origin = { lat: 19.3896346, lng: -99.2486547 };
const destination = { lat: 20.8443792, lng: -101.2292119 };

const response = await fetch(
  // Mapbox endpoint
  'https://api.mapbox.com/' +
  // The navigation matrix endpoint (not sure why it says directions here)
  'directions-matrix/v1/' + 
  // Get there by car and get there fast
  'mapbox/driving-traffic/' +
  // Our colon separated list of coordinates (remember LONGITUDE then LATITUDE)
  // we're using two points here but remember you can use up to 25
  `${origin.lng},${origin.lat};${destination.lng},${destination.lat}` +
  // We want duration and distance please
  '?annotations=duration,distance' +
  // We follow the law and drive on the right lane
  '&approaches=curb;curb' +
  // Our secret token hidden from curious eyes
  `access_token=${process.env.ACCESS_TOKEN}`
).then(response => response.json());
```


If everything goes right we should now have a response object with a couple properties of which we'll use:
  * `js ·· code` - The status code of the response (hopefully 200)
  * `js ·· durations` - The travel durations matrix
  * `js ·· distances` - The travel distances matrix

For this specific request we would get the following structures:

```js
console.log(response.durations);
> {
    "durations": [
      // These are durations from point A
      [0, 15360.4], // to point [A, B]
      // These are durations from point B
      [14886.3, 0] // to point [A, B]
    ]
  }

console.log(response.distances);
> {
    "distances": [
      // These are distances from point A
      [0, 345994], // to point [A, B]
      // These are distances from point A
      [357204.4, 0] // to point [A, B]
    ]
  }
```

Note that the values are in seconds and meters respectively and that in each case the travel between a point and itself will always be 0. If no route is found between some given points the value will be `js ·· null`.

Also note that the exact values might change since we're considering traffic and well, it might be different when you check.

And so we got the travel distance and time between our origin and destination points 🎉

If you want to read more about the differences between Google Maps and Mapbox I recommend you [this article](https://madappgang.com/blog/mapbox-vs-google-maps-choosing-a-map-for-your-app).

See you next time folks! 👋
