import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})

export class NewheaderComponent {
  @Input() progress: number = 0;
}
