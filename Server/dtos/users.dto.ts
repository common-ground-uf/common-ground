import { IsEmail, IsString } from 'class-validator';
import { StringExpressionOperatorReturningBoolean } from 'mongoose';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstname: string;

  @IsString()
  public lastname: string;
}