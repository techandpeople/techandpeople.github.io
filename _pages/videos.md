---
title: "Tech & People Lab - Videos"
layout: gridlay
excerpt: "Tech & People Lab - Videos"
sitemap: false
permalink: /videos/
---

# Videos
<div class="row" style="margin-bottom: 0">
<div class="filters">
<button type="button" class="btn btn-default filterBtn filterVidType selected" id="all">All</button>
<button type="button" class="btn btn-default filterBtn filterVidType" id="talk">Talk</button>
<button type="button" class="btn btn-default filterBtn filterVidType" id="demo">Demo</button>
<button type="button" class="btn btn-default filterBtn filterVidType" id="other">Other</button>
</div>
</div>
<div class="row">
<div class="filters">
<!-- <button type="button" class="btn btn-default filterPub" id="all">All</button> -->
<button type="button" class="btn btn-default filterBtn filterVidArea" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterBtn filterVidArea" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterBtn filterVidArea" id="usec">Usable Privacy</button>
<button type="button" class="btn btn-default filterBtn filterVidArea" id="inclusive_education">Inclusive Education</button>
</div>
</div>
<div class="row people-row videos-row">
{% for video in site.videos reversed %}
    {% include video.html vid=video %}
{% endfor %}
</div>
