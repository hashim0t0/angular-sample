import { Component, OnInit, trigger, state, style, transition, animate, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('displayState', [
      state('display', style({opacity: 1})),
      state('none', style({opacity: 0})),
      transition('none => display', animate('800ms ease-in-out')),
      transition('display => none', animate('800ms ease-in-out'))
    ]
  )]
})
export class CardComponent implements OnInit {
  // 遅延時間(msec)
  @Input()
  delay: number;
  // スクロールバー位置
  @Input()
  scrollPosition: number;
  // カード表示状態
  public displayState = 'none';
  /**
   * コンストラクタ
   */
  constructor() { }
  /**
   * 初期処理
   */
  ngOnInit() {
  }
  /**
   * スクロールイベント
   * @param event イベント
   */
  @HostListener('window:scroll', ['$event'] )
  onScroll(event) {
    // 現在のスクロール位置を取得
    const currentPos = event.srcElement.scrollingElement.scrollTop;
    // 現在位置が指定された位置を超えていた場合
    if (currentPos > this.scrollPosition) {
      // カードが非表示の場合
      if (this.displayState === 'none') {
        // 指定された分遅延させてから表示
        setTimeout(() => {
          this.displayState = 'display';
        }, this.delay);
      }
    // 現在位置が指定された位置未満
    } else {
      // カードが表示されている場合
      if (this.displayState === 'display') {
        // 指定された分遅延させてから非表示
        setTimeout(() => {
          this.displayState = 'none';
        }, this.delay);
      }
    }
  }
}
