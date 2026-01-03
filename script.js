// Simple horizontally scrolling picture based portfolio website.
//
// 2018 Igor Bobeldijk
// Feel free to use this template; tell me if you like it @ igor.bobeldijk@gmail.com

const altTextMap = {
  tenure_of_villains: [
    'Two women lean on a low brick wall outside a suburban house on a residential street.',
    'A dog sits in a ground-floor window of a pebble-dashed house, looking out at the garden.',
    'A man stands outside a small parade of shops with "Barbers" and "Kebab & Fish Bar" signage.',
    'Portrait of a woman standing in a back garden beside shrubs and a wooden fence, a football on the grass.',
    'A blue box van is parked close to a house, partly hidden by hedges and overgrown shrubs.',
    'A pebble-dashed house surrounded by scaffolding, ladders, and building materials under a clear sky.',
    'A small garden gnome sits on a grassy mound in front of a house with a large conifer and picket fence.',
    'A child holds a hose on a pavement outside terraced houses, with chalk drawings on the path.',
    'Three men pose in a small back garden beside bins, fences, and plant pots.',
    'A brick wall with a small blue sign reading "NO," beside a grassy courtyard and trees.',
    'Yellow horse dung on dark pavement lit by low sunlight and shadow.',
    'A man stands beside an open car boot while several dogs sit inside, looking out.',
    'A brick outbuilding with a sign reading "FLY TIPPING IS PROHIBITED," with dumped items and washing on a line nearby.',
    'A Union Jack flag flies in front of a brick house with a small front garden and steps to the door.',
    'A boy in a cap walks along a path beside dense hedges and brick gate pillars.',
    'A narrow footpath curves past a lamppost and wooden fence, scattered with discarded papers.',
    'A sports pavilion and playing field at dusk, with a scoreboard and goalpost and a lone child near the hedge.'
  ],
  divine_providence: [
    'A small shrine visible through an open doorway beside a courtyard of flats with washing on balconies.',
    'A green-domed tower rises behind a red brick building and evergreen trees, with mattresses stacked by the wall.',
    'Ornate temple spires rise above a brick wall and blue gate, with a stack of tyres beside the road.',
    'A concrete block wall and garage door painted "NO PARKING," with temple domes and flags visible beyond.',
    'An ornate temple building at the edge of a gravel car park, with a red car and surrounding brick buildings.',
    'People step out from a gated entrance to a temple onto the pavement; women in orange saris and a man in a white turban walk past.',
    'Close view of buildings with a round window and steep tiled roof, a small dome visible behind.',
    'Green wheelie bins marked "CHURCH" with white crosses beside gravestones in a sunlit churchyard.'
  ],
  speakers_corner: [
    'Man stands on a step ladder holding a blue-and-white Israeli flag and a stack of books, gesturing across the park.',
    'Three men by a rail in the park: one leans back to read a newspaper while two talk beside a small step stool.',
    'Portrait of a man in a bright green suit standing in the street near temporary fencing.',
    'A man lies on the pavement, seemingly asleep, beside a flag on the fence that says "Jesus said \\"I am the way, truth and life\\" John 14 6" and placards taped to his trolley bag which says "Sex addiction cure - book - open to bliss", with the park behind.',
    'Close portrait of a man in a suit preaching, holding a phone in one hand.',
    'A man rests on a step ladder while a young girl who looks upset talks to him near a fenced-off area of the park.',
    'Bald man stands on a small step stool, pointing and shouting while holding red pamphlets.',
    'A person in a white robe and head covering covers his face as he walks past a fence lined with large religious posters with Bible quotes.',
    'Portrait of an older man wearing a signboard about a "living income" in the park.',
    'Three women walk along a wet park road; one carries a sign on a stick which reads "walk in peace".',
    'Man in a suit gestures with an outstretched hand while holding the Bible, speaking in the park.',
    'Man kneels on the pavement writing on a board beside a buggy, with a handwritten banner on a fence.',
    'Bearded man stands on a step stool addressing the park path, with a buggy beside him.',
    'Smiling man in the foreground with a speaker behind him in a suit holding a book.',
    'Man speaks beside park railings while holding a long pole topped with a brush head, gesturing with a raised finger.',
    "Group of teenagers sit on the grass eating lunch while crowds gather near Speakers' Corner in the background.",
    'Woman stands on a small step stool clapping her hands, wearing a headband that says "Japan as #1" and wellington boots.',
    'A large group of schoolchildren sit on the ground near the railings while a lone speaker stands to the left.',
    'A speaker stands on a ladder addressing a crowd as a man watches beside a red bicycle.',
    "Bicycle leaned against a rail with a large cardboard placard covered in handwritten notes about Noah's flood.",
    'Man walks away down a park road carrying a wooden chair and a shopping bag.',
    'Man stands on a wooden platform holding books against his chest, framed by open parkland.',
    'Close-up of trousers with "JESUS IS LORD" printed down the leg, beside a metal step ladder.',
    'Smiling woman holds a cross-shaped sign with religious text, wearing a hat and red jacket.',
    'Close portrait of a woman in a blue jacket holding a stack of books in a crowd, with a suspicious or disgusted look on her face.',
    'Man raises one arm while holding a Bible and papers, wearing a white sweatshirt with a globe graphic.',
    'Three street preachers stand in a row: one on a step stool pointing upward, another holds a cross sign.',
    'Close portrait of a man shouting mid-speech, arm extended toward the camera.',
    'Man in a grey hoodie raises both arms in a crowd, face tilted up as if calling out or singing.',
    'Woman holds red maracas and a Bible while speaking in front of a fence with religious posters.',
    'Park railings lined with large religious posters and a small flag with handstitched title "Messiah" and a Star of David, beneath a tall Victorian lamp post.'
  ],
  barham_park_estate: [
    'Row of garage doors beneath a pale panelled block, with a "No parking in front of garages" sign above.',
    'Close view of a window with closed blinds and small ornaments on the sill set into a weathered wall. In the middle is a picture of Martin Luther King Jr.',
    'Panelled estate block beside a sloping footpath, framed by overhanging trees and a spiky palm-like tree.',
    'Garages and dark construction hoarding in front of new apartment blocks with balconies, reflected in a puddle.',
    'Front elevation of a panelled residential block with curtained windows, a tree in the foreground and cars beyond.',
    'Street scene with newly built flats, temporary barriers and fencing, and puddles on the road in low sunlight.'
  ],
  domestic_goddesses: [
    'Woman in a purple dressing gown stands barefoot by a glass door framed by purple curtains.',
    'Red-haired woman sits on a table in a kitchen, wearing a floral robe and fishnet tights, holding a black handgun.',
    'Woman pours coffee from a cafetiere into a mug on a polka-dot tablecloth in a kitchen with a retro fridge.',
    'Woman in a faux-fur coat leans on a stair banister in a hallway, looking upward.'
  ],
  burlesque: [
    'A man in a bowler hat walks through a busy dressing room while a performer bends over near a rack of costumes.',
    'Performer adjusts a flower bra in a dressing room beside a rail of colourful costumes.',
    'Performer in a black suit with a red shirt and dramatic makeup stands side-on backstage.',
    'Blonde performer sits on the floor backstage adjusting her white stocking and high-heeled shoe beside a red leather sofa and bags.',
    'Performer crouches on a wooden floor holding a packet of crisps, with a large mirror and scattered bags and props behind.',
    'Performer sits on the floor in front of a mirror adjusting rhinestone pasties in a cramped backstage corridor.',
    'Blurred motion of a performer spinning in a pink skirt backstage, with a mirror to the side.',
    'Backstage room with several performers and crew; one woman in a striped apron kisses a man on the cheek.',
    'Two performers laugh in a cluttered dressing room while one sits pulling on a white stocking.',
    'Close-up of a performer in a rhinestone thong passing a table covered with colourful feathered props.',
    'Two women in profile talk closely backstage against a plain wall.',
    'Performer in heels and thigh-high socks bends toward a floor mirror, reflected in the glass.'
  ]
};

