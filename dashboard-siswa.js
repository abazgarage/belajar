// Dashboard Siswa SMK Otomotif AB Garage
(function(){
  const modules=['MODUL 01','MODUL 02','MODUL 03','MODUL 04','MODUL 05','MODUL 06','MODUL 07','MODUL 08'];
  const KKM=75;
  const read=(key)=>{try{return JSON.parse(localStorage.getItem(key)||'{}')}catch{return {}}};
  function progress(){return read('abgarage_progress_v1')}
  function scores(){return read('abgarage_scores_v1')}
  function prepost(){return read('abgarage_prepost_v1')}
  function completed(p,m){const v=p[m];return v===true||v==='done'||v?.completed===true||v?.status==='completed'}
  function num(v){return typeof v==='number'?v:null}
  function render(){
    const host=document.querySelector('#studentDashboard'); if(!host)return;
    const p=progress(), s=scores(), pp=prepost();
    let done=0, competent=0, scored=[], best=null, need=[];
    const rows=modules.map(m=>{
      const finish=completed(p,m); if(finish)done++;
      const score=num(s[m]?.score), post=num(pp[m]?.post?.score); const final=post!=null?post:score;
      if(final!=null){scored.push(final);if(final>=KKM)competent++}
      if(final!=null&&(!best||final>best.score))best={module:m,score:final};
      if(final!=null&&final<KKM)need.push(m);
      return {m,finish,score:final,pre:num(pp[m]?.pre?.score),post,competent:final!=null&&final>=KKM};
    });
    const avg=scored.length?Math.round(scored.reduce((a,b)=>a+b,0)/scored.length):0;
    const pct=Math.round(done/modules.length*100);
    let current=rows.find(x=>!x.finish)?.m||modules[modules.length-1];
    host.innerHTML=`<section class="dashboard-card"><div class="dashboard-head"><div><span class="dashboard-kicker">DASHBOARD SISWA</span><h2>📚 Perkembangan Belajar</h2><p>Pantau progres, nilai, dan kompetensi 8 modul pembelajaran otomotif.</p></div><button class="btn-primary dashboard-continue" data-module="${current}">Lanjutkan Belajar</button></div><div class="dashboard-stats"><div><strong>${pct}%</strong><span>Progres Modul</span></div><div><strong>${avg}</strong><span>Rata-rata Nilai</span></div><div><strong>${competent}/${modules.length}</strong><span>Modul Kompeten</span></div><div><strong>${done}/${modules.length}</strong><span>Modul Selesai</span></div></div><div class="dashboard-progress"><div style="width:${pct}%"></div></div><div class="dashboard-grid"><div class="dashboard-panel"><h3>📋 Status Modul</h3>${rows.map(r=>`<div class="dashboard-row"><div><b>${r.m}</b><small>${r.pre!=null?'Pre '+r.pre:'Pre —'} · ${r.post!=null?'Post '+r.post:'Post —'}</small></div><span class="dashboard-badge ${r.competent?'ok':r.score!=null?'warn':r.finish?'done':'neutral'}">${r.competent?'KOMPETEN':r.score!=null?'BELUM KOMPETEN':r.finish?'SELESAI':'BELUM MULAI'}</span><button class="dashboard-open" data-module="${r.m}">Buka</button></div>`).join('')}</div><div class="dashboard-panel dashboard-insight"><h3>🎯 Ringkasan</h3><div class="insight-box"><span>🏆 Modul terbaik</span><b>${best?best.module+' · '+best.score:'Belum ada nilai'}</b></div><div class="insight-box"><span>⚠️ Perlu diulang</span><b>${need.length?need.join(', '):'Tidak ada'}</b></div><div class="insight-box"><span>📈 Nilai tertinggi</span><b>${best?best.score+'/100':'—'}</b></div><p class="dashboard-note">Status KOMPETEN ditampilkan jika nilai Post-test tersedia dan mencapai KKM ${KKM}. Data tersimpan di browser perangkat ini.</p></div></div></section>`;
    host.querySelector('.dashboard-continue')?.addEventListener('click',e=>openModule(e.currentTarget.dataset.module));
    host.querySelectorAll('.dashboard-open').forEach(b=>b.addEventListener('click',()=>openModule(b.dataset.module)));
  }
  function openModule(tag){
    const map=[...document.querySelectorAll('[data-tag],[data-module],[data-topic]')].find(x=>(x.dataset.tag||x.dataset.module||x.dataset.topic)===tag);
    if(map){map.click();return}
    const buttons=[...document.querySelectorAll('button,a')].find(x=>x.textContent.includes(tag)); if(buttons)buttons.click();
  }
  window.ABDashboard={render};
  setInterval(render,1200);
})();
