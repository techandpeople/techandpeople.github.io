---
title: "Tech & People Lab - Home"
layout: homelay
excerpt: "Tech & People Lab at LASIGE, FCUL"
sitemap: false
permalink: /
---

<div class="container-fluid">

We are an interdisciplinary Human-Computer Interaction research lab at [LASIGE](http://www.lasige.di.fc.ul.pt), [Faculdade de Ciências](http://ciencias.ulisboa.pt) da [Universidade de Lisboa](http://www.ulisboa.pt). We design, build, and evaluate interactive technologies that address high value social issues such as accessible computing, pervasive healthcare, and usable privacy.

<div class="filters">

<button type="button" class="btn btn-default filter" id="all">All</button>
<button type="button" class="btn btn-default filter" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filter" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filter" id="usec">Usable Privacy</button>

</div>

<div class="projects">
{% for project in site.data.projects %}

<div class="col-sm-4 {{ project.area }}">
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/{{ project.image }}" width="100%" class="img-responsive" style="float: left" />
  <p class="title">{{ project.title }}</p>
  <p class="description">{{ project.description }}</p>
</div>

{% endfor %}
</div>

</div>

