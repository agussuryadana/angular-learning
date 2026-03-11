import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService)
  });

  it('slould be created', () => {
    expect(service).toBeTruthy();
  });

  it(('slould get users'), () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    });
  })

});
