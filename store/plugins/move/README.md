### Install

```bash
npm install moveto --save
```

```js
import Move from '@goldfinch/store/plugins/move'

// ! should be loaded at the very end of all scripts, for a proper work
new Move() // ! keep me at the very end
// new Move({duration: 500})
```

#### Use

```html
<a href="javascript:void(0)" data-move-to-top>Click</a>
<a href="javascript:void(0)" data-move-to-bottom>Click</a>

<a href="javascript:void(0)" data-move-to="#id">Click</a>
<a href="javascript:void(0)" data-move-to=".class">Click</a>
<a href="javascript:void(0)" data-move-to="[data-attribute]">Click</a>
<a href="javascript:void(0)" data-move-to="my_trigger">Click</a> # if no elements found, checks [data-mt="my_trigger"]

<a href="javascript:void(0)" data-move-to="*" data-move-to-offset="500">Click</a>
<a href="javascript:void(0)" data-move-to="*" data-move-to-offset=".header">Click</a>
```

Url support (search elements in the following order: [data-mv="$element"], #$element, .$element)

```
/#to=$element
```
