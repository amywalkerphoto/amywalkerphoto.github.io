// Simple horizontally scrolling picture based portfolio website.
//
// 2018 Igor Bobeldijk
// Feel free to use this template; tell me if you like it @ igor.bobeldijk@gmail.com

var currentlyActivePageId = null;

var pages = {
    'home': {
      'id' : "home",
      'href' : "/",
      'dir' : "images/",
      'folder' : "Tenure of Villains",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg'],
      'description' : "Explores the changing social landscape of my hometown, a historically working class suburb of south London.\n\nChessington is largely made up of social housing estates built during the 'Homes for Heroes' housing boom, following the second world war. There is a common identity and community spirit within the town, originating from a traditional villager way of life.\n\nLying between Surrey and Greater London, just ahead of the metropolitan greenbelt conservation area and close to the affluent commuter towns of Surbiton and Kingston, the green fields of Chessington make for an attractive development opportunity. With creeping gentrification of 'sink estates' all over London, and a proposal for a station on the Cross Rail 2 Project, residents fear the community will become unsustainable and the character of the town will be destroyed.\n\nThe title of the project refers to the status of the manor of Cisendune - the farm land on which Chessington sits - recorded in the Domesday book of 1086. Villain was a term used to denote a peasant (tenant farmer) who was legally tied to a lord of the manor. Villains occupied the social space between a free peasant and a slave, and could not leave the land without the landowner's consent."
    },
    'tenure_of_villains' : {
      'id' : "tenure_of_villains",
      'hyperlink' : "Tenure of Villains",
      'title' : "Tenure of Villains",
      'href' : "/tenure_of_villains",
      'dir' : "images/",
      'folder' : "Tenure of Villains",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg'],
      'description' : "Explores the changing social landscape of my hometown, a historically working class suburb of south London.\n\nChessington is largely made up of social housing estates built during the 'Homes for Heroes' housing boom, following the second world war. There is a common identity and community spirit within the town, originating from a traditional villager way of life.\n\nLying between Surrey and Greater London, just ahead of the metropolitan greenbelt conservation area and close to the affluent commuter towns of Surbiton and Kingston, the green fields of Chessington make for an attractive development opportunity. With creeping gentrification of 'sink estates' all over London, and a proposal for a station on the Cross Rail 2 Project, residents fear the community will become unsustainable and the character of the town will be destroyed.\n\nThe title of the project refers to the status of the manor of Cisendune - the farm land on which Chessington sits - recorded in the Domesday book of 1086. Villain was a term used to denote a peasant (tenant farmer) who was legally tied to a lord of the manor. Villains occupied the social space between a free peasant and a slave, and could not leave the land without the landowner's consent."
    },
    'divine_providence' : {
      'id' : "divine_providence",
      'hyperlink' : "Divine Providence",
      'title' : "Divine Providence",
      'href' : "/divine_providence",
      'dir' : "images/",
      'folder' : "Divine Providence",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg'],
      'description' : "Divine Providence explores the diversity of religious belief within London through documenting the development of places of worship within the urban landscape"
    },
    'speakers_corner' : {
      'id' : "speakers_corner",
      'hyperlink' : "Speakers' Corner",
      'title' : "Speakers' Corner",
      'href' : "/speakers_corner",
      'dir' : "images/",
      'folder' : "Speakers Corner",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg', '021.jpg', '022.jpg', '023.jpg', '024.jpg', '025.jpg', '026.jpg', '027.jpg', '028.jpg', '029.jpg', '030.jpg', '031.jpg'],
      'description' : ""
    },
    'barham_park_estate' : {
      'id' : "barham_park_estate",
      'hyperlink' : "Barham Park Estate",
      'title' : "Barham Park Estate",
      'href' : "/barham_park_estate",
      'dir' : "images/",
      'folder' : "Barham Park Estate",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg'],
      'description' : "This series examines the redevelopment of Barham Park Estate in Sudbury Town, north west London through the architectural and social relationship between the 1970s prefab council housing and their modern successors. \n\nThe estate once consisted of 214 councils houses, which have now been replaced with 122 council maisonettes and 151 private 'luxury apartments'."},
    'domestic_goddesses' : {
      'id' : "domestic_goddesses",
      'hyperlink' : "Domestic Goddesses",
      'title' : "Domestic Goddesses",
      'href' : "/domestic_goddesses",
      'dir' : "images/",
      'folder' : "Domestic Goddesses",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg'],
      'description' : "Domestic Goddesses explores women's fantasies about idealised versions of themselves and the construction of identity through performance of cultural archetypes."
    },
    'burlesque' : {
      'id' : "burlesque",
      'hyperlink' : "Burlesque",
      'title' : "Burlesque",
      'href' : "/burlesque",
      'dir' : "images/",
      'folder' : "Burlesque",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg'],
      'description' : "Documentary work behind the scenes of the When Worlds Collide cabaret and burlesque show in Brick Lane, East London."
    },
    'about' : {
      'id' : "about",
      'hyperlink' : "Contact",
      'href' : "/about",
      'title' : "Contact",
      'description' : "Documentary, portrait and landscape photographer based in London. \n\nPlease contact me at amywalkerphoto@gmail.com"
    },
    'page_not_found' : {
      'id' : "page_not_found",
      'title' : "404 - page not found",
      'description' : "The page you are looking for does not exist."
    },
};

