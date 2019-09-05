---
title: "Tech & People Lab - Publications"
layout: gridlay
excerpt: "Tech & People Lab -- Publications."
sitemap: false
permalink: /publications/
---
<style>
  p {margin : 0;}
</style>
# Publications
<div class="filters">
<button type="button" class="btn btn-default filterPub" id="all">All</button>
<button type="button" class="btn btn-default filterPub" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterPub" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterPub" id="usec">Usable Privacy</button>
<button type="button" class="btn btn-default filterPub" id="inclusive_education">Inclusive Education</button>
<button type="button" class="btn btn-default filterPub" id="personalized_digital_interventions">Personalized Digital Interventions</button>
</div>
<div class="publications">
{% for publication in site.publications reversed %}
{% capture proj_url %}{{ site.base }}{{ project.url }}{% endcapture %}
<div class="card {{ publication.area }}" style="padding: 15px">
<div class="row row-thumb" style="margin-bottom: 0; ">
<div class="col-md-3" style="padding-left: 0;">
<img src="{{ site.url }}{{ site.baseurl }}/images/publications/{{ publication.image.name }}" alt="{{publication.image.alt-text}}" class="img-responsive imgpub" style="margin:auto; min-width: 200px; vertical-align: middle;" />
</div>
<div class="card-body" style="padding-left: 0px; padding-right: 0px; padding-bottom:0">
<div class="col-sm-12">
<p class="title" style="padding-top: 0;"><a href="{{ publication.pdf }}" target="_blank">{{ publication.title }}</a></p>
<p class="description" style="margin-bottom: 10px;">{{ publication.description }}</p>
<p class="detail">{{ publication.authors }}</p>
<p class="detail">{{ publication.venue }}</p>
</div>
</div>
</div>
</div>
{% endfor %}
</div>
