---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /team/
---

<div class="row">
# Group Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**

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
{% if link.name == 'email' %}
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
