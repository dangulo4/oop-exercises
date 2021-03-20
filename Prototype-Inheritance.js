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
};

// Inheritance
HtmlSelectElement.prototype = new HtmlElement();
// Reset the prototype constructor
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
