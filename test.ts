import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenSelectDirective } from './diretiva.ts';
import { Component } from '@angular/core';

@Component({
  template: `
    <div appOpenSelect>
      Content
    </div>
  `
})
class TestComponent { }

describe('OpenSelectDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, OpenSelectDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new OpenSelectDirective();
    expect(directive).toBeTruthy();
  });

  it('should trigger the open function on click', () => {
    spyOn(component, 'open').and.callThrough();
    const button = fixture.debugElement.query(By.directive(OpenSelectDirective));
    button.triggerEventHandler('click', null);
    expect(component.open).toHaveBeenCalled();
  });
});
