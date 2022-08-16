import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceProvidersInput{
    name: string
    telephone: string
    
}