# Glide
### A slick JS scroll-to component.

Glide is a really simple scroll-to component written in vanilla JS. You can use it in vanilla JS or integrate it with jQuery.

- **[Changelog](https://github.com/picdorsey/glide/releases)**
- **[Issues](https://github.com/picdorsey/glide/issues)**

## Requirments
- [Tween.js](https://github.com/sole/tween.js/)

## Installation

```
npm install glide
```

## Usage

Require it:

```
var Glide = require('glide');
```

Then call it:

```
new Glide(element, offset);
```

*The offset is added to the top of the element and should just be numeric (e.g. 100).*

Here is an example in jQuery that will take the href of each main nav link and go to that id in the DOM.

```
$(function(){
    $('.main-nav a').on('click', function(e){
        e.preventDefault();
        var t = this.hash.replace('#', '');
        new Glide(t, 130);
    });
});
```

## Sites using Glide

[6 Summits Challenge](http://6summitschallenge.com)

## Credits

Glide is maintained by [Piccirilli Dorsey](https://github.com/picdorsey)

## License

[license](LICENSE)