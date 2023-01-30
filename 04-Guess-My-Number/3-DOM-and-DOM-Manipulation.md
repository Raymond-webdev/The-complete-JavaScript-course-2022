## In this lecture we will learn what the DOM actually is and how it works.
- DOM stands for document object model and is basically a structured representation of HTML documents.
- ALlows javaScript to access HTML elements and styles to manipulate them.

## The DOM treet structure

```
1. The DOM always starts wth the **Document object** right at the very top.
**Document is the entry point to the DOM because we needed to start selecting elements.
2. The first child element of the document is usualy the <html> element because the ususaly the root element in al HTML documents.

3. HTML has two child elements <head> and <body>
4. Inside <head> and <body> we have more elements named child elements.
```

## The DOM is a completed representation of the HTML document so that we can manipulate it in complex ways.

- There is something that many beginners find confusing. So many people believe that the DOM and all the methods and properties that we can use to manipulate the Dom, such as documented queryselector, that lots of other stuff are actually part of JavaScript. 
- However, this is not the case. Remember that JavaScript is actually just a dialect of the Ecmascript specification, and all this Dom related stuff is simply not in there. So up until this point we have only used the JavaScript language itself.
- But starting in this section, we will also use JavaScript in the browser to manipulate web pages that are actually displayed and rendered in the browser just like any normal website that you know.
- If the DOM is not a part of the JavaScript language, then how does this all work? Well, the DOM and DOM methods are actually part of something called the web APIs. So the web APIs are like libraries that browsers implement and that we can access from our JavaScript code. And API stands for application programming interface. 
- Web APIs are basically libraries that are also written in JavaScript and that are automatically available for us to use. So all this happens behind the scenes. 
- Now besides the DOM, there are actually a tonne more but APIs such as timers, defence API and many more. 