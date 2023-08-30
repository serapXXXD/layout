// function toggleLike(targetElementId, buttonId) {
//     const targetElement = document.getElementById(targetElementId);
//     targetElement.classList.toggle('hidden');
//     const button = document.getElementById(buttonId);
//     button.classList.toggle('button__like__pressed');
// }

// function toggleComment(targetElementId, buttonId) {
//     const targetElement = document.getElementById(targetElementId);
//     targetElement.classList.toggle('hidden');
//     const button = document.getElementById(buttonId);
//     button.classList.toggle('button__comment__pressed');
// }

const textArea = document.getElementById('addCommentText')
textArea.addEventListener('focusin', () => {
    textArea.setAttribute('rows', 8)
})
textArea.addEventListener('focusout', () => {
    textArea.setAttribute('rows', 1)
})


class FooterController {
    expandedElement = null;
  
    elements = {
      like: {
        name: 'like',
        button: document.getElementById('likeBtn'),
        block: document.getElementById('likeBlock'),
      },
      comments: {
        name: 'comments',
        button: document.getElementById('commentsBtn'),
        block: document.getElementById('commentsBlock'),
      },
      share: {
        name: 'share',
        button: document.getElementById('shareBtn'),
        block: document.getElementById('shareBlock'),
      }
    };
  
  
    constructor() {}
  
    toggle(blockName) {
      if (this.expandedElement) {
        this.expandedElement.block.classList.toggle('hidden');
        this.expandedElement.button.classList.toggle(`button__${this.expandedElement.name}__pressed`);
        this.expandedElement = null;
      }

      if(!this.expandedElement || this.expandedElement.name !== blockName){
        const elementData = this.elements[blockName];
        this.expandedElement = elementData;
        elementData.button.classList.toggle(`button__${blockName}__pressed`);
        elementData.block.classList.toggle('hidden');
    }
      if(this.expandedElement.name === blockName){
        this.expandedElement.block.classList.toggle('hidden');
        this.expandedElement.button.classList.toggle(`button__${this.expandedElement.name}__pressed`);
        this.expandedElement = null;
      }
    }
  
  }
  
  const footerController = new FooterController();
  const likeBtn = document.getElementById('likeBtn');
  const commentsBtn = document.getElementById('commentsBtn');
  const shareBtn = document.getElementById('shareBtn');
  likeBtn.addEventListener('click', ()=>{footerController.toggle('like')});
  commentsBtn.addEventListener('click', ()=>{footerController.toggle('comments')} );
  shareBtn.addEventListener('click', ()=>{footerController.toggle('share')});