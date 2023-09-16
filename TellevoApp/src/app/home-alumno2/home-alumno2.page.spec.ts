import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAlumno2Page } from './home-alumno2.page';

describe('HomeAlumno2Page', () => {
  let component: HomeAlumno2Page;
  let fixture: ComponentFixture<HomeAlumno2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeAlumno2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
