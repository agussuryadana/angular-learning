import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
