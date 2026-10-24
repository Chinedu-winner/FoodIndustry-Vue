<template>
  <div class="dashboard-shell">
    <aside class="sidebar">
      <a class="brand" href="#top" aria-label="Savorly home">
        <span class="brand-mark">s</span>
        <span>Savorly<span class="brand-period">.</span></span>
      </a>

      <div class="sidebar-label">Workspace</div>
      <nav class="side-nav" aria-label="Main navigation">
        <a class="nav-link active" href="#overview"><span class="nav-icon">▦</span>Overview</a>
        <router-link class="nav-link" to="/meal"><span class="nav-icon">▤</span>Orders <span class="nav-count">8</span></router-link>
        <a class="nav-link" href="#menu"><span class="nav-icon">◉</span>Menu</a>
        <a class="nav-link" href="#customers"><span class="nav-icon">♧</span>Customers</a>
        <a class="nav-link" href="#analytics"><span class="nav-icon">⌁</span>Analytics</a>
      </nav>

      <div class="sidebar-label management-label">Management</div>
      <nav class="side-nav" aria-label="Management navigation">
        <a class="nav-link" href="#team"><span class="nav-icon">♙</span>Team</a>
        <a class="nav-link" href="#settings"><span class="nav-icon">⚙</span>Settings</a>
      </nav>

      <div class="sidebar-bottom">
        <div class="help-card">
          <span class="help-spark">✦</span>
          <strong>Need a hand?</strong>
          <p>Our support team is here for you.</p>
          <a href="#support">Visit help center <span>→</span></a>
        </div>
        <div class="profile-row">
          <div class="avatar avatar-owner">OL</div>
          <div class="profile-copy"><strong>Olivia Lee</strong><span>Restaurant owner</span></div>
          <span class="profile-menu">···</span>
        </div>
      </div>
    </aside>

    <main id="top" class="main-content">
      <header class="topbar">
        <div class="breadcrumb">Pages <span>/</span> <strong>Overview</strong></div>
        <div class="topbar-actions">
          <label class="search-box">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search anything..." aria-label="Search dashboard" />
            <kbd>⌘ K</kbd>
          </label>
          <button class="icon-button notification-button" type="button" aria-label="Notifications">♧<i></i></button>
          <div class="topbar-avatar">OL</div>
        </div>
      </header>

      <div id="overview" class="page-content">
        <section class="welcome-row">
          <div>
            <p class="eyebrow"><span class="live-dot"></span> TUESDAY, OCTOBER 24, 2026</p>
            <h1>Good morning, Olivia <span>✦</span></h1>
            <p class="welcome-copy">Here’s what’s happening at <strong>The Greenhouse</strong> today.</p>
          </div>
          <button class="date-button" type="button"><span>▦</span> Today, Oct 24 <span class="chevron">⌄</span></button>
        </section>

        <section class="hero-banner">
          <div class="hero-copy">
            <span class="hero-kicker">YOUR DAILY SNAPSHOT</span>
            <h2>You’re having a<br /><em>great service day.</em></h2>
            <p>Sales are up <strong>18.4%</strong> compared to last Tuesday. Keep the momentum going!</p>
            <a href="#analytics" class="hero-link">View performance <span>↗</span></a>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="art-orbit orbit-one"></div>
            <div class="art-orbit orbit-two"></div>
            <div class="art-plate"><span>🥗</span></div>
            <div class="art-leaf leaf-one">✦</div>
            <div class="art-leaf leaf-two">✿</div>
            <div class="art-spark">✧</div>
          </div>
          <div class="hero-stat"><span>WEEKLY GOAL</span><strong>78%</strong><div class="goal-track"><i></i></div><small>$3,900 of $5,000</small></div>
        </section>

        <section class="metrics-grid" aria-label="Today's key metrics">
          <article v-for="metric in metrics" :key="metric.label" class="metric-card">
            <div class="metric-top"><span>{{ metric.label }}</span><span class="metric-icon" :class="metric.iconClass">{{ metric.icon }}</span></div>
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-foot"><span class="trend-pill" :class="metric.trendClass">↗ {{ metric.change }}</span><span>{{ metric.note }}</span></div>
            <div class="mini-chart" :class="metric.chartClass" aria-hidden="true"><i v-for="(height, index) in metric.bars" :key="index" :style="{ height: `${height}%` }"></i></div>
          </article>
        </section>

        <section class="content-grid">
          <article id="analytics" class="panel revenue-panel">
            <div class="panel-heading">
              <div><p class="panel-overline">REVENUE OVERVIEW</p><h3>Sales performance</h3></div>
              <button class="select-button" type="button">This week <span>⌄</span></button>
            </div>
            <div class="revenue-total"><strong>$12,840</strong><span class="trend-pill positive">↗ 12.8%</span><small>vs. previous week</small></div>
            <div class="chart-wrap">
              <div class="chart-y-labels"><span>$4k</span><span>$3k</span><span>$2k</span><span>$1k</span><span>$0</span></div>
              <div class="chart-area">
                <div class="chart-gridlines"><i></i><i></i><i></i><i></i><i></i></div>
                <svg class="revenue-chart" viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label="Revenue chart trending upward through the week">
                  <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#7ca98b" stop-opacity=".27"/><stop offset="100%" stop-color="#7ca98b" stop-opacity="0"/></linearGradient></defs>
                  <path d="M0 149 C35 138 40 145 72 132 S117 126 145 135 S190 108 218 117 S264 96 290 110 S335 82 363 94 S407 61 435 76 S475 87 508 66 S554 72 580 50 S626 57 652 33 S681 40 700 17 L700 190 L0 190 Z" fill="url(#chartFill)"/>
                  <path d="M0 149 C35 138 40 145 72 132 S117 126 145 135 S190 108 218 117 S264 96 290 110 S335 82 363 94 S407 61 435 76 S475 87 508 66 S554 72 580 50 S626 57 652 33 S681 40 700 17" fill="none" stroke="#54866b" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linecap="round"/>
                  <circle cx="700" cy="17" r="5" fill="#fff" stroke="#54866b" stroke-width="3" vector-effect="non-scaling-stroke"/>
                </svg>
                <div class="chart-x-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
              </div>
            </div>
          </article>

          <article class="panel popular-panel">
            <div class="panel-heading">
              <div><p class="panel-overline">CUSTOMER FAVORITES</p><h3>Popular dishes</h3></div>
              <button class="more-button" type="button" aria-label="More popular dishes options">···</button>
            </div>
            <div class="dish-list">
              <div v-for="(dish, index) in popularDishes" :key="dish.name" class="dish-row">
                <div class="dish-thumb" :class="dish.thumbClass">{{ dish.emoji }}</div>
                <div class="dish-info"><strong>{{ dish.name }}</strong><span>{{ dish.orders }} orders</span></div>
                <div class="dish-trend"><span>↗ {{ dish.change }}</span><i :style="{ width: `${dish.width}%` }"></i></div>
                <span class="dish-rank">0{{ index + 1 }}</span>
              </div>
            </div>
            <a class="text-link" href="#menu">View full menu <span>→</span></a>
          </article>
        </section>

        <section class="panel orders-panel">
          <div class="panel-heading orders-heading">
            <div><p class="panel-overline">STAY ON TOP OF SERVICE</p><h3>Recent orders <span class="order-total">08</span></h3></div>
            <router-link to="/meal" class="text-link">View all orders <span>→</span></router-link>
          </div>
          <div class="table-scroll">
            <table>
              <thead><tr><th>ORDER</th><th>CUSTOMER</th><th>ITEMS</th><th>TIME</th><th>TOTAL</th><th>STATUS</th></tr></thead>
              <tbody>
                <tr v-for="order in recentOrders" :key="order.id">
                  <td class="order-id">{{ order.id }}</td>
                  <td><div class="customer-cell"><span class="avatar" :class="order.avatarClass">{{ order.initials }}</span><strong>{{ order.customer }}</strong></div></td>
                  <td class="item-cell">{{ order.items }}</td>
                  <td class="time-cell">{{ order.time }}</td>
                  <td class="price-cell">{{ order.total }}</td>
                  <td><span class="status-pill" :class="order.statusClass"><i></i>{{ order.status }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer class="page-footer"><span>© 2026 Savorly</span><span>Made for the love of good food <b>♥</b></span></footer>
      </div>
    </main>
  </div>
</template>

<script setup>
const metrics = [
  { label: 'Total revenue', value: '$1,284.50', change: '18.4%', note: 'vs. yesterday', icon: '$', iconClass: 'icon-green', trendClass: 'positive', chartClass: 'bars-green', bars: [28, 48, 38, 65, 46, 76, 56, 86] },
  { label: 'Orders today', value: '42', change: '8.2%', note: 'vs. yesterday', icon: '↗', iconClass: 'icon-peach', trendClass: 'positive', chartClass: 'bars-peach', bars: [36, 52, 45, 70, 50, 65, 54, 83] },
  { label: 'Avg. prep time', value: '18 min', change: '4 min', note: 'faster today', icon: '◷', iconClass: 'icon-lilac', trendClass: 'positive', chartClass: 'bars-lilac', bars: [76, 65, 72, 56, 68, 45, 53, 36] },
  { label: 'New customers', value: '12', change: '2.4%', note: 'vs. yesterday', icon: '♧', iconClass: 'icon-yellow', trendClass: 'positive', chartClass: 'bars-yellow', bars: [28, 42, 34, 55, 43, 72, 62, 84] },
]

const popularDishes = [
  { name: 'Garden Glow Bowl', orders: '68 orders', change: '24%', width: 82, emoji: '🥗', thumbClass: 'dish-green' },
  { name: 'Wild Mushroom Toast', orders: '52 orders', change: '18%', width: 64, emoji: '🍞', thumbClass: 'dish-peach' },
  { name: 'Matcha Cloud Latte', orders: '39 orders', change: '12%', width: 48, emoji: '🍵', thumbClass: 'dish-lilac' },
  { name: 'Honey Fig Pancakes', orders: '31 orders', change: '9%', width: 36, emoji: '🥞', thumbClass: 'dish-yellow' },
]

const recentOrders = [
  { id: '#1048', customer: 'Sophie Chen', initials: 'SC', items: 'Garden Glow Bowl, Matcha Latte', time: '12:42 PM', total: '$28.50', status: 'Preparing', statusClass: 'status-preparing', avatarClass: 'avatar-pink' },
  { id: '#1047', customer: 'Marcus Reid', initials: 'MR', items: 'Wild Mushroom Toast × 2', time: '12:38 PM', total: '$32.00', status: 'Ready', statusClass: 'status-ready', avatarClass: 'avatar-blue' },
  { id: '#1046', customer: 'Amara Johnson', initials: 'AJ', items: 'Honey Fig Pancakes, Latte', time: '12:31 PM', total: '$24.75', status: 'In queue', statusClass: 'status-queue', avatarClass: 'avatar-yellow' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

* { box-sizing: border-box; }
.dashboard-shell { --ink: #24342d; --muted: #88928c; --line: #edf0ed; --green: #54866b; min-height: 100vh; background: #f7f8f5; color: var(--ink); font-family: 'DM Sans', sans-serif; font-size: 14px; }
.sidebar { width: 246px; position: fixed; inset: 0 auto 0 0; z-index: 5; display: flex; flex-direction: column; padding: 28px 17px 18px; background: #fff; border-right: 1px solid #edf0ed; }
.brand { display: flex; align-items: center; gap: 10px; margin: 0 0 45px 7px; color: #25382e; text-decoration: none; font: 800 23px 'Manrope', sans-serif; letter-spacing: -1.1px; }
.brand-mark { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 10px 10px 10px 3px; color: white; background: #54866b; font-size: 22px; line-height: 1; font-style: italic; }
.brand-period { color: #e6a56c; }
.sidebar-label { padding: 0 13px; margin-bottom: 11px; color: #a3aaa5; font-size: 10px; font-weight: 700; letter-spacing: 1.15px; text-transform: uppercase; }
.management-label { margin-top: 31px; }
.side-nav { display: grid; gap: 5px; }
.nav-link { min-height: 43px; display: flex; align-items: center; gap: 13px; padding: 0 13px; border-radius: 8px; color: #7b8780; text-decoration: none; font-size: 13px; font-weight: 600; transition: .18s ease; }
.nav-link:hover { color: #385743; background: #f5f7f4; }
.nav-link.active { color: #3f7254; background: #edf4ee; }
.nav-icon { width: 18px; color: #9da8a1; text-align: center; font-size: 18px; }
.active .nav-icon { color: #54866b; }
.nav-count { margin-left: auto; padding: 2px 7px; border-radius: 20px; color: #54866b; background: #dceade; font-size: 10px; }
.sidebar-bottom { margin-top: auto; }
.help-card { position: relative; margin: 0 3px 20px; padding: 18px 15px 15px; border: 1px solid #e9eee8; border-radius: 11px; background: #fafbf9; }
.help-spark { position: absolute; top: 14px; right: 14px; color: #d8a16e; font-size: 17px; }
.help-card strong { color: #3f5046; font-size: 12px; }
.help-card p { max-width: 150px; margin: 7px 0 12px; color: #909991; font-size: 11px; line-height: 1.6; }
.help-card a { color: #54866b; font-size: 11px; font-weight: 700; text-decoration: none; }
.help-card a span { padding-left: 4px; }
.profile-row { display: flex; align-items: center; gap: 10px; padding: 15px 4px 0; border-top: 1px solid #edf0ed; }
.avatar, .topbar-avatar { width: 33px; height: 33px; flex: none; display: grid; place-items: center; border-radius: 50%; font-size: 10px; font-weight: 700; }
.avatar-owner, .topbar-avatar { color: #795f4f; background: #f3ded0; }
.profile-copy { min-width: 0; display: grid; gap: 3px; }
.profile-copy strong { color: #3b4941; font-size: 11px; }
.profile-copy span { color: #9ba39d; font-size: 10px; }
.profile-menu { margin-left: auto; color: #89948d; font-size: 19px; letter-spacing: 1px; }
.main-content { min-height: 100vh; margin-left: 246px; }
.topbar { height: 76px; display: flex; align-items: center; justify-content: space-between; padding: 0 46px; border-bottom: 1px solid #edf0ed; background: rgba(255,255,255,.82); }
.breadcrumb { color: #a0a8a2; font-size: 12px; }
.breadcrumb span { margin: 0 9px; color: #c4cac5; }
.breadcrumb strong { color: #56645b; font-weight: 600; }
.topbar-actions { display: flex; align-items: center; gap: 18px; }
.search-box { width: 245px; height: 36px; display: flex; align-items: center; gap: 8px; padding: 0 9px; border: 1px solid #ebefeb; border-radius: 7px; color: #89958d; background: #fff; }
.search-box > span { font-size: 22px; line-height: 1; transform: rotate(-20deg); }
.search-box input { width: 100%; min-width: 0; border: 0; outline: 0; color: #4b5b51; background: transparent; font: 11px 'DM Sans', sans-serif; }
.search-box input::placeholder { color: #a8b0aa; }
.search-box kbd { white-space: nowrap; padding: 3px 5px; border: 1px solid #eef0ed; border-radius: 4px; color: #a4ada6; font: 9px 'DM Sans', sans-serif; }
.icon-button { position: relative; width: 31px; height: 31px; border: 0; border-radius: 8px; color: #77847b; background: transparent; font-size: 17px; cursor: pointer; }
.icon-button:hover { background: #f3f5f2; }
.notification-button i { position: absolute; top: 5px; right: 5px; width: 6px; height: 6px; border: 1px solid white; border-radius: 50%; background: #e78c68; }
.topbar-avatar { width: 31px; height: 31px; font-size: 9px; }
.page-content { max-width: 1470px; margin: 0 auto; padding: 36px 46px 22px; }
.welcome-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 24px; }
.eyebrow, .panel-overline { margin: 0 0 9px; color: #9aa49d; font-size: 9px; font-weight: 700; letter-spacing: 1.15px; }
.live-dot { display: inline-block; width: 6px; height: 6px; margin-right: 5px; border-radius: 50%; vertical-align: 1px; background: #7ba583; }
h1, h2, h3, p { margin-top: 0; }
h1 { margin-bottom: 7px; color: #263a2e; font: 700 27px 'Manrope', sans-serif; letter-spacing: -.9px; }
h1 span { color: #e4a970; font-size: 18px; vertical-align: 4px; }
.welcome-copy { margin: 0; color: #87928b; font-size: 12px; }
.welcome-copy strong { color: #627168; font-weight: 600; }
.date-button, .select-button { display: inline-flex; align-items: center; gap: 9px; height: 36px; padding: 0 12px; border: 1px solid #e9ede9; border-radius: 7px; color: #66736a; background: #fff; font: 11px 'DM Sans', sans-serif; cursor: pointer; }
.date-button > span:first-child { color: #789582; font-size: 14px; }
.chevron { margin-left: 5px; color: #a3ada6; font-size: 15px; }
.hero-banner { position: relative; min-height: 216px; display: flex; align-items: center; overflow: hidden; padding: 26px 34px; border-radius: 13px; color: #fff; background: linear-gradient(105deg,#315c45 0%,#4b785c 54%,#739378 100%); }
.hero-copy { position: relative; z-index: 2; width: 48%; }
.hero-kicker { display: block; margin-bottom: 11px; color: #c8d9ca; font-size: 9px; font-weight: 700; letter-spacing: 1.4px; }
.hero-copy h2 { margin: 0 0 10px; font: 700 25px/1.2 'Manrope', sans-serif; letter-spacing: -.5px; }
.hero-copy h2 em { color: #e5bd8a; font-style: normal; }
.hero-copy p { max-width: 335px; margin: 0 0 15px; color: #d3e0d5; font-size: 11px; line-height: 1.6; }
.hero-copy p strong { color: #f2d1a2; }
.hero-link { color: white; font-size: 10px; font-weight: 700; text-decoration: none; }
.hero-link span { margin-left: 5px; color: #e5bd8a; }
.hero-art { position: absolute; top: 0; right: 26%; width: 280px; height: 100%; opacity: .94; }
.art-orbit { position: absolute; top: 50%; left: 50%; border: 1px solid rgba(230,242,229,.17); border-radius: 50%; transform: translate(-50%,-50%); }
.orbit-one { width: 182px; height: 182px; }
.orbit-two { width: 235px; height: 235px; }
.art-plate { position: absolute; top: 50%; left: 50%; width: 128px; height: 128px; display: grid; place-items: center; border: 8px solid rgba(255,255,255,.76); border-radius: 50%; background: #e5d9c0; box-shadow: 0 14px 30px #21473366, inset 0 0 0 4px #c4d4b7; transform: translate(-50%,-50%) rotate(-13deg); }
.art-plate span { font-size: 61px; filter: drop-shadow(0 5px 3px #685b3533); }
.art-leaf, .art-spark { position: absolute; color: #e4bc86; }
.leaf-one { top: 28px; left: 43px; font-size: 24px; transform: rotate(-20deg); }
.leaf-two { right: 24px; bottom: 32px; font-size: 28px; color: #c4d9b6; }
.art-spark { top: 42px; right: 46px; font-size: 23px; }
.hero-stat { position: absolute; top: 50%; right: 32px; z-index: 2; width: 150px; padding: 14px; border: 1px solid #ffffff2b; border-radius: 10px; background: #ffffff12; backdrop-filter: blur(8px); transform: translateY(-50%); }
.hero-stat > span { display: block; margin-bottom: 5px; color: #d3e2d3; font-size: 8px; font-weight: 700; letter-spacing: 1px; }
.hero-stat strong { font: 700 24px 'Manrope', sans-serif; }
.goal-track { height: 4px; overflow: hidden; margin: 8px 0 7px; border-radius: 3px; background: #ffffff38; }
.goal-track i { display: block; width: 78%; height: 100%; border-radius: inherit; background: #e8c18f; }
.hero-stat small { color: #d1dfd3; font-size: 9px; }
.metrics-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 14px; margin: 18px 0; }
.metric-card { position: relative; min-height: 137px; overflow: hidden; padding: 16px 17px; border: 1px solid #edf0ed; border-radius: 10px; background: #fff; }
.metric-top { display: flex; align-items: center; justify-content: space-between; color: #89948d; font-size: 10px; font-weight: 500; }
.metric-icon { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 8px; font-size: 13px; font-weight: 700; }
.icon-green { color: #588366; background: #eaf3eb; }.icon-peach { color: #cc8c69; background: #fbefe7; }.icon-lilac { color: #86789f; background: #f0edf6; }.icon-yellow { color: #b49353; background: #f8f2e2; }
.metric-value { margin-top: 7px; color: #2e4035; font: 700 22px 'Manrope', sans-serif; letter-spacing: -.6px; }
.metric-foot { display: flex; align-items: center; gap: 5px; margin-top: 7px; color: #a1aaa4; font-size: 9px; }
.trend-pill { display: inline-flex; align-items: center; padding: 3px 5px; border-radius: 4px; font-size: 9px; font-weight: 700; white-space: nowrap; }
.trend-pill.positive { color: #54866b; background: #edf5ee; }
.mini-chart { position: absolute; right: 16px; bottom: 17px; width: 57px; height: 29px; display: flex; align-items: flex-end; gap: 3px; opacity: .85; }
.mini-chart i { flex: 1; border-radius: 2px 2px 0 0; background: #9abd9f; }
.bars-peach i { background: #e8b293; }.bars-lilac i { background: #b8a9cb; }.bars-yellow i { background: #dcc17f; }
.content-grid { display: grid; grid-template-columns: minmax(0,1.55fr) minmax(285px,1fr); gap: 15px; margin-bottom: 16px; }
.panel { border: 1px solid #edf0ed; border-radius: 10px; background: #fff; }
.revenue-panel, .popular-panel { min-height: 310px; padding: 20px 21px 17px; }
.panel-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.panel-overline { margin-bottom: 5px; font-size: 8px; letter-spacing: 1.1px; }
.panel-heading h3 { margin: 0; color: #34473a; font: 700 15px 'Manrope', sans-serif; letter-spacing: -.25px; }
.select-button { height: 29px; padding: 0 9px; color: #78847c; font-size: 10px; }
.select-button span { margin-left: 5px; color: #a4ada6; }
.revenue-total { display: flex; align-items: center; gap: 9px; margin: 17px 0 5px; }
.revenue-total strong { color: #314539; font: 700 23px 'Manrope', sans-serif; letter-spacing: -.5px; }
.revenue-total small { color: #a2aaa4; font-size: 9px; }
.chart-wrap { height: 177px; display: flex; gap: 10px; padding-top: 10px; }
.chart-y-labels { width: 26px; display: flex; flex-direction: column; justify-content: space-between; padding: 0 0 21px; color: #adb5af; font-size: 8px; }
.chart-area { position: relative; flex: 1; min-width: 0; height: 100%; }
.chart-gridlines { position: absolute; inset: 0 0 22px; display: flex; flex-direction: column; justify-content: space-between; }
.chart-gridlines i { height: 1px; border-top: 1px dashed #edf0ed; }
.revenue-chart { position: absolute; inset: 0 0 22px; width: 100%; height: calc(100% - 22px); overflow: visible; }
.chart-x-labels { position: absolute; right: 0; bottom: 0; left: 0; display: flex; justify-content: space-between; color: #aab2ac; font-size: 8px; }
.popular-panel { display: flex; flex-direction: column; }
.more-button { width: 27px; height: 26px; border: 0; color: #8c9890; background: transparent; font-size: 20px; letter-spacing: 1px; cursor: pointer; }
.dish-list { margin-top: 12px; }
.dish-row { min-height: 49px; display: flex; align-items: center; gap: 9px; border-bottom: 1px solid #f1f3f1; }
.dish-thumb { width: 34px; height: 34px; flex: none; display: grid; place-items: center; border-radius: 8px; font-size: 18px; }.dish-green { background: #edf4e9; }.dish-peach { background: #fbefe8; }.dish-lilac { background: #f1eef7; }.dish-yellow { background: #f8f2e5; }
.dish-info { min-width: 0; flex: 1; display: grid; gap: 3px; }
.dish-info strong { overflow: hidden; color: #536158; font-size: 10px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
.dish-info span { color: #a2aaa4; font-size: 9px; }
.dish-trend { width: 47px; display: grid; gap: 5px; color: #63856a; font-size: 8px; text-align: right; }
.dish-trend i { height: 3px; max-width: 47px; border-radius: 2px; background: #9fc2a1; }
.dish-rank { color: #bec6bf; font-size: 9px; }
.text-link { display: inline-flex; align-items: center; gap: 7px; color: #54866b; font-size: 10px; font-weight: 700; text-decoration: none; white-space: nowrap; }
.popular-panel > .text-link { margin-top: auto; padding-top: 13px; }
.orders-panel { padding: 19px 21px 4px; }
.orders-heading { align-items: center; margin-bottom: 13px; }
.orders-heading .panel-overline { margin-bottom: 5px; }
.order-total { margin-left: 5px; padding: 3px 6px; border-radius: 5px; color: #78907e; background: #eff5ef; font: 600 9px 'DM Sans',sans-serif; vertical-align: 2px; }
.table-scroll { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; text-align: left; }
thead { height: 32px; background: #fafbf9; }
th { padding: 0 12px; color: #a0aaa2; font-size: 8px; font-weight: 700; letter-spacing: .8px; white-space: nowrap; }
td { height: 52px; padding: 0 12px; border-top: 1px solid #f1f3f1; color: #79857d; font-size: 10px; white-space: nowrap; }
.order-id { color: #587a61; font-weight: 700; }
.customer-cell { display: flex; align-items: center; gap: 8px; }
.customer-cell strong { color: #536158; font-size: 10px; font-weight: 600; }
.customer-cell .avatar { width: 27px; height: 27px; font-size: 8px; }
.avatar-pink { color: #9a6574; background: #f7e4e8; }.avatar-blue { color: #5a7891; background: #e3edf5; }.avatar-yellow { color: #9a8052; background: #f5efdc; }
.item-cell, .time-cell { color: #939d96; }
.price-cell { color: #506056; font-weight: 700; }
.status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 5px 8px; border-radius: 20px; font-size: 9px; font-weight: 600; }
.status-pill i { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.status-preparing { color: #b48543; background: #faf3e7; }.status-ready { color: #54866b; background: #edf5ee; }.status-queue { color: #8b79a6; background: #f1eef7; }
.page-footer { display: flex; justify-content: space-between; padding: 17px 2px 0; color: #adb5af; font-size: 9px; }
.page-footer b { color: #d99079; font-weight: 600; }

@media (max-width: 1180px) {
  .topbar { padding: 0 28px; }
  .page-content { padding: 30px 28px 20px; }
  .hero-art { right: 25%; transform: scale(.88); }
  .hero-stat { right: 22px; }
  .content-grid { grid-template-columns: minmax(0,1.3fr) minmax(270px,1fr); }
  .metric-card { padding: 14px; }
}
@media (max-width: 920px) {
  .sidebar { width: 70px; align-items: center; padding: 22px 9px 14px; }
  .brand { margin: 0 0 38px; }
  .brand > span:last-child, .sidebar-label, .nav-link:not(.active) .nav-count, .nav-link { font-size: 0; }
  .side-nav { width: 100%; }
  .nav-link { justify-content: center; padding: 0; }
  .nav-link .nav-icon { font-size: 18px; }
  .nav-link.active { font-size: 0; }
  .nav-count { position: absolute; margin: -22px 0 0 28px; padding: 2px 5px; font-size: 9px !important; }
  .management-label, .help-card, .profile-copy, .profile-menu { display: none; }
  .profile-row { justify-content: center; padding-top: 14px; }
  .main-content { margin-left: 70px; }
  .hero-art { right: 24%; opacity: .65; }
  .hero-stat { right: 17px; width: 132px; }
  .hero-copy { width: 53%; }
}
@media (max-width: 700px) {
  .topbar { height: 62px; padding: 0 17px; }
  .breadcrumb { font-size: 10px; }
  .topbar-actions { gap: 8px; }
  .search-box { width: 34px; height: 34px; justify-content: center; padding: 0; border-color: transparent; background: transparent; }
  .search-box input, .search-box kbd { display: none; }
  .search-box > span { font-size: 23px; }
  .page-content { padding: 24px 16px 16px; }
  .welcome-row { align-items: flex-start; margin-bottom: 18px; }
  h1 { font-size: 23px; }
  .welcome-copy { max-width: 270px; font-size: 11px; line-height: 1.5; }
  .date-button { width: 34px; min-width: 34px; overflow: hidden; gap: 12px; padding: 0 9px; color: transparent; white-space: nowrap; }
  .date-button > span:first-child { color: #789582; }
  .date-button .chevron { display: none; }
  .hero-banner { min-height: 218px; padding: 24px 21px; }
  .hero-copy { width: 70%; }
  .hero-copy h2 { font-size: 22px; }
  .hero-copy p { max-width: 240px; font-size: 10px; }
  .hero-art { right: -45px; opacity: .28; }
  .hero-stat { top: auto; right: 14px; bottom: 12px; width: 126px; padding: 9px 11px; transform: none; }
  .hero-stat strong { font-size: 18px; }
  .hero-stat > span { font-size: 7px; }
  .hero-stat small { font-size: 8px; }
  .goal-track { margin: 5px 0; }
  .metrics-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 9px; margin: 12px 0; }
  .metric-card { min-height: 124px; padding: 13px 12px; }
  .metric-top { font-size: 9px; }
  .metric-icon { width: 23px; height: 23px; }
  .metric-value { font-size: 20px; }
  .metric-foot { gap: 4px; font-size: 8px; }
  .trend-pill { font-size: 8px; }
  .mini-chart { right: 12px; bottom: 13px; width: 43px; height: 23px; }
  .content-grid { grid-template-columns: 1fr; gap: 11px; margin-bottom: 12px; }
  .revenue-panel, .popular-panel { min-height: 0; padding: 17px 15px; }
  .chart-wrap { height: 160px; }
  .orders-panel { padding: 16px 13px 3px; }
  .orders-heading { align-items: flex-end; }
  .orders-heading .text-link { font-size: 9px; }
  table { min-width: 680px; }
  .page-footer { gap: 10px; font-size: 8px; }
}
@media (max-width: 390px) {
  .sidebar { width: 56px; }
  .main-content { margin-left: 56px; }
  .sidebar { padding-right: 6px; padding-left: 6px; }
  .brand-mark { width: 29px; height: 29px; }
  .page-content { padding-right: 12px; padding-left: 12px; }
  .topbar { padding-right: 12px; padding-left: 12px; }
  .hero-copy { width: 83%; }
  .hero-stat { right: 10px; }
}
</style>