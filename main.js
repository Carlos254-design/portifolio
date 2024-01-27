/*====================================typing animation=====================================================*//*
var typed = new typed(".typing",{
    strings:["","web designer","web developer","graphic designer","YouTuber"],
    typespeed:100,
    backspeed:60,
    loop:true
})
/*=======================================aside=============================================================*//*
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length;
    allsection = document.querySelectorAll(".section"),
    totalsection = allsection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                if(navlist[j].querySelector("a").classlist.contains("active"))
                {
                allsection[j].classlist.add("back-section"); 
                }
                navlist[j].querySelector("a").classlist.remove("active");
            }
            this.classlist.add("active")
            showsection(this);
        })
    }
    function showsection(element)
    {
        for(let i=0; i<totalsection; i++)
        {
            allsection[i].classlist.remove("back-section");
        }
        const target = element.getattribute("href").split("#")[1];
        document.querySelector("#"+target).classlist.add("active")
    }
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click",() =>
          {
            asidesectiontogglerbtn();
          })  
          function asidesectiontogglerbtn()
          {
            aside.classList.toggle("open")
            navTogglerBtn.classList.toggle("open");
          } */