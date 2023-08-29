function toggleLike(targetElementId, buttonId){
    const targetElement = document.getElementById(targetElementId);
    targetElement.classList.toggle('hidden');
    const button = document.getElementById(buttonId);
    button.classList.toggle('button__like__pressed');
}

function toggleComment(targetElementId, buttonId){
    const targetElement = document.getElementById(targetElementId);
    targetElement.classList.toggle('hidden');
    const button = document.getElementById(buttonId);
    button.classList.toggle('button__comment__pressed');
}