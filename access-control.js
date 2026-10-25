/* AB Garage access gate: landing page is public; learning areas require an active account. */
const ACCESS_CONFIG={url:'https://uaifhdrgcjpcxzycivpp.supabase.co',anonKey:'sb_publishable_anTLqkGuyo24-xIk__u6Tw_XySX8j5D'};
const accessClient=window.supabase?.createClient(ACCESS_CONFIG.url,ACCESS_CONFIG.anonKey);
const protectedTabs=new Set(['materi','detail-materi','kalkulator','simulasi']);
async function requireLearningAccess(){
  if(!accessClient){window.location.href='login.html';return false;}
  const {data:{user}}=await accessClient.auth.getUser();
  if(!user){window.location.href='login.html';return false;}
  const {data:profile,error}=await accessClient.from('abg_profiles').select('account_status').eq('id',user.id).single();
  if(error||profile?.account_status!=='active'){await accessClient.auth.signOut();window.location.href='login.html';return false;}
  return true;
}
document.addEventListener('click',async event=>{
  const target=event.target.closest('[data-tab],[data-go],[data-topic]');
  if(!target)return;
  const destination=target.dataset.tab||target.dataset.go||target.dataset.topic;
  const needsAuth=destination==='materi'||destination==='kalkulator'||destination==='simulasi'||destination==='detail-materi'||target.hasAttribute('data-topic');
  if(!needsAuth)return;
  event.preventDefault();event.stopImmediatePropagation();
  if(await requireLearningAccess()){
    if(target.hasAttribute('data-topic')) target.click();
    else if(typeof window.showTab==='function') window.showTab(destination);
  }
},{capture:true});
