import { Component, OnInit } from '@angular/core';
import { MapgenService } from '../mapgen.service';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
  public isCollapsed:boolean = true;
  public isCollapsed2:boolean = true;
  public isCollapsed3:boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  public myStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#ff4400"
        },
        {
          "saturation": -100
        },
        {
          "lightness": -4
        },
        {
          "gamma": 0.72
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon"
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#0077ff"
        },
        {
          "gamma": 3.1
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "hue": "#00ccff"
        },
        {
          "gamma": 0.44
        },
        {
          "saturation": -33
        }
      ]
    },
    {
      "featureType": "poi.park",
      "stylers": [
        {
          "hue": "#44ff00"
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "hue": "#007fff"
        },
        {
          "gamma": 0.77
        },
        {
          "saturation": 65
        },
        {
          "lightness": 99
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "gamma": 0.11
        },
        {
          "weight": 5.6
        },
        {
          "saturation": 99
        },
        {
          "hue": "#0091ff"
        },
        {
          "lightness": -86
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": -48
        },
        {
          "hue": "#ff5e00"
        },
        {
          "gamma": 1.2
        },
        {
          "saturation": -23
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "saturation": -64
        },
        {
          "hue": "#ff9100"
        },
        {
          "lightness": 16
        },
        {
          "gamma": 0.47
        },
        {
          "weight": 2.7
        }
      ]
    }
  ];

  title: string = 'diseases';
  lat: number = 39.5000;
  lng: number = -97.380979;
  zoom: number = 4;


  constructor(
    private mapGenService: MapgenService
  ){}

  ngOnInit() {}



}
