---
title: "Tech & People Lab - Join us"
layout: gridlay
excerpt: "Tech & People Lab -- Join us."
sitemap: false
permalink: /joinus/
---
<style>
  p {margin : 0;}
</style>
# Join us
<br>
<div class="proposals">
{% for proposal in site.proposals %}
  {% include proposal.html prp=proposal %}
{% endfor %}
</div>
