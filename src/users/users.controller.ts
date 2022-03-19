import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user/create-user.command';
import { GetUserQuery } from './queries/get-user/get-user.query';
import { ListUsersQuery } from './queries/list-users/list-users.query';
import { UpdateUserCommand } from './commands/update-user/update-user.command';
import { DeleteUserCommand } from './commands/delete-user/delete-user.command';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus : CommandBus,
    private readonly queryBus : QueryBus,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(createUserDto))
  }

  @Get()
  findAll() {
    return this.queryBus.execute(new ListUsersQuery())
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetUserQuery(id))
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.commandBus.execute(new UpdateUserCommand(id, updateUserDto))
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteUserCommand(id))
  }
}
