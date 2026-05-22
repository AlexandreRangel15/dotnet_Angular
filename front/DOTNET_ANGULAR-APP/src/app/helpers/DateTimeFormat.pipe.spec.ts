import { TestBed } from '@angular/core/testing';
import { DateTimeFormatPipe } from './DateTimeFormat.pipe';

describe('DateTimeFormatPipe', () => {
  let pipe: DateTimeFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateTimeFormatPipe]
    });
    
    pipe = TestBed.inject(DateTimeFormatPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});