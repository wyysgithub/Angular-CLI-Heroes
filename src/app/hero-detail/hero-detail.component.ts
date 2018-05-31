
// 导入Input装饰器
import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 使用 @Input 装饰器 让 hero 属性可以在外部的 HeroesComponent 中绑定
  // 通过 <app-hero-detail [hero]="selectHero"></app-hero-detail> 的方式
  @Input() hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
