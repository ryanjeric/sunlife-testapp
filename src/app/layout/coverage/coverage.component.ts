import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss'],
})
export class CoverageComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  coverage:any = {};
  ngOnInit() {
    this.coverage = this.apiService.getCoverage();
  }

}
