import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

// import { HEROES } from "../mock-heroes";
import {HeroService } from "../hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // 使用heroes接收HEROES数组里的数据
  // heroes=HEROES;

  // 简单声明即可
  heroes:Hero[];

  hero:Hero={
    id:1,
    name:"windstom"
  };

  // 定义一个selectHero，属性沿用Hero里的设定
  selectHero:Hero;
  onSelect(hero:Hero):void{
    this.selectHero=hero;
  }

  myGetHeroes(): void{
    // HeroService.getHeroes 方法之前返回一个 Hero[]， 现在它返回的是 Observable<Hero[]>
    this.wyyHeroService.getHeroes().subscribe(
      heroes=>this.heroes=heroes)
  }
  constructor(
    // 构造一个私有的service
    // 1. 声明了一个私有 wyyService 属性，
    // 2. 把它标记为一个 HeroService 的注入点。
    private wyyHeroService:HeroService) {}

  ngOnInit(){
    this.myGetHeroes();
  }

}
