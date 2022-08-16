import { Module } from "@nestjs/common"
import { HostService } from "../providers/host.service";
import { HostResolver } from "../resolvers/host.resolvers";


@Module({
    providers: [HostService, HostResolver],
    
    imports: []

})

export class HostModule{}