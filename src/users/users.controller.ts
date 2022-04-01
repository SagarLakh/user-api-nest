import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
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
  async create(@Body() userDto: UserDto) {
    return await this.commandBus.execute(new CreateUserCommand(userDto))
  }

  @Get()
  async findAll() : Promise<UserDto[]> {
    return await this.queryBus.execute(new ListUsersQuery())
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<UserDto> {
    return await this.queryBus.execute(new GetUserQuery(id))
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return await this.commandBus.execute(new UpdateUserCommand(id, updateUserDto))
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.commandBus.execute(new DeleteUserCommand(id))
  }
}
