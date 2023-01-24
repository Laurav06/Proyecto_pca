import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "La Reina Isabel II",
      subtitle: "Andrew Morton",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tadyV8LDn3Y1qAuGHaiwnzcm5C24IAMYbg&usqp=CAU",
      description: "La Historia definitiva de la vida y el legado de la Reina Isabel II."
    },
    {
      title: "Diana: su verdadera historia",
      subtitle: "Andrew Morton",
      img: "data:image/jpeg;base64,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",
      description: "La verdadera historia de la princesa."
    },
    {
      title: "EL PODER DE LAS PALABRAS.",
      subtitle: "MARIANO SIGMAN",
      img: "https://image.cdn0.buscalibre.com/633713f9d5accf18f3194362.__RSF640x640__.jpg",
      description: "Como cambiar tu cerebro (y tu vida)conversando."
    },
    {
      title: "LA PSICOLOGÍA DEL DINERO.",
      subtitle: "MARIANO SIGMAN",
      img: "https://planetadelibrosco3.cdnstatics.com/usuaris/libros/fotos/339/m_libros/portada_como-piensan-los-ricos_morgan-housel_202107271643.jpg",
      description: "Como cambiar tu cerebro (y tu vida)conversando."
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}