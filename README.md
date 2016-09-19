# includeHTML
includeHTML - Loading HTML parts via HTML tag (pure js)

Supported protocols: http://, https://, file:///

Supported browsers: IE 9+, FF, Chrome (and may be other)

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
    <div>
      <include src="menu.html"></include>
    </div>
  ```

  2.Async:  
```javascript
    <script>
       includeHTML('header.html', document.getElementById('header'));
       includeHTML('menu.html', document.getElementById('mainMenu'));
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
