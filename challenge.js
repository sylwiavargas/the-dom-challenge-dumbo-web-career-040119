document.addEventListener("DOMContentLoaded", () => {


  let counter = 0;
  let likesNum = 0;

  function timerStart(){
    const timer = document.getElementById("counter")
    setInterval(()=> {
      timer.innerHTML = counter++
    }, 1000)
  }

  const addBtn = document.getElementById("+")
  const deductBtn = document.getElementById("-")
  const pause = document.getElementById("pause")
  const resume = document.getElementById("resume")

  addBtn.addEventListener("click", ()=>{
    counter ++
  })

  deductBtn.addEventListener("click", ()=>{
    counter --
  })


  const like = document.querySelector("#love")
  const likeCont = document.querySelector(".likes")

  let likeObj = {}

  like.addEventListener("click", event =>{
    likeCont.innerText = ''
    likeObj[counter] = (likeObj[counter]+1) || 1;
    // likeCont.innerText = ''
    console.log(likeObj)

    for(let key in likeObj){
      const likeBullet = document.createElement("li")
      likeCont.appendChild(likeBullet)
      likeBullet.innerText = `${key} has been liked ${likeObj[key]} times`
    }

  })

  pause.addEventListener("click", event =>{
    // debugger;
    if (addBtn.disabled){
      addBtn.disabled = false;
      deductBtn.disabled = false;
      like.disabled = false;
      pause.innerText = "pause"
    } else {
      addBtn.disabled = true;
      deductBtn.disabled = true;
      like.disabled = true;
      pause.innerText= "resume"
    }
  })

  const commentForm = document.querySelector('#comment-form')
  const commentCont = document.getElementById('list')

  commentForm.addEventListener('submit', event =>{
    event.preventDefault()
    const comment = document.querySelector('input').value
    const commentP = document.createElement('p')
    commentP.innerText = comment
    commentCont.appendChild(commentP)
    event.target.reset()
  })

timerStart();

})
