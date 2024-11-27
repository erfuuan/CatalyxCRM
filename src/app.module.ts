import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { LeadsModule } from './leads/leads.module';
import { SalesModule } from './sales/sales.module';
import { MarketingModule } from './marketing/marketing.module';
import { TasksModule } from './tasks/tasks.module';
import { SupportModule } from './support/support.module';
import { ReportsModule } from './reports/reports.module';
import { ProductsModule } from './products/products.module';
import { BillingModule } from './billing/billing.module';
import { DocumentsModule } from './documents/documents.module';
import { GraphqlModule } from './graphql/graphql.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RedisService } from './redis/redis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config'; // Optional if you're using .env

@Module({
  imports: [
    // ConfigModule.forRoot(), // Optional if you're using env variables
    TypeOrmModule.forRoot({
      type: 'postgres', // Or another database type like 'mysql', 'sqlite', etc.
      host: 'localhost', // Replace with your DB host
      port: 5432, // Replace with your DB port
      username: 'postgres',
      password: 'password',
      database: 'catalyx_crm',
      entities: [User], // Add your entities here
      synchronize: true, // Enable sync for dev (not recommended in prod)
    }),
  UsersModule, AuthModule, CustomersModule, LeadsModule, SalesModule, MarketingModule, TasksModule, SupportModule, ReportsModule, ProductsModule, BillingModule, DocumentsModule, GraphqlModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule {}
