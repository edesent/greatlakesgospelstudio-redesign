// Studio content migrated from the original WebStarts site
// (greatlakesgospelstudio.com), reviewed October 8, 2026. Wording is the
// studio's own, with spelling corrected. See README "Content and features".

export type Project = {
  /** Stable key, also used for the cover color class (`cover-${key}`). */
  key: string;
  title: string;
  artist: string;
  category: string;
  image: string;
  /** YouTube video ID. */
  video?: string;
  /** Self-hosted video for demos that were never on YouTube. */
  file?: string;
  poster?: string;
};

export const projects: Project[] = [
  {
    key: "HCzpc2-L2Uk",
    title: "Mercy Revealed",
    artist: "Stronghold Quartet",
    category: "Southern gospel",
    image: "guitars.webp",
    video: "HCzpc2-L2Uk",
  },
  {
    key: "05VGo-d6_6U",
    title: "Praise Hymn",
    artist: "Vickie Atchinson",
    category: "Hymns & inspiration",
    image: "keys.webp",
    video: "05VGo-d6_6U",
  },
  {
    key: "grace",
    title: "Simply Grace",
    artist: "Grace Arnswald",
    category: "Hymns & inspiration",
    image: "condenser-mic.webp",
    file: "/media/grace-arnswald-simply-grace.mp4",
    poster: "/images/grace-arnswald-poster.webp",
  },
  {
    key: "dVXvR7zfzOM",
    title: "Questions & Answers",
    artist: "Ed Hafner",
    category: "Gospel",
    image: "eleven-rack.webp",
    video: "dVXvR7zfzOM",
  },
  {
    key: "U7oE0CthpA0",
    title: "The Solid Rock",
    artist: "Stephen & Marie Forester",
    category: "Gospel",
    image: "microphones.webp",
    video: "U7oE0CthpA0",
  },
  {
    key: "pjuyOEo3sIQ",
    title: "He Brought Me Out",
    artist: "Stephen & Marie Forester",
    category: "Gospel",
    image: "speaker-monitors.webp",
    video: "pjuyOEo3sIQ",
  },
  {
    key: "lfm88tek7qw",
    title: "A New Chapter",
    artist: "Stephen Forester",
    category: "Instrumental",
    image: "console.webp",
    video: "lfm88tek7qw",
  },
];

