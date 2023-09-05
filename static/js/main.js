const textArea = document.getElementById('addCommentText')
textArea.addEventListener('focusin', () => {
    textArea.setAttribute('rows', 8)
})
textArea.addEventListener('focusout', () => {
    textArea.setAttribute('rows', 1)
})



function toggleBlock (blockName) {
  const likeBlock = document.getElementById('likeBlock');
const commentsBlock = document.getElementById('commentsBlock');
const shareBlock = document.getElementById('shareBlock');
  const elements = [likeBlock, commentsBlock, shareBlock];
  elements.forEach((el) => {
    console.log(el);
    if (!el.classList.contains('hidden')) {
      if (el.id !== `${blockName}Block`) {
        el.classList.add('hidden');
      }
      
    }
  }
  )
  const element = document.getElementById(`${blockName}Block`);
  element.classList.toggle('hidden');
}

  
  // const footerController = new FooterController();
  const likeBtn = document.getElementById('likeBtn');
  const commentsBtn = document.getElementById('commentsBtn');
  const shareBtn = document.getElementById('shareBtn');
  likeBtn.addEventListener('click', ()=>{toggleBlock('like')});
  commentsBtn.addEventListener('click', ()=>{toggleBlock('comments')} );
  shareBtn.addEventListener('click', ()=>{toggleBlock('share')});