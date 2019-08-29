---
title: "Tech & People Lab - Team"
layout: gridlay
excerpt: "Tech & People Lab: Team members"
sitemap: false
permalink: /team/
---

<div class="container-fluid">
<div class="row">

# Group Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**

{% for member in site.data.team_members.members %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div class="card">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" />
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.info }}</p>
<p class="detail">[<a href="{{ person.webpage }}">web</a>] - [<a href="{{ person.scholar }}">scholar</a>] - [<a href="mailto:{{ person.mail }}">e-mail</a>]</p>
</div>
</div>
</div>
{% endfor %}
</div>

</div>