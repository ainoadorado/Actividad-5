import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  Titulo: string = "";
  Imagen: string = "";
  Cuerpo: string = "";
  Fecha: string = "";
  arrNoticias: Noticia[] = [];

  constructor() {
    this.arrNoticias = [{ Titulo: 'Los temporales abren la tierra en Galicia y revelan cientos de restos romanos bajo chalés de veraneo', Imagen: 'https://imagenes.elpais.com/resizer/kwRs12NzyBjb7j5EHGZZ01JiXFU=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VYTZYC6IP5DT5JS4NFBWVEBLPQ.jpg', Cuerpo: 'El mismo temporal que entre Nochevieja y Año Nuevo destrozó una fuente de Antonio Palacios en Mondariz-Balneario y derrumbó unos 1.000 metros cuadrados de la muralla de Valença do Minho, en la frontera lusa con Galicia, abrió la tierra en el municipio pontevedrés de Nigrán. Y así reveló un filón de tesoros sepultados por el urbanismo costero y el desinterés administrativo en el siglo pasado. El primero que se dio cuenta de que el acantilado de la península de O Castro (Panxón, Nigrán) se había desplomado dejando ver su alma antigua fue, precisamente, un vecino, arqueólogo y profesor de instituto que pasaba por allí...', Fecha: '20/01/2023' },

    { Titulo: 'Una ruta alrededor de Sanxenxo: playas, pazos, gastronomía, naturaleza, arte... Y al irse, morriña', Imagen: 'https://imagenes.elpais.com/resizer/E54PCJ7KuodQ8ZcU_TXBeMbwcug=/828x466/filters:focal(1026x829:1036x839)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/EECHNGPIGZATLOGUFZSWCU33N4.jpg', Cuerpo: 'Situado en uno de los extremos más occidentales de la margen izquierda de la ría de Pontevedra, Sanxenxo es, en muchos sentidos, a Galicia lo que Santander es a Cantabria o San Sebastián al País Vasco: una ciudad costera, con una estupenda oferta gastronómica y unas magníficas playas que, en verano, atraen a un turismo ávido de sol y arena. Pero cualquier momento se antoja bueno para acercarse a este rincón gallego e invertir aquí al menos un fin de semana...', Fecha: '08/02/2023' },
    ]

  }

  ngOnInit(): void {

  }


  addNoticia(): void {
    let Noticia: Noticia = {
      Titulo: this.Titulo,
      Imagen: this.Imagen,
      Cuerpo: this.Cuerpo,
      Fecha: this.Fecha
    }

    if (this.Titulo && this.Imagen && this.Fecha && this.Cuerpo !== "") {
      this.arrNoticias.push(Noticia);
      this.Titulo = "";
      this.Imagen = "";
      this.Cuerpo = "";
      this.Fecha = "";
    }

    else {
      alert('Completa todo los datos de la noticia')
    }


  }

  cargarNoticias(): void {
    this.arrNoticias.forEach(Noticia => {

    })
  }

}

