import { Component, OnInit } from '@angular/core';
import { ValService } from 'src/app/services/val.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  values:any;
  constructor(private val: ValService) { }

  ngOnInit(): void {
    this.val.getvalue().subscribe(response =>{
      this.values = response;
      
    }, error =>{
      console.log("Your code is shit");
    })
  }

}
