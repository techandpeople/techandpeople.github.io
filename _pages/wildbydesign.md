---
title: "Wilb By Design at UbiComp 2021"
layout: homelay
excerpt: "Workshop on "
sitemap: false
permalink: /wildbydesign/
---

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
We are an interdisciplinary Human-Computer Interaction research lab at <a href="http://www.lasige.di.fc.ul.pt" target="_blank">LASIGE</a>, <a href="http://ciencias.ulisboa.pt" target="_blank">Faculdade de Ciências</a> da <a href="http://www.ulisboa.pt" target="_blank">Universidade de Lisboa</a>. We design, build, and evaluate interactive technologies that address high value social issues such as accessible computing, pervasive healthcare, and usable privacy.
</p>

<h1 class='timeline-Header-title publications' style="padding-left: 10px; padding-bottom: 20px;">Recent publications  <span style="font-size: 0.5em;"><a href="{{ site.url }}{{ site.baseurl }}/publications">see all</a></span></h1>

<div class="publications">
{% assign reversed_pubs = site.publications | reverse %}

{% for publication in reversed_pubs limit: 3 %}
  {% include publication-home.html pub=publication %}
{% endfor %}

</div>

<h1 class='timeline-Header-title' style="padding-left: 10px; padding-bottom: 20px; padding-top: 20px;">Research highlights</h1>
<div class="filters">
<button type="button" class="btn btn-default filterBtn filter selected" id="all">All</button>
<button type="button" class="btn btn-default filterBtn filter" id="access">Accessible Computing</button>
<button type="button" class="btn btn-default filterBtn filter" id="health">Pervasive Healthcare</button>
<button type="button" class="btn btn-default filterBtn filter" id="usec">Usable Privacy</button>
<button type="button" class="btn btn-default filterBtn filter" id="inclusive_education">Inclusive Education</button>
</div>

<div class="projects">
{% for project in site.projects %}
    {% if project.link %}
        {% assign proj_url = project.link %}
    {% else %}
        {% capture proj_url %}{{ site.base }}{{ project.url }}{% endcapture %}
    {% endif %}

<div class="col-sm-4 {{ project.area }}">
<div id="{{ site.base }}{{ project.url }}" class="card card-project {{ project.area }}" style="	cursor: pointer;">
<a href="{{ proj_url }}">
<img id="project-image" src="{{ site.url }}{{ site.baseurl }}/images/projects/thumbnails/{{ project.image.name }}" alt="{{project.image.alt-text}}" width="100%" class="img-responsive" style="display:block; margin:auto;" /></a>
<div class="card-body {{ project.area }}">
<p class="title" style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;"><a href="{{ proj_url }}" style="color:inherit; text-decoration: none;">{{ project.title }}</a></p>
<p class="description" style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;"><a href="{{ proj_url }}" style="color:inherit; text-decoration: none;">{{ project.description }}</a></p>

</div>
</div>
</div>

{% endfor %}
</div>
