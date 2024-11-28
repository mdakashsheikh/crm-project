import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ServicesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
