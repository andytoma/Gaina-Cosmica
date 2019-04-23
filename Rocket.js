class Rocket {
  constructor() {
    this.id = "r-" + Math.round(Math.random() *1000000);
    this.type = 'commodore';
    this.frames = ["-53px -813px"];  // cadrele sprite-ului
    this.x = 0;  // random() 0.. width window
    this.y = 0;
    this.w = 15;
    this.h = 20;
  }

  addToMap(){            // adaugam elementul pe harta
    window.map.innerHTML += `<div id="${this.id}">` +
                            this.render()+
                            `</div>`
  }



  refresh(){
    document.getElementById(this.id).innerHTML = this.render();
  }



  live(){
    var that = this;
    setInterval(function(){


      for (var index in invaders) {
      // verificam daca se ciocneste

        if( touch(
            window[that.id].firstElementChild,
            window[invaders[index].id].firstElementChild
          )){
            invaders[index].die();
          }
        }
      that.moveUP();
      that.refresh();
    },25);
  }


  moveUP(){
    this.y-=10;
  }




  render(){              //  redesenam elementul
    let html = `
    <div class="rocket" style="width:${this.w}px; left:${this.x}px;top:${this.y}px; height:${this.h}px;background-position: ${this.frames[0]};"></div>
    `;
    return html;
  }

}