export const clients = [
  "Kasey Logan",
  "Joshua Forester",
  "Grace Arnswald",
  "Bob Etzel",
  "Wanda Miller",
  "Dave Smith",
  "Ellen Burke",
  "Vickie Atchinson",
  "Stronghold Quartet",
  "Bernice Souleyrette",
  "David Strength",
  "The Forester Brothers Family",
  "Fenton Road Baptist Church",
  "Ed Hafner",
  "Tom Lawler",
  "Charles Brown",
  "John & Kate Denner",
  "Chase Smith",
  "Roger Burris",
  "Kathryn Sapp",
  "Faith Bible Baptist Church",
  "Ellen Sherrill",
  "Don Paff",
  "The Steve Brady Family",
  "Darlene Vickers",
  "Michele Westhuis",
  "Mark White",
  "The Compagner Sisters",
  "Stephen & Marie Forester",
  "Community United Methodist Church",
  "Karalyn Lawler",
  "James W. Martin",
  "The Sound",
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string[];
  /** Short pull quote for compact layouts. */
  pull?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jim Kitchen",
    role: "Baritone/lead singer, Stronghold Quartet",
    pull: "From concept to final product, you did it all!",
    quote: [
      "On behalf of Stronghold Quartet, I want to thank you for the awesome experience we had recording our project at Great Lakes Gospel Studio. The knowledge you possess, along with the state-of-the-art recording features, resulted in an outstanding project that we are thrilled to unveil. From concept to final product, you did it all! We will be back for future projects. Thank you!",
    ],
  },
  {
    name: "Chase Smith",
    role: "Soloist & missionary to Lithuania",
    pull: "We did ten songs in two days!",
    quote: [
      "Stephen did an outstanding job in all areas of this process! He was very patient with me, and pushed me to do my best, so I would have a CD that I would be proud to pass on to others! His knowledge of music was a great asset while we recorded, as he could help me through different areas where I struggled. He also didn’t need days upon days to come up with various arrangements for the accompaniments. We would record my guitar, then he would come up with a great piano part right there in about 5–15 minutes. They all exceeded my expectations!",
      "His patience was greatly appreciated (and needed) throughout the recording process! We had a huge time constraint (due to my traveling schedule), so we did ten songs in two days! Needless to say my brain was tired, but Stephen still encouraged me to do my best and didn’t let any vocal errors slip.",
      "Stephen filled in some extra tracks on all the songs except for one. He did the mixing and fine tuning for me also, and did an excellent job!",
      "This CD has been a huge blessing, from the recording process all the way to passing them out! So many people have told me that they really enjoy this CD, and that wouldn’t be the case had I gone to someone that didn’t have the experience that he has. I highly recommend having Stephen and GLGS do your next CD!",
    ],
  },
  {
    name: "Vickie Atchinson",
    role: "Soloist from Bay City, MI",
    pull: "You won’t be disappointed!",
    quote: [
      "I just listened to my latest project that I recorded at Great Lakes Gospel Studio. WOW!!! Stephen worked very diligently to get me the sound I was looking for. He is a Godly man that gives his best to help you get what you want in your recording.",
      "I highly recommend anyone looking to record to contact him. You won’t be disappointed!",
    ],
  },
  {
    name: "Rose M. Bledsoe",
    role: "Community United Methodist Church (Standish, Michigan)",
    pull: "You made us sound great!",
    quote: [
      "I had the pleasure of dealing with Great Lakes Gospel Studio when I felt the need to add a musical background to the video presentation we created for YouTube to showcase my church’s positive impact upon the community. Our small group of singers had tried several modes of recording, none of which had decent sound quality, so I spoke to Stephen about arranging a recording session. He set up an appointment for us, and created a piano track beforehand. Stephen directed the group, coordinated the musical score with the singers, and helped us with timing and rhythm, all the while displaying patience and good humor. The finished product arrived at my desktop within two weeks, all polished and sounding as though a full choir performed the singing. Thank you, Great Lakes Gospel Studio, for your professionalism and timely production of our otherwise amateur effort – you made us sound great!",
    ],
  },
  {
    name: "“Blest Ellen” Burke",
    role: "Soloist from Sturgis, MI",
    pull: "This is the man you want to talk to!",
    quote: [
      "We would like to give a big shout out to Stephen Forester of Great Lakes Gospel Studio for making this recording in a very relaxed setting. We had a great time, and the Foresters are some of the nicest people you could meet. Thank you brother Stephen for your patience and kindness during the recording. My experience was relaxing and full of Jesus. It was a great experience and I’ll be back. Anybody looking to cut a CD, THIS IS THE MAN YOU WANT TO TALK TO! You won’t be sorry. Thanks again guys and God bless!",
    ],
  },
  {
    name: "John Denner",
    role: "Full-time traveling pianist/singer/studio musician",
    pull: "Great Lakes Gospel Studio does it RIGHT every time, on time.",
    quote: [
      "Having been in studios across the land, I was duly impressed with Stephen Forester’s “Great Lakes Gospel Studio” in Lapeer, MI. Not only does he have many instruments to choose from, a great recording platform, and a stunning Yamaha keyboard, he has the abilities to use each with absolute professionalism and ease.",
      "Mixing the instruments and vocals to get just the right sound might be one of the most difficult things any producer has to do, and Great Lakes Gospel Studio does it RIGHT every time, on time.",
      "You will not be disappointed with your album, your song, or even just a soundtrack or two. I couldn’t be happier with my latest CD!",
    ],
  },
  {
    name: "Pastor Jerry Boritzki",
    role: "Sponsor for our customer, Chase Smith",
    quote: [
      "I highly recommend Great Lakes Gospel Studio to anyone that has ever dreamed of having their own, professionally produced CD. They do a GREAT job.",
    ],
  },
  {
    name: "Grace Arnswald",
    role: "Soloist from Presque Isle, WI",
    quote: [
      "Working with Great Lakes Gospel Studio was an amazing experience! The attention to detail and personal style that Stephen gives to each song is wonderful!",
    ],
  },
  {
    name: "Kasey Kemp",
    role: "Baritone/manager with Avenue Trio",
    quote: [
      "Stephen Forester has a great operation. Quality guy and quality music. I appreciate his work and integrity.",
    ],
  },
  {
    name: "Don Paff",
    role: "Singer/songwriter from Indianapolis, IN",
    quote: [
      "If you’re wanting a GREAT CD, Stephen & John (Denner) are the ones you’ll want to trust with your recording needs. Call them today and be blessed.",
    ],
  },
  {
    name: "Mark Forester",
    role: "Owner/Producer/Musician at Moonlight Studio (Burton, MI)",
    quote: [
      "My brother Stephen works very hard at his craft. Great, quality place.",
    ],
  },
];

