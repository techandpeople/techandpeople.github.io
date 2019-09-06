---
title: "Tech & People Lab - Home"
layout: homelay
excerpt: "Tech & People Lab at LASIGE, FCUL"
sitemap: false
permalink: /
---

We are an interdisciplinary Human-Computer Interaction research lab at <a href="http://www.lasige.di.fc.ul.pt" target="_blank">LASIGE</a>, <a href="http://ciencias.ulisboa.pt" target="_blank">Faculdade de Ciências</a> da <a href="http://www.ulisboa.pt" target="_blank">Universidade de Lisboa</a>. We design, build, and evaluate interactive technologies that address high value social issues such as accessible computing, pervasive healthcare, and usable privacy.

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
<script>
document.onclick = function(e) {   //when the document body is clicked
    if (window.event) {
        e = event.srcElement;           //assign the element clicked to e (IE 6-8)
    }
    else {
        e = e.target;                   //assign the element clicked to e
    }
    if (e.className && e.className.indexOf('card') != -1) {
        //if the element has a class name, and that is 'someclass' then...
        window.open(e.id,"_self");
    }
}
</script>
