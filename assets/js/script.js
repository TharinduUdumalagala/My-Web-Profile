window.addEventListener("load",function (){
   document.querySelector(".preloader").classList.add("opacity-0");

   setTimeout(()=>{
      document.querySelector(".preloader").style.display="none";

   },1000)
})


const bodySkin=document.querySelectorAll(".body-skin"),
    totalBodySkin=bodySkin.length;
for (let i=0; i<totalBodySkin; i++){
   bodySkin[i].addEventListener("change", function (){
      if (this.value === "dark"){
         document.body.className="dark";
      }
      else {
         document.body.className="light";
      }
   })
}

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
   document.querySelector(".style-switcher").classList.toggle("open");
});


const  nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;

for (let i=0; i<totalNavList; i++){

   const a= navList[i].querySelector("a");
   a.addEventListener("click", function (){

      removeBackSectionClass();

      for (let j=0; j<totalNavList; j++){
         if (navList[j].querySelector("a").classList.contains("active")){
            addBackSectionClass(j);


         }
         navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);

      if (window.innerWidth<1200){
         asideSectionToggleBtn();
      }

   })
}

function removeBackSectionClass(){
   for (i=0; i<totalSection; i++){
      allSection[i].classList.remove("back-section");
   }
}

function addBackSectionClass(num){
   allSection[num].classList.add("back-section");
}

function showSection(element){
   for (i=0; i<totalSection; i++){
      allSection[i].classList.remove("active");
   }
   const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
   for (let i=0; i<totalNavList; i++){
      navList[i].querySelector("a").classList.remove("active");
      const target=element.getAttribute("href").split("#")[1];
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
         navList[i].querySelector("a").classList.add("active");
      }
   }
}

document.querySelector(".hire-me").addEventListener("click",function (){
   const  sectionIndex=this.getAttribute("data-section-index")
   showSection(this);
   updateNav(this);
   removeBackSectionClass();
   addBackSectionClass(sectionIndex);
})

const navToggleBtn =document.querySelector(".nav-toggle"),
   aside=document.querySelector(".aside");
   navToggleBtn.addEventListener("click",asideSectionToggleBtn)


function asideSectionToggleBtn(){
      aside.classList.toggle("open");
      navToggleBtn.classList.toggle("open");
      for (i=0; i<totalSection; i++){
         allSection[i].classList.toggle("open");
      }
}