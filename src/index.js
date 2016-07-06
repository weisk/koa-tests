import koa from 'koa';

const app = koa();

app.use(function * responseTime(next){
  let start = new Date();
  yield next;
  let end = (new Date()) - start;
  this.set('X-Response-Time', `${end}ms`);
});

app.use(function * logger(next){
  let start = new Date();
  yield next;
  let end = (new Date()) - start;
  console.log('%s %s %s %sms',
    this.method,
    this.originalUrl,
    this.status,
    end
  );
});

app.use(function * contentLength(next){
  yield next;
  this.set('Content-Length', this.body.length);
});

app.use(function * body(next) {
  yield next;
  this.body = 'Heyyyy';
});

app.listen(1337);
