
// const bh = ()=> {
// }
const mTh = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dYs = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dl = [], dA = [], eDg = _e(".e-di-t-btn"), cc = 0, currEl, prevEl, to_t, currI, currLocation, lDr = _e(".ss-r-l-ts"), fdTmt;
let tCont = _e("[data-t]")
const iPh = ()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return true;
    }
    return false;
}
const daT = (d, i) => {
    const dd = new Date(d)
    const ad = new Date();
    const de = dd.getDate();
    console.log(de, d);
    const df = dd.getMonth();
    if(i) return dYs[dd.getDay()] + " " + mTh[df] + " " +de;
    console.log(dd.getFullYear() == ad.getFullYear());
    return Number(dd.getFullYear()) !== Number(ad.getFullYear()) ? "years ago" : de === ad.getDate() && df === ad.getMonth() ? "Today" : Number(ad.getDate()) - Number(de) === 1 && df === ad.getMonth() ? "1 day ago" : Number(ad.getDate()) - Number(de) > 1 && df === ad.getMonth() ? `${Number(ad.getDate()) - Number(de)} days ago` : Number(ad.getMonth()) - Number(df) === 1 ? '1 Month ago' : Number(ad.getMonth()) - Number(df) > 1 ? `${Number(ad.getMonth()) - Number(df)} Months ago` : d;
    debugger;
}
const nonce = () => {
    let activeDl = dl.filter(d=>d.status === "active");
    if(activeDl.length === 0) {
       _e(".nonce").classList.add("in");
    }
    else {
        _e(".nonce").classList.remove("in");
    }
}
function ap(dt, t, cl, am, location){
    cc++;
    if(t==="diary") {
        let iMg = "", noImgClass = "has-i-m-g";
        dt.image.length > 0 ? iMg = 'background-image: url(https://mozaski.github.io/Diary/images/'+dt.image.split("/")[2]+')' : (iMg = 'background-color:var(--bg3)', noImgClass = "no-i-m-g")
        let d = document.createElement("div");
        d.innerHTML = `
          <div class="i-c-bg p-sm p-r" data-cc="${cc}" style="${iMg}"><h4>${dt.title}</h4><p>${dt.text}</p><span class="n-d-t">${daT(dt.date, false)}</span><div class="c-d-ls p-sm"><div class="flex j-c-b"><div>${dt.status === "active" ? `<span class="i-c-o-n-2 e-d-i-t"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-fill e-d-i-t" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg><bdi class="e-d-i-t">Edit</bdi></span>` : ''}</div><div class="p-r s-lg"><button type="button" class="i-c-o-n-2 s-o-n ac-t-i-o-ns"><img src="https://mozaski.github.io/Diary/images/menu.svg"></button></div><div class="s-sm d-i-c-cc">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="d-i-c-cc" viewBox="0 0 24 24" width="16" height="16"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
              <bdi class="d-i-c-cc">Delete</bdi>
          </div></div></div>
        `;
        d.classList.add("d-r--d", "d-i-b", noImgClass);
        typeof am !== undefined && am === true ? d.classList.add("a-n-i-m-e") : null
        currEl = d;
        if(iPh())d.ontouchstart = (e)=>{currI = dt._id; let el = e.target;
            if(el.classList.contains("d-r--d")) currEl = el;
            else currEl = el.closest(".d-r--d");
            prevEl = currEl.nextSibling;
            _e("#d-iar-y").dataset.curr=dt._id;
            currLocation = dt.status === "active" ? "view" : "trash";
        }
        d.addEventListener("click", e=>{
            currI = dt._id; 
            let el = e.target;
            if(el.classList.contains("d-r--d")) currEl = el
            else currEl = el.closest(".d-r--d")
            prevEl = currEl.nextSibling;
            if(m_d.classList.contains("a-ctiv-e")) (m_d.classList.remove("a-ctiv-e"), m_d_s = 0);
            if(el.classList.contains("e-d-i-t")) (et(dt._id, "diary", el, "edit"));
            else if(el.classList.contains("d-i-c-cc")) (currLocation = "view", hd(currI))
            else if(el.classList.contains("ac-t-i-o-ns") || el.matches(".ac-t-i-o-ns img")) more(el)
            else if(dt.status === "active") et(dt._id, "diary", el, "view");
            _e("#d-iar-y").dataset.curr=dt._id;
            e.stopPropagation()
            currLocation = dt.status === "active" ? "view" : "trash";
        })
        if(dt.status === "deleted") {tCont.prepend(d);  return}
        else if(location !== "undefined" && location === "view") {_e("[data-c]").prepend(d); return}
        if(cl != undefined && typeof cl == "object" && _a(".d-r--d").length > 2) {let m = cl.previousSibling; if(m) m.after(d); else _e("[data-c]").prepend(d)}
        else _e("[data-c]").prepend(d);
    }
    nonce()
}
(function() {
    function rSz() {
        const doc = document.documentElement
        doc.style.setProperty('--h', `${window.innerHeight}px`);
        let dd = _e("#d-d");
        dd.style.height = `calc(var(--h) - ${Math.floor(dd.getBoundingClientRect().top + 110)}px`;
    }
    window.addEventListener("resize", rSz);
    rSz();
    dl = JSON.parse(localStorage.getItem("diary"));
    let fDa = JSON.parse(localStorage.getItem("dq-theme"));
if(dl===null || !dl) (dl = [], localStorage.setItem("diary", JSON.stringify([])));
else dl.forEach(a=> ap(a, a.type));
if(fDa === null) (dA = [{theme: "dark"}], localStorage.setItem("dq-theme", JSON.stringify(dA)), _e("body").classList.add("dark"))
else {dA = fDa;
     _e("body").classList.add(dA[0].theme);
     let moD = dA[0].theme === "dark" ? "moon" : "sun";
     _e(".mode").classList.add(moD)
}
})();
_e("#d-iar-y").addEventListener("submit", fo=>{
    let r = false; //flag: update?
    fo.preventDefault();
    let fObj = {}, v = 0; // v flag to measure validation
    let n = Array.from(document.querySelectorAll(".i--t"));
    n.forEach(u=>{
    if(vi(u)) v++;
    fObj[u.title.toLowerCase()] = u.value;
    });
    if(v<2) {console.log("wow"); return false;}
    if(fo.target.dataset.act === "edit" && fo.target.dataset.curr !== "") r = fo.target.dataset.curr //then update to local db
    nr(fObj, "diary", r);
})

const hd = e => {
    let g = _e(".a-l-t");
    const c_to_t = ()=> clearTimeout(to_t);
    const r_to_t = () =>(c_to_t(), to_t = setTimeout(()=>{g.classList.remove("a-ctiv-e"); g.removeEventListener("mouseover", c_to_t)},3500));
    r_to_t();
    let t_e = dl.findIndex(a=>a._id === e);
    reDom(currEl)
    rMc(_e(".b-l-r--d"), "t-ouc-h")
    if(currLocation === "trash") {
       dl.splice(t_e, 1);
    }
    else {
        dl[t_e].status = "deleted";
        ap(dl[t_e], "diary");
        g.classList.add("a-ctiv-e");
        g.addEventListener("mouseover", c_to_t);
        g.addEventListener("mouseleave", r_to_t);
        rMc(_e(".b-l-r--d"), "t-ouc-h")
    }
    try {
        localStorage.setItem("diary", JSON.stringify(dl));
    } catch (error) {
        console.log(error);
    }
    nonce();
}

const reDom = (el, clEl, dt) => { //div, closest sibling, object data 
    // if(clEl ===  undefined) clEl = el.previousSibling;
    el.classList.add("i-nvi");
    setTimeout(()=>{el.remove()}, 100)
}

const re = (o, i) => {
    let m = dl.find(n=>n._id===i);
    let p = dl.findIndex(q=>q._id===i);
    if(m!==undefined) {o._id = m._id; dl.splice(p, 1); 
    reDom(currEl, undefined, o);
    return o}
    hr("find", i, false) //handle errors
}

const nr = (obj, type, up) => { //can be reused to edit & update diary records and more
    let am = false; //ainimate ap() div
    if(type === "diary") {
        obj.type = type;
        obj.status="active";
        obj.date = new Date();
        if(typeof up === undefined || !up )(obj._id = rm()(20), dl.push(obj), am = true);
        else dl.push(re(obj, up));
        console.log(dl);
        try {
            localStorage.setItem(type, JSON.stringify(dl));
        } catch (error) {
            console.log(error);
        }
        ap(obj, type, currEl, am);
        cf(hc); //clear form
    }
}
const rm = (w="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")=>{
    return (num)=>{
        r = "";
        let c = 0;
        while(c<num) {c++; r += w.charAt(Math.floor(Math.random() * num))};
        return r;
    }   
}


const cf = (cbck)=> {
Array.from(document.querySelectorAll(".i--t")).forEach(ip=>ip.value = "");
cbck(_e(".b-c-t-p"));
}

function spt(t, a, b) {
    return t.substring(a,b)
}
function hdp(to, a) {
    let n = Array.from(document.querySelectorAll(".i--t"));
    n.forEach(m=>m.value = to[m.title.toLowerCase()])
    let q;
    if(to.image.length < 1) {_e(".c--main.a-ctiv-e").style.backgroundImage=`none`; _e(".c--main.a-ctiv-e").classList.remove("has-img"); q = _e(".i-n-n")} 
   else { _e(".c--main.a-ctiv-e").style.backgroundImage=`url(https://mozaski.github.io/Diary/images/${to.image.split("/")[2]})`; _e(".c--main.a-ctiv-e").classList.add("has-img"); q =  _e(`[data-rep='${spt(to.image, 9, 12)}']`).closest(".i-m-g-d-p"); }
    aCtivE(q, "add", [".i-m-g-d-p.a-ctiv-e"]);
    refresh("form#d-iar-y", a, "diary");
    if(iPh()) fdTmt = setTimeout(()=>{_e(".z-tt").classList.add("fd-Dwn")},3000);
    _e(".v-w-tt").innerHTML = to.title
    if(iPh)
    _e("#f-dt").innerText =  daT(to.date, false) + " ~ " + daT(to.date, true);

}
const et = (id, type, elt, act)=>{
    const to = dl.find(el=>el._id === id);
    if(elt!==undefined && to) hc(elt);
    hdp(to, act);
}
eDg.addEventListener("click", ()=>refresh("form#d-iar-y", "edit", "diary"));
const hr = (a,b)=>{
    console.log(a, b);
}
const vi = (i) => { //validate inputs
    if(i.value !== "") return true;
    let j = i.dataset.e;
    i.setAttribute("placeholder", "Please enter "+j); i.focus(); i.classList.add("has-e");
    return false
}


let sO;
_e("#d-sch").addEventListener("input", function(){
    if(lDr.classList.contains("l-d-g") == false) lDr.classList.add("l-d-g");
    clearTimeout(sO)
   let dS = this.value;
   if(dS.length === 0) {
    if(lDr.classList.contains("l-d-g")) lDr.classList.remove("l-d-g");
    clearTimeout(sO);
    sh([]);
   }
   let tOps = dl.filter(s => s.title.indexOf(dS) > -1 && s.status !== "deleted");
   sO = setTimeout(()=> {
    if(lDr.classList.contains("l-d-g")) lDr.classList.remove("l-d-g")
    if(dS.length > 0) {sh(tOps)};   
   },1300);
});

let s_r = _e("#s_r");
const sh = dt => {
    s_r.innerHTML = "";
    for(let i = 0; i < dt.length; i++) {
        let s = document.createElement("a");
        s.setAttribute("href", "javascript:void(0)");
        s.innerHTML = `
        <h3>${dt[i].title}</h3>
        <p>${dt[i].text}</p>
        <div class="flex j-c-b a-i-c"><span>${daT(dt[i].date, true)}</span><span></span></span>
        `;
        s_r.append(s);
        s.addEventListener("click", (e)=>{
            currI = dt[i]._id
            et(dt[i]._id, "diary", e.target, "view");
            currLocation = "view";
            _e("#d-iar-y").dataset.curr=dt[i]._id;
            rMc(_e("#dt-s"), "a-ctiv-e");
        });
    }
}

nonce()

