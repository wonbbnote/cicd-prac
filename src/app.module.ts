import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entities'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.development.env'],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host:process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      entities : [User],
      synchronize : true 
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
