import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { routes } from '../../app.routes';
interface socialNetwork {
  name:string,
  img:string,
  url:string
}

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    CommonModule,
    RouterModule,
    // CursorGlowComponent,
    NavbarComponent
],
  templateUrl: './dashboardLayout.component.html',
  styleUrl: './dashboardLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  name:string = '<Elvis D. Quinteros S./>';
  role:string = 'Fullstack Developer';
  socialnetworks:socialNetwork[] = [
    {
      name:'facebook',
      img:'https://img.icons8.com/?size=100&id=bCMbQhDFIiGQ&format=png&color=000000',
      url:'https://www.facebook.com/elvisdavid.quinterossiles/',
    },
    {
      name:'youtube',
      img:'https://img.icons8.com/?size=100&id=19318&format=png&color=000000',
      url:'https://www.youtube.com/@elvisdavidquinterossiles566',
    },
    {
      name:'github',
      img:'https://img.icons8.com/?size=100&id=4Z2nCrz5iPY2&format=png&color=000000',
      url:'https://github.com/10ElvisDqs',
    },
  ];


  public routes = routes[0].children?.filter( (route) => route.data );

  cursorX = 0;
  cursorY = 0;

  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX - 32; // Ajuste para centrar
    this.cursorY = event.clientY - 32; // Ajuste para centrar
  }



}
