import express, { Request, Response, NextFunction } from 'express';

const app = express();

// polymorphism - since middleware1, middleware2 adhere to a single interface of request, response, next, they are exercising "polymorphism"
const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log('middleware1');
  next();
};

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log('middleware2');
  next();
};

app.use(middleware1);
app.use(middleware2);