export type Partner = {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string[];
};

export const stephenBio = [
  "Stephen is the founder and owner of Great Lakes Gospel Studio. He produces and engineers each session, and his attention to details helps to make each recording the best it can be.",
  "Stephen has studied music formally since age 9. He studied music in college, and has been a regular student at special Christian music conferences for years.",
  "Stephen plays piano, acoustic and electric guitars, bass, drum programming, ocarina, organ, strings, and sings background vocals. He also does most of the graphic design work at GLGS.",
];

export const partners: Partner[] = [
  {
    name: "Eli Fortner",
    role: "Guitars & drums",
    image: "eli-fortner.webp",
    alt: "Eli Fortner seated in front of a stack of Marshall guitar amplifiers, in black and white",
    bio: [
      "Eli travels and sings/plays guitar professionally with his family group, McKamey Legacy. When he is not traveling, he is often in his studio laying down incredible guitar and drum tracks for various customers. He is an extremely versatile musician, and can play a variety of guitar styles and sounds for a very modest fee.",
    ],
  },
  {
    name: "Rob Novell",
    role: "Bass, keys & orchestrations",
    image: "rob-novell.webp",
    alt: "Portrait of Rob Novell in glasses and a black shirt, chin resting on his hand",
    bio: [
      "Rob is one of the finest bass guitar players you will ever hear, but he is a man with countless other skills as well! He has produced and played on countless sessions for local, regional, and national-level artists.",
      "Rob also plays piano, drums, guitar, mandolin, keyboard orchestrations, and writes for live orchestrations. Rob’s skills are available for hire for a modest fee.",
    ],
  },
  {
    name: "Paul Thompson",
    role: "Mastering engineer",
    image: "paul-thompson.webp",
    alt: "Portrait of Paul Thompson smiling, with a mustache",
    bio: [
      "When it comes to mastering, nobody is better than the great Paul Thompson! He has professionally mastered countless recordings for many years, and his expert work shines on every one of them! He can take your recording to the next level and make it sound better than you ever thought possible!",
    ],
  },
  {
    name: "David Johnson",
    role: "Steel, fiddle, harmonica & more",
    image: "david-johnson.webp",
    alt: "Portrait of David Johnson laughing, with a gray beard",
    bio: [
      "David is one of the most in-demand studio musicians in all of Christian music. He plays regularly at Crossroads Studios in NC, and also does lots of freelance work. He plays a variety of styles, and can play just as many instruments including: harmonica, guitars, bass, fiddle, pedal steel, and more!",
      "He can add incredible professionalism to your recordings for a very modest fee.",
    ],
  },
  {
    name: "Maria Grigoryeva",
    role: "Violin, viola & cello",
    image: "maria-grigoryeva.webp",
    alt: "Maria Grigoryeva playing a black electric violin",
    bio: [
      "Maria contracts with us from St. Petersburg, Russia. She is available for hire on all of the projects we work on. She plays violin, viola and cello. She is the ultimate professional and her playing is superb. Her impressive music credits range from prestigious orchestras, to film and video game music scores. She is amazing!",
      "Best of all, she is available for an amazingly reasonable price. You will never find better-sounding string recordings for less!",
    ],
  },
];

