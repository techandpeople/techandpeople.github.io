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

{% for publi in site.data.publist %}

<div class="row {{ publi.area }}">

<div class="col-sm-3">
  <img src="{{ site.url }}{{ site.baseurl }}/images/publications/{{ publi.image }}" class="img-responsive imgpub" style="float: left" />
</div>
<div class="col-sm-9">
  <p class="title"><a href="{{ publi.link.url }}">{{ publi.title }}</a></p>
  <p class="description">{{ publi.description }}</p>
  <p class="detail">{{ publi.authors }}</p>
  <p class="detail">{{ publi.venue }}</p>
 </div>

</div>

{% endfor %}

</div>

</div>


