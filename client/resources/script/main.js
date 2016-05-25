// Key elements
var avatar = document.getElementById('avatar');
var about = document.getElementById('about');
var mywork = document.getElementById('mywork');
var aboutContent = document.getElementById('about-content');
var myworkContent = document.getElementById('mywork-content');
var contactContent = document.getElementById('contact-content');

// Avatar animation
function avatarAnimation(value, direction) {
    avatar.style.backgroundPositionY = '-' + value + 'px';
    var delay = 50;
    if(value == 0) {
        delay = 3000;
    }
    if(direction == 'forward') {
        value += 250;
        if(value >= 1000) {
            direction = 'backward';
        }
    }
    else {
        value -= 250;
        if(value <= 0) {
            direction = 'forward';
        }
    }
    window.setTimeout(function(){
        avatarAnimation(value, direction);
    }, delay);
}
avatarAnimation(0, 'forward');

// Switch among containers
var currentContent = aboutContent;
about.addEventListener('click', function(event){
    currentContent.style.display = '';
    aboutContent.style.display = 'block';
    currentContent = aboutContent;
});

mywork.addEventListener('click', function(event){
    currentContent.style.display = '';
    myworkContent.style.display = 'block';
    currentContent = myworkContent;
});

contact.addEventListener('click', function(event){
    currentContent.style.display = '';
    contactContent.style.display = 'block';
    currentContent = contactContent;
});

about.click();
