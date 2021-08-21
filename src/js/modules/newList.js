
export const newList = () => {
  let list = document.getElementById('new-list')
  const sourceList = require('../../data/data.json')
  const data = sourceList.splice(0,3)

  if(list) {
    data.forEach((item, index) => {
      list.innerHTML += `
        <li class="new-item" id="new-01" data-aos="fade-up" data-aos-delay="${index}00">
          <figure class="new-itemfigurearea"><img class="new-itemfigurethumb" src="${item['src']}" alt="Section 1"></figure>
          <div class="new-itemtextarea"><p>${item['content']}</p>
            <button class="new-itemanchor" href="${item['link']}">READ MORE</button>
          </div>
        </li>
      `
    })
  }
}