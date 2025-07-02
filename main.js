
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.onclick = () => {
  navList.classList.toggle('active');
};
const search = document.getElementById('sw');
const search_icons = document.getElementById('search-icons');
search.onclick = () => {
  search_icons.classList.toggle('actives');
};

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
  itemActive = itemActive + 1;
  if(itemActive >= countItem){
      itemActive = 0;
  }
  showSlider();
}
//event prev click
prev.onclick = function(){
  itemActive = itemActive - 1;
  if(itemActive < 0){
      itemActive = countItem - 1;
  }
  showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000)
function showSlider(){
  // remove item active old
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  // active new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
  setPositionThumbnail();

  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
      next.click();
  }, 5000)
}
function setPositionThumbnail () {
  let thumbnailActive = document.querySelector('.thumbnail .item.active');
  let rect = thumbnailActive.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
      thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
      itemActive = index;
      showSlider();
  })
})

function toggleAccordion(header) {
const body = header.nextElementSibling;
const icon = header.querySelector('.icon');

const isOpen = body.classList.contains('open');

// أغلق كل العناصر الأخرى
document.querySelectorAll('.accordion-body').forEach(b => {
  b.classList.remove('open');
  b.previousElementSibling.querySelector('.icon').textContent = '＋';
});

// إذا لم يكن مفتوحًا، افتحه
if (!isOpen) {
  body.classList.add('open');
  icon.textContent = '－';
}
}


const toggleBtn = document.getElementById("toggle-btn");
const icon = document.getElementById("icon");

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");

// تغيير الأيقونة حسب الوضع
if (document.body.classList.contains("dark-mode")) {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}
});



window.addEventListener("load", function() {
      document.getElementById("loader").style.display = "none";
    });
function goToCountry() {
    const input = document.getElementById("countryName").value.trim().toLowerCase();


    const pages = {
      "السعودية": "saudi.html",
      "سعوديه": "saudi.html",
      "دولةالسعودية" : "saudi.html",
      "السعوديه": "saudi.html",
      "سعودية": "saudi.html",
      "سعوديه": "saudi.html",
      "اليمن": "yemen.html",
      "يمن": "yemen.html",
      "دوله اليمن": "yemen.html",
      "دولة اليمن": "yemen.html",
      "مصر": "egypt.html",
      "دولة مصر": "egypt.html",
      "دوله مصر": "egypt.html",
      "الامارات": "UAE.html",
      "الإمارات": "UAE.html",
      "دولة الامارات": "UAE.html",
      "دوله الإمارات": "UAE.html",
      "دوله المغرب": "morocco.html",
      "دولة مغرب": "morocco.html",
      "دولة المغرب": "morocco.html",
      "مغرب": "morocco.html",
      "الجزائر": "algeria.html", "جزائر": "algeria.html","دولة الجزائر": "algeria.html","دله الجزائر": "algeria.html",
      "بحرين": "Bahrain.html","بحرين": "Bahrain.html","البحرين": "Bahrain.html","دولة البحرين": "Bahrain.html","دوله البحرين": "Bahrain.html",
      "دولة العراق": "iraq.html",  "دوله العراق": "iraq.html",  "العراق": "iraq.html",  "عراق": "iraq.html",
      "مغرب": "UAE.html",
      "الاردن": "jordan.html",
      "الإردن": "jordan.html",
      "الأردن": "jordan.html",
      "دولة الاردن": "jordan.html",
      "دوله الاردن": "jordan.html",
      "دولة كويت": "Kuwait.html",
      "دوله الكويت": "Kuwait.html",
      "الكويت": "Kuwait.html",
      "كويت": "Kuwait.html",
      "ليبيا": "lebanon.html",
      "دولة ليبيا": "lebanon.html",
      "دوله ليبيا": "lebanon.html",
      "عمان": "Oman.html",
      "دولة عمان": "Oman.html",
      "دوله عمان": "Oman.html",
      "فلسطين": "palestine.html",
      "دولة فلسطين": "palestine.html",
      "دوله فلسطين": "palestine.html",
      "قطر": "Qatar.html",
      "دولة قطر": "Qatar.html",
      "دوله قطر": "Qatar.html",
      "السودان": "sudan.html",
      "دولة السودان": "sudan.html",
      "دوله السودان": "sudan.html",
      "سوريا": "syria.html",
      "دولة سوريا": "syria.html",
      "دوله سوريا": "syria.html",
    };

    if (!input) {
      alert("من فضلك أدخل اسم الدولة!");
      return;
    }

    if (pages[input]) {
      window.location.href = pages[input];
    } else {
      alert("لم يتم العثور على صفحة للدولة التي أدخلتها.");
    }
  }

window.onscroll = function () {
  showButtonOnScroll();
};

function showButtonOnScroll() {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

