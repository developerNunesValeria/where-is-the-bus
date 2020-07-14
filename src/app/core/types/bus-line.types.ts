
export interface BusLine {
  id: number;
  code: string;
  name: string;
}

export interface Marker {
	lat: number;
	lng: number;
	label?: string;
}