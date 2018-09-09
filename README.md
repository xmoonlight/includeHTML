# includeHTML
includeHTML - Loading HTML parts via HTML tag (pure js)

Supported protocols: http://, https://, file:///

Supported browsers: IE 9+, FF, Chrome (and may be other)

USAGE:
-----
1.Insert <b>includeHTML</b> into head section (or before body close tag) in HTML file: 
```html
<script src="js/includeHTML.js"></script>
```
2.Anywhere use <b>includeHTML</b> as HTML tag:
```html
<div data-src="header.html"></div>
```

ALL USAGE (examples):
-------
  1.Tag:
  ```html
    <div data-src="menu.html"></div>
    <div data-include="menu.html"></div>
    <include src="menu.html"></include> <!-- old tag from v1.0 -->
    <div data-src="js/1.js"></div>
    <div data-src="log"></div>
  ```

  2.Async:
```javascript
    <script>
       includeHTML('header.html', document.getElementById('header'));
       includeHTML('menu.html', document.getElementById('mainMenu'));
       includeHTML('green.css');
       includeHTML('js/1.js');
       includeHTML('log.txt','log');
    </script>
```

  3.Sync:
```javascript
    <script>
      includeHTML('header.html', document.getElementById('header'), function(){
        includeHTML('menu.html', document.getElementById('mainMenu'));
      });
    </script>
```
