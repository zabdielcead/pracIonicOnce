import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, Map, geoJSON, HexbinLayerConfig} from 'leaflet';
import { randomNormal } from 'd3';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  options: any = {};
  hexbinData: [ number, number ][] = [];
  hexbinOptions: HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'tomato' ] };
  constructor() {}
  ngOnInit() {
    this.loadMapa();
    this.generateHexbinData();
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

  generateHexbinData() {

    this.getDatos();
  }

  getDatos(): any {

    fetch('./assets/usas/mex.json').then(res => res.json())
    .then(json => {
      console.log(json);
      this.getPoints(json.features);
     });

  }


  getPoints(arrayPoints: any) {
    console.log('json latlng = ', arrayPoints);
    let conta = 0;
    for (const entry of arrayPoints) {
      if (conta === 100) {
        break;
      }
      /*const objLatLong = {
        lat:  entry.geometry.coordinates[0],
        long:  entry.geometry.coordinates[1]
      };
      coordinatesGeo.push(objLatLong);
      */
      this.hexbinData.push(    [entry.geometry.coordinates[0], entry.geometry.coordinates[1]]  );
      conta ++;
    }

  }

/*
  generateSeries(skew: number) {

    const data: [ number, number ][] = [];

    for (let i = 0; i < 1000; i++) {
      data.push([ this.generateLon() + skew, this.generateLat() ]);
    }
    console.log('data es = ', data);
    return data;
  }

  generateLat(): number {
      const dispe: any = randomNormal(this.options.center.lat) ;
      return dispe;
  }

  generateLon(): number {
    const dispe: any = randomNormal(this.options.center.lng) ;
    return dispe;
 }
*/

}
