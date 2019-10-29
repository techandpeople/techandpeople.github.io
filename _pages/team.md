---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /team/
---
<div class="row">

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **! If you want to know more about us see the**
 <a href="https://docs.google.com/document/d/1aDw6lPcFfu1IUTPwS5Nv_vBPUv0JLH0AHETaloUc-AE/edit?usp=sharing" target="_blank"><strong> Lab Memo
</strong></a>
</div>
<div id="people-row" class="row">
{% for member in site.data.team_members.members %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ site.url }}{{ site.baseurl }}/team/{{member}}.html">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.info }}</p>
<p class="detail team-links">
{% for link in person.links %}
{% if link.name contains 'mail' %}
[<a href="mailto:{{link.url}}" target="_blank">{{link.name}}</a>]
{% else %}
[<a href="{{link.url}}" target="_blank">{{link.name}}</a>]
{%endif%}
{% endfor %}
</p>
</div>
</div>
</div>
{% endfor %}
</div>
# Memorabilia
<div class="row">
<div class="js-carrousel relative pb1">
<div class="js-carrousel__container  mod--hidden mb1"
data-carrousel-btn-previous-img="{{ site.url }}{{ site.baseurl }}/images/left.svg"
data-carrousel-btn-next-img="{{ site.url }}{{ site.baseurl }}/images/right.svg"
data-carrousel-btn-previous-text="See previous content"
data-carrousel-btn-next-text="See next content"
data-carrousel-prefix-class="news"
data-carrousel-transition="slide"
data-carrousel-existing-hx="h3"
data-carrousel-active-slide="1">
<div class="js-carrousel__content">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c1.jpg" alt="Reception for new masters students">
<h3 class="carousel-caption-text">Reception for new masters students</h3>
</div>
<div class="js-carrousel__content">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c2.jpg" alt="Group dinner">
<h3 class="carousel-caption-text">Group dinner</h3>
</div>
<div class="js-carrousel__content">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c3.jpg" alt="Diogo Marques presenting at CHI 2019">
<h3 class="carousel-caption-text">Diogo Marques presenting at CHI 2019</h3>
</div>
<div class="js-carrousel__content">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c4.jpg" alt="Diogo Branco presenting his poster at CHI 2019">
<h3 class="carousel-caption-text">Diogo Branco presenting his poster at CHI 2019</h3>
</div>
<div class="js-carrousel__content">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c5.jpg" alt="Good bye dinner for Laíza">
<h3 class="carousel-caption-text">Good bye dinner for Laíza</h3>
</div>
<div class="js-carrousel__content">
<img class="team-carousel-image img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c6.jpg" alt="Presentation by Diogo Marques at a lab meeting">
<h3 class="carousel-caption-text">Presentation by Diogo Marques at a lab meeting</h3>
</div>
<div class="js-carrousel__content">
<img style="width:auto; max-height: 600px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c7.jpg" alt="Tiago Guerreiro presenting at ASSETS 2018">
<h3 class="carousel-caption-text">Tiago Guerreiro presenting at ASSETS 2018</h3>
</div>
</div>
</div>
</div>