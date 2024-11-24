// src/middleware/format-response.middleware.ts

import { Injectable, NestMiddleware, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
// import { CrudService } from 'src/crud/crud.service';

@Injectable()
export class FormatResponseMiddleware implements NestMiddleware {
  // constructor(private readonly crudService: CrudService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const logger = new Logger('MonitoringRequest', {
      timestamp: true,
    });
    res.on('finish', async () => {
      const logData = {
        method: req.method,
        path: req.url,
        ip: req.ip,
        request: req.body,
        result: res.locals.data,
        userAgent: req.headers['user-agent'] || null,
        content: res.get('content-type') || null,
        type: 'API_REQUEST',
      };

      logger.log(
        `Response: ${req.method} ${req.url} - Status: ${res.statusCode}`,
      );

      // // Save the log entry in the database
      // await this.crudService.createLog(logData);
    });

    next();
  }
}
