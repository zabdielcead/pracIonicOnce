import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker,  Marker, icon, MarkerOptions, MarkerClusterGroupOptions, MarkerClusterGroup} from 'leaflet';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  options = {};
  markerClusterData: Marker [] = [];
  markerClusterOptions: MarkerClusterGroupOptions;
  markerClusterGroup: MarkerClusterGroup;
  addressPoints = [
    [-37.8210922667, 175.2209316333, '2'],
    [-37.8210819833, 175.2213903167, '3'],
    [-37.8210881833, 175.2215004833, '3A'],
    [-37.8211946833, 175.2213655333, '1'],
    [-37.8209458667, 175.2214051333, '5'],
    [-37.8208292333, 175.2214374833, '7'],
    [-37.8325816, 175.2238798667, '537'],
    [-37.8315855167, 175.2279767, '454'],
    [-37.8096336833, 175.2223743833, '176'],
    [-37.80970685, 175.2221815833, '178'],
    [-37.8102146667, 175.2211562833, '190'],
    [-37.8088037167, 175.2242227, '156'],
    [-37.8112330167, 175.2193425667, '210'],
    [-37.8116368667, 175.2193005167, '212'],
    [-37.80812645, 175.2255449333, '146'],
    [-37.8080231333, 175.2286383167, '125'],
    [-37.8089538667, 175.2222222333, '174'],
    [-37.8080905833, 175.2275400667, '129']
  ];
  constructor() { }

  ngOnInit() {
    this.loadMapa();
    this.markerClusterData = this.generateData(1000);
  }

  loadMapa() {
    this.options = {   // mapa
      layers: [
        tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(-37.82, 175.23)
    };
  }
/*
  generateData(count: number): any {
    const data: Marker[] = [];
    for (let i = 0; i < count; i++) {
      const icons = icon({
        iconUrl: '2273e3d8ad9264b7daa5bdbf8e6b47f8.png',
        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      });
      data.push( marker([this.generateLon(), this.generateLat()]));
    }
    return data;
  }
  */

 generateData(count: number): any {
  const data: Marker[] =  [];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.addressPoints.length; i++) {
    const a = this.addressPoints[i];
    const titles = '' + a[2];
    // operator + castea a enteros
    const markerss = marker(latLng( +a[0] , +a[1]), {
      title:  titles
    });
    // markerss.bindPopup(titles);
    // this.markerClusterGroup.addLayer(markerss);
    data.push(markerss);
  }
  return data;
 }

  generateLat() { return Math.random() * 360 - 180; }
  generateLon() { return Math.random() * 180 - 90; }

  markerClusterReady(group: MarkerClusterGroup) {

    this.markerClusterGroup = group;
  }

}
