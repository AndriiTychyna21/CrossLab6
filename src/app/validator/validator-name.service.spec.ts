import { TestBed } from '@angular/core/testing';
import { ValidatorNameService } from './validator-name.service';

describe('NameValidatorService', () => {
  let service: ValidatorNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorNameService);
  });

  it('should instantiate the service successfully', () => {
    expect(service).toBeTruthy();
  });

  describe('validate_name method behavior', () => {

    it('should validate a name that starts with a capital letter', () => {
      expect(service.validate_name('John')).toBeTrue();
    });

    it('should accept a name that begins with a number', () => {
      expect(service.validate_name('8thHero')).toBeTrue();
    });

    it('should validate name with digits after a valid first character', () => {
      expect(service.validate_name('X99')).toBeTrue();
    });

    it('should invalidate a name beginning with a lowercase character', () => {
      expect(service.validate_name('michael')).toBeFalse();
    });

    it('should fail validation for name containing dot', () => {
      expect(service.validate_name('M.Jones')).toBeFalse();
    });

    it('should reject a name that contains an exclamation mark', () => {
      expect(service.validate_name('Nina!Storm')).toBeFalse();
    });

    it('should detect and reject usage of the @ symbol', () => {
      expect(service.validate_name('M@rio')).toBeFalse();
    });

    it('should not validate a string with multiple restricted symbols', () => {
      expect(service.validate_name('Z#ar@go!na')).toBeFalse();
    });

    it('should return false for an empty input string', () => {
      expect(service.validate_name('')).toBeFalse();
    });

    it('should fail when name starts with a forbidden character', () => {
      expect(service.validate_name('#player')).toBeFalse();
    });

    it('should return false for names starting with whitespace', () => {
      expect(service.validate_name(' Player')).toBeFalse();
    });

  });
});
