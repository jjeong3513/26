const gnbLis = document.querySelectorAll('.gnb li');
const gnb = document.querySelector('.gnb');
const arrow = document.querySelector('.arrow');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');
const txtLis = document.querySelectorAll('.txt li');

//console.log(txtLis[0].offsetHeight)

//txt ul 초기 높이값 설정
txt.style.height = txtLis[0].offsetHeight+'px'

gnb.addEventListener('click', (e)=>{
    const selected = e.target;
    gnbLis.forEach((li)=>{
        li.classList.remove('over');
    })
    selected.classList.add('over');
    updateContents(selected.dataset.index); 
})

function updateContents(index){
    const posArrow = index * 200 ;
    const posTitle = - (80*index) ; // 위로 올라가는거니까 앞에 마이너스를 붙여줌
    arrow.style.left = posArrow + 'px';
    title.style.top = posTitle +'px';
    txtLis.forEach((li)=>{
        li.style.display = 'none';
    })
    txtLis[index].style.display = 'block';
    txt.style.height=txtLis[index].offsetHeight + 'px';
}

