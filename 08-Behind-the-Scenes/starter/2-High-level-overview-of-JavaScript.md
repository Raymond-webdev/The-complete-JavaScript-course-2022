## A high-level overview of JavaScript

- As an introduction to this very section, JavaScript is a high level, prototype based, object oriented, multi paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage collected programming language with first-class functions and a non-blocking, event loop concurrency model.
-  So these are the nine JavaScript topics that we're briefly going to talk about in this lecture. 

### Low-level
- And starting with the low-level part, every programme that runs on your computer needs some hardware resources such as memory and the CPU to do its work where you have to manually manage these resources, for example asking the computer for memory to create another variable. 

### High-level
- On the other side you have high level languages such as JavaScript and Python where we do not have to manage resources at all because these languages have so-called abstractions that take all of that work away from us. This makes the language easier to learn and to use, but the downside is that programmes will never be as fast or as optimised as for example C+ programmes. 

### Garbage-collection
- Now, one of the powerful tools that takes memory management away from us developers is garbage collection, which is basically an algorithm inside the JavaScript engine which automatically removes old unused objects from the computer memory in order not to clog it up with unnecessary stuff.

### Interpreted or just-in-time compiled
- Next up  is an interpreted or just-in-time compiled language so what we need to know for now is that the computer's processor only understands zeros and ultimately every single programme needs to be written in zeros and ones which is also called machine code and since that's not really practical to write human readable JavaScript code, which is an abstraction over machine code, this code eventually needs to be translated to machine code, and that step can be either compiling or interpreting. This step is necessary in every single programming language because no one writes machine code. Mainly in the case of JavaScript, this happens inside the JavaScript engine. 

### Multi-paradigm
- One of the things that makes JavaScript so popular is the fact that it's a multi-paradigm language. 
- In programming, a paradigm is an approach and an overall mindset of structuring or code which will ultimately direct the coding style in technique. 
- There are three popular paradigms: **procedural, object oriented, and functional programming**.
- **Procedural programming** is what we've been doing so far, which is basically just organising the code in a very linear way and then with some functions in between. 
-  Also we can classify paradigms as imperative or as declarative.
- Now many languages are only procedural or only object oriented or only functional, but JavaScript does all of it. So it's really flexible and versatile and so we can do really whatever we want with it. It's our choice. We can use whatever paradigm.
- So about the object oriented nature of JavaScript, it has a prototype based object oriented approach so almost everything in JavaScript is an object except for primitive values such as numbers, strings. 
-  First class functions, which simply means that functions are treated just as regular variables so we can pass functions into other functions, and we can even return functions from functions. And this is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional programming. 
- JavaScript is a **dynamic** language, and dynamic actually means dynamically typed. So as we've already seen, in JavaScript we don't assign datatype's to variables, instead they only became known when the JavaScript engine executes our code, also, the type of variables can easily be changed as we reassign variables.
- The same is not true for most other programming languages where we have to manually assign types to variables and then usually prevents bugs from happening which is the reason why many people say that JavaScript should be a strongly typed language as well.
- And if you want to use JavaScript with types then you can always look into TypeScript.
- **Single-threaded** and the **non-blocking event concurrency model** are really complex topics and probably the most complex ones of the whole course, well, it's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time. 
- JavaScript itself runs in one single threat, which means that it can only do one thing at a time, and therefore we need a way of handling multiple things happening at the same time.  So basically the thread is where our code is actually executed in a machines processor.
- If there is a long running task like fetching data from a remote server then we want a so-called non blocking behaviour by using a so-called event loop. The event loop takes long running tasks, executes them in the background and then puts them back in the main thread once they're finished. And this is in a nutshell, Javascript's nonblocking event loop concurrency model with a single thread. 


