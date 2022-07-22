import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { ContactsService } from "../services/contacts.service";
import { Contact } from "../models/contact.entity";
import { CreateContactDTO } from "../dtos/contacts.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

// @ApiTags("contacts接口")
@Controller("contacts")
export class ContactsController {
  /**
   *
   */
  constructor(private contactsService: ContactsService) {}

  @Get()
  @ApiOperation({
    description: "获取contacts列表",
    summary: "获取contacts列表",
  })
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @ApiOperation({
    description: "创建contacts",
    summary: "创建contacts",
  })
  @Post("create")
  async create(@Body() contactData: CreateContactDTO): Promise<any> {
    return this.contactsService.create(contactData);
  }

  @ApiOperation({
    description: "更新contacts",
    summary: "更新contacts",
  })
  @Put(":id/update")
  async update(@Param("id") id, @Body() contactData: Contact): Promise<any> {
    contactData.id = Number(id);
    console.log("Update #" + contactData.id);
    return this.contactsService.update(contactData);
  }

  @ApiOperation({
    description: "删除contacts",
    summary: "删除contacts",
  })
  @Delete(":id/delete")
  async delete(@Param("id") id): Promise<any> {
    return this.contactsService.delete(id);
  }
}
