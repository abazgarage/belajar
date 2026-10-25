// Pre-test & Post-test SMK Otomotif AB Garage
(function(){
  const KEY='abgarage_prepost_v1';
  const modules=['MODUL 01','MODUL 02','MODUL 03','MODUL 04','MODUL 05','MODUL 06','MODUL 07','MODUL 08'];
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}};
  const write=v=>localStorage.setItem(KEY,JSON.stringify(v));
  const shuffle=a=>a.map(v=>({v,r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.v);
  const tag=()=>document.querySelector('#lessonTag')?.textContent?.trim()||'';
  const data=()=>window.smkAssessment?.[tag()]?.questions||[];
  function scoreTest(host,type,questions){
    const selected=host.querySelectorAll('input:checked');
    if(selected.length<questions.length){host.querySelector('.prepost-feedback').textContent=`Jawab semua ${questions.length} soal terlebih dahulu.`;return}
    let benar=0; questions.forEach((q,i)=>{if(host.querySelector(`input[name="${type}-${i}"]:checked`)?.value===q[4])benar++});
    const nilai=Math.round(benar/questions.length*100);
    const all=read(); const m=all[tag()]||{}; m[type]={score:nilai,date:new Date().toISOString()}; all[tag()]=m; write(all);
    host.querySelector('.prepost-score').textContent=`Nilai ${type==='pre'?'Pre-test':'Post-test'}: ${nilai}/100`;
    host.querySelector('.prepost-feedback').textContent=nilai>=75?'Tuntas (≥ KKM 75).':'Belum tuntas. Pelajari kembali materi lalu coba lagi.';
    host.querySelectorAll('input').forEach(x=>x.disabled=true);
    host.querySelector('.prepost-reset').hidden=false;
    renderSummary();
  }
  function renderTest(type,questions){
    const wrap=document.createElement('section'); wrap.className='prepost-test';
    const title=type==='pre'?'📝 Pre-test':'🎯 Post-test';
    wrap.innerHTML=`<div class="prepost-title"><h3>${title}</h3><span>${questions.length} soal</span></div><p>${type==='pre'?'Kerjakan sebelum mempelajari modul untuk mengetahui kemampuan awal.':'Kerjakan setelah mempelajari materi dan praktik untuk mengukur hasil belajar.'}</p>`;
    questions.forEach((q,i)=>{
      const box=document.createElement('div'); box.className='prepost-question';
      box.innerHTML=`<strong>${i+1}. ${q[0]}</strong><div class="prepost-options">${q.slice(1,5).map((o,j)=>`<label><input type="radio" name="${type}-${i}" value="${String.fromCharCode(65+j)}"> ${o}</label>`).join('')}</div>`;
      wrap.appendChild(box);
    });
    const actions=document.createElement('div'); actions.className='prepost-actions';
    actions.innerHTML=`<button class="btn-primary prepost-submit">Periksa ${type==='pre'?'Pre-test':'Post-test'}</button><button class="btn-secondary prepost-reset" hidden>Ulangi</button><strong class="prepost-score"></strong><span class="prepost-feedback"></span>`;
    wrap.appendChild(actions);
    actions.querySelector('.prepost-submit').onclick=()=>scoreTest(wrap,type,questions);
    actions.querySelector('.prepost-reset').onclick=()=>{wrap.replaceWith(renderTest(type,questions))};
    return wrap;
  }
  function renderSummary(){
    const host=document.querySelector('#prepostSummary'); if(!host)return;
    const all=read(); let html='<h3>📈 Perkembangan Pre-test & Post-test</h3><div class="prepost-summary-grid">';
    modules.forEach(m=>{const d=all[m]||{}; const pre=d.pre?.score; const post=d.post?.score; const diff=pre!=null&&post!=null?post-pre:null; html+=`<div class="prepost-summary-item"><b>${m}</b><span>Pre: ${pre==null?'—':pre}</span><span>Post: ${post==null?'—':post}</span><strong>${diff==null?'Belum lengkap':(diff>=0?`+${diff}`:`${diff}`)}${diff!=null?' poin':''}</strong></div>`});
    host.innerHTML=html+'</div>';
  }
  function inject(){
    const lesson=document.querySelector('#lessonBody'); if(!lesson)return;
    const t=tag(); if(!modules.includes(t)||!window.smkAssessment?.[t])return;
    if(lesson.querySelector('.prepost-wrap')){renderSummary();return}
    const qs=data(); if(!qs.length)return;
    const wrap=document.createElement('div'); wrap.className='prepost-wrap';
    const all=read(), saved=all[t]||{};
    const preQs=shuffle(qs).slice(0,5), postQs=shuffle(qs).slice(0,5);
    wrap.appendChild(renderTest('pre',preQs)); wrap.appendChild(renderTest('post',postQs));
    const sum=document.createElement('div'); sum.id='prepostSummary'; sum.className='prepost-summary'; wrap.appendChild(sum);
    lesson.appendChild(wrap); renderSummary();
  }
  window.ABPrePost={render:inject,read};
  setInterval(inject,900);
})();
