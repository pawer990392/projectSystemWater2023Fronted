import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle-components',
  templateUrl: './tittle-components.component.html',
  styleUrls: ['./tittle-components.component.css']
})
export class TittleComponentsComponent {
   @Input() title: string = '';
}
