---
title: "Wild By Design at UbiComp 2021 (online)"
layout: external
excerpt: "Workshop on Designing Ubiquitous Health Monitoring Technologies for Challenging Environments"
sitemap: false
permalink: /wildbydesign/
---

<h1>Workshop on Designing Ubiquitous Health Monitoring Technologies for Challenging Environments</h1>

<h3>At <a href="https://www.ubicomp.org/ubicomp2021/">UbiComp</a>, September 25th or 26th, Online</h3>


<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="false">
  <!-- Indicators -->
  <ol class="carousel-indicators">
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
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

<script>
let count = 0;
</script>
{% for img in site.data.wild.highlights %}
{% assign highlight = site.data.wild[img] %}
<script>
$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+ (count++) +'"></li>');
$(".carousel-inner").append('<div class="item"><img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/wild/{{highlight.photo}}" alt="{{highlight.alt}}"></div>')
$(".carousel-indicators > li:first").addClass("active");
$(".carousel-inner > div:first").addClass("active");
</script>

<p style="text-align: center; font-size: 0.9rem;font-style: italic;">{{highlight.caption}}</p>

{% endfor %}


<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
There is a growing focus on monitoring health in uncontrolled (aka in-the-wild) settings. This is partially due to the limitations of occasional formal assessments, and to the increasing availability of off-the-shelf sensing devices and applications. This change of paradigm promises fine-grained monitoring of chronic and neuro-degenerative diseases, early prediction of health conditions, accessible self-management, and the enablement of more effective personalised interventions. </p>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
Despite this potential, there are still limited examples of ubiquitous health technologies used in practice for long periods of time. The majority of ubiquitous health technologies, although targeted at uncontrolled in-the-wild settings, are still mostly tested in the laboratory. Activity trackers are one successful example of a technology that became mainstream. However, it also faces problems with abandonment and adoption and misalignment with user requirements and goals. Although the need for longitudinal in-the-wild studies has been established, the challenges of engaging and sustaining participation has only been surfaced. Awareness and knowledge of this and other challenges for in-the-wild health monitoring is still very limited. 
</p>


<h1 id="cfp">Call For Papers</h1>



<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The main goal of this workshop is to bridge cross-disciplinary relationships between researchers and practitioners interested in the design, development, and deployment of ubiquitous technologies for health monitoring. Which major challenges arise in in-the-wild deployments of ubiquitous technology? How can the streams of data be manageable for end-users and health professionals? What are the best practices for engaging and sustainable participation in longitudinal deployments? Which are socio-economic, cultural and individual factors of influence?
</p>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
To answer these example questions and others, we hope to bring together the ubiquitous computing, sensor development, machine learning, digital health, clinical, HCI and accessibility communities. Through this workshop, participants will be able to share real-life deployment experiences, tools, challenges, and discuss designs and technology goals for future research.
</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 "><a href="https://docs.google.com/document/d/1KfC8B-dKLdyTOZOu-LQfvcyeNHqCfre1Yt5AogmEyVk/edit?usp=sharing">Share the CfP</a></p>

<h2>Topics</h2>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Topics for the workshop include:</p>

<ul>
    <li>Longitudinal deployments and studies</li>
    <li>Contextual challenges of \textit{in-the-wild} deployments</li>
    <li>Compliance with longitudinal studies</li>
    <li>Tools for passive and active monitoring</li>
    <li>Socio-economic and cultural factors of influence</li>
    <li>Engaging and sustaining participants in longitudinal research and practice</li>
    <li>Disruption and decay to digital infrastructures</li>
    <li>Sharing and privacy of longitudinal data</li>
    <li>Everyday Ethical Dilemmas</li>
    <li>End-user interfaces and benefits of sensing technologies</li>
    <li>Unintentional learning and consequences of ubiquitous technology deployments</li>
    <li>Dynamic diversity and adaptation</li>
    <li>Visualization of longitudinal data (e.g., clinicians and self)</li>
    <li>Conflicts between adoption and study integrity</li>
</ul>

<h2>Important Dates</h2>

<ul>
    <li>Submission deadline: June 15th, 2021</li>
    <li>Notification: July 15th, 2021</li>
    <li>Workshop: September 25th or 26th, 2021</li>
</ul>


<h1 id="submission">Submissions</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
We invite submissions of case studies, position papers or provocations, and demonstrations that  describe ubiquitous health monitoring deployments, tools, and/or challenging environments. Submissions should use the <a href="https://www.acm.org/publications/proceedings-template">ACM sigconf template</a> and have a maximum of 4 pages.
</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Submit your paper at: TBA</p>


<h1 id="organizers">Organizers</h1>

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


<h1 id="program">Program</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
Activities of the workshop will start before Ubicomp. We will ask authors to create 5 minute presentations of their submissions, and make them available in a workshop Discord channel (together with the paper and possible links - e.g., in the case of platforms and tools). In there, we will launch discussions on each submission, enabling Q&A long before the workshop. Based on interest, we will create short cross-disciplinary working groups, that will carry on discussions, identify challenges, and ideas and best practices.</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
During the day of the workshop, we will dedicate time to discuss individual contributions, but focus most time on summary of group discussions. These groups will focus on creating design fictions of challenging environments informed by the submissions. We are planning the usage of Miro boards as a way to support and document the group activities. After each discussion period, groups will report to everyone. A live document with challenges and best practices will serve as a report and shared output from this town hall activity.
</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
After the workshop, we plan to continue editing the live document, and make it available openly as a white paper. Submissions to the workshop, that are in scope, will be invited to submit extended versions to special issues of MDPI Sensors (on Passive Sensing for Health) and ACM TACCESS (on Inclusive Health Monitoring). Also, we plan to engage participants in the organization of the next Wild by Design edition.
</p>

<h2>Workshop Schedule</h2>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 "> Details TBA</p>

<script src="{{ "/js/bootstrap.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="{{ "/js/bootstrap-accessibility.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/functions.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/anchor_offset.js"></script>