import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  @Input() chef: any;
  isFavourite = false;
  currentRate = 4.5;
  constructor() {}

  ngOnInit(): void {}
}
