# Callstack

Callstack is a data structure recording the function calls. Particularly, if we call a function to execute, we push it on to the stack, and when we return from a function, we pop off it the top of the stack.

![Callstack visualization GIF](https://cdn-images-1.medium.com/max/1600/1*E3zTWtEOiDWw7d0n7Vp-mA.gif)

We get, sometimes, into an infinite loop as we call a function multiple times recursively.

![Infinite callstack](https://cdn-images-1.medium.com/max/1600/1*tqkykdU69DFrxi82JOWLbQ.png)

There is, in Chrome browser, a limit on the size of the stack which is 16000 frames, more than that it will throw <b>Max Stack Error Reached</b>

P/s: Check the folder five things for more details.
