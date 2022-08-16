import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHostInput{
    name: string
    password: string
    telephone: string
}