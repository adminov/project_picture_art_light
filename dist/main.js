(()=>{"use strict";((e,t="+7 (___) ___-__-__")=>{const l=document.querySelectorAll(e);function o(e){const l=e.keyCode,o=t,n=o.replace(/\D/g,""),c=this.value.replace(/\D/g,"");let a=0,s=o.replace(/[_\d]/g,(function(e){return a<c.length?c.charAt(a++)||n.charAt(a):e}));a=s.indexOf("_"),-1!=a&&(s=s.slice(0,a));let r=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");r=new RegExp("^"+r+"$"),(!r.test(this.value)||this.value.length<5||l>47&&l<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of l)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)})("[name=phone]"),(()=>{const e=document.querySelectorAll("[name=name]"),t=document.querySelectorAll("[name=message]"),l=document.querySelectorAll("[name=email]"),o=e=>{e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/\-+/g,"-");let t=new RegExp("ReGeX"+e.value+"ReGeX");/^[/ /-]/.test(t)&&(e.value=e.value.replace(/^[/ /-]/,"")),/[/ /-]$/.test(t)&&(e.value=e.value.replace(/[/ /-]$/,""))},n=(e,t,l="Введите корректные данные")=>{""!==e.value&&(e.value.match(t)||(alert(l),e.value=""))};e.forEach((e=>{e.addEventListener("blur",(()=>{o(e),e.value=e.value.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join(" "),n(e,/[а-яё]{2,}/gi)}))})),t.forEach((e=>{e.addEventListener("blur",(()=>{n(e,/[а-яё^0-9\.\,\:\-\!\?]/gi),o(e)}))})),l.forEach((e=>{e.addEventListener("blur",(()=>{n(e,/\w+@\w+\.\w{2,3}/g),o(e)}))}))})(),(()=>{const e=document.querySelector(".popup-design"),t=document.querySelector(".popup-consultation"),l=document.querySelector(".popup-gift");document.addEventListener("click",(o=>{let n=o.target;n.closest(".button-design")?e.style.display="block":n.closest(".infinite")?l.style.display="block":n.closest(".button-consultation")?t.style.display="block":!n.closest(".popup-close")&&n.closest(".popup-content")||(e.style.display="none",t.style.display="none",l.style.display="none")}))})(),(()=>{const e=document.querySelector(".form"),t=document.getElementById("size"),l=document.getElementById("material"),o=document.getElementById("options"),n=document.querySelector(".promocode"),c=e.querySelector(".calc-price");let a,s,r=0,u=0;const i=()=>{const e=r,t=+c.textContent,l=e/200;t<e?(c.textContent=t+l,s=setTimeout(i,5)):(c.textContent=`${e} ₽`,clearTimeout(s))};e.addEventListener("change",(e=>{let c=e.target;(c.matches("select")||c.matches("input"))&&((()=>{const e=parseInt(t.value),c=parseInt(l.value),s=parseInt(o.value),i=n.value;""!==e.value&&""!==c.value&&(u=e+c),""!==s.value&&(u+=s),"IWANTPOPART"===i&&(a=30*u/100,u-=a),r=u})(),i())}))})(),(()=>{const e=document.querySelectorAll(".portfolio-menu > li"),t=document.querySelectorAll(".portfolio-block");e.forEach((l=>{l.addEventListener("click",(o=>{var n;n=l,t.forEach((e=>{e.className.replace("portfolio-block all","").trim()===n.className||e.className.slice(16,20)===n.className.replace("active","")?e.style.display="block":e.style.display="none"})),e.forEach((e=>{e.classList.remove("active")})),document.querySelector(`[class="${l.className}"]`).classList.add("active")}))}))})(),(()=>{const e=document.querySelector(".feedback .container"),t=e.querySelector(".feedback-slider"),l=t.querySelector(".track"),o=l.querySelectorAll(".feedback-slider-item"),n=document.querySelector(".main-prev-btn"),c=document.querySelector(".main-next-btn");t.style.overflow="hidden",t.style.height="450px",l.style.display="-webkit-box";let a=0;const s=o.length,r=e.clientWidth/1,u=1*r;o.forEach((e=>{e.style.minWidth=`${r}px`})),c.addEventListener("click",(()=>{const e=s-(Math.abs(a)+1*r)/r;a-=e>=1?u:e*r,i()})),n.addEventListener("click",(()=>{const e=Math.abs(a)/r;a+=e>=1?u:e*r,i()}));const i=()=>{l.style.transform=`translateX(${a}px)`}})(),(()=>{const e=document.querySelectorAll(".accordion-heading"),t=document.querySelectorAll(".accordion-block");t.forEach((e=>e.style.display="none")),e.forEach(((e,l)=>{e.addEventListener("click",(e=>{e.target.closest(".accordion-heading")&&(e=>{t.forEach(((t,l)=>{t.style.display=e===l?"block":"none"}))})(l)}))}))})(),(()=>{const e=e=>{const l=document.getElementById(e),o=document.createElement("div"),n=document.createElement("img");o.className="successError",o.style.cssText="font-size: 2rem; color: #fff",n.height=50,l.addEventListener("submit",(e=>{e.preventDefault();const o=new FormData(l);let n={};o.forEach(((e,t)=>{n[t]=e})),""!==n.name&&""!=n.phone||""!==n.email&&""!==n.message?t(n).then((()=>{console.log("ok")})).catch((e=>{console.log(e)})):alert("Введите корректные данные")}))};e("form"),e("form1"),e("form2");const t=e=>new Promise(((t,l)=>{const o=new XMLHttpRequest;o.addEventListener("readystatechange",(()=>{4===o.readyState&&(200===o.status?t():l(o.status))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(e))}))})(),(()=>{const e=e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href");""!==t&&window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})};document.querySelectorAll(".header-menu a").forEach((t=>{t.addEventListener("click",e)}))})()})();