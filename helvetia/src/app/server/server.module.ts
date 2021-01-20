import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { AComponent } from './components/a/a.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BComponent } from './components/b/b.component';
import {ServerService} from './services/server.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AComponent, LayoutComponent, BComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    ServerService
  ]

})
export class ServerModule { }
