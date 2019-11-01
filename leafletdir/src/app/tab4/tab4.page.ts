import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, Map, geoJSON, HexbinLayerConfig} from 'leaflet';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  options = {};
  layersControlOptions = {};
  playing = true;
  hexbinData: [ number, number ][] = [];
  private leafletPingObserver: Observer<any>;
  pingOptions = {};
  constructor() { }

  ngOnInit() {
    // this.getDatos();
    this.loadMapGeo();
  }

  loadMapGeo() {
    this.options = {   // mapa
      layers: [
        tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(37, -95)
    };
/*
    this.pingOptions = {
      radius : 12,
      opacity: 0.5,
      duration: 100,
      // colorScaleExtent: [ 1, undefined ],
      radiusScaleExtent: [ 1, undefined ],
      // colorDomain: null,
      // radiusDomain: null,
      // colorRange: [ '#f7fbff', '#08306b' ],
      radiusRange: [ 5, 12 ],
      pointerEvents: 'all'
    };
*/
    this.pingOptions = {
      duration: 800,
      fps: 32,
      opacityRange: [1, 0],
      radiusRange: [ 10, 50 ]
    };


  }

  setLeafletPingObserver(observer: Observer<any>) {
    this.leafletPingObserver =  observer;
    // Start the ping loop
    setTimeout(this.generatePings.bind(this), 1000);
  }

  private generatePings() {

      this.leafletPingObserver.next({
        data: [-100.116906179450595 , 25.827675827899448],
        cssClass: 'ping-blue'
      });

      setTimeout(this.generatePings.bind(this), 1000);
  }

}
