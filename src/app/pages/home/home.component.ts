import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  count: number = 0;
  increase() {
    this.count += 2;
  }
  decrease() {
    this.count--;
  }
}
