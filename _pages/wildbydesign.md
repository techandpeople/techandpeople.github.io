---
title: "Wild By Design at UbiComp 2021"
layout: external
excerpt: "Workshop on "
sitemap: false
permalink: /wildbydesign/
---

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">

</p>


<h1 name="cfp">Call For Papers</h1>




<h1 name="submission">Submit a paper</h1>



<h1 name="organizers">Organizers</h1>


<div class="row people-row">
{% for member in site.data.team_members.wildbydesign %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ person.url }}">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.institution }}</p>
</div>
</div>
</div>
{% endfor %}
</div>
