import { ArrayUnique, ArrayNotEmpty } from 'class-validator';

export class CreateGroupDto {
    @ArrayUnique()
    @ArrayNotEmpty()
    userIds! : string[]
    name! : string
}