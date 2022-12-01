import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @ViewChild('navbar') navbar: any; 
  defaultFragment: string = "home";
  fragment: string = this.defaultFragment;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment ?? this.defaultFragment;
    });

    /* const nativeElement = this.navbar.nativeElement;
    console.log(nativeElement); */
  }

}
