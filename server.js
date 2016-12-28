const express=require('express');
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, process.env.IP, () => {
	console.log(`Server started on port ${PORT}.`);
});
