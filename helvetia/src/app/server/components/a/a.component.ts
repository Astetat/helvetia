import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Server} from '../../beans/server';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'helvetia-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  @Input() server: Server | undefined;
  @Output() serverChange = new EventEmitter<any>();
  @Input() listComponent = false;
  validateLabel = true;

  constructor(private serverService: ServerService) { }
  ngOnInit(): void {
    this.serverService.getLabelValidation().subscribe(labelValidation => this.validateLabel = labelValidation);
  }

  toggleServerActive(): void {
    this.server.active = !this.server.active;
  }

  isLabelValid(): boolean {
    return this.validateLabel ? this.server.label && this.server.label.length > 4 : true;
  }

}
