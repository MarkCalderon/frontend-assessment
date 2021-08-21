
export const accordList = () => {
  // Function: loadData
  // Retrieves and map the data.
  const loadData = new Promise((resolve, reject) => {
    let list = document.getElementById('accord-list')
    const sourceList = require('../../data/data.json')

    console.table(sourceList)

    if(list) {
      sourceList.forEach((item, index) => {
        console.log(index)
        list.innerHTML += `
          <li class="accord-item" data-aos="fade-up" data-aos-delay="${index}00">
            <div class="accord-itemtitle" data-accord="accord-${index}">
              <p class="accord-itemtitletext">${item['title']}</p>
            </div>
            <div class="accord-itemcontent ${(index == 0) ? 'isToggle' : ''}" id="accord-${index}">${item['content']}</div>
          </li>
        `
      })
    }

    setTimeout(() => {
      resolve('success')
    }, 300)
  });

  // Function: addControl
  // Accordion control for showing/hiding content.
  const addControl = () => {
    let button = document.querySelectorAll('[data-accord]')
    let content = document.querySelectorAll('.accord-itemcontent')

    if(button.length) {
      button.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          let target = e.target.getAttribute('data-accord')
          let id = document.getElementById(target)

          // If the same opened content is selected and opened.
          if(id.classList.contains('isToggle')) {
            // Hide the selected content.
            id.classList.remove('isToggle');
          }
          // If a different content is selected.
          else {
            // Hides all the content.
            content.forEach((contentItem) => {
              contentItem.classList.remove('isToggle')
            })
            // Show the selected content.
            id.classList.add('isToggle');
          }
        })
      })
    }
  }

  loadData.then(
    // After successfully loading the data.
    (response) => {
      // console.log(response)
      addControl()
    }).catch(err => {
      // console.log(err)
    })
}