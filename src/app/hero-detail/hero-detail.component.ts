// 为了接收URL上的参数ID值做准备
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common"

import { HeroService } from "../hero.service";


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

  constructor(
    // ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。
    private route:ActivatedRoute,
    // HeroService 从远端服务器获取英雄数据，本组件将使用它来获取要显示的英雄。
    private heroService:HeroService,
    // location 是一个 Angular 的服务，用来与浏览器打交道
    private location:Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后
    // paramMap 是一个从 URL 中提取的路由参数值的字典
    // JavaScript 的 (+) 操作符会把字符串转换成数字
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero=>this.hero=hero);
  }

  goBack():void{
    this.location.back();
  }

}
