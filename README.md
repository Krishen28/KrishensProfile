<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Your Personal Profile</title>
  <meta name="description" content="Personal profile with schedule, soccer, and countdown" />

  <!--
    Required image files (place in repo root or update paths):
      - profile.jpg           (your profile photo)
      - schedule.png          (scre<img width="857" height="443" alt="Screenshot 2025-09-26 at 9 39 45 AM" src="https://github.com/user-attachments/assets/d841501e-8c5f-43cb-bd5a-e9c0c370d40c" />
enshot or exported schedule image)
      - dexter-logo.png       (Dexter Southfield logo used as blurred background)
      - real-madrid.png       (Real Madrid crest)
      - ronaldo.jpg           (Cristiano Ronaldo photo)
      - kaka.jpg              (Kaká photo)
      - celtics.png           (Celtics logo)
      - redsox.png            (Red Sox logo)
    Replace filenames or paths below if you prefer a different folder structure.
  -->

  <style>
    :root{
      --accent: #0b72ff;
      --glass: rgba(255,255,255,0.85);
      --muted: #586069;
      --card-radius: 12px;
      --max-width: 1100px;
      --page-padding: 20px;
    }
    html,body{height:100%;margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;}
    body{
      display:flex;
      align-items:center;
      justify-content:center;
      padding:30px;
      background: linear-gradient(180deg,#f6fbff 0%, #eef6ff 100%);
      color:#0b1a2b;
    }

    .page {
      position:relative;
      width:100%;
      max-width:var(--max-width);
      min-height:640px;
      border-radius:18px;
      overflow:hidden;
      box-shadow: 0 10px 40px rgba(10,20,40,0.12);
      background:linear-gradient(180deg, rgba(255,255,255,0.7), rgba(250,250,255,0.9));
      padding:var(--page-padding);
      box-sizing:border-box;
    }

    /* blurred background logo */
    .bg-logo {
      position:absolute;
      inset:0;
      z-index:0;
      display:flex;
      align-items:center;
      justify-content:center;
      pointer-events:none;
      opacity:0.12;
      filter: blur(10px) saturate(80%);
    }
    .bg-logo img{
      max-width:65%;
      transform: rotate(-3deg);
      object-fit:contain;
      mix-blend-mode: multiply;
    }

    header {
      position:relative;
      z-index:2;
      display:flex;
      gap:18px;
      align-items:center;
      margin-bottom:18px;
    }

    /* Profile image top-left */
    .profile {
      flex:0 0 auto;
      width:96px;
      height:96px;
      border-radius:14px;
      overflow:hidden;
      border:3px solid rgba(255,255,255,0.7);
      box-shadow: 0 6px 16px rgba(10,20,40,0.12);
      background: linear-gradient(135deg,#fff,#f4f8ff);
    }
    .profile img {
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    }

    .title {
      display:flex;
      flex-direction:column;
    }
    .title h1{
      margin:0;
      font-size:20px;
      letter-spacing:-0.2px;
    }
    .title p{
      margin:6px 0 0 0;
      color:var(--muted);
      font-size:14px;
    }

    .content {
      position:relative;
      z-index:2;
      display:grid;
      grid-template-columns: 1fr 360px;
      gap:18px;
      align-items:start;
    }

    /* Left column (main) */
    .main {
      background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85));
      padding:16px;
      border-radius:var(--card-radius);
      min-height:420px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
    }
    .section {
      margin-bottom:16px;
    }
    .section h2{
      margin:0 0 10px 0;
      font-size:16px;
    }
    .schedule-img {
      width:100%;
      border-radius:10px;
      overflow:hidden;
      border:1px solid rgba(10,20,40,0.04);
      box-shadow: 0 6px 14px rgba(10,20,40,0.06);
    }
    .schedule-img img{
      display:block;
      width:100%;
      height:auto;
    }

    /* Right column */
    .sidebar {
      background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,255,0.95));
      border-radius:var(--card-radius);
      padding:14px;
      box-shadow: 0 6px 18px rgba(10,20,40,0.06);
    }

    .countdown {
      display:flex;
      gap:8px;
      align-items:center;
      margin-bottom:12px;
    }
    .countdown .box{
      background:var(--glass);
      padding:10px 12px;
      border-radius:10px;
      text-align:center;
      min-width:64px;
    }
    .countdown .box .num{font-weight:700;font-size:18px;}
    .countdown .box .lbl{font-size:12px;color:var(--muted);margin-top:4px;}

    .after-school {
      margin-top:8px;
    }
    .after-school ul{padding-left:18px;margin:6px 0 0 0;}
    .after-school li{margin:8px 0;font-weight:600;}

    /* soccer gallery */
    .soccer {
      display:flex;
      gap:10px;
      align-items:center;
      justify-content:space-between;
      margin-top:10px;
    }
    .soccer .crest{
      width:72px;
      height:72px;
      border-radius:10px;
      overflow:hidden;
      background:white;
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px solid rgba(10,20,40,0.04);
    }
    .soccer .photos{
      display:flex;
      gap:8px;
      align-items:center;
    }
    .soccer img{height:72px;border-radius:8px;object-fit:cover;box-shadow: 0 8px 18px rgba(10,20,40,0.08);}

    .logos {
      display:flex;
      gap:10px;
      margin-top:8px;
      align-items:center;
    }
    .logos img{height:40px;opacity:0.95;}

    footer{
      margin-top:14px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:8px;
      color:var(--muted);
      font-size:13px;
    }

    /* modal for big images */
    .modal {
      position:fixed;
      inset:0;
      display:none;
      align-items:center;
      justify-content:center;
      background: rgba(2,6,23,0.6);
      z-index:9999;
    }
    .modal .imgwrap{
      max-width:95%;
      max-height:90%;
      border-radius:12px;
      overflow:hidden;
      box-shadow: 0 20px 60px rgba(2,6,23,0.6);
      background:#fff;
    }
    .modal img{
      display:block;
      width:100%;
      height:auto;
    }

    /* small screens */
    @media (max-width:920px){
      .content { grid-template-columns: 1fr; }
      .sidebar { order:2; }
      .main { order:1; }
      header{ gap:12px;}
    }
  </style>
