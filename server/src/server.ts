import express, { Application } from 'express';
import cors from 'cors';
import CategoryRouter from './routes/category.router';
import ProductRouter from './routes/product.router';
import OrderRouter from './routes/order.router';
const port = 3333

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/category', CategoryRouter);
app.use('/product', ProductRouter);
app.use('/order', OrderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});