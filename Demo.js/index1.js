const hamburger=document.querySelector('.hamburger')
const close=document.querySelector('.close')
const navList=document.querySelector('.nav-list')

hamburger.addEventListener('click',function(e){
    navList.classList.add('open')
})

close.addEventListener('click',function(e){
    navList.classList.remove('open')
})

const icons = [...document.querySelectorAll(".theme-icon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});
