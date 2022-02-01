import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getPosition().subscribe((res) => {
      console.log(res);
      localStorage.setItem(
        'location',
        JSON.stringify({
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
        })
      );
    });
  }

  getPosition(): Observable<any> {
    return new Observable((observer: any) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
          observer.complete();
        },
        (error) => observer.error(error)
      );
    });
  }
}
