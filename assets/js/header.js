---
---
window.onscroll = function () { navbar_scroll() };
window.onload = function () { navbar_load() };
window.onresize = function () { navbar_resize() };

const scrollValue = 80;
var sidebarOpen = 0;

function navbar_scroll() {
  resizeHeader();
  setContentTopMargin();
}

function navbar_resize() {
  setContentTopMargin();
  resizeHeader();
}

function navbar_load() {
  setContentTopMargin();
  resizeHeader();
  headerLoad();
}

function setContentTopMargin() {
  if (window.scrollY < 1) {
    margin = document.getElementById("header").offsetHeight + {{ site.data.style.misc.spacing-unit[0] }} + 'px';
    document.getElementById("content").style.marginTop = margin;
  }
}

function resizeHeader() {
  //Shrink header on scroll
  if (window.scrollY > 30) {
    //The shrinked header

    document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/4 + 'px 0';
    document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-small }}";
    document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-small }}";

    // Detect wrapped navbar-links
    if (document.getElementById("header").offsetHeight > {{ site.data.style.header.logo-size-small[0] }} + {{ site.data.style.misc.spacing-unit[0] }}) {
      document.getElementById("navbar-links").style.marginTop = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px';
    } else {
      document.getElementById("navbar-links").style.marginTop = "0";
    }

    // Change navbar-links padding
    if (document.getElementById("navbar-links").style.display == "flex") {
      var navbar_buttons = document.getElementById("navbar-links").querySelectorAll(".button");
      for (index = 0; index < navbar_buttons.length; index++ ) {
        navbar_buttons[index].style.padding = {{ site.data.style.misc.spacing-unit[0] }}/6 + 'px ' + {{ site.data.style.misc.spacing-unit[0] }}/3 + 'px';
      }
    }
  } else {
    //The large header

    // Set element sizes based on screen-width
    if (document.getElementById("header-wrapper").offsetWidth >= {{ site.data.style.misc.on-medium[0] }} + 1) {
      // Properties for large screens

      document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px 0';
      document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-large }}";
      document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-large }}";

      // Detect wrapped navbar-links
      if (document.getElementById("header").offsetHeight > {{ site.data.style.header.logo-size-large[0] }} + {{ site.data.style.misc.spacing-unit[0] }}) {
        document.getElementById("navbar-links").style.marginTop = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px';
      } else {
        document.getElementById("navbar-links").style.marginTop = "0";
      }

      // Change navbar-links padding
      if (document.getElementById("navbar-links").style.display == "flex") {
        var navbar_buttons = document.getElementById("navbar-links").querySelectorAll(".button");
        for (index = 0; index < navbar_buttons.length; index++ ) {
          navbar_buttons[index].style.padding = {{ site.data.style.misc.spacing-unit[0] }}/3 + 'px ' + {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px';
        }
      }
    } else {
      // Properties for small screens

      document.getElementById("header").style.padding = {{ site.data.style.misc.spacing-unit[0] }}/2 + 'px 0';
      document.getElementById("navbar-logo").style.height = "{{ site.data.style.header.logo-size-medium }}";
      document.getElementById("navbar-title").style.fontSize = "{{ site.data.style.header.title-small }}";
    }
  }


  // setContentTopMargin();
}

function headerLoad() {
  document.getElementById("navbar-logo").style.transition = "{{ site.data.style.header.transition }}";
  document.getElementById("navbar-title").style.transition = "{{ site.data.style.header.transition }}";
  document.getElementById("navbar-title").style.transition = "{{ site.data.style.header.transition }}";
  document.getElementById("navbar-links").style.transition = "{{ site.data.style.header.transition }}";
  document.getElementById("navbar-links").style.transition = "{{ site.data.style.header.transition }}";
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
