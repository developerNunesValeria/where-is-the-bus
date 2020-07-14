import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent implements OnInit {

  @Input() itinerary;
  
  zoom: number = 12;

  lat: number = 0;
  lng: number = 0;

  origin;
  destination;

  constructor() { }

  ngOnInit() {
    let markers = this.itinerary.markers;

    this.lat =  markers[0].lat;
    this.lng =  markers[0].lng;

    this.origin = {
      lat: markers[0].lat,
      lng: markers[0].lng
    }

    this.destination = {
      lat: markers[markers.length-1].lat,
      lng: markers[markers.length-1].lng
    }
  }
}