
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { App } from '../auth/app.entity';
import { CreateAppInput } from '../dto/create-app.input';
import { UpdateAppInput } from '../dto/update-app.input';
import { AppService } from '../providers/app.service';

@Resolver(() => App)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => App)
  createApp(@Args('createAppInput') createAppInput: CreateAppInput) {
    return this.appService.create(createAppInput);
  }

  @Query(() => [App], { name: 'app' })
  findAll() {
    return this.appService.findAll();
  }

  @Query(() => App, { name: 'app' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.appService.findOne(id);
  }

  @Mutation(() => App)
  updateApp(@Args('updateAppInput') updateAppInput: UpdateAppInput) {
    return this.appService.update(updateAppInput.id, updateAppInput);
  }

  @Mutation(() => App)
  removeApp(@Args('id', { type: () => Int }) id: number) {
    return this.appService.remove(id);
  }
}

