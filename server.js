import app from './app';

const port = 3001;
app.listen(port, ()=>{
  console.log(`Listen in port ${port}`);
  console.log(`http://localhost:${port}`);
});

