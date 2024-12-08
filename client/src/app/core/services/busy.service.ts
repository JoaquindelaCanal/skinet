import { Injectable } from '@angular/core';
import { loadingInterceptor } from '../interceptors/loading.interceptor';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  loading = false;
  busyRequestCount = 0;

  constructor() { }

  busy() {
    this.busyRequestCount++;
    this.loading = true;
  }

  idle() {
    this.busyRequestCount--;

    if(this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.loading = false;
    }
  }
}
