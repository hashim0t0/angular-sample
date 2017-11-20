import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  it('rename method', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // expect(fixture.componentInstance.renameAndJoin('りんご', 'ねこ')).toEqual('cat likes apple');
    // expect(fixture.componentInstance.renameAndJoin('りんご', 'いぬ')).toEqual('unknown likes apple');
    // expect(fixture.componentInstance.renameAndJoin('みかん', 'ねこ')).toEqual('cat likes orange');
    // expect(fixture.componentInstance.renameAndJoin('ばなな', 'ねこ')).toEqual('cat likes unknown');
    // expect(fixture.componentInstance.renameAndJoin('ばなな', 'いぬ')).toEqual('unknown likes unknown');
  }));
});
