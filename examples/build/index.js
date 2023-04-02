function component({ target, props }) {
  let { name } = props;

  let e0, t1, b2, t3;

  return {
    create() {
      e0 = document.createElement("h1");
      t1 = document.createTextNode(" Hello ");
      b2 = document.createTextNode(name);
      t3 = document.createTextNode("!");

      e0.setAttribute("class", "snazzy"), e0.setAttribute("when:click", "handleClick");

    },
    mount() {
      e0.appendChild(t1);
      e0.appendChild(b2);
      e0.appendChild(t3);

      target.append(e0);
    },
    update(changes) {
      if (changes.name) {
        b2.data = name = changes.name;
      }
    },
    detach() {
      target.removeChild(e0);
    }
  };
}

let comp = component({ target: document.body, props: {} });

comp.create();
comp.mount();
