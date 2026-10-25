// AB GARAGE - SISTEM PROGRES BELAJAR
(function(){
  const KEY='abgarage_progress_v1';
  const modules=[
    {id:'MODUL 01',title:'Menyiapkan Gambar Teknik'},
    {id:'MODUL 02',title:'Mesin Kendaraan'},
    {id:'MODUL 03',title:'Pemindah Tenaga'},
    {id:'MODUL 04',title:'Kelistrikan Mobil'},
    {id:'MODUL 05',title:'Sistem Bahan Bakar'},
    {id:'MODUL 06',title:'Tools dan Alat Ukur'},
    {id:'MODUL 07',title:'Rem, Kemudi dan Suspensi'},
    {id:'MODUL 08',title:'Diagnosis Kerusakan'}
  ];

  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
  const write=data=>localStorage.setItem(KEY,JSON.stringify(data));
  const completed=()=>{const d=read();return modules.filter(m=>d[m.id]?.done).length};
  const percent=()=>Math.round(completed()/modules.length*100);

  function markDone(id){
    const d=read();
    d[id]={done:true,date:new Date().toISOString()};
    write(d);
    renderAll();
  }

  function reset(){
    if(!confirm('Hapus seluruh progres belajar di perangkat ini?'))return;
    localStorage.removeItem(KEY);
    renderAll();
  }

  function renderDashboard(){
    const home=document.getElementById('beranda');
    if(!home||document.getElementById('progressDashboard'))return;
    const box=document.createElement('section');
    box.id='progressDashboard';
    box.className='progress-dashboard';
    box.innerHTML=`
      <div class="progress-head">
        <div><p class="eyebrow">PROGRES BELAJAR</p><h2>Perjalanan Kompetensi</h2><p class="muted">Progres tersimpan di browser perangkat ini.</p></div>
        <div class="progress-percent" id="progressPercent">0%</div>
      </div>
      <div class="progress-bar"><span id="progressBarFill"></span></div>
      <div class="progress-summary" id="progressSummary"></div>
      <div class="progress-list" id="progressList"></div>
      <button class="progress-reset" id="progressReset" type="button">Reset progres</button>`;
    const target=home.querySelector('.feature-grid');
    target?.after(box);
    updateDashboard();
    box.querySelector('#progressReset')?.addEventListener('click',reset);
  }

  function updateDashboard(){
    const box=document.getElementById('progressDashboard');
    if(!box)return;
    const d=read(),done=completed(),pct=percent();
    box.querySelector('#progressPercent').textContent=pct+'%';
    box.querySelector('#progressBarFill').style.width=pct+'%';
    box.querySelector('#progressSummary').textContent=`${done} dari ${modules.length} modul selesai`;
    box.querySelector('#progressList').innerHTML=modules.map(m=>{
      const ok=!!d[m.id]?.done;
      return `<button type="button" class="progress-module ${ok?'is-done':''}" data-progress-module="${m.id}"><span class="progress-check">${ok?'✓':'○'}</span><span><strong>${m.id}</strong><small>${m.title}</small></span><span class="progress-status">${ok?'Selesai':'Belum selesai'}</span></button>`;
    }).join('');
    box.querySelectorAll('[data-progress-module]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.dataset.progressModule;
      const topic=[...document.querySelectorAll('[data-topic]')].find(x=>{
        const key={'MODUL 01':'dasar','MODUL 02':'mesin','MODUL 03':'tenaga','MODUL 04':'listrik','MODUL 05':'bahanbakar','MODUL 06':'tools','MODUL 07':'chassis','MODUL 08':'diagnosis'}[id];
        return x.dataset.topic===key;
      });
      if(topic)topic.click();
    }));
  }

  function renderLesson(){
    const body=document.getElementById('lessonBody');
    const tag=document.getElementById('lessonTag')?.textContent.trim();
    if(!body||!modules.some(m=>m.id===tag))return;
    const done=!!read()[tag]?.done;
    let panel=body.querySelector('.progress-lesson-panel');
    if(panel&&panel.dataset.tag===tag&&panel.dataset.done===String(done))return;
    if(!panel){
      panel=document.createElement('div');
      panel.className='progress-lesson-panel';
      body.prepend(panel);
    }
    panel.dataset.tag=tag;
    panel.dataset.done=String(done);
    panel.innerHTML=`<div><span class="progress-label">STATUS BELAJAR</span><strong>${done?'✓ Modul selesai':'Belum selesai'}</strong><p>${done?'Progres modul ini sudah tercatat di perangkat.':'Pelajari materi, kerjakan job sheet dan evaluasi, lalu tandai modul sebagai selesai.'}</p></div><button type="button" class="progress-complete ${done?'is-done':''}" ${done?'disabled':''}>${done?'✓ Sudah selesai':'Tandai modul selesai'}</button>`;
    panel.querySelector('button')?.addEventListener('click',()=>markDone(tag));
  }

  function renderAll(){updateDashboard();renderLesson()}
  window.ABProgress={markDone,reset,percent,completed};

  renderDashboard();
  renderLesson();
  const observer=new MutationObserver(()=>{renderDashboard();renderLesson()});
  observer.observe(document.body,{childList:true,subtree:true});
})();
