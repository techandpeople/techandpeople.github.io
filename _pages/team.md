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

{% for member in site.data.team_members %}

<div class="col-sm-3">
  <img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ member.photo }}" width="100%" class="img-responsive imgteam" style="float: left" />
  <p class="title">{{ member.name }}</p>
  <p class="detail">{{ member.info }}</p>
  <p class="detail">[<a href="mailto:member.email">web</a>] - [<a href="">scholar</a>] - [<a href="mailto:member.email">e-mail</a>]</p>
</div>

{% endfor %}

</div>

</div>