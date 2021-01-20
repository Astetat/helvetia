import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {Server} from '../../beans/server';
import {take} from 'rxjs/operators';

@Component({
  selector: 'helvetia-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  servers: Server[];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getServers().pipe(take(1)).subscribe(servers => {
      this.servers = servers;
    });
  }

}