export const equipment: { group: string; items: string[] }[] = [
  {
    group: "Software",
    items: [
      "Pro Tools Studio 2023 recording software",
      "Melodyne 5 Editor tuning software",
      "Ivory 2 grand piano software",
      "EZ Drummer 2 drumming software",
      "EZ Bass software",
      "EastWest Hollywood Orchestra software",
      "Plug-ins from Avid, Slate Digital, and more",
      "Slate VSX headphones + software",
      "Adobe Photoshop (for designing your artwork)",
    ],
  },
  {
    group: "Room & workstation",
    items: [
      "Recording/mixing room completely treated with acoustic foam",
      "MacBook Pro with 2.9GHz quad-core 7th-generation Intel Core i7 processor (turbo boosts up to 3.9GHz), 16GB 2133MHz LPDDR3 memory, 512GB SSD storage, and Radeon Pro 560 with 4GB memory",
      "Slate Raven MTi2 touchscreen mixing workstation",
    ],
  },
  {
    group: "Interfaces & monitoring",
    items: [
      "Focusrite Scarlett 18i20 recording interface",
      "Avid Eleven Rack guitar/bass recording interface",
      "Behringer U-Phoria UMC202HD recording interface",
      "Rokit 8 powered speakers by KRK Systems",
      "Rokit powered subwoofer by KRK Systems",
      "Behringer mixer for the speakers & sub",
      "Slate VSX, Sony, & Samson headphones",
      "Headphone extension cables",
    ],
  },
  {
    group: "Microphones",
    items: [
      "Slate ML-1 modeling microphone",
      "Microphones by Audio-Technica, Rode, MXL, Behringer, and Sennheiser",
      "Sterling vocal mic shield",
      "Windscreens for vocal recording",
      "Mic stands by On-Stage Stands",
    ],
  },
  {
    group: "Instruments",
    items: [
      "Yamaha and Takamine acoustic guitars",
      "Fender Telecaster electric guitar",
      "Ibanez bass guitar",
      "Yamaha MOX8 keyboard",
      "Rhythm Tech Studio percussion shaker",
      "Mogami noise-reducing instrument cables",
    ],
  },
];

export type Session = { image: string; alt: string; w: number; h: number };