</head>
<body>
  <div class="page" role="main" aria-labelledby="pagename">
    <!-- blurred background logo (Dexter) -->
    <div class="bg-logo" aria-hidden="true">
      <img src="dexter-logo.png" alt="">
    </div>

    <header>
      <div class="profile" title="Your photo">
        <img src="profile.jpg" alt="Profile photo">
      </div>
      <div class="title">
        <h1 id="pagename">Your Name</h1>
        <p>Student • Soccer player • Real Madrid fan</p>
        <div style="margin-top:8px;">
          <small style="color:var(--muted)">Location: Dexter Southfield (edit in HTML)</small>
        </div>
      </div>

      <!-- spacer -->
      <div style="flex:1"></div>

      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
        <div style="background:var(--glass);padding:8px 10px;border-radius:10px;font-weight:700;">Grade: 9</div>
        <div style="font-size:12px;color:var(--muted);">Updated: <span id="updatedAt"></span></div>
      </div>
    </header>

    <div class="content">
      <section class="main" aria-label="Main content">
        <div class="section" aria-hidden="false">
          <h2>Schedule</h2>
          <div class="schedule-img" role="img" aria-label="School schedule">
            <!-- Replace schedule.png with the screenshot image you uploaded -->
            <img id="scheduleImg" src="schedule.png" alt="School schedule - replace with your Blackbaud screenshot">
          </div>
          <p style="margin-top:8px;color:var(--muted);font-size:13px;">
            Tip: Replace the schedule image above (schedule.png) with an updated screenshot exported from your Blackbaud account or recreate it in HTML.
          </p>
        </div>

        <div class="section" aria-label="Soccer section">
          <h2>Soccer & Favorites</h2>
          <div class="soccer">
            <div class="crest" title="Real Madrid">
              <img src="real-madrid.png" alt="Real Madrid crest" style="width:64px;height:64px;">
            </div>

            <div class="photos" style="flex:1;justify-content:flex-end;">
              <img src="ronaldo.jpg" alt="Cristiano Ronaldo" style="width:120px;height:72px;object-fit:cover;">
              <img src="kaka.jpg" alt="Kaká" style="width:120px;height:72px;object-fit:cover;">
            </div>
          </div>

          <div class="logos" aria-hidden="false">
            <img src="celtics.png" alt="Celtics logo">
            <img src="redsox.png" alt="Red Sox logo">
          </div>
        </div>
      </section>

      <aside class="sidebar" aria-label="Sidebar">
        <h2>Countdown to end of school</h2>
        <div class="countdown" id="countdown" aria-live="polite" role="timer">
          <div class="box">
            <div class="num" id="days">--</div>
            <div class="lbl">Days</div>
          </div>
          <div class="box">
            <div class="num" id="hours">--</div>
            <div class="lbl">Hours</div>
          </div>
          <div class="box">
            <div class="num" id="mins">--</div>
            <div class="lbl">Mins</div>
          </div>
          <div class="box">
            <div class="num" id="secs">--</div>
            <div class="lbl">Secs</div>
          </div>
        </div>

        <div style="margin-top:12px;">
          <label style="font-weight:700;display:block;margin-bottom:6px;">After-school schedule</label>
          <div class="after-school" role="list">
            <ul>
              <li>Mon — Soccer Practice — 4:00 PM (MS Field)</li>
              <li>Wed — Soccer Practice — 4:00 PM (MS Field)</li>
              <li>Fri — Practice — 4:45 PM (MS Field)</li>
            </ul>
          </div>
        </div>

        <div style="margin-top:12px;">
          <button id="downloadScheduleBtn" style="background:var(--accent);color:white;border:0;padding:10px 12px;border-radius:10px;font-weight:700;cursor:pointer;">
            Download Schedule Image
          </button>
        </div>

        <div style="margin-top:14px;">
          <h3 style="margin:0 0 8px 0;font-size:14px;">Quick links</h3>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <a href="#" onclick="openImage('schedule.png');return false;">Open full schedule</a>
            <a href="https://www.realmadrid.com" target="_blank" rel="noopener">Real Madrid official</a>
            <a href="https://www.dextersouthfield.org" target="_blank" rel="noopener">Dexter Southfield</a>
          </div>
        </div>
      </aside>
    </div>

    <footer>
      <div style="display:flex;align-items:center;gap:10px;">
        <small>© <span id="currentYear"></span> Your Name</small>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <img src="celtics.png" alt="Celtics" style="height:28px;">
        <img src="redsox.png" alt="Red Sox" style="height:28px;">
      </div>
    </footer>
  </div>

  <!-- modal -->
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="imgwrap" id="modalWrap">
      <img id="modalImg" src="" alt="Expanded image">
    </div>
  </div>

  <script>
    /* ===========================
       Configuration - edit these
       =========================== */
    // set the school end date here (ISO format). Change to your actual last day of school.
    const schoolEnd = new Date('2026-06-06T23:59:59'); // <-- change this to your school's last day/time

    // filenames for assets (ensure they exist in your repo)
    const ASSETS = {
      schedule: 'schedule.png' // replace with your screenshot filename if different
    };

    // set this to your display values
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('updatedAt').textContent = new Date().toLocaleDateString();

    /* Countdown logic */
    function pad(n){ return String(n).padStart(2,'0'); }
    function updateCountdown(){
      const now = new Date();
      let diff = schoolEnd - now;
      if(diff <= 0){
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '00';
        document.getElementById('mins').textContent = '00';
        document.getElementById('secs').textContent = '00';
        return;
      }
      const days = Math.floor(diff / (1000*60*60*24));
      diff -= days * (1000*60*60*24);
      const hours = Math.floor(diff / (1000*60*60));
      diff -= hours * (1000*60*60);
      const mins = Math.floor(diff / (1000*60));
      diff -= mins * (1000*60);
      const secs = Math.floor(diff / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = pad(hours);
      document.getElementById('mins').textContent = pad(mins);
      document.getElementById('secs').textContent = pad(secs);
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* Modal / download logic */
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    function openImage(src){
      modalImg.src = src;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden','false');
    }
    function closeModal(){
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden','true');
      modalImg.src = '';
    }

    modal.addEventListener('click', (e) => {
      if(e.target === modal || e.target === modalImg) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') closeModal();
    });

    document.getElementById('scheduleImg').addEventListener('click', function(){
      openImage(ASSETS.schedule);
    });

    document.getElementById('downloadScheduleBtn').addEventListener('click', function(){
      // trigger browser download of the schedule image
      const link = document.createElement('a');
      link.href = ASSETS.schedule;
      link.download = 'my-schedule.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });

    // Make image open on double click on small devices
    document.getElementById('scheduleImg').addEventListener('dblclick', function(){
      openImage(ASSETS.schedule);
    });

    // Accessibility: ensure profile alt text and labels updated if desired
  </script>
</body>
</html>
