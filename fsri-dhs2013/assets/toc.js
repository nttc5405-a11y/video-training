(function(){
var nav=document.querySelector('nav');
if(!nav)return;
var panel=nav.querySelector('.navinner');
var btn=document.getElementById('toc-btn');
var prev=document.getElementById('toc-prev');
var next=document.getElementById('toc-next');
if(!panel||!btn)return;
var links=Array.prototype.slice.call(panel.querySelectorAll('a[href^="#"]'));
function isOpen(){return nav.classList.contains('toc-open')}
function setOpen(open){
  nav.classList.toggle('toc-open',open);
  btn.setAttribute('aria-expanded',open?'true':'false');
  if(open){
    var cur=panel.querySelector('a[aria-current="location"]');
    if(cur&&cur.scrollIntoView)cur.scrollIntoView({block:'nearest'});
  }
}
var sections=Array.prototype.slice.call(document.querySelectorAll('main>section'));
function currentIndex(){
  /* 直接依捲動位置計算，不依賴可能落後一拍的閱讀位置列 */
  var marker=nav.offsetHeight+40,idx=0;
  for(var i=0;i<sections.length;i++){if(sections[i].getBoundingClientRect().top<=marker)idx=i}
  if(window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-4)idx=sections.length-1;
  return Math.min(idx,links.length-1);
}
function updateSteps(){
  var i=currentIndex();
  if(prev)prev.disabled=i<=0;
  if(next)next.disabled=i>=links.length-1;
}
var busy=false;
function schedule(){if(!busy){busy=true;requestAnimationFrame(function(){busy=false;updateSteps()})}}
window.addEventListener('scroll',schedule,{passive:true});
window.addEventListener('resize',schedule);
btn.addEventListener('click',function(e){e.stopPropagation();setOpen(!isOpen())});
panel.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
document.addEventListener('click',function(e){if(isOpen()&&!nav.contains(e.target))setOpen(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen()){setOpen(false);btn.focus()}});
function step(d){
  var i=Math.max(0,Math.min(links.length-1,currentIndex()+d));
  links[i].click();
}
if(prev)prev.addEventListener('click',function(){step(-1)});
if(next)next.addEventListener('click',function(){step(1)});
updateSteps();
})();
