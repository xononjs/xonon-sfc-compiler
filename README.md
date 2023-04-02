# xonon-sfc-compiler
A compiler that turns a xonon single file component(sfc) into plain javascript

## Example

```svelte
<script>
    export let name;    
</script>

<h1>{name}</h1>
```

to 

```javascript
function component({ target, props }) {
      let { name } = props;
      let e0, b1;

      return {
        create() {
          e0 = document.createElement("h1");
          b1 = document.createTextNode(name);

        },
        mount() {
          e0.appendChild(b1);
          target.append(e0);
        },
        update(changes) {
          if (changes.name) {
            b1.data = name = changes.name;
          }
        },
        detach() {
          target.removeChild(e0);
        }
      };
}
```
