// Status Kompetensi Siswa SMK Otomotif AB Garage
(function(){
  const KEY='abgarage_competency_v1';
  const KKM=75;
  const modules=['MODUL 01','MODUL 02','MODUL 03','MODUL 04','MODUL 05','MODUL 06','MODUL 07','MODUL 08'];
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}};
  const write=v=>localStorage.setItem(KEY,JSON.stringify(v));
  const getProgress=()=>{try{return JSON.parse(localStorage.getItem('abgarage_progress_v1')||'{}')}catch{return {}}};
  const getPrePost=()=>{try{return JSON.parse(localStorage.getItem('abgarage_prepost_v1')||'{}')}catch{return {}}};
  const tag=()=>document.querySelector('#lessonTag')?.textContent?.trim()||'';

  function calculate(m){
    const p=getProgress()[m];
    const tests=getPrePost()[m]||{};
    const score=tests.post?.score;
    const completed=!!(p===true || p?.completed===true || p?.status==='selesai');
    const hasPost=typeof score==='number';
    if(hasPost && score>=KKM && completed) return {status:'KOMPETEN',cls:'kompeten',reason:'Post-test memenuhi KKM dan modul selesai.'};
    if(hasPost && score<KKM) return {status:'BELUM KOMPETEN',cls:'belum',reason:`Post-test ${score} masih di bawah KKM ${KKM}.`};
    if(hasPost && score>=KKM) return {status:'SIAP VERIFIKASI',cls:'verifikasi',reason:'Nilai memenuhi KKM, tetapi progres modul belum ditandai selesai.'};
    if(completed) return {status:'SELESAI BELAJAR',cls:'selesai',reason:'Modul selesai, tetapi post-test belum tersedia.'};
    return {status:'SEDANG BELAJAR',cls:'belajar',reason:'Selesaikan materi, praktik, dan post-test.'};
  }

  function renderDashboard(){
    const host=document.querySelector('#progressDashboard'); if(!host)return;
    const states=modules.map(calculate);
    const count=n=>states.filter(x=>x.status===n).length;
    let html='<section class="kompetensi-dashboard"><div class="kompetensi-head"><div><h3>🎓 Status Kompetensi</h3><p>Ketuntasan ditentukan dari progres modul dan hasil post-test.</p></div><strong>'+count('KOMPETEN')+'/'+modules.length+' kompeten</strong></div><div class="kompetensi-grid">';
    modules.forEach((m,i)=>{const s=states[i];const tests=getPrePost()[m]||{};const score=tests.post?.score;html+=`<div class="kompetensi-item"><div class="kompetensi-module"><b>${m}</b><span class="kompetensi-badge ${s.cls}">${s.status}</span></div><div class="kompetensi-score">Post-test: <strong>${score==null?'—':score+'/100'}</strong></div><small>${s.reason}</small></div>`});
    host.innerHTML=html+'</div></section>';
  }

  function renderLesson(){
    const body=document.querySelector('#lessonBody'); const m=tag(); if(!body||!modules.includes(m))return;
    const old=body.querySelector('.kompetensi-lesson'); if(old)old.remove();
    const s=calculate(m); const tests=getPrePost()[m]||{}; const score=tests.post?.score;
    const box=document.createElement('div'); box.className='kompetensi-lesson';
    box.innerHTML=`<div><span>Status kompetensi</span><strong class="kompetensi-badge ${s.cls}">${s.status}</strong></div><p>${s.reason}</p>${score!=null?`<small>Post-test: ${score}/100 · KKM: ${KKM}</small>`:''}`;
    body.appendChild(box);
  }

  window.ABCompetency={calculate,renderDashboard,renderLesson,KKM,read,write};
  let last='';
  setInterval(()=>{const signature=JSON.stringify([localStorage.getItem(KEY),localStorage.getItem('abgarage_progress_v1'),localStorage.getItem('abgarage_prepost_v1'),tag()]);if(signature!==last){last=signature;renderDashboard();renderLesson()}},800);
})();
