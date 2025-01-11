---
title: "Misconceptions & Asynchronous JavaScript"
created_at: "05/04/2023"
description: "I realized that knowledge gaps are not necessarily the stuff you don’t know but also the stuff you think you know and it’s not exactly accurate."
---

In the process of trying to identify my knowledge gaps I’ve realized that many of the coding misconceptions I used to have go way back from when I first started to learn how code. There were many things I interpreted in the wrong way when I was first being introduced to a lot of new concepts, which is totally normal because at that stage you just don’t have enough context.

Another thing I realized as well is that knowledge gaps are not necessarily the stuff you don’t know but also the stuff you think you know and it’s not exactly accurate.

One interesting misconception I used to have was related to asynchronous JavaScript. When I was first introduced to the topic I remember being very confused and after going through several tutorials I ended up assuming that JavaScript’s code execution was asynchronous by default.

I carried this thought with me for a long time until one day I stumbled across this definition:

> JavaScript is an asynchronous and concurrent programming language that offers a lot of flexibility. It's single-threaded like sync, but also non-blocking like async. Although it's synchronous by nature, JavaScript benefits from asynchronous code.

I realized that there was a more complex explanation to what I believed and I kind of had a misleading idea about JavaScript’s default behavior, it wasn’t blocking me from doing my job but still misleading, and was probably causing me to expect the wrong things from my code too.

It was actually pretty cool to revisit a concept and be able to understand it better now so I could adjust my mental model: JavaScript is largely synchronous, meaning that each line runs after the previous one finished running but there are functions that allow JavaScript to behave asynchronously, like `setTimeout`, `fetch` and even event handlers.

Of course, that is my very summarized explanation but just wanted to mention one example of the coding misconceptions I noticed I had.

I definitely noticed a change in my perspective after adjusting my mental model about async JavaScript, and it got me thinking, when learning something for the first time, it’s fine to understand it enough to get started but as you gather more context, it’s a great idea to go back and review the fundamental concepts because it’s really interesting to see how you’ll be able to understand it better when having more experience, and also to check if your understanding of something is actually accurate.
