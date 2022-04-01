import { TestBed } from '@angular/core/testing';

import { RecipesProviderService } from './recipes-provider.service';

describe('RecipesProviderService', () => {
  let service: RecipesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
