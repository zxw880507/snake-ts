class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  // get coords
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  // generate coords randomly
  change() {
    const left = Math.floor(Math.random() * 30) * 10;
    const top = Math.floor(Math.random() * 30) * 10;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }
}

export default Food;
