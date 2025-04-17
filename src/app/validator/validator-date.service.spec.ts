import { TestBed } from '@angular/core/testing';
import { ValidatorDateService } from './validator-date.service';

describe('ValidatorDateService', () => {
  let service: ValidatorDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validate_date', () => {
    it('should return true for valid date in dd.mm.yyyy format', () => {
      expect(service.validate_date('20.04.2026')).toBe(true);
    });

    it('should return true for valid date in dd-mm-yyyy format', () => {
      expect(service.validate_date('20-04-2026')).toBe(true);
    });

    it('should return true for valid date in dd/mm/yyyy format', () => {
      expect(service.validate_date('20/04/2026')).toBe(true);
    });

    it('should return false for invalid date (invalid day)', () => {
      expect(service.validate_date('32.04.2026')).toBe(false);
    });

    it('should return false for invalid date (invalid month)', () => {
      expect(service.validate_date('20.13.2026')).toBe(false);
    });

    it('should return false for invalid date (invalid year)', () => {
      expect(service.validate_date('20.04.100')).toBe(false);
    });

    it('should return false for invalid date (wrong number of parts)', () => {
      expect(service.validate_date('20.04')).toBe(false);
      expect(service.validate_date('20.04.2026.12')).toBe(false);
    });

    it('should return false for invalid date (non-numeric parts)', () => {
      console.log("pupupu");
      expect(service.validate_date('aa.bb.cccc')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(service.validate_date('')).toBe(false);
    });

    it('should return false for null', () => {
      expect(service.validate_date(null as any)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(service.validate_date(undefined as any)).toBe(false);
    });

  });
});