var quotes = [
  'Admire someone else\'s beauty without questioning your own.',
  'When we deny our emotions, we become a slave to them. It\'s only when we acknowledge them that we can put them in their rightful place.',
  'So many years of education yet nobody ever taught us how to love ourselves and why it\'s important.',
  'It\'s better to love and lose than never love at all.',
  'Spend a little more time trying to make something of yourself and a little less time trying to impress people.',
  'Get piercings, remove them, make friends, move on, travel, stay in. Find what kind of person you are and love that person.',
  'Our purpose is never to get away from hard things. It\'s to find the hard things worth doing.',
  'Fill your life with adventures, not things. Have stories to tell, not stuff to show.',
  'Be strong, be weak, be whoever you want to be.',
  'You are enough.',
  'Do more things that make you forget to check your phone.',
  'Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place.',
  'Act as if it were impossible to fail.',
  'People wait all week for Friday, all year for summer, and all of life for happiness.',
  'Be the reason someone smiles today.',
  'Happiness looks good on you.',
  'The best view comes after the hardest climb.',
  'You were not born to just pay bills and die.',
  'Be who you needed when you were younger.',
  'Be a combination of all the best people you meet, not the worst.',
  'Stop being afraid of what could go wrong and start being positive about what could go right.',
  'A wolf does not lose sleep over the opinion of sheep.',
  'Be a Fruit Loop in a world of Cheerios.',
  'Just remember; someone loves everything you hate about yourself ~ Frank Ocean',
  'Selfish people end up having only their self.',
  'It is not death that a man should fear, but he should fear never beginning to live. ~ Marcus Aurelius',
  'Comparison is the thief of joy. ~ Theodore Roosevelt',
  'Take care of your body. It’s the only place you have to live in.',
  'Sleep is the best meditation ~ Dalai Lama',
  'You can’t do big things if you’re distracted by small things',
  'Know the difference between those who stay to feed the soil and those who come to grab the fruit.',
  'Chains of habit are too light to be felt until they are too heavy to be broken. ~ Warren Buffett',
  'Clutter is anything that doesn’t support your better self. ~ Eleanor Brown',
  'If it’s not a Hell Yeah!, it’s a no',
  'Live life as if everything is rigged in your favor ~ Rumi',
  'This too shall pass',
  'Not all who wander are lost',
  'Live each day as if your life had just begun',
  'Make yourself a priority',
  'Light tomorrow with today',
  'Don\'t worry about those who talk behind your back. They are behind you for a reason.',
  'In the end, everything will be okay. If it\'s not okay, it\'s not yet the end.',
  'When it rains, look for rainbows. When it\'s dark, look for stars.',
  'You have everything you need for the extravagant journey that is your life',
  'Be willing to be a beginner every single morning',
  'It is never too late to be what you might have been ~ George Eliot',
  'Go where you feel most alive',
  'Be yourself and you can be anything',
  'Don\'t get upset with people or situations, because both are powerless without your reaction.',
  'A warm smile is the universal language of kindness',
  'Wherever you go, go with all your heart',
  'No rain, no flowers',
  'When life gets too hard to stand, kneel',
  'If it doesn\'t open, it\'s not your door',
  'Push yourself, nobody else is going to do it for you',
  'What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal ~ Victor Frankl',
  'Find something to be enthustiastic about, get good at it, and give it away ~ Paul Teodo',
  'The wound is where the light enters you ~ Rumi',
  'If you\'re suffering, maybe you\'re too self-focused',
  'Gratitude is wine for the soul. Go on, get drunk',
  'Perfection is boring, passion is inspiring.',
  'Learn the rules like a professional, then break the rules like an artist.',
  'We can never experience our real nature unless we expose ourselves to change',
  'It is no measure of health to be well adjusted to a profoundly sick society',
  'A smile is happiness you\'ll find right under your nose. ~ Tom Wilson',
  'Most people do not listen with the intent to understand. They listen with the intent to reply. Be the former, not the latter.',
  'Whether you think you can, or you think you can\'t--you\'re right. ~ Henry Ford',
  'The best way to make your dreams come true is to wake up. ~ Paul Valery',
  'Suffering is the difference between what is and what we want it to be.',
  'A wise man once said nothing',
  'How wonderful it is that nobody need wait a single moment before beginning to improve the world. ~ Anne Frank',
  'Talking too much about yourself can also be a means to conceal yourself ~ Nietzsche',
  'When you are grateful fear disappears and abundance appears. ~ Tony Robbins',
  'If you do what you’ve always done, you’ll get what you’ve always gotten.',
  'It is in your moments of decision that your destiny is shaped.',
  'The only thing that’s keeping you from getting what you want is the story you keep telling yourself.',
  'You don’t have to have a reason to feel good—you’re alive; you can feel good for no reason at all!',
  'If you talk about it, it’s a dream, if you envision it, it’s possible, but if you schedule it, it’s real.',
  'Stay committed to your decisions, but stay flexible in your approach.',
  'We accept the type of love we think we observe',
  'Treat yourself like you\'re someone that you love',
  'You only live once, but if you do it right, once is enough.'
];

var quoteElement = document.getElementsByClassName('quote')[0];
var quotesLength = quotes.length;
function replaceQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerHTML = randomQuote;
}
replaceQuote();
window.onclick = replaceQuote;

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104633301-1', 'auto');
ga('send', 'pageview');
