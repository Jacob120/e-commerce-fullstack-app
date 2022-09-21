import { Users } from './user.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new Users()).toBeDefined();
  });
});
