class ObjectVirus {

    constructor() {
      this.size = 45;
      this.x = width;
      this.y = height - this.size;
      this.virusTypes = [virusImage]
    }

    move() {
        this.x -= 5;
    }
    
    draw() {
        // let v = this.virusTypes[0]
        let v = random(this.virusTypes);
        image(v, this.x, this.y, this.size, this.size);
    }
}