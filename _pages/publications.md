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
<div class="row" style="margin-bottom: 0">
<div id="filterByYear" class="filters">
<!-- <button type="button" class="btn btn-default filterBtn filterPub filterYear selected" id="all">All</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="2020">2020</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="2019">2019</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="2018">2018</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="2017">2017</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="2016">2016</button>
<button type="button" class="btn btn-default filterBtn filterPub filterYear" id="older">OLDER</button> -->
</div>
</div>
<div class="row">
<div class="filters">
<!-- <button type="button" class="btn btn-default filterPub" id="all">All</button> -->
<button type="button" class="btn btn-default filterBtn filterPub" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterBtn filterPub" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterBtn filterPub" id="usec">Usable Privacy</button>
<button type="button" class="btn btn-default filterBtn filterPub" id="inclusive_education">Inclusive Education</button>
<button type="button" class="btn btn-default filterBtn filterPub" id="award">Awards</button>
</div>
</div>
<div class="publications">
{% for publication in site.publications reversed %}
  {% include publication.html pub=publication %}
{% endfor %}
</div>
