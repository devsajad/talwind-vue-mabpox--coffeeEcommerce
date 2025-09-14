import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import mapboxgl from 'mapbox-gl'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function createCustomMarker(map, coords, className) {
  const el = document.createElement('div')
  el.className = className

  const marker = new mapboxgl.Marker(el).setLngLat(coords).addTo(map)

  return marker
}
