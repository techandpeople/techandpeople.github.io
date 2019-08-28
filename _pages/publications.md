---
title: "Tech & People Lab - Publications"
layout: gridlay
excerpt: "Tech & People Lab -- Publications."
sitemap: false
permalink: /publications/
---

<div class="container-fluid">
# Publications

<div class="filters">

<button type="button" class="btn btn-default filterPub" id="all">All</button>
<button type="button" class="btn btn-default filterPub" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterPub" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterPub" id="usec">Usable Privacy</button>

</div>

<div class="publications">
{% for publication in site.publications %}
    {% capture proj_url %}{{ site.base }}{{ project.url }}{% endcapture %}

<div class="row {{ publication.area }}">

<div class="col-sm-3">
  <img src="{{ site.url }}{{ site.baseurl }}/images/publications/{{ publication.image.name }}" alt="{{publication.image.alt-text}}" class="img-responsive imgpub" style="float: left" />
</div>
<div class="col-sm-9">
  <p class="title"><a href="{{ publication.pdf }}">{{ publication.title }}</a></p>
  <p class="description">{{ publication.description }}</p>
  <p class="detail">{{ publication.authors }}</p>
  <p class="detail">{{ publication.venue }}</p>
 </div>

</div>

{% endfor %}
</div>

</div>


