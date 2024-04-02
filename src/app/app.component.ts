import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { Customer, customers } from '../model/customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxDataGridModule, DxButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'color-grid-app';
  datasource: Customer[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.datasource = customers;
  }

  addColor(e: any): void{
    if (e.rowType === 'data' && e.column.dataField === "state") {
      const state = e.data.state;

      switch (state) {
        case 'Arkansas':
          /*OPTION #1 */
          e.cellElement.style.cssText = "background-color: #FFFF00";
          break;
        case 'Georgia':
          /*OPTION #2 */
          e.cellElement.className = 'stateGeorgia';
          break;
        case 'Minnesota':
          /*OPTION #3 */
          e.cellElement.classList.add('stateMinnesota');
          break;
        default:
          break;
      }
    }
  }
}
