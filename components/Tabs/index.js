// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then (data => {
    // console.log('data', data.data);
    // console.log('topics', data.data.topics);
    const topicsArray = data.data.topics;
    // console.log(topicsArray);
    const topics = document.querySelector('.topics');
    topicsArray.forEach((topic) => {
      const newTopic = topicCreator(topic);
      newTopic.setAttribute('data-tab', `${topic}`);
      topics.appendChild(newTopic);
    });
  });

function topicCreator (topic) {
  const topicTab = document.createElement('div');
  topicTab.classList.add('tab');
  topicTab.textContent = topic;
  topicTab.setAttribute('data-tab', `${topic}`);
  const tabData = topicTab.dataset.tab;
  topicTab.addEventListener('click', () => {
    tabBuffer();
  })
  topicTab.addEventListener('click', () => {
    topicSelector();
  })
  topicTab.addEventListener('click', () => {
    selectArticle();
  })

  function tabBuffer () {
    if (tabData === 'all'){
      cards = Array.from(document.querySelectorAll('.cards'))
      console.log(`all`);
    }else {
      cards = document.querySelectorAll(`.card[data-tab='${tabData}']`)
      console.log(`${topic}`);
    }
  }

  function topicSelector (){
    const articles = document.querySelectorAll('.card');
    articles.forEach(article => {article.style.display = 'none'});
    articles.forEach(article => selectArticle());
  }

  function selectArticle () {
    tabs = document.querySelectorAll(`.tab[data-tab='${tabData}']`)
    cards = document.querySelectorAll(`.card[data-tab='${tabData}']`)
    if (tabs === cards){
    articles.forEach(article => {article.style.display = 'flex'});;
  }}

  return topicTab;
}

const allTopic = document.createElement('div')
allTopic.classList.add('tab');
allTopic.textContent = 'all';
topics.appendChild(allTopic);
// console.log(allTopic);
allTopic.setAttribute('data-tab', 'all');
const allTopicData = allTopic.dataset.tab;
// console.log(allTopicData);
allTopic.addEventListener('click', () => {
  selectTopic();
})
function selectTopic () {
  if (allTopicData === 'all'){
    const articles = document.querySelectorAll('.card');
    articles.forEach(article => {article.style.display = 'flex'});
    console.log('all');
  }else {
    console.log('no');
  }

}
