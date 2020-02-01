import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPacienteComponent } from './pagina-paciente.component';


describe('PaginaPacienteComponent', () => {
  let component: PaginaPacienteComponent;
  let fixture: ComponentFixture<PaginaPacienteComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPacienteComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});