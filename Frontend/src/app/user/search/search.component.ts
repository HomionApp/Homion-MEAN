import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  isChef = false;
  showFilter = false;
  searchQuery!: string;
  searchChanged: Subject<string> = new Subject<string>();
  searchResults!: string[];
  searchedProducts!: any[];
  searchedChefs!: any[];

  constructor(private userService: UserService) {
    this.searchChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((search) => {
        this.searchQuery = search;
        this.search();
      });
  }

  ngOnInit(): void {}

  changed(e: any) {
    this.searchChanged.next(this.searchQuery);
  }

  search() {
    this.userService.search(this.searchQuery).subscribe((res) => {
      if (res.status == 200) {
        this.searchedProducts = res.data.products;
        this.searchedChefs = res.data.chefs;
      }
    });
  }
}
