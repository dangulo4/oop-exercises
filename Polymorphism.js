function HtmlElement() {
  this.click = () => {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = () => {
  console.log('focused');
};

HtmlSelectElement = function (items = []) {
  this.items = items;

  this.addItem = (item) => {
    this.items.push(item);
  };

  this.removeItem = (item) => {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = () => {
    return `
    <select>${this.items
      .map(
        (item) => `
    <option>${item}</option>`
      )
      .join('')}
    </select>`;
  };
};

// Inheritance
HtmlSelectElement.prototype = new HtmlElement();
// Reset the prototype constructor
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = () => {
    return `<img src='${this.src}'/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://'),
];

for (let element of elements) console.log(element.render());
