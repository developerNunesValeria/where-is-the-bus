import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BusLine, Marker } from 'src/app/core/types/bus-line.types';

@Injectable({
  providedIn: 'root'
})

export class BusLinesService {

  constructor(
    private http: HttpClient
  ) { }

  api = environment.apiUrl;

  getAll(t): Observable<BusLine[]> {
    const a = "nc";
    const p = "%";

    return this.http.get(this.api, {
      params: {
        a, p, t
      }
    }).pipe(map((response: any) => {
      let lines = response;

      let busLines: BusLine[] = [];

      lines.map(line => {
        const busline: BusLine = {
          id: line.id,
          code: line.codigo,
          name: line.nome
        }
        busLines.push(busline);
      });

      return busLines;
    }));
  }

  getItinerary(line): Observable<any> {
    const a = "il";
    const p = line.id;

    return this.http.get(this.api, {
      params: {
        a, p
      }
    }).pipe(map((response: any) => {
      let markers: Marker[] = [];
      for (var index in response) {
        if (response[index].lat) {
          const maker: Marker = {
            lat: parseFloat(response[index].lat),
            lng: parseFloat(response[index].lng),
            label: index
          }
          markers.push(maker);
        }
      }
      return markers;
    }));
  }
}
