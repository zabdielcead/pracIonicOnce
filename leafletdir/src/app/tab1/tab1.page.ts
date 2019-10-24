import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker} from 'leaflet';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // https://github.com/Asymmetrik/ngx-leaflet
  // https://github.com/Asymmetrik/ngx-leaflet-tutorial-plugins/tree/master/heatmap.js
  options = {};
  layersControl = {};
  layers = {};



  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.options = {   // mapa
      layers: [
        tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 2,
      center: latLng(46.879966, -121.726909)
    };
    this.layersControl = {  // opciones del menu
      baseLayers: {
        'Open Street Map': tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png',
         { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '...' })
      },
      overlays: {
        'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
        'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
      }
    };

    this.layers = [
      circle([ 46.95, -122 ], { radius: 5000 }),
      polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
      marker([ 46.879966, -121.726909 ])
  ];
  }

}
