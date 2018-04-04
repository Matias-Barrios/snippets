var token = Buffer.from("matias:123456").toString('base64');
console.log("token is : " + token);

var plain_text = Buffer.from(token, 'base64').toString('ascii');
console.log("Plain text is : " + plain_text);
