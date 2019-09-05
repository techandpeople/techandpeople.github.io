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
  {% include publication.html pub=publication %}
{% endfor %}
</div>
