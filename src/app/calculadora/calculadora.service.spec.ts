import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Sumar', function () {
  it('10 + 15 debe ser 25', TestBed.inject(CalculadoraService => {
    expect(CalculadoraService.sumar(10, 15)).toBe(25);
  }));
});


describe('Dividir', function () {
  it("2 dividido por 2 debe ser 1", TestBed.inject(CalculadoraService => {
    expect(CalculadoraService.dividir(2, 2)).toBe(1);
  }));
  it("6 dividido por 0 debe generar una Excepción", TestBed.inject(CalculadoraService => {
    expect(function () {
      CalculadoraService.dividir(6, 0);
    }).toThrowError(Error, 'División por cero');
    expect(function () {
      CalculadoraService.dividir(6, 0);
    }).toThrowError('División por cero');
    expect(function () {
      CalculadoraService.dividir(6, 0);
    }).toThrowError(Error);
    expect(function () {
      CalculadoraService.dividir(6, 0);
    }).toThrowError(/División por cero/);
    
  }));
});
