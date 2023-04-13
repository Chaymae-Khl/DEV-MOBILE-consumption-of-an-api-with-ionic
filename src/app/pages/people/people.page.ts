import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peoples!: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }
  

  ngOnInit() {
    this.peoples = this.http.get('https://swapi.dev/api/people');
    this.peoples.subscribe(data => {
      console.log('my data: ', data);
    });
  }
  openDetails(people: { url: string; }) {
    let split = people.url.split('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${peopleId}`);
  } 
}
