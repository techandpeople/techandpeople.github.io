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
{% for project in site.projects %}
    {% if project.link %}
        {% assign proj_url = project.link %}
    {% else %}
        {% capture proj_url %}{{ site.base }}{{ project.url }}{% endcapture %}
    {% endif %}

<div class="col-sm-4 {{ project.area }}">
  <a href="{{ proj_url }}">
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/{{ project.image.name }}" alt="{{project.image.alt-text}}" width="100%" class="img-responsive" style="float: left" /></a>
  <p class="title">{{ project.title }}</p>
  <p class="description">{{ project.description }}</p>
</div>

{% endfor %}
</div>
</div>

