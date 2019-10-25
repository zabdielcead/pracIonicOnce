import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, Map, geoJSON} from 'leaflet';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {
  options = {};
  constructor() {}

  ngOnInit() {
    this.loadMapa();
  }

  loadMapa() {
    this.options = {   // mapa
      layers: [
        tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 2,
      center: latLng(37, -95)
    };
  }

  onMapReady(map: Map) {
    fetch('./assets/usas/data.json').then(res => res.json())
    .then(json => {
      console.log(json);
      geoJSON(json).addTo(map);
     });
  }

}
