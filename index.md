---
layout: default
title: Portfolio | Backend to Web Design
---

<!-- 1. メインビジュアル -->
<section id="hero" class="hero-block">
  <div class="hero-container">
    <p class="hero-tag">WEB DESIGN / CODING</p>
    <h1 class="hero-title">LOGICAL<br>MINIMAL</h1>
    <p class="hero-lead">バックエンドの知見を活かした、構造的で美しいWebサイト・バナー制作</p>
  </div>
</section>

<!-- 2. プロフィール（About） -->
{% include about.html %}

<!-- 3. スキルセット（_data/skills.yml からループ出力） -->
{% include skills.html %}

<!-- 4. 制作実績（Works） -->
<section id="works" class="works-section">
  <div class="container">
    <h2 class="section-title">Works</h2>

    {% include retouch-section.html %}

    {% include website-section.html %}

    {% include banner-section.html %}

    {% include logo-section.html %}

  </div>
</section>
