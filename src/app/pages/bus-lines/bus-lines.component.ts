import { Component, OnInit, ViewEncapsulation, ViewChild, EventEmitter } from '@angular/core';

import { BusLinesService } from 'src/app/core/services/bus-lines.service';
import { BusLine } from 'src/app/core/types/bus-line.types';

@Component({
  selector: 'app-bus-lines',
  templateUrl: './bus-lines.component.html',
  styleUrls: ['./bus-lines.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BusLinesComponent implements OnInit {

  isLoading: Boolean = false;
  error: String = '';

  breadcrumb = [
    { title: 'Linhas de ônibus e Lotação', url: '/' }
  ];

  busListLines: BusLine[];
  capacityListLines: BusLine[];

  itinerary =  {
    bus: {
      data: {},
      show: false
    },
    capacity: {
      data: {},
      show: false
    }
  };

  constructor(
    private service: BusLinesService
  ) { }

  ngOnInit() {
    this.getBusLines();
    this.getCapacityLines();
  }

  getBusLines() {
    this.isLoading = true;
    this.service.getAll('o').subscribe((data: BusLine[]) => {
      this.busListLines = data;
      this.isLoading = false;
    }, () => {
      this.error = "Erro ao carregar linhas de ônibus!";
      this.isLoading = false;
    });
  }

  getCapacityLines() {
    this.isLoading = true;
    this.service.getAll('l').subscribe((data: BusLine[]) => {
      this.capacityListLines = data;
      this.isLoading = false;
    }, () => {
      this.error = "Erro ao carregar linhas de lotação!";
      this.isLoading = false;
    });
  }

  onItineraryBusClick(event) {
    const line = event.row;
    this.getItinerary(line, 'bus');
  }

  onItineraryCapacityClick(event) {
    const line = event.row;
    this.getItinerary(line, 'capacity');
  }

  getItinerary(line, type) {
    this.isLoading = true;
    this.service.getItinerary(line).subscribe((markers) => {
      this.itinerary[type] = {
          data: { 
            codigo: line.codigo,
            name: line.name,
            markers: markers
          }, 
          show: true
      };
      this.isLoading = false;
    }, () => {
      this.error = "Erro ao buscar etinerário!";
      this.isLoading = false;
    });
  }

}