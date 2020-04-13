---
title: "My Pioneer Idea: Crowdsourcing Supermarket Prices"
layout: post
date: 2020-04-07 10:10
tag: pioneer
image: https://koppl.in/indigo/assets/images/jekyll-logo-light-solid.png
headerImage: false
projects: false
hidden: false # don't count this post in blog pagination
description: "This is a simple and minimalist template for Jekyll for those who likes to eat noodles."
category: blog
author: nick
externalLink: false
---
## Where it all started

![SmartGrocer](http://nicholasmurray.dev/assets/images/smartgrocer.png "SmartGrocer")

Back in 2017, I somehow won my first ever solo hackathon for PubNub’s $1000 Civic Chatbot Challenge. It blew my mind at the time because I was still a novice programmer, and I really didn’t think what I did was very worthy. Although the *execution* (aka, the code itself) was not great, I can say in retrospect that the *idea* was worth it. 

It was very simple: users could ask the chatbot where they could find “x” grocery store item, like rice, for the cheapest price. The chatbot would return a list of nearby stores with the best prices. I mostly hard-coded these responses.

I had one major problem, though. Supermarkets, grocery stores, convenience stores, and bodegas did not have available lists of their prices (and for good reason). All I could find was a single, shitty supermarket “API” that had no location-specific data. So in the middle of the hackathon, I had to book it down to several local grocery stores to get sample data for my demo. 

To sell my hackathon idea, I told the judges that for future feasibility I would create my own supermarket API by crowdsourcing supermarket prices. People scan their receipts, and the prices get updated in a database. 

---
## Today - what I'm looking to do
Now in 2020, I feel like this idea is worth something to me because I would personally use it. I imagine an app I could use for shopping groceries that's the equivalent of "checking my Weather app before stepping outside."

For me, the main motivator is price. 

With many online options and different selections, I would like to know if it’s worth my time to shop for myself, and if so, where does it make sense to shop? Or should I have someone else shop for me, or have the groceries delivered to me via Amazon or Walmart? 

There are several great examples of the price disparities between shopping at one store over another, and in my experience food bills quickly add up. In this one [price comparison](https://clark.com/shopping-retail/aldi-kroger-walmart-best-grocery-store-prices/), we see for 2019 that a relatively modest bill for a single person can save $6. Extrapolate that to a family, or over a year, and the differences in price make a large difference. 

Making this app will not be easy, and the first hurdle I want to experiment with is actually collecting different prices among several different supermarkets.

For this, I'm going to:

- Use Firebase's Text Recognition to scan my recent purchases from receipts.
- Send updated prices to a database.
- Allow users to search this database quickly and effectively.

And that's my MVP! I expect there will be plenty of hurdles just in those steps. Once I have a sufficient MVP, I'll open up testing to a wider audience. 

Thanks for reading. 

