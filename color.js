class Picker {
  name;
  id;
  rootId;
  color;
  element;
  initialColor;

  constructor(id, rootId, name) {
    this.id = id;
    this.rootId = rootId;
    this.name = name;
    this.initialize();
  }

  initialize() {
    this.element = document.querySelector(this.id);
    if (this.element) {
      this.initalColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue(this.rootId.trim());
      this.color = this.initalColor;
      this.element.value = this.color.trim();
      this.addEvent();
    }
  }

  addEvent() {
    this.element.addEventListener("input", this.setColor.bind(this));
  }

  setColor() {
    document.documentElement.style.setProperty(this.rootId, this.element.value);
  }
}

const primary = new Picker("#primaryPicker", "--color");
const secondary = new Picker("#secondaryPicker", "--color-secondary");
const third = new Picker("#thirdPicker", "--color-third");
