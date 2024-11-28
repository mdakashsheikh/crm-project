import { PrismaService } from './../prisma/prisma.service';
import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServicesService {

  constructor(private prismaService:PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    try {
      return await this.prismaService.service.create({
        data: createServiceDto
      })
    } catch (error) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === 'P2002') {
          throw new ConflictException(`Service with name ${createServiceDto.name} already exist.`)
        }
      }

      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.prismaService.service.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
