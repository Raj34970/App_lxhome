import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-nas',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './nas.component.html',
  styleUrl: './nas.component.css'
})
export class NasComponent {

}
