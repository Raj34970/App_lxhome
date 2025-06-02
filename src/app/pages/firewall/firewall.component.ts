import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-firewall',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './firewall.component.html',
  styleUrl: './firewall.component.css'
})
export class FirewallComponent {

}
