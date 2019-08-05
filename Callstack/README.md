# The JavaScript engine

A popular example of a JavaScript engine is Google's V8. The V8 is used inside Google Chrome, and Node.js for example. Here is the presentation of what it looks like:

![JS Engine](https://miro.medium.com/max/1400/1*OnH_DlbNAPvB9KLxUCyMsA.png)

As you can see, the engine consits two main components:

- Memory Heap: where the memory allocation happens
- Call stack: where your stack frames are as your code executes.

# The Runtime

There are a myriad of APIs provided by the browser that have been used by almost any JavaScript developer out there (e.g: setTimeout()). Yeah, those APIs are not provided by engine!

![Other stuff](https://miro.medium.com/max/1400/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

Beyond the engine, we also have other stuffs call Web APIs which are provided by browsers, like DOM, AJAX, setTimeout and much more.

And, we have `event loop`, and the `callback queue`.

# Callstack

Callstack is a data structure recording the function calls. Particularly, if we call a function to execute, we push it on to the stack, and when we return from a function, we pop off it the top of the stack.

![Callstack visualization GIF](https://cdn-images-1.medium.com/max/1600/1*E3zTWtEOiDWw7d0n7Vp-mA.gif)

We get, sometimes, into an infinite loop as we call a function multiple times recursively.

![Infinite callstack](https://cdn-images-1.medium.com/max/1600/1*tqkykdU69DFrxi82JOWLbQ.png)

There is, in Chrome browser, a limit on the size of the stack which is 16000 frames, more than that it will throw <b>Max Stack Error Reached</b>

JavaScript is a single-threaded programming language, that means it has a single Call Stack. Therefore it can do one thing at a time.

Let's see an example

```javascript
function multiply(x, y) {
  return x * y;
}

function printSquare(x) {
  var s = multiply(x, x);
  console.log(s);
}

printSquare(5);
```

As we've described above, here is what actually happens in the call stack.

![stack frames](https://miro.medium.com/max/1400/1*Yp1KOt_UJ47HChmS9y7KXw.png)

Running code on a single thread can be quite easy since you don’t have to deal with complicated scenarios that are arising in multi-threaded environments — for example, deadlocks.

But running on a single thread is quite limiting as well. Since JavaScript has a single Call Stack, what happens when things are slow?

# Concurrency & the Event Loop

What happens when you have function calls in the Call Stack that take a huge amount of time in order to be processed? For example, imagine that you want to do some complex image transformation with JavaScript in the browser.

You may ask — why is this even a problem? The problem is that while the Call Stack has functions to execute, the browser can’t actually do anything else — it’s getting blocked. This means that the browser can’t render, it can’t run any other code, it’s just stuck. And this creates problems if you want nice fluid UIs in your app.

![Unresponsive](https://miro.medium.com/max/924/1*WlMXK3rs_scqKTRV41au7g.jpeg)

And that’s not the only problem. Once your browser starts processing so many tasks in the Call Stack, it may stop being responsive for quite a long time. And most browsers take action by raising an error, asking you whether you want to terminate the web page.

So, how can we execute heavy code without blocking the UI and making the browser unresponsive? Well, the solution is asynchronous callbacks.
