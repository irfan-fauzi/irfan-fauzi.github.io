 //  js for sidedav
 const navsisi = document.querySelectorAll('.sidenav');
 M.Sidenav.init(navsisi, {});

//   js for slieder
 const slieder = document.querySelectorAll('.slider');
 M.Slider.init(slieder, {
     indicators : false,
     height : 500,
     transition : 600,
     interval : 3000
     
 }); 

//js for paralax our clients
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

//material boxed for portfolio section
const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed);


//scroll
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 45
});