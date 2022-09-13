---
title: "Workshop on Virtual Reality for Health and Wellbeing at MUM 2022 (Lisbon, Portugal)"
layout: vr
excerpt: "Workshop on Virtual Reality for Health and Wellbeing"
sitemap: false
permalink: /vrhealth/
---

<h1>Workshop on Virtual Reality for Health and Wellbeing</h1>

<h3>At <a href="https://www.mum-conf.org/2022/">Mobile and Ubiquitous Multimedia</a>, November 27th, Lisbon, Portugal</h3>


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
{% for img in site.data.vr.highlights %}
{% assign highlight = site.data.vr[img] %}
<script>
$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+ (count++) +'"></li>');
$(".carousel-inner").append('<div class="item"><img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/vr/{{highlight.photo}}" alt="{{highlight.alt}}"></div>')
$(".carousel-indicators > li:first").addClass("active");
$(".carousel-inner > div:first").addClass("active");
</script>
{% endfor %}


<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
Virtual Reality has become a mainstream opportunity to develop immersive environments where people are exposed to relevant stimuli in a systematic but safe way. Besides the controlled exposure to stimuli, VR systems enable a more efficient and unbiased gathering of information with practical applications in diagnosis, intervention, and health monitoring processes. Nonetheless, scientific literature has demonstrated that interacting with VR technology and its peripherals can be challenging, especially in populations less familiar with technology (e.g., older adults) or with clinical conditions that are not adequately accommodated by the technology, such as cognitive (e.g., dementia) or physical impairments (e.g., blindness). This workshop will focus on systems, technological approaches, and theoretical frameworks to develop user/patient-centred VR tools for diagnosis, intervention, and monitoring of health and wellbeing outcomes. Moreover, we welcome work focused on accessibility issues, aiming to promote equal access and opportunity to use VR tools by people with diverse abilities. 
</p>


<h1 id="cfp">Call For Papers</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
This workshop aims to promote the exchange of experiences, knowledge, and know-how on strategies to develop effective and accessible VR tools for diagnosis, intervention, rehabilitation, and monitoring of health and wellbeing. Its main goals are:
</p>

<ul>
    <li>Provide practical guidance for developing effective, usable, and accessible VR tools</li>
    <li>Understand the strengths and limitations of VR technology in healthcare</li>
    <li>Raise awareness and provide guidance to the design of technology that effectively takes into account patient needs, aligns with their values, and offers them benefits over more traditional approaches</li>
    <li>Understand the ethical, privacy, and access implications of VR technology in clinical populations</li>
    <li>Future scenarios and opportunities for the use of VR technology</li>

</ul>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
To achieve these goals and others, we hope to bring together the virtual reality, digital health, ubiquitous computing, sensor development, machine learning, digital health, clinical, HCI and accessibility communities. Through this workshop, participants will be able to share real-life deployment experiences, tools, challenges, and discuss designs and technology goals for future research.
</p>

<h2>Topics</h2>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Topics for the workshop include:</p>

<ul>
    <li>VR applications and tools</li>
    <li>Case studies of VR in healthcare </li>
    <li>Challenges and opportunities of VR in healthcare</li>
    <li>Longitudinal deployments and user studies in VR</li>
    <li>Interaction and sensing in healthcare</li>
    <li>Diagnosis and monitoring in VR</li>
    <li>Medical care and interventions in VR</li>
    <li>Cognitive and/or motor training and rehabilitation </li>
    <li>Contextual challenges of VR systems</li>
    <li>Human factors in VR</li>
    <li>Subjective presence/embodiment in VR</li>
    <li>Accessibility in VR</li>
    <li>Ethical implications in clinical research with VR</li>
    <li>Participatory design approaches to VR</li>
</ul>

<h2>Important Dates</h2>

<ul>
    <li>Submission deadline: October 17th, 2022</li>
    <li>Notification: October 27th, 2022</li>
    <li>Workshop: November 27th, 2022</li>
</ul>


<h1 id="submission">Submissions</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
Submissions should use the <a href="https://www.acm.org/publications/proceedings-template">ACM sigconf template</a> and have a maximum of 4 pages, excluding references, and should be submitted via EasyChair (link soon). The deadline for paper submission is October 17th, 2022. Authors of accepted papers will be notified on October 27th, 2022. 
</p>

<!-- <p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Submit your paper at <a href="https://new.precisionconference.com/~sigchi/">Precision Conference</a>. Make a new submission in the SIGCHI, Ubicomp/ISWC 2021, Workshop: Designing Ubi Health Monitoring Tech Track.</p> -->


<h1 id="organizers">Organizers</h1>

<div class="row people-row">
{% for member in site.data.team_members.vrhealth %}
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




<script src="{{ "/js/bootstrap.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="{{ "/js/bootstrap-accessibility.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/functions.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/anchor_offset.js"></script>
