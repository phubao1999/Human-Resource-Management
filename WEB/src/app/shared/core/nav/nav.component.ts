import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  listitems = [
    {
      icon: 'fas fa-users',
      title: 'Dashboard',
      link: '/admin/user'
    },
    {
      icon: 'fas fa-ticket-alt',
      title: 'Contact',
      link: '/admin/voucher'
    },
    {
      icon: 'fas fa-child',
      title: 'Notification',
      link: '/admin/bonus'
    },
    {
      icon: 'fas fa-address-card',
      title: 'Plan',
      link: '/admin/create-admin'
    },
    {
      icon: 'fas fa-phone',
      title: 'Policy',
      link: '/admin/contact'
    }
  ];
  activeFirst;
  language;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggle.emit();
  }

  logout() {
    // localStorage.clear();
    // this.router.navigate
  }


}