var currentlyActivePageId = null;

var pages = {
    'home': {
      'id' : "home",
      'href' : "/",
      'dir' : "images/",
      'folder' : "Tenure of Villains",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', '009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg'],
      'alt_texts' : altTextMap.tenure_of_villains,
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
      'alt_texts' : altTextMap.tenure_of_villains,
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
      'alt_texts' : altTextMap.divine_providence,
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
      'alt_texts' : altTextMap.speakers_corner,
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
      'alt_texts' : altTextMap.barham_park_estate,
      'description' : "This series examines the redevelopment of Barham Park Estate in Sudbury Town, north west London through the architectural and social relationship between the 1970s prefab council housing and their modern successors. \n\nThe estate once consisted of 214 councils houses, which have now been replaced with 122 council maisonettes and 151 private 'luxury apartments'."},
    'domestic_goddesses' : {
      'id' : "domestic_goddesses",
      'hyperlink' : "Domestic Goddesses",
      'title' : "Domestic Goddesses",
      'href' : "/domestic_goddesses",
      'dir' : "images/",
      'folder' : "Domestic Goddesses",
      'img_files' : ['001.jpg', '002.jpg', '003.jpg', '004.jpg'],
      'alt_texts' : altTextMap.domestic_goddesses,
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
      'alt_texts' : altTextMap.burlesque,
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
  setupMobileMenu();
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
    const altTexts = this_page.alt_texts || [];
    for (var i = 0; i < images.length; i++) {
      const image = document.createElement('IMG');
      const folder = this_page.folder || '';
      const imagePath = folder ? "./images/" + folder + "/" + images[i] : "./images/" + images[i];
      image.src = imagePath;
      const altText = altTexts[i];
      image.alt = altText ? altText : (this_page.title ? this_page.title + ' ' + images[i] : images[i]);
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
  drawer = document.getElementById('nav-drawer-content');
  nav.innerHTML = '';
  if (drawer) drawer.innerHTML = '';
  for ( p in pages ) {
    if( pages[p].hyperlink ) {
      hyperlink = document.createElement('A');
      hyperlink.href = pageFilename(pages[p].id);
      hyperlink.appendChild(document.createTextNode(pages[p].hyperlink));
      menu_item = document.createElement('DIV');
      menu_item.id = pages[p].id + '_link' ;
      menu_item.appendChild(hyperlink);
      nav.appendChild(menu_item)

      if (drawer) {
        const drawerLink = hyperlink.cloneNode(true);
        const drawerItem = document.createElement('DIV');
        drawerItem.appendChild(drawerLink);
        drawer.appendChild(drawerItem);
      }
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
  if (drawer) {
    const drawerSocial = social.cloneNode(true);
    drawer.appendChild(drawerSocial);
  }
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

function setupMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const drawer = document.getElementById('nav-drawer');
  if (!toggle || !drawer) return;

  const open = () => {
    drawer.classList.add('open');
    document.body.classList.add('drawer-open');
  };
  const close = () => {
    drawer.classList.remove('open');
    document.body.classList.remove('drawer-open');
  };

  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', function(e) {
    if (e.target === drawer) {
      close();
    }
  });
}