document.addEventListener('DOMContentLoaded', function(event) {
  const currentPageId = getCurrentPageId();
  buildNavigation();
  renderPage(currentPageId);
  setupHorizontalScroll();
});

function getCurrentPageId() {
  const bodyPage = document.body.dataset.page;
  if (bodyPage && pages[bodyPage]) {
    return bodyPage;
  }

  const path = window.location.pathname || '';
  const fileName = (path.split('/').pop() || '').toLowerCase();
  if (fileName === '' || fileName === 'index.html') {
    return 'tenure_of_villains';
  }

  const slug = fileName.replace('.html', '');
  // match against ids without underscores
  for (const key in pages) {
    if (key.replace(/_/g, '').toLowerCase() === slug) {
      return key;
    }
  }

  return 'page_not_found';
}

function pageFilename(pageId) {
  if (pageId === 'tenure_of_villains') return 'index.html';
  return pageId.replace(/_/g, '') + '.html';
}

function renderPage(pageId) {
  const this_page = pages[pageId] || pages['page_not_found'];
  const right_container = document.getElementById('right_container');
  const content = document.getElementById('content');
  if (!right_container || !content) return;

  right_container.className = this_page.id || '';
  content.innerHTML = '';

  makeActive(this_page.id);

  if (this_page.title) {
    document.title = 'Amy Walker Photography - ' + this_page.title;
  } else {
    document.title = 'Amy Walker Photography';
  }

  const media = document.createElement('DIV');
  media.id = 'media';

  if (this_page.img_files) {
    const images = this_page.img_files;
    for (var i = 0; i < images.length; i++) {
      const image = document.createElement('IMG');
      const folder = this_page.folder || '';
      const imagePath = folder ? "./images/" + folder + "/" + images[i] : "./images/" + images[i];
      image.src = imagePath;
      const tagOrientation = function() {
        if (image.naturalHeight > image.naturalWidth) {
          image.classList.add('portrait');
        } else {
          image.classList.add('landscape');
        }
      };
      if (image.complete) {
        tagOrientation();
      } else {
        image.addEventListener('load', tagOrientation);
      }
      media.appendChild(image);
    }
  }

  if (this_page.description) {
    const description = document.createElement('DIV');
    description.id = 'description';
    const paragraphs = this_page.description.split('\n\n');
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].trim()) {
        const para = document.createElement('P');
        para.appendChild(document.createTextNode(paragraphs[i].trim()));
        description.appendChild(para);
      }
    }
    media.appendChild(description);
  }

  content.appendChild(media);

  // Re-enable horizontal scrolling after content is added
  setTimeout(function() {
    setupHorizontalScroll();
  }, 50);
}

// Enable horizontal scrolling with mouse wheel
var horizontalScrollHandler = null;

function setupHorizontalScroll() {
  // Remove existing handler if it exists
  if (horizontalScrollHandler) {
    document.removeEventListener('wheel', horizontalScrollHandler, { passive: false, capture: true });
  }
  
  // Minimal handler: convert plain vertical mouse-wheel to horizontal scroll, leave trackpad diagonal scrolling alone.
  horizontalScrollHandler = function(e) {
    var rightContainer = document.getElementById('right_container');
    if (!rightContainer) return;

    // Only intervene when there's no horizontal intent (mouse wheel) and content overflows.
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && rightContainer.scrollWidth > rightContainer.clientWidth) {
      e.preventDefault();
      rightContainer.scrollLeft += e.deltaY;
    }
  };

  document.addEventListener('wheel', horizontalScrollHandler, { passive: false, capture: true });
}

// populates the navigation sidebar (left) with menu items
function buildNavigation() {
  nav = document.getElementById('nav');
  nav.innerHTML = '';
  for ( p in pages ) {
    if( pages[p].hyperlink ) {
      hyperlink = document.createElement('A');
      hyperlink.href = pageFilename(pages[p].id);
      hyperlink.appendChild(document.createTextNode(pages[p].hyperlink));
      menu_item = document.createElement('DIV');
      menu_item.id = pages[p].id + '_link' ;
      menu_item.appendChild(hyperlink);
      nav.appendChild(menu_item)
    }
  }

  // Social icons
  const social = document.createElement('DIV');
  social.id = 'social';
  const insta = document.createElement('A');
  insta.href = 'https://instagram.com/amywalkerphoto';
  insta.target = '_blank';
  insta.rel = 'noopener noreferrer';
  const instaImg = document.createElement('IMG');
  instaImg.src = './icons/instagram-logo.png';
  instaImg.alt = 'Instagram';
  insta.appendChild(instaImg);
  social.appendChild(insta);
  nav.appendChild(social);
}

// handles the 'active' class on the menu items in the navigation sidebar
function makeActive(pageId) {
    if (currentlyActivePageId) {
      current = document.getElementById(currentlyActivePageId + '_link');
      if( current ) { current.classList.remove('active'); }
    }
    next = document.getElementById(pageId + '_link');
    if( next ) { next.classList.add('active'); }
    currentlyActivePageId = pageId;
}
