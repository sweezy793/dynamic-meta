import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { USERS } from 'src/assets/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users = USERS;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let id = data['id'];
      this.user = this.users.filter((el) => el.id == id)[0];

      //updating title for each user
      this.title.setTitle(this.user.name);
      //updating meta tags for each user
      this.meta.updateTag({ name: 'title', content: this.user.name });
      this.meta.updateTag({
        name: 'description',
        content: this.user.email,
      });
      //Updating meta tags for social media previews
      this.meta.updateTag({ property: 'og:title', content: this.user.name });
      this.meta.updateTag({
        property: 'og:description',
        content: this.user.email,
      });
    });
  }
}