export const sessions: Session[] = [
  {
    image: "stronghold-quartet-group.webp",
    w: 1600,
    h: 1200,
    alt: "Five men from a Stronghold Quartet session standing together in the studio",
  },
  {
    image: "engineer-with-guitarist.webp",
    w: 1600,
    h: 1200,
    alt: "Engineer in headphones at the recording desk while a guitarist tracks acoustic guitar beside him",
  },
  {
    image: "vocalist-at-control-desk.webp",
    w: 1200,
    h: 1600,
    alt: "A young man in headphones singing behind a vocal shield while the engineer works at the computer",
  },
  {
    image: "stronghold-vocal-take.webp",
    w: 480,
    h: 640,
    alt: "A Stronghold Quartet singer at the vocal shield while the engineer in glasses listens on headphones",
  },
  {
    image: "singer-red-condenser.webp",
    w: 960,
    h: 540,
    alt: "A woman in headphones singing into a red condenser microphone behind a pop filter",
  },
  {
    image: "resonator-guitar-session.webp",
    w: 1600,
    h: 1200,
    alt: "A guitarist in headphones playing a resonator guitar from a music stand, with a mandolin beside him",
  },
  {
    image: "stronghold-selfie.webp",
    w: 720,
    h: 960,
    alt: "Two men in headphones taking a selfie between takes in the vocal corner",
  },
  {
    image: "young-accordionist.webp",
    w: 960,
    h: 720,
    alt: "A young girl in headphones smiling as she plays a black accordion",
  },
  {
    image: "darlene-at-keyboard.webp",
    w: 1080,
    h: 810,
    alt: "Darlene playing the studio’s Yamaha keyboard during a session",
  },
  {
    image: "stronghold-tracking.webp",
    w: 480,
    h: 640,
    alt: "The engineer at the Pro Tools control surface while a singer records behind the vocal shield",
  },
  {
    image: "singer-pink-glasses.webp",
    w: 1600,
    h: 1200,
    alt: "A singer in pink glasses and headphones singing into a microphone behind a pop filter",
  },
  {
    image: "electric-guitar-take.webp",
    w: 1600,
    h: 1200,
    alt: "Close-up of hands playing a black electric guitar, in black and white",
  },
  {
    image: "selfie-with-two-singers.webp",
    w: 960,
    h: 720,
    alt: "A smiling selfie of three people in the studio, in black and white",
  },
  {
    image: "young-singer-purple-shirt.webp",
    w: 720,
    h: 960,
    alt: "A young singer in a purple shirt and headphones standing by the vocal microphone",
  },
  {
    image: "young-singer-rode-mic.webp",
    w: 720,
    h: 960,
    alt: "A smiling young singer in headphones beside a Rode microphone and vocal shield",
  },
  {
    image: "guitarist-in-control-room.webp",
    w: 1600,
    h: 1200,
    alt: "A guitarist in a red shirt and headphones recording between the KRK studio monitors",
  },
  {
    image: "stronghold-vocalist-booth.webp",
    w: 480,
    h: 640,
    alt: "An older singer in headphones at the vocal shield while the engineer plays along at the desk",
  },
  {
    image: "singer-with-lyric-sheet.webp",
    w: 1440,
    h: 1432,
    alt: "A young woman in headphones singing from a lyric sheet at the vocal microphone",
  },
  {
    image: "karalyn-lawler-guitar.webp",
    w: 720,
    h: 960,
    alt: "Karalyn Lawler playing acoustic guitar from a red music stand",
  },
  {
    image: "singer-in-cap.webp",
    w: 1440,
    h: 1439,
    alt: "A singer in a cap and glasses smiling at the vocal microphone with a lyric sheet",
  },
  {
    image: "flute-overdub.webp",
    w: 1440,
    h: 1440,
    alt: "A woman in headphones playing flute to a pair of overhead condenser microphones",
  },
  {
    image: "stronghold-baritone-take.webp",
    w: 480,
    h: 640,
    alt: "A singer in headphones at the vocal shield while the engineer adjusts the mix",
  },
  {
    image: "vocalist-black-shirt.webp",
    w: 960,
    h: 720,
    alt: "A vocalist in headphones standing at the vocal shield, eyes on the lyrics",
  },
  {
    image: "vocalist-close-take.webp",
    w: 720,
    h: 960,
    alt: "A gray-haired singer leaning into the microphone behind a black vocal shield",
  },
  {
    image: "singer-with-music-stand.webp",
    w: 1200,
    h: 1600,
    alt: "A singer in pink glasses recording with sheet music on a stand",
  },
  {
    image: "mobile-session-vocal.webp",
    w: 1080,
    h: 1080,
    alt: "A young man singing into a vocal shield set up inside a motorhome for a mobile session",
  },
  {
    image: "mobile-session-playback.webp",
    w: 1080,
    h: 1080,
    alt: "A young man in headphones listening to playback during the motorhome session",
  },
  {
    image: "selfie-with-visiting-group.webp",
    w: 960,
    h: 720,
    alt: "Four smiling men taking a group selfie in the studio",
  },
  {
    image: "singer-blue-polo.webp",
    w: 1440,
    h: 1082,
    alt: "A man in a blue polo singing from a lyric sheet at the vocal microphone",
  },
  {
    image: "vocalist-red-shirt.webp",
    w: 720,
    h: 960,
    alt: "A grinning vocalist in a red shirt and headphones in the vocal corner",
  },
  {
    image: "smiling-singer-headphones.webp",
    w: 744,
    h: 740,
    alt: "A smiling young woman wearing studio headphones",
  },
  {
    image: "singer-selfie-booth.webp",
    w: 540,
    h: 960,
    alt: "A singer in headphones smiling for a selfie at the microphone",
  },
  {
    image: "three-acoustic-guitars.webp",
    w: 960,
    h: 720,
    alt: "A resonator guitar, a jumbo acoustic, and a classical guitar on stands",
  },
  {
    image: "accordion.webp",
    w: 960,
    h: 720,
    alt: "A black accordion resting against the acoustic foam, in black and white",
  },
  {
    image: "red-pencil-mics.webp",
    w: 720,
    h: 960,
    alt: "Two red pencil condenser microphones mounted on a stand",
  },
  {
    image: "behringer-c2-pair.webp",
    w: 1600,
    h: 1200,
    alt: "A pair of Behringer C-2 condenser microphones with windscreens, in black and white",
  },
  {
    image: "eleven-rack-closeup.webp",
    w: 960,
    h: 720,
    alt: "The Avid Eleven Rack glowing orange above the Focusrite interface and control surface",
  },
];
