import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../../../shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
