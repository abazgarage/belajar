// AB GARAGE - SISTEM NILAI EVALUASI SMK
(function(){
  const KEY='abgarage_scores_v1';
  const KKM=75;
  const modules=['MODUL 01','MODUL 02','MODUL 03','MODUL 04','MODUL 05','MODUL 06','MODUL 07','MODUL 08'];
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
  const write=data=>localStorage.setItem(KEY,JSON.stringify(data));
  const currentTag=()=>document.getElementById('lessonTag')?.textContent.trim();
  const saveScore=(tag,score)=>{if(!modules.includes(tag)||!Number.isFinite(score))return;const d=read();d[tag]={score:Math.round(score),date:new Date().toISOString(),kkm:KKM};write(d);renderDashboard();renderLessonScore()};
  const getScore=tag=>read()[tag]?.score;
  const parseScore=text=>{
    if(!text)return null;
    const pct=text.match(/(\d+(?:[.,]\d+)?)\s*%/);if(pct)return Number(pct[1].replace(',','.'));
    const frac=text.match(/(\d+(?:[.,]\d+)?)\s*\/\s*100/);if(frac)return Number(frac[1].replace(',','.'));
    const val=text.match(/(?:nilai|score|skor)\s*[:=]?\s*(\d+(?:[.,]\d+)?)/i);if(val)return Number(val[1].replace(',','.'));
    return null;
  };
  function findQuiz(){return document.querySelector('.quiz-pack,.smk-assessment');}
  function captureQuizScore(){
    const tag=currentTag(),quiz=findQuiz();if(!tag||!quiz)return;
    const scoreEl=quiz.querySelector('.quiz-score');
    if(!scoreEl)return;
    const score=parseScore(scoreEl.textContent);if(score!==null)saveScore(tag,score);
  }
  function renderLessonScore(){
    const body=document.getElementById('lessonBody'),tag=currentTag();if(!body||!modules.includes(tag))return;
    let panel=body.querySelector('.nilai-lesson-panel');
    if(!panel){panel=document.createElement('div');panel.className='nilai-lesson-panel';body.prepend(panel)}
    const score=getScore(tag);
    panel.innerHTML=score===undefined
      ? `<div><span class="nilai-label">NILAI EVALUASI</span><strong>Belum ada nilai</strong><p>Kerjakan evaluasi modul untuk mendapatkan nilai.</p></div><span class="nilai-badge neutral">Belum dinilai</span>`
      : `<div><span class="nilai-label">NILAI EVALUASI</span><strong>${score}/100</strong><p>KKM sementara: ${KKM}. Nilai ini tersimpan di browser perangkat ini.</p></div><span class="nilai-badge ${score>=KKM?'lulus':'ulang'}">${score>=KKM?'TUNTAS':'BELUM TUNTAS'}</span>`;
  }
  function renderDashboard(){
    const dash=document.getElementById('progressDashboard');if(!dash)return;
    let box=dash.querySelector('.nilai-dashboard');
    if(!box){box=document.createElement('div');box.className='nilai-dashboard';dash.appendChild(box)}
    const d=read(),scores=modules.map(m=>d[m]?.score).filter(v=>Number.isFinite(v));
    const avg=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):0;
    const tuntas=scores.filter(v=>v>=KKM).length;
    box.innerHTML=`<div class="nilai-head"><div><p class="eyebrow">HASIL EVALUASI</p><h3>Nilai Kompetensi</h3></div><div class="nilai-average">${scores.length?avg:'—'}<small>rata-rata</small></div></div><div class="nilai-summary">${scores.length} dari ${modules.length} modul dinilai · ${tuntas} modul tuntas · KKM ${KKM}</div><div class="nilai-grid">${modules.map(m=>{const s=d[m]?.score;return `<div class="nilai-item"><strong>${m}</strong><span>${s===undefined?'—':s+'/100'}</span><small>${s===undefined?'Belum dinilai':s>=KKM?'Tuntas':'Belum tuntas'}</small></div>`}).join('')}</div>`;
  }
  function observe(){
    const root=document.body;
    if(!root)return;
    const observer=new MutationObserver(()=>{captureQuizScore();renderLessonScore();renderDashboard()});
    observer.observe(root,{childList:true,subtree:true,characterData:true});
    setInterval(captureQuizScore,1000);
  }
  window.ABGrades={getScore,saveScore,KKM,renderDashboard};
  renderDashboard();renderLessonScore();observe();
})();
