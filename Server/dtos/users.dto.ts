import { IsEmail, IsString, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  public password!: string;

  @IsString()
  public firstname!: string;

  @IsString()
  public lastname!: string;

  @IsString()
  public role!: string;

  @IsString()
  public profilePic?: string;

  @IsArray()
  public pastPicks?: string[];

  @IsArray()
  public recentContacts?: string[];
}