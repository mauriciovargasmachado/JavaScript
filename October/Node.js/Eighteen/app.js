const url = new URL('https://www.example.com/test?order=views&levels=1');

console.log(url.hostname);

console.log(url.pathname);

console.log(url.searchParams)

console.log(url.searchParams.get('order'));