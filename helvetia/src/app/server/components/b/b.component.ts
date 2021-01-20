import {Component, Input, OnInit, Output} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {Server} from '../../beans/server';

@Component({
  selector: 'helvetia-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  @Input() servers: Server[] = [];
  validateLabel = false;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getLabelValidation().subscribe(labelValidation => this.validateLabel = labelValidation);
  }

  toggleLabelValidation(): void {
    this.validateLabel = !this.validateLabel;
    this.serverService.setLabelValidation(this.validateLabel);
  }

}
