import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const body = context.switchToHttp().getRequest().body;
    return body.user === process.env.user && body.pass === process.env.pass;
  }
}
