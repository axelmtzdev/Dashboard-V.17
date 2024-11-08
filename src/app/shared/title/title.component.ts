import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input({required:true}) title!:string;
}
