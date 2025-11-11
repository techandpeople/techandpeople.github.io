---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /team/
---

<div class="row" style="margin-bottom: 0">
<p style="text-align: center; padding-top: 50px">
<strong>We are  looking for new PhD students, Postdocs, and Master students to join the team!</strong>  (reach [Us](mailto:tjvg@di.fc.ul.pt))
</p>
<p style="text-align: center; padding-bottom: 50px">
 If you want to know more about us see the<a href="https://docs.google.com/document/d/1aDw6lPcFfu1IUTPwS5Nv_vBPUv0JLH0AHETaloUc-AE/edit?usp=sharing" target="_blank"><strong> Lab Memo
</strong></a>
</p>
<div class="filters">
<a href="{{ site.url }}{{ site.baseurl }}/team/#people-row"><button type="button" class="btn btn-default filterBtn">Team</button></a>
<a href="{{ site.url }}{{ site.baseurl }}/team/#friends-row"><button type="button" class="btn btn-default filterBtn">Friends of Tech&People</button></a>
<a href="{{ site.url }}{{ site.baseurl }}/team/#alumni-row"><button type="button" class="btn btn-default filterBtn">Alumni</button></a>
<a href="{{ site.url }}{{ site.baseurl }}/team/#memorabilia"><button type="button" class="btn btn-default filterBtn">Memorabilia</button></a>
</div>
</div>
<br id="people-row">
# People
<div class="row people-row">
{% for member in site.data.team_members.members %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
{% if person.url != nil %}
<a href="{{ person.url }}">
{% else %}
<a href="{{ site.url }}{{ site.baseurl }}/team/{{member}}.html">
{% endif %}
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.info }}</p>
<div class="detail team-links">
<ul class="team-links-list">
{% for link in person.links %}
{% if link.name contains 'mail' %}
<li><a href="mailto:{{link.url}}" target="_blank">{{link.name}}</a></li>
{% else %}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a></li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>
</div>
</div>
{% endfor %}
</div>
<br id="friends-row">
# Friends of Tech&People
<div class="row people-row">
{% for member in site.data.team_members.friends %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ person.links[0].url }}" target="_blank">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.info }}</p>
<div class="detail team-links">
<ul class="team-links-list">
{% for link in person.links %}
{% if link.name contains 'mail' %}
<li><a href="mailto:{{link.url}}" target="_blank">{{link.name}}</a></li>
{% else %}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a></li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>
</div>
</div>
{% endfor %}
</div>
<br id="alumni-row">
# Alumni
<div class="row people-row">
{% for member in site.data.team_members.alumni %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ site.url }}{{ site.baseurl }}/team/{{member}}.html">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.info }}</p>
<div class="detail team-links">
<ul class="team-links-list">
{% for link in person.links %}
{% if link.name contains 'mail' %}
<li><a href="mailto:{{link.url}}" target="_blank">{{link.name}}</a></li>
{% else %}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a></li>
{%endif%}
{% endfor %}
</ul>
</div>
</div>
</div>
</div>
{% endfor %}
</div>
<br id="memorabilia">
# Memorabilia
<div class="row">
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="false">
  <!-- Indicators -->
  <ol class="carousel-indicators">
  <li class="active" data-target="#myCarousel" data-slide-to="0"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li>
  <li data-target="#myCarousel" data-slide-to="3"></li>
  <li data-target="#myCarousel" data-slide-to="4"></li>
  <li data-target="#myCarousel" data-slide-to="5"></li>
  <li data-target="#myCarousel" data-slide-to="6"></li>
  </ol>

  <!-- Wrapper for slides -->
<div class="carousel-inner">
<div class="item active">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c1.jpg" alt="Reception for new masters students">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Reception for new masters students in 2019</h3>
</div>
</div>
<div class="item">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c2.jpg" alt="Group dinner">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Dinner and drinks at CHI 2019, in Glasgow</h3>
</div>
</div>
<div class="item">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c3.jpg" alt="Diogo Marques presenting at CHI 2019">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Diogo Marques presenting at CHI 2019</h3>
</div>
</div>
<div class="item">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c4.jpg" alt="Diogo Branco presenting his poster at CHI 2019">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Diogo Branco presenting his poster at CHI 2019</h3>
</div>
</div>
<div class="item">
<img class="img-responsive imgpub team-carousel-image" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c5.jpg" alt="Good bye dinner for Laíza">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Good bye dinner for Laíza</h3>
</div>
</div>
<div class="item">
<img class="team-carousel-image img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c6.jpg" alt="Presentation by Diogo Marques at a lab meeting">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Presentation by Diogo Marques at a lab meeting</h3>
</div>
</div>
<div class="item">
<img style="width:auto; max-height: 600px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/team-carousel/c7.jpg" alt="Tiago Guerreiro presenting at ASSETS 2018">
<div class="carousel-caption">
<h3 class="carousel-caption-text">Tiago Guerreiro presenting at ASSETS 2018, Galway, Ireland</h3>
</div>
</div>
</div>

  <!-- Left and right controls -->
  <a class="left carousel-control" role="button" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous slide</span>
  </a>
  <a class="right carousel-control" role="button" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next slide</span>
  </a>
</div>
</div>