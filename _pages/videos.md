---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /videos/
---

# Videos
<div class="row">
<div class="filters">
<button type="button" class="btn btn-default filterBtn filterVid selected" id="all">All</button>
<button type="button" class="btn btn-default filterBtn filterVid" id="talk">Talk</button>
<button type="button" class="btn btn-default filterBtn filterVid" id="demo">Demo</button>
<button type="button" class="btn btn-default filterBtn filterVid" id="other">Other</button>
</div>
</div>

<div class="row people-row videos-row">
{% for video in site.videos %}
    {% include video.html vid=video %}
{% endfor %}
</div>