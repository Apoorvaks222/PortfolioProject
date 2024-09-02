var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

        document.querySelectorAll('.clickable-image').forEach((image) => {
          image.addEventListener('click', () => {
            const projectUrl = image.nextElementSibling.querySelector('a').href;
            window.open(projectUrl, '_blank');
          });
        });
      