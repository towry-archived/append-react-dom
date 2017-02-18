# appendReactDOM

Append React DOM Node to an element.

## Installation

```bash
npm install append-react-dom --save
```

## Usage

```html
<div class="list">
	<div class="item item-1">item 1</div>
</div>
```

```js
import appendReactDOM from 'append-react-dom';
import ItemComponent from 'components/Item';

let el = document.querySelector('.list');

appendReactDOM(ItemComponent, el, {
	bar: 'bar',
	foo: 'foo'
});
```

Now the list become:

```html
<div class="list">
	<div class="item item-1">item 1</div>
	<div data-reactroot class="item item-2">item 2</div>
</div>
```

---

Copyright &copy; 2017 Towry Wang.
