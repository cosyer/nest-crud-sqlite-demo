import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDTO {
  @ApiProperty({
    example: "c",
    description: "firstName",
  })
  @IsNotEmpty({
    message: "firstName不能为空",
  })
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly city: string;
  readonly country: string;
}

export class EditContactDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly city: string;
  readonly country: string;
}
