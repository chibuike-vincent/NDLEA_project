
// DATABASE
const courses = [
  {
    title: "Introduction to Javascript",
    picture: "/client/img/intro_to_js.png",
    price: "free",
    short_summary:
      "This course teaches you the fundamentals of javascript. At the end of this course, you should know the building blocks of the language have a solid graps of how programming works in general. You will have a lot of hands on projects to build as well. We can't wait to have you onboard.",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120,
    isActive: true
  },
  {
    title: "Introduction to HTML",
    picture: "/client/img/intro_to_html.png",
    price: "free",
    short_summary:
      "Join a wide range of students from all over the world to gain mastery of the web language. In this course, you would learn how to design web pages for e-commerce, blogs, and many more. I am excited taking you on this important journey",
    instructors: ["Kalu Obota"],
    likes: 500,
    dislikes: 15,
    shares: 450
  },
  {
    title: "Introduction to CSS",
    picture: "/client/img/intro_to_css.png",
    price: "free",
    short_summary:
      "Learn CSS today and join the league of extra-ordinary web designers who make user experience much better. You must have a keen interest for beautiful and sleek stuffs. Don't worry, we have loads of projects for you to work on and master this art.",
    instructors: ["Green Volley", "Yolda Simens"],
    likes: 420,
    dislikes: 24,
    shares: 200,
    isActive: true
  },
  {
    title: "Introduction to Python",
    picture: "/client/img/intro_to_python.png",
    price: "free",
    short_summary:
      "Your first step in learning data analysis, web crawling or data visualization is learning python programming language. We understand how important this is for your career and so have dedicated quality time in building this great content for you to enjoy.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Introduction to React",
    picture: "/client/img/intro_to_react.png",
    price: "paid",
    amount: '45.32',
    short_summary:
      "React gives you the edge while working with javascript. Let's help you learn how to get things done faster and more effieciently with React. This is the framework to learn",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120,
    video: true
  },
  {
    title: "Intro to Vue",
    picture: "/client/img/intro_to_vue.png",
    price: "free",
    short_summary:
      "Building frontend applications are teh joy of development. Learn Vue today and get more out of your development scale. Vue is right on the edge for the fast and furious.",
    instructors: ["Hameed Shenaek", "Groulph Griendl"],
    likes: 329,
    dislikes: 26,
    shares: 30,
    isActive: true,
    video: true
  },
  {
    title: "Bootstrap Courseware",
    picture: "/client/img/intro_to_bootstrap.png",
    price: "paid",
    amount: "32.98",
    short_summary:
      "Bootstrap is a framework that helps you style reuseable components and make your designs more responsive to any screen - mobile, tablets, desktop, big screens. In this course we teach you how to go about getting the most out of bootstrap",
    instructors: ["Odunze Dons"],
    likes: 500,
    dislikes: 34,
    shares: 250,
    isActive: true
  },
  {
    title: "Introduction to Node",
    picture: "/client/img/intro_to_node.png",
    price: "free",
    short_summary:
      "Node gives you the power of running javascript on your server, In this course we take you from zero to hero of building applications with node.",
    instructors: ["Daniel Imma", "Yolven Sunn"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Electron Beginners",
    picture: "/client/img/intro_to_electron.png",
    price: "free",
    short_summary:
      "If you have a passion for developing cross-platform desktop applications, then this course is for you. Get started with building your favorite applications for the desktop view.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Learn PHP",
    picture: "/client/img/intro_to_php.png",
    price: "free",
    short_summary:
      "Give your scripts more life with PHP, with simple syntax and a complete learning guide it has never been more fun learning PHP",
    instructors: ["Joseph Ude", "laka Bluek"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Advanced Javascript",
    picture: "/client/img/intro_to_js.png",
    price: "paid",
    amount: "19.00",
    short_summary:
      "This course teaches you the fundamentals of javascript. At the end of this course, you should know the building blocks of the language have a solid graps of how programming works in general. You will have a lot of hands on projects to build as well. We can't wait to have you onboard.",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Introduction to HTML Canvas",
    picture: "/client/img/intro_to_html.png",
    price: "paid",
    amount: "21.90",
    short_summary:
      "Join a wide range of students from all over the world to gain mastery of the web language. In this course, you would learn how to design web pages for e-commerce, blogs, and many more. I am excited taking you on this important journey",
    instructors: ["Kalu Obota"],
    likes: 500,
    dislikes: 15,
    shares: 450
  },
  {
    title: "Introduction to CSS",
    picture: "/client/img/intro_to_css.png",
    price: "free",
    short_summary:
      "Learn CSS today and join the league of extra-ordinary web designers who make user experience much better. You must have a keen interest for beautiful and sleek stuffs. Don't worry, we have loads of projects for you to work on and master this art.",
    instructors: ["Green Volley", "Yolda Simens"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Introduction to Python",
    picture: "/client/img/intro_to_python.png",
    price: "free",
    short_summary:
      "Your first step in learning data analysis, web crawling or data visualization is learning python programming language. We understand how important this is for your career and so have dedicated quality time in building this great content for you to enjoy.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Introducing Context in React",
    picture: "/client/img/intro_to_react.png",
    price: "free",
    video: true,
    short_summary:
      "React gives you the edge while working with javascript. Let's help you learn how to get things done faster and more effieciently with React. This is the framework to learn",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Reimagine Vue",
    picture: "/client/img/intro_to_vue.png",
    price: "paid",
    amount: '25.43',
    short_summary:
      "Building frontend applications are teh joy of development. Learn Vue today and get more out of your development scale. Vue is right on the edge for the fast and furious.",
    instructors: ["Hameed Shenaek", "Groulph Griendl"],
    likes: 329,
    dislikes: 26,
    shares: 30
  },
  {
    title: "Introduction to Bootstrap",
    picture: "/client/img/intro_to_bootstrap.png",
    price: "free",
    short_summary:
      "Bootstrap is a framework that helps you style reuseable components and make your designs more responsive to any screen - mobile, tablets, desktop, big screens. In this course we teach you how to go about getting the most out of bootstrap",
    instructors: ["Odunze Dons"],
    likes: 500,
    dislikes: 34,
    shares: 250
  },
  {
    title: "Advandced Node",
    picture: "/client/img/intro_to_node.png",
    price: "paid",
    amount: '57.23',
    short_summary:
      "Node gives you the power of running javascript on your server, In this course we take you from zero to hero of building applications with node.",
    instructors: ["Daniel Imma", "Yolven Sunn"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Advance to Electron",
    picture: "/client/img/intro_to_electron.png",
    price: "free",
    short_summary:
      "If you have a passion for developing cross-platform desktop applications, then this course is for you. Get started with building your favorite applications for the desktop view.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Advance to PHP",
    picture: "/client/img/intro_to_php.png",
    price: "paid",
    amount: '45.234',
    short_summary:
      "Give your scripts more life with PHP, with simple syntax and a complete learning guide it has never been more fun learning PHP",
    instructors: ["Joseph Ude", "laka Bluek"],
    likes: 230,
    dislikes: 12,
    shares: 120
  }
];

/* ================ DECLARE ALL VARIABLES  ================== */
const courseWrapper = document.querySelector('.course-cards')

/* ========== ALL FUNCTIONS ============================= */
const generateDOM = (info) => {
    
  // cards
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  
  // images
  const img = document.createElement('img')
  img.setAttribute('src', '/client/images/image2.jpeg')
  img.style.width = '100%'

  // title
  const title = document.createElement('h3')

  // price
  const price = document.createElement('p')
  price.setAttribute('class', 'price')

  // summary
  const summary = document.createElement('p')
  summary.setAttribute('class', 'summary')

  // button
  const pButton = document.createElement('p')
  const button = document.createElement('button')

  const truncate = (string) => {
    if (string.length > 120) {
      return string = string.substring(0, 119) + '...'
    }
  }

  // console.log(truncate(info.short_summary))
  
  // set values =======>>>>>
  title.innerHTML = info.title
  if (info.price === 'paid') {
    price.innerHTML = `$${info.amount}`
  } else {
    price.innerHTML = info.price 
  }
  summary.innerHTML = truncate(info.short_summary)
  button.innerHTML = 'Start Course'
  
  // Append children =======>>>>>
  card.appendChild(img)
  card.appendChild(title)
  card.appendChild(price)
  card.appendChild(summary)
  pButton.appendChild(button)
  card.appendChild(pButton)
  
  return card  
}

const getAllCourses = (allCourses) => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')

  const isActive = allCourses.filter(course => course.isActive)

  // generate DOM structure
  isActive.forEach(course => {
    const courseEl = generateDOM(course)
    courseCards.appendChild(courseEl)
  })

  // Append to main container
  courseWrapper.innerHTML = ''
  courseWrapper.appendChild(courseCards)
} 

// Get all Free courses
const getFreeCourses = freeCourses => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')

  const isFree = freeCourses.filter((course) => course.price === 'free')

  isFree.forEach(course => {
    const courseEl = generateDOM(course)
    courseCards.appendChild(courseEl)
  })

  courseWrapper.innerHTML = "";
  courseWrapper.appendChild(courseCards)
} 

// Get all Paid courses
const getPaidCourses = paidCourses => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')


  const isPaid = paidCourses.filter((course) => course.price === 'paid')

  console.dir(isPaid)

  isPaid.forEach(course => {
    const courseEl = generateDOM(course)
    courseCards.appendChild(courseEl)
  })

  courseWrapper.innerHTML = "";
  courseWrapper.appendChild(courseCards)
}

// Get all Video Courses
const getVideoCourses = videoCourses => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')


  const isVideo = videoCourses.filter(course => course.video)

  isVideo.forEach(course => {
		const courseEl = generateDOM(course);
		courseCards.appendChild(courseEl);
	});

  courseWrapper.innerHTML = "";
  courseWrapper.appendChild(courseCards)
}

