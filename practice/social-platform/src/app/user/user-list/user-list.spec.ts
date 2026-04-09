import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import { UserList } from './user-list';
import { vi } from 'vitest';
import { of } from 'rxjs';

describe('UserList', () => {
  let component: UserList;
  let fixture: ComponentFixture<UserList>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserList);
    component = fixture.componentInstance;
    await fixture.whenStable();

    userService = TestBed.inject(UserService);

    vi.spyOn(userService, 'getUsers')
      .mockReturnValue(of([
        { id: 1, name: 'Agus' },
        { id: 2, name: 'Surya' }
      ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserService on init',() => {
    fixture.detectChanges();
    expect(userService).toHaveBeenCalled()
  })
});
