
var data = [
    {
        title: "After a Swim by Idries Shah",
        description: "We are all limited by our habits. In this story, a cat and horse make a deal to cross a river together to enjoy juicy corn in a field on the other side. But the cat’s idiotic habits cause trouble and the horse must not only get them to safety but teach the cat a lesson.After a Swim teaches children that if they are captive to their poor behaviour and make excuses for themselves, no amount of ambition, innovation or motivation will lead to success.The cat learns that lesson to its surprise and detriment, in this funny, memorable tale.",
        readlink:'https://idriesshahfoundation.org/pdfviewer/after-a-swim/',
        img:'../assest/nowstart1.png',
    },
    {
        title: "The Tale of the Sands by Idries Shah",
        description: "We all fear change and yet change is the very essence of life. How does a stream cross the mighty, desolate desert? Can it allow itself to change its very form to survive the journey? The Tale of the Sands helps the reader absorb the lesson that change can transform us, if only we have the courage to embrace it.The only characters in this book are a beautiful, flowing stream, a mighty, dry desert, the wind and the voice of faith that lives within us all. As the stream confronts its many fears of being subsumed by the wind, the voice reminds us that change allows us to grow, move and prosper.",
        readlink: 'https://idriesshahfoundation.org/pdfviewer/the-tale-of-the-sands-01/',
        img:'../assest/nowstart2.png',
    },
    {
        title: "The Horrible Dib Dib by Idries Shah",
        description: "An extremely useful tale of how human emotions are infectious, not just the positive ones. Just as negative thoughts can cascade, so in this book, the Horrible Dib Dib chains many characters in its deathly grip.A thief attempting to rob an old woman hears her muttering about the Horrible Dib Dib. ‘This abominable Dib Dib will be the death of me,’ she cries. Gripped with paranoia, the thief slinks home in chills, setting off a chain of events that ultimately reveals what exactly this horrible, abominable Dib Dib is, that is worrying the life out of so many people. A wonderful tale that reminds the reader how powerful human thoughts can be, even when they’re misguided.",
        readlink:'https://idriesshahfoundation.org/pdfviewer/the-horrible-dib-dib/',
        img:'../assest/nowstart3.png',
    },
    {
        title: "Speak First and Lose by Idries Shah",
        description: "Stubbornness is a human quality that can both serve and undermine. In this story, a newly married couple, glowing from their lavish nuptials, nonetheless fall victim to their own stubbornness. So determined are they not to give in, that they manage to lose everything, including one another.Daby Zainab Faidhi’s insightful, playful illustrations bring this teaching story to life. With each passing page, the reader witnesses the complete obliteration of a happy union as both bride and groom become fixated on a meaningless competition. The ending is surprising, with a lesson that will stay with the reader long after the book is closed.",
        readlink:'https://idriesshahfoundation.org/pdfviewer/speak-first-and-lose/',
        img:'../assest/nowstart4.png',
    },
];


var dataContainer = document.getElementById('dataContainer');
data.forEach(function (items) {
    var imgElement = document.createElement('img');
    imgElement.src = items.img;
    imgElement.alt = items.title;
    var titleElement = document.createElement("h1");
    titleElement.textContent = items.title;
    var desElement = document.createElement("p");
    desElement.textContent = items.description;
    var setBtn = document.createElement('button');
    setBtn.textContent = "Read Full Sotry";
    setBtn.href = items.readlink;
   // setBtn.target = "_blank"; // Open link in a new tab/window
    setBtn.classList.add("btn1"); // Add a CSS class to the button

    var lineBreak = document.createElement('br'); 
    
    
    //cpnsolelog(items.title+' ');
    //console.log(items.title+' ');
    dataContainer.appendChild(imgElement);
    dataContainer.appendChild(titleElement);
    dataContainer.appendChild(desElement);
    dataContainer.appendChild(setBtn);
    dataContainer.appendChild(lineBreak);
    dataContainer.appendChild(lineBreak);
   

});