// Get article courses
const getArticleCourses = articleCourses => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')


  const isArticle = articleCourses.filter(course => !course.video && course.price === 'free')

  isArticle.forEach(course => {
    const courseEl = generateDOM(course);
    courseCards.appendChild(courseEl);
  });

  courseWrapper.innerHTML = "";
  courseWrapper.appendChild(courseCards)
}

const selectCourse = (e) => {
  
  if (e.target.nodeName === 'DIV') {
    let flag = e.target.childNodes[3].innerHTML
    
    if (flag === 'courses') {
      getAllCourses(courses)
    }
    if (flag === 'free') {
      getFreeCourses(courses)
    }
    if (flag === 'paid')  {
      getPaidCourses(courses)
    }
    if (flag === 'video') {
      getVideoCourses(courses)
    }
    if (flag === 'article') {
      getArticleCourses(courses) 
    }
  }
}

/*=========================== Show a single course =============================*/

const generateCourseDOM = (info) => {
  const courseEl = document.createElement('div')
  courseEl.setAttribute('class', 'course_el')

  const heading = document.createElement('h2')
  heading.setAttribute('class', 'title_header')

  const instructorsEl = document.createElement('div')
  instructorsEl.setAttribute('class', 'instructors_el')

  const instructors = document.createElement('span')

  const imgWrapper = document.createElement('div')
  const img = document.createElement("img")
  img.setAttribute("src", "/client/images/image2.jpeg")
  img.style.width = "100%"

  const textEl = document.createElement('div')
  textEl.setAttribute('class', 'text_area')

  const paragEl = document.createElement('p')
  paragEl.setAttribute('class', 'summary')


  // set content
  paragEl.innerHTML = info.short_summary
  instructors.textContent = info.instructors
  heading.innerHTML = info.title 

  // append children
  textEl.appendChild(paragEl)
  imgWrapper.appendChild(img)
  instructorsEl.appendChild(instructors)
  courseEl.appendChild(heading)
  courseEl.appendChild(instructorsEl)
  courseEl.appendChild(imgWrapper)
  courseEl.appendChild(textEl)
  return courseEl
}

const showCourse = (e) => {
  // hide existing card wrapper
  const cardWrapper = document.querySelector(".card-wraper")
  cardWrapper.style.display = 'none'

  // new card wrapper
  const courseCards = document.createElement('div')
  courseCards.setAttribute('class', 'card-wraper')

  


  // const isArticle = articleCourses.filter(course => !course.video && course.price === 'free')

  // isArticle.forEach(course => {
  //   const courseEl = generateCourseDOM(course);
  //   courseCards.appendChild(courseEl);
  // });

  courseWrapper.innerHTML = "";
  courseWrapper.appendChild(courseCards)
}

const coursesButton = [...document.getElementsByTagName("button")]

coursesButton.forEach(el => {
  if (el.innerHTML === "Start Course") {
    console.log(el)
    // el.addEventListener('click', showCourse)
  }
})

// =========== ALL EVENTS =============*/

document.getElementById('nav-course').addEventListener('click', selectCourse)
// document.getElementsByClassName('icon-wraper').addEventListener('click', () => {
//   console.log('all courses')
// })
// document.getElementById('free').addEventListener('click', getFreeCourses)
// document.getElementById('paid').addEventListener('click', getPaidCourses)
// document.getElementById('video').addEventListener('click', getVideoCourses)