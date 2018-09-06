# Regular Expression and Building a Chat Bot

Hey class,

Today we covered an intro to **Regular Expressions**! We used the
_javascript regex koans_ as a learning tool and I highly suggest your
successfully complete your own koans. The link is provided in the
_readings_.

Afterwards we used our regex knowledge to implement a simple chatbot
for **Chatty** thats returns a gif. Heres the [Example Code](https://github.com/rob0t7/lhl-lectures/tree/master/regex-bot/app).

## Giphy Chat (Bot Example)

Websockets are awesome. They allow us to have two way
communication. But they only send 1 type of message, a string. Knowing
this fact we can then create specific types of messages by using
JSON.

What we are going to do is the following...When a user types "/giphy
<searchTerm>" we are going to find a random gif with the filter
criteria <searchTerm>. We are going to break the problem down into the
following steps:

* Explore and learn the Giphy API (using POSTMAN)
* Use our socket server to act as a proxy for accessing Giphy
* Use **Regular Expressions** to check whether the message is a giphy
  command or not.
* Have the server fetch the message url and return an *<img>* tag
  instead of repeating the message.
* Make react insert the message using HTML safe (see
  insertDangorousInnerHTML)
* Show a mic drop gif.
* Profit


## Readings

* Regex
    - [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    - [History](https://en.wikipedia.org/wiki/Regular_expression)
    - [Cheat Sheet](https://www.rexegg.com/regex-quickstart.html)
* Regex Tutorials
    - [Regex Javascript
      Koans](https://github.com/frenchroasted/RegexKoans)
    - [Regex Interactive Tutorial](https://regexone.com/)
* Regex Tools
    - [Regex Advanced Tester](https://regexr.com/)
    - [Javascript Regex Tester](http://scriptular.com/)
    - [Ruby Regex Tester](http://rubular.com/)
    - [Regex
      Lib](http://www.regexlib.com/?AspxAutoDetectCookieSupport=1)
    - [Awesome Regex](https://github.com/aloisdg/awesome-regex)

* POSTMAN tool (https://www.getpostman.com/)
* HTMLSafe React
  (https://facebook.github.io/react/docs/dom-elements.html)
* Giphy API (https://github.com/Giphy/GiphyAPI)
* In class code (https://github.com/rob0t7/lhl-lectures/tree/master/regex-bot)

Have fun.
