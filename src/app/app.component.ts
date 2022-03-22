import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Krowy } from './krowy';
import { KrowyService } from './krowy.service';
import { Pipe, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue']
  krowy: Krowy[] = [];
  title: any;

  constructor(private krowyService: KrowyService){}
  

  ngOnInit() {
    this.getKrowy();
  }

  

  public getKrowy(): void{
    this.krowyService.getKrowy().subscribe(
      (response: Krowy[]) => {
        this.krowy = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  
}