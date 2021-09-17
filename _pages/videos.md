---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /videos/
---

# Videos
<div class="row people-row videos-row">
{% for video in site.videos %}
  <div class="col-sm-6" style="min-height: 360px;">
    {% include video.html vid=video %}
  </div>
{% endfor %}
</div>