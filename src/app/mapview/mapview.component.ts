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
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
{
"saturation": 36
},
{
"color": "#000000"
},
{
"lightness": 40
}
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
{
"visibility": "on"
},
{
"color": "#000000"
},
{
"lightness": 16
}
]
},
{
"featureType": "all",
"elementType": "labels.icon",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [
{
"color": "#000000"
},
{
"lightness": "-14"
},
{
"saturation": "-28"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 17
},
{
"weight": 1.2
}
]
},
{
"featureType": "administrative",
"elementType": "labels.text",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "administrative.country",
"elementType": "geometry.stroke",
"stylers": [
{
"visibility": "on"
},
{
"color": "#ff0000"
},
{
"saturation": "-100"
},
{
"lightness": "28"
},
{
"weight": "0.68"
},
{
"gamma": "0.47"
}
]
},
{
"featureType": "administrative.province",
"elementType": "geometry.stroke",
"stylers": [
{
"visibility": "on"
},
{
"lightness": "66"
},
{
"gamma": "0.47"
},
{
"weight": "0.68"
}
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
{
"color": "#0f3c61"
},
{
"lightness": "-3"
},
{
"saturation": "-47"
}
]
},
{
"featureType": "landscape",
"elementType": "geometry.stroke",
"stylers": [
{
"visibility": "off"
},
{
"lightness": "54"
},
{
"gamma": "4.95"
},
{
"saturation": "-74"
},
{
"color": "#ffffff"
}
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 21
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 17
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 29
},
{
"weight": 0.2
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 18
}
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 16
}
]
},
{
"featureType": "transit",
"elementType": "geometry",
"stylers": [
{
"color": "#000000"
},
{
"lightness": 19
}
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
"color": "#0f3c61"
},
{
"lightness": "9"
},
{
"saturation": "-3"
},
{
"gamma": "0.58"
}
]
}
]

  title: string = 'diseases';
  lat: number = 31.5000;
  lng: number = -97.380979;
  zoom: number = 4;
  iconUrl: string = "../../assets/images/severe-risk.png";
  userLat: number;
  userLong: number;

  constructor(
    private mapGenService: MapgenService,
  ){}

  ngOnInit() {
    this.mapGenService.generateMap().subscribe(data => {
        if(data.success){
          console.log(data);
        } else {
          console.log("Ya dun fuked up")
        }
      });

    navigator.geolocation.getCurrentPosition((pos)=>{
      console.log(pos);
      this.userLat = pos.coords.latitude;
      this.userLong = pos.coords.longitude;
    })
  }
}
