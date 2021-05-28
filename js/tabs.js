

//TabsIntro//



const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__content");


tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
      const currentBtn = item;
      const tabId = currentBtn.getAttribute("data-tab");
      const currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function(item) {
          item.classList.remove('active');
      })
      tabsItems.forEach(function(item) {
        item.classList.remove('active_content');

      currentBtn.classList.add('active');
      currentTab.classList.add('active_content');
    })
})
})






















