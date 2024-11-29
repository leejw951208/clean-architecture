import { User } from '@prisma/client';
import { SignupReqDto } from '../../common/auth/dto/signup-req.dto';

export class UserEntity implements User {
  id: number | null;
  email: string;
  password: string;
  name: string;
  createdAt: Date | null;

  private constructor(email: string, password: string, name: string) {
    Object.assign(this, { email, password, name });
  }

  static create(reqDto: SignupReqDto): UserEntity {
    const { email, password, name } = reqDto;
    return new UserEntity(email, password, name);
  }
}
