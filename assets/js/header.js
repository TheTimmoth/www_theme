---
---
window.onscroll = function () { navbar_scroll() };
window.onload = function () { navbar_load() };
window.onresize = function () { navbar_resize() };

const scrollValue = 50;
var sidebarOpen = 0;
const HeaderStates = {
  Uninitialized: 0,
  Big: 1,
  Small: 2
}
var headerState = HeaderStates.Uninitialized;
var marginCalculated = 0;

function navbar_scroll() {
  resizeHeader();
  setContentTopMargin_timer();
}

function navbar_resize() {
  resizeHeader();
  setContentTopMargin(true);
}

function navbar_load() {
  resizeHeader();
  setContentTopMargin(false);
}

function setContentTopMargin_timer() {
  if (window.scrollY < scrollValue && marginCalculated == 0) {
    setTimeout(setContentTopMargin, {{ site.data.style.header.transition[0] }}*1000, true);
    marginCalculated = 1;
  } else if (marginCalculated == 1 && window.scrollY >= scrollValue) {
    marginCalculated = 0;
  }
}

function setContentTopMargin(saveMargin) {
  var margin = sessionStorage.getItem("headerMargin");
  if (margin == null || saveMargin == true) {
    margin = document.getElementById("header").offsetHeight + {{ site.data.style.misc.spacing-unit[0] }} + 'px';
  }
  console.log("margin", margin)
  document.getElementById("content").style.marginTop = margin;
  if (saveMargin == true || window.scrollY == 0) {
    sessionStorage.setItem("headerMargin", margin)
  }
}

function resizeHeader() {
  //Shrink header on scroll
  if (window.scrollY > scrollValue) {
    //The shrinked header

    document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/4 + 'px 0';
    document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-small }}";
    document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-small }}";

    // Change navbar-links padding
    var navbar_buttons = document.getElementById("navbar-links").querySelectorAll(".button");
    for (index = 0; index < navbar_buttons.length; index++ ) {
      navbar_buttons[index].style.padding = {{ site.data.style.misc.spacing-unit[0] }}/6 + 'px ' + {{ site.data.style.misc.spacing-unit[0] }}/3 + 'px';
    }

    headerState = HeaderStates.Small;
  } else if (window.scrollY <= scrollValue) {
    //The large header

    // Set element sizes based on screen-width
    if (document.getElementById("header-wrapper").offsetWidth >= {{ site.data.style.misc.on-medium[0] }} + 1) {
      // Properties for large screens

      document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px 0';
      document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-large }}";
      document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-large }}";

      // Change navbar-links padding
      var navbar_buttons = document.getElementById("navbar-links").querySelectorAll(".button");
      for (index = 0; index < navbar_buttons.length; index++ ) {
        navbar_buttons[index].style.padding = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px ' + {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px';
      }
    } else {
      // Properties for small screens

      document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px 0';
      document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-medium }}";
      document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-small }}";

      // Change navbar-links padding
      var navbar_buttons = document.getElementById("navbar-links").querySelectorAll(".button");
      for (index = 0; index < navbar_buttons.length; index++ ) {
        navbar_buttons[index].style.padding = {{ site.data.style.misc.spacing-unit[0] }}/6 + 'px ' + {{ site.data.style.misc.spacing-unit[0] }}/3 + 'px';
      }
    }
    headerState = HeaderStates.Big;
  }
  setTimeout(changeLinks, {{ site.data.style.header.transition[0] }}*1000, true);
}

function changeNav() {
  document.getElementById("navbar-menu-icon").classList.toggle("change");
  if (sidebarOpen == 1) {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("bar1").style.backgroundColor = "#333"
    document.getElementById("bar2").style.backgroundColor = "#333"
    document.getElementById("bar3").style.backgroundColor = "#333"
    sidebarOpen = 0
  } else {
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("bar1").style.backgroundColor = "#cccccc"
    document.getElementById("bar2").style.backgroundColor = "#cccccc"
    document.getElementById("bar3").style.backgroundColor = "#cccccc"
    sidebarOpen = 1
  }
}

function changeLinks() {
  // Detect wrapped navbar-links
  var headerSize = 0;
  if (document.getElementById("header-wrapper").offsetWidth >= {{ site.data.style.misc.on-medium[0] }} + 1) {
    headerSize = {{ site.data.style.header.logo-size-large[0] }};
  } else {
    headerSize = {{ site.data.style.header.logo-size-small[0] }};
  }
  headerSize += {{ site.data.style.misc.spacing-unit[0] }};


  // Detect wrapped navbar-links
  if (document.getElementById("header").offsetHeight > headerSize) {
    document.getElementById("navbar-links").style.marginTop = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px';
  } else {
    document.getElementById("navbar-links").style.marginTop = "0";
  }
}
