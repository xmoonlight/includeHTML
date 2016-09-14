# includeHTML
includeHTML - Loading HTML parts via HTML tag (pure js)

Supported protocols: http://, https://, file:///

Supported browsers: IE 9+, FF, Chrome (and may be other)

Installation
-------
* `npm i -S includehtml.js`
* [npm package](https://www.npmjs.com/package/includehtml.js)

USAGE:
-----
1.Insert <b>includeHTML</b> into head section in HTML file: 
```html
<script src="js/includeHTML.js"></script>
```
2.Anywhere use <b>includeHTML</b> as HTML tag:
```html
<div><include src="header.html"></include></div>
```

ALL USAGE (examples):
-------
  1.Tag: 
  ```html
    <include scr="menu.html"></include>
  ```

  2.Async:  
```javascript
    <script>
        includeHTML('header.html', document.getElementById('mainmenu'));
        includeHTML('menu.html', document.getElementById('pagemenu'));
    </script>
```

  3.Sync:
```javascript
    <script>
      includeHTML([
          ['header.html', document.getElementById('headder')],
          ['menu.html', document.getElementById('menu')],
          ['footer.html', document.getElementById('footer')]
      ]);
    </script>
```

Development
-------
* To build script run `npm run build`