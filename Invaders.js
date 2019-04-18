class Invader {
  constructor() {
    this.id = "i-" + Math.round(Math.random() *1000000);
    this.type = 'homebrew';
    this.frames = ["-6px -515px", "-6px -545px"];  // cadrele sprite-ului
    this.x = 0;  // random() 0.. width window
    this.y = 0;
    this.w = 40;
    this.h = 30;
    this.direction_h = "right";
  }

  addToMap(){            // adaugam elementul pe harta
    window.map.innerHTML += `<div id="${this.id}">` +
                            this.render()+
                            `</div>`
    this.live();
  }

  refresh(){
    document.getElementById(this.id).innerHTML = this.render();
  }

  live(){
    var that = this;
    setInterval(function(){
      that.frames.push(that.frames.shift() );

      if(that.direction_h == "right"){
        that.moveRight();
      }
      if(that.direction_h == "left"){
        that.moveLeft();
      }



      that.refresh();
    },50);
  }

  ///////////  movement

  moveRight(){
    if (this.x > window.innerWidth - this.w) {
      this.direction_h = "left";
      this.moveDown();
    }
    this.x+=5;
  }

  moveLeft(){
    if (this.x <= 0) {
      this.direction_h = "right";
      this.moveDown();
    }
    this.x-=5;
  }

  moveDown(){
    this.y += 10;
  }

  render(){              //  redesenam elementul
    let html = `
    <div class="invader" style="width:${this.w}px; left:${this.x}px;top:${this.y}px; height:${this.h}px;background-position: ${this.frames[0]};"></div>
    `;
    return html;
  }

}
