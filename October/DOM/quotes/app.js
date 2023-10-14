let citas = [
    {author: "Nelson Mandela", quote: "It always seems impossible until it's done."},
    {author: "Walt Disney", quote: "If you can dream it, you can do it."},
    {author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams."},
    {author: "Vince Lombardi", quote: "It's not whether you get knocked down, it's whether you get up."},
    {author: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower."},
    {author: "Albert Einstein", quote: "Imagination is more important than knowledge."},
    {author: "Henry Ford", quote: "Whether you think you can or think you can't, you're right."},
    {author: "Thomas Edison", quote: "I have not failed. I've just found 10,000 ways that won't work."},
    {author: "Mark Twain", quote: "The secret of getting ahead is getting started."},
    {author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world."},
    {author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken."},
    {author: "Martin Luther King Jr.", quote: "Faith is taking the first step even when you don't see the whole staircase."},
    {author: "Helen Keller", quote: "The only thing worse than being blind is having sight but no vision."},
    {author: "Ralph Waldo Emerson", quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."},
    {author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop."},
    {author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated."},
    {author: "Abraham Lincoln", quote: "In the end, it's not the years in your life that count. It's the life in your years."},
    {author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    {author: "Michael Jordan", quote: "I've failed over and over and over again in my life and that is why I succeed."},
    {author: "Winston Churchill", quote: "Success is not final, failure is not fatal, it is the courage to continue that counts."}
];

let bottonElement = document.getElementById('change-quote');
let citaElement = document.getElementById('quote')
let authorElement = document.getElementById('author')

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function changeQuote(){
    let indexAleatorio = aleatorio(0, citas.length); 
    console.log(indexAleatorio);
    citaElement.innerHTML = `"${citas[indexAleatorio].quote}"`
    authorElement.innerHTML = `"${citas[indexAleatorio].author}"`
}

changeQuote();

bottonElement.addEventListener('click', changeQuote)

